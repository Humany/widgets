# Widget Conversation API

The Widget Conversation API provides support for reading and writing to a conversational component inside a widget.

## Sandbox

For demonstration purposes, we've set up a sandbox for the Widget Conversational API so that you can see it in action. Keep in mind that this is for demonstration purposes only and may not reflect best practice.

> We do not recommend binding functions to the `window` object.

[![Edit elegant-jones-rnyrd](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/elegant-jones-rnyrd?fontsize=14&hidenavigation=1&theme=dark)

## Accessing the API

In order to access the API you need to have a widget with a conversational component.

### Creating the plugin

You need to register the conversational provider in the `providers`-property in the component. To access the global instance of `ConversationPlatform`, you pass in the current `Container` to the `getInstance()` method. It will return a `Promise` that is resolved to the `ConversationPlatform` instance. In the instance, register a provider and pass in name and handler by calling the `registerProvider()` function as shown below.

The handler function will be called once a conversational component for the specified provider is activated in the widget. Use the provider to interact with the conversation.

```ts
import { ConversationPlatform } from '@telia-ace/widget-conversation';

const MyPlugin = async (container) => {
    const platform = await ConversationPlatform.getInstance(container);

    platform.registerProvider('my-chat', (conversation, component) => {
        // start interacting with the conversation here
    });
};
```

You also need to register the provider inside the widget configuration:

```JSON
   "my-conversation-component": {
        "type": "conversation",
        "properties": {
            "providers": ["my-chat"],
            // ...
        },
        "context": {}
    },
```

### Creating an agent in the conversation

When using `createAgent` you can specify both a name and an avatar. These will then be displayed in the conversation alongside that agent's entries.

```ts
const agent = conversation.createAgent({
    name: 'Agent Smith',
    avatar: 'https://www.site.com/avatar.jpg',
});
```

## Writing to the conversation

**`print()` accepts an array, which is considered best practice when writing to the conversation. The previous way of posting an object will still currently be supported, but is considered to be deprecated.**

### Posting, updating and removing content

When managing content in the conversation you'll first need to create an `Agent`-object and then use its `print()` function. There are serveral types of entries in order to accommodate different types of content.

The `print(items: ConversationMessageItem[])` function let's you return a `ConversationEntry` message that can be used to update and/or remove the content from the conversation.

##### Example of simple text message

```ts
// print user message
conversation.user.print([['text', 'Lorem ipsum']]);

// print agent message
const agent = conversation.createAgent();
agent.print([['text', 'Lorem ipsum']]);
```

##### Example of updating or removing content

```ts
const agent = conversation.createAgent();
const entry = agent.print([['text', 'Hello world!']]);

entry.update([
    // ...
]);

entry.remove();
```

### Entry with list of actions

You can post an entry into the conversation with actions. You can specify a title, body and available actions. This is only supported for the `Agent` and will be displayed as a system message.

This can be either in the form of a "ButtonList" or an "LinkList" as demostrated below.

| Name      | Type     | Description                                  |
| --------- | -------- | -------------------------------------------- |
| `header`  | `string` | Header for the entry.                        |
| `actions` | `array`  | Array of of available actions for the entry. |

##### Example of a list of actions

```ts
// example of button list
agent.print([
    [
        'button-list',
        {
            header: 'Download invoices',
            actions: [
                {
                    actionKey: 'invoice_190201',
                    label: 'Invoice 190201',
                },
                {
                    actionKey: 'invoice_190301',
                    label: 'Invoice 190301',
                },
            ],
        },
    ],
]);

// here we use a link list instead, but with the same actions
agent.print([
    [
        'link-list',
        {
            header: 'Download invoices',
            actions: [
                {
                    actionKey: 'invoice_190201',
                    label: 'Invoice 190201',
                },
                {
                    actionKey: 'invoice_190301',
                    label: 'Invoice 190301',
                },
            ],
        },
    ],
]);
```

### Entry with a form

You can also post a message with a form attached. This uses the `FormBuilder`-method. This is handled by the `conversation.form` event. It is only supported for `Agent` and will be displayed as a system message.

| Name    | Type                    | Description                                                                                                                                                                                  |
| ------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title` | `string`                | Title for the entry.                                                                                                                                                                         |
| `body`  | `string`                | Body content for the entry. Supports HTML.                                                                                                                                                   |
| `form`  | `(FormBuilder) => void` | A callback function for building the form. Refer to the [`@telia-ace/widget-forms`](https://www.npmjs.com/package/@telia-ace/widget-forms) package for more information about `FormBuilder`. |
| `key`   | `string`                | The key used to refer to the form when validating and submitting the form.                                                                                                                   |

##### Example of an entry with a form

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

### Entry with a video call

Use the `video-request` item type to create an entry representing an incoming video call. This entry can also have a form attached, which uses the `FormBuilder`-method and is handled by the `conversation.form` event. It is only supported for an `Agent` and will be displayed as a system message.

| Name           | Type     | Description                                     |
| -------------- | -------- | ----------------------------------------------- |
| `header`       | `string` | Header for the entry.                           |
| `acceptLabel`  | `string` | Label to be shown for the "accept call button"  |
| `declineLabel` | `string` | Label to be shown for the "decline call button" |

##### Example of an entry for an incoming video call

```ts
agent.print([
    [
        'video-request',
        {
            header: 'Video call',
            accept: 'Accept',
            decline: 'Decline',
        },
    ],
]);
```

When the user presses one of these buttons to accept or decline the call, an action will be dispatched with actionKey `accept-video-call` or `decline-video-call`, depending on which button was clicked.

Listening to these actions can be done as following:

```ts
component.actions.watch('conversation.action', (input, next) => {
    if (input.actionKey === 'accept-video-call') {
        // this will render an overlay over the widget,
        // and prepare the widget for displaying the actual call
        component.actions.dispatch('show-overlay', {});
    } else if (input.actionKey === 'decline-video-call') {
        // ...
    }
    return next(input);
});
```

### Video Call Events

| Action Key                  | Description                                                                                    |
| --------------------------- | ---------------------------------------------------------------------------------------------- |
| `show-overlay`              | Dispatch this event when you want to render an overlay where you can render the video call     |
| `overlay-mounted`           | Dispatched when the overlay is rendered, will provide an HTML element to render the video call |
| `hide-overlay`              | Hide overlay                                                                                   |
| `show-overlay-conversation` | Show the underlying conversation on top of the video overlay                                   |
| `hide-overlay-conversation` | Hide the conversation overlay.                                                                 |

#### show-overlay

This event is recommended to be used when a user accept an video call. See the example above for one way of implementing it. This event will result in the `overlay-mounted` event being dispatched, which you may subscribe to and use to render the video call.

#### overlay-mounted

Use an overlay over the conversation to render your video call. The `show-overlay`-action, as described above, accomplishes this. After the overlay is rendered and ready it will dispatch another event: `overlay-mounted`. Use the HTML element this generates to render your video call.

```ts
component.actions.watch('overlay-mounted', (overlayElem, next) => {
    // the overlayElem here may be used to render the ongoing call
});
```

#### hide-overlay

Dispatching this event will hide the overlay

```ts
component.actions.dispatch('hide-overlay', {});
```

#### show-overlay-conversation

Dispatching this event will show the underlying conversation on top of the video overlay.

```ts
component.actions.dispatch('show-overlay-conversation', {});
```

#### hide-overlay-conversation

Dispatching this event will hide the conversation overlay.

```ts
component.actions.dispatch('hide-overlay-conversation', {});
```

### The loading and typing indicators

When you need to fetch data from external resource you should use the `loading()` function on the `ConversationProvider` to inform the user that something is about to happen. Even in cases when the response is available immediately it gives a better user experience to present a loading indicator for a short while.

When you need to make the user aware that your agent is currently typing, you should use the `typing` function on `Agent`.

#### Example of `loading`

```ts
const done = conversation.loading();
// ...
done(); // remove loader
```

#### Example of `typing`

```ts
const done = agent.typing();
// ...
done(); // remove loader
```

## Writing system messages

System message in the conversation are sent by using the `print` method on the `conversation`. The `print` method accepts the same arguments as on the `Agent`.

#### Example

```ts
conversation.print([['text', 'Hello world!']]);
```

## Reading from the conversation

The second parameter to your provider handler is a `ComponentNode` instance representing the conversational component. From it you can read the component's properties and react to action emitted by the component.

The following actions are emitted from the conversational component:

> For default actions it is necessary to call `next()` unless you want to completely stop the execution flow for the particular action. Not doing so will stop any succeeding handlers and may unintentionally break functionality.

| Action                     | Name         | Type       | Description                                               |
| -------------------------- | ------------ | ---------- | --------------------------------------------------------- |
| `conversation.user-typing` | `textLength` | `number`   | The current text length of the user's message.            |
| `conversation.user-submit` | `text`       | `string`   | The submitted text.                                       |
| `conversation.action`      | `text`       | `string`   | Key of the submitted action.                              |
| `conversation.form`        | `data`       | `FormData` | The form data.                                            |
| `conversation.form`        | `formKey`    | `string`   | The unique key for the form.                              |
| `conversation.form`        | `actionKey`  | `string`   | The key of the form component responsible for the change. |

If you want to subscribe to any of the `conversation.form`-actions you have access to the `ComponentNodeController`. Example below:

```ts
component.actions.watch('conversation.form', (input, next) => {
    return next(input);
});
```

### Submitting forms

If you want to listen for form events you should subscribe to the `conversation.form` event. By passing a `key` to the form, you are able to target the form in this listener.

```ts
component.actions.watch('conversation.form', (input, next) => {
    if (input.formKey === 'my-login-form' && input.actionKey === 'submit') {
        const username = input.data.username;
        const password = input.data.password;
    }

    return next(input);
});
```

### Adding custom list items

You can add custom list items to the conversation. To do so you have to register your own custom React component, which will be mapped to a key also provided by you.

#### Example of custom list items

```ts
import { registerCustomMessageComponent } from '@telia-ace/widget-conversation';

registerCustomMessageComponent(container, 'my-custom-list-item', import('./my-custom-list-item'));
```

Once the component has been registered it will be available to be used as any other item in the `print` method on the Conversation API.

## Custom secondary action

You can add a secondary action button that's displayed next to the user input field. This button can run any event that you write. You need to add the `secondaryAction` property to the conversation component in the configuration. It accepts an object with the following properties:

| Name     | Type     | Description                                                         |
| -------- | -------- | ------------------------------------------------------------------- |
| `action` | `string` | An action that will be dispatched when the button is pressed        |
| `label`  | `string` | Will be used as a "title" and aria-label on the HTML button element |
| `icon`   | `string` | An icon to be displayed, defaults to "browse" icon if left empty    |

```json
    "conversation": {
        "type": "conversation",
        "properties": {
            "secondaryAction": {
                "action": "my-secondary-action",
                "label": "Label for the secondary action",
                "icon": "my-icon"
            }
            // ...other properties
        }
    }
```

When you have added this property to the component, you can create an event for it in your code:

```ts
component.actions.watch('conversation.action', (input, next) => {
    if (input === 'my-secondary-action') {
        // handle action
    }
});
```

## Completing a conversation (handover)

When you are handing over the conversation to another provider, the current provider is disabled until the child provider has completed. To hand it over to the previous provider you should use the `complete()` method on the `ConversationProvider` object.
Example:
```ts
if (actionKey === 'email-confirmation-submit') {
    conversation.complete();
}
```
This will complete the current provider and return to the one that started the now closed provider.

## Rehydrating the conversation

The conversation may be stored in a session to allow it to remain when reloading the page.
This behavior is disabled by default but can be turned on by adding the `rehydrate` property to the `ConversationComponent` like this:
```
"components": {
    "type": "conversation",
    "properties": {
        "rehydrate": true
    }
}
```

## Reading the conversation history

In order to print the complete conversation you can use the `ConversationProvider.getHistory()` method.

Example:

```ts
const logs = conversation.getHistory();
```

This will produce an array of items in the following format:

```ts
{
    message?: string;       // the body of the message, if any
    options?: string[]      // an array of options presented in the message
    alias: string;          // name of the message author
    source: string;         // agent or user
    timestamp: number;      // timestamp of when message was created
}
```
