# Widget Conversation API

The Widget Conversation API provides support for reading and writing to a conversational component inside a widget.

## Explore the API

You can try out and watch the Conversation API in action by clicking the button below.
Keep in mind that this is for demonstration purposes only and may not be best practice.
We do not recommend binding functions to the `Window` object.

[![Edit elegant-jones-rnyrd](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/elegant-jones-rnyrd?fontsize=14&hidenavigation=1&theme=dark)

## Accessing the API

Inside a plugin, access the global instance of `ConversationPlatform` by passing in the current `Container` to the `getInstance()` method. It will return a `Promise` that is resolved to the `ConversationPlatform` instance. On the instance, register a provider and pass in a name and handler by calling the `registerProvider()` function as shown below.

The handler function will be called once a conversational component for the specified provider is activated in the widget. Use the provider to interact with the conversation.

##### Example

```ts
import { ConversationPlatform } from '@humany/widget-conversation';

const MyPlugin = async (container) => {
    const platform = await ConversationPlatform.getInstance(container);

    platform.registerProvider('my-chat', (conversation, component) => {
        // start interacting with the conversation here
    });
};
```

## Writing to the conversation

When writing content to the conversation you will first need to create an `Agent` object and then use its `print()` function. Specify the type of entry to print and pass in the content.

### `print(content: object)`

Returns a `ConversationEntry` message that can be used to update and/or remove the content from the conversation at a later stage.

##### Example

```ts
const agent = conversation.createAgent();
const entry = agent.print('Lorem ipsum');

entry.update({
    // ...
});

entry.remove();
```

### Messages

#### Simple text message

Used to render plain text without HTML-formatting.

##### Example

```ts
// print user message
conversation.user.print('Lorem ipsum');

// print agent message
const agent = conversation.createAgent();
agent.print('Lorem ipsum');
```

#### Message with list of actions

Example of how to render a list with actions. Is only supported on `Agent` and as system message.

| Name      | Type     | Description                                                   |
| --------- | -------- | ------------------------------------------------------------- |
| `title`   | `string` | Title for the entry.                                          |
| `body`    | `string` | Body content for the entry. Supports HTML.                    |
| `actions` | `object` | Key-value-pairs representing available actions for the entry. |

##### Example

```ts
agent.print({
    title: 'Download invoices',
    body: 'Click an invoice below to download a copy.',
    actions: {
        invoice_190201: 'Invoice 190201',
        invoice_190301: 'Invoice 190301',
        invoice_190401: 'Invoice 190401',
    },
});
```

#### Message with a form

Example of how to render a form that can be handled by the `conversation.form` event. Is only supported on `Agent` and as system message.

| Name    | Type                    | Description                                                                                                                                                                            |
| ------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title` | `string`                | Title for the entry.                                                                                                                                                                   |
| `body`  | `string`                | Body content for the entry. Supports HTML.                                                                                                                                             |
| `form`  | `(FormBuilder) => void` | A callback function for building the form. Refer to the [`@humany/widget-forms`](https://www.npmjs.com/package/@humany/widget-forms) package for more information about `FormBuilder`. |
| `key`   | `string`                | The key used to refer to the form when validating and submitting the form.                                                                                                             |

##### Example

```ts
agent.print({
    title: 'Log in',
    body: 'Enter your ID to login',
    key: 'my-login-form',
    form: (builder) => {
        builder
            .createComponent({
                component: 'Text',
                type: 'number',
                name: 'id',
                title: 'ID',
                required: true,
            })
            .createComponent({
                title: 'Log in',
                actionKey: 'submit',
                name: 'submit',
                component: 'Submit',
                type: 'submit',
                evaluate: true,
                value: 'Log in',
            });
    },
});
```

### Specify a sender name and/or avatar

To create an agent with a name and avatar use the `createAgent` method on the conversation.

##### Example

```ts
const agent = conversation.createAgent({
    name: 'Mr. Agent',
    avatar: 'https://www.site.com/avatar.jpg',
});

agent.print({
    title: 'I found the following invoices associated to your account:',
    actions: {
        action1: 'Action 1',
        action2: 'Action 2',
        action3: 'Action 3',
    },
});
```

### Writing system messages

In order to print a system message to the conversation you invoke the `print` method on the `conversation`. The `print` method accepts the same arguments as on the `Agent`.

#### Example

```ts
conversation.print('Lorem ipsum');
```

### Loading/typing indicator

In many cases you will likely fetch data from an external resource before the content is written to the conversation. In this case you should use the `loading()` function on the `ConversationProvider` to inform the user that something is about to happen. Even in cases when the response is available immediately it gives a better user experience to present a loading indicator for a short while.

In cases where you want to notify the user that the agent is currently typing, you should use the `typing` function on `Agent`.

#### Example

##### Loading

```ts
const done = conversation.loading();
// ...
done(); // remove loader
```

##### Typing indicator

```ts
const done = agent.typing();
// ...
done(); // remove loader
```

## Reading from the conversation

The second parameter to your provider handler is a `ComponentNode` instance representing the conversational component. On it you can read the component's properties and react to action emitted by the component.

### Actions

The following actions are emitted from the conversational component.

**Important**: For default actions it is important to call `next()` unless you want to completely stop the execution flow for the particular action. Not doing so will stop any succeeding handlers and may unintentionally break functionality.

#### `conversation.user-typing`

Is emitted when the user´s typing indicator is changed.

| Name         | Type     | Description                                    |
| ------------ | -------- | ---------------------------------------------- |
| `textLength` | `number` | The current text length of the user's message. |

#### `conversation.user-submit`

Is emitted when the user submits a message.

| Name   | Type     | Description         |
| ------ | -------- | ------------------- |
| `text` | `string` | The submitted text. |

#### `conversation.action`

Is emitted when the user clicks on an action.

| Name   | Type     | Description                  |
| ------ | -------- | ---------------------------- |
| `text` | `string` | Key of the submitted action. |

#### `conversation.form`

Is emitted when the data of a form is changed.

| Name        | Type       | Description                                               |
| ----------- | ---------- | --------------------------------------------------------- |
| `data`      | `FormData` | The form data.                                            |
| `formKey`   | `string`   | The unique key for the form.                              |
| `actionKey` | `string`   | The key of the form component responsible for the change. |

In order to subscribe to any of these actions you have access to the `ComponentNodeController`. Below is an example how to subscribe to the `conversation.form` action.

```ts
component.actions.watch('conversation.form', (input, next) => {
    return next(input);
});
```

### Submitting forms

In order to listen for form events you should subscribe to the `conversation.form` event. By passing a `key` to the form, you are able to target the form in this listener.

```ts
component.actions.watch('conversation.form', (input, next) => {
    if (input.formKey === 'my-login-form' && input.actionKey === 'submit') {
        const username = input.data.username;
        const password = input.data.password;
    }

    return next(input);
});
```
