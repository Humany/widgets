# Conversation Platform for ACE Knowledge widgets
The Conversation Platform provides an API for reading and writing to a conversational component inside an ACE Knowledge widget.

## Accessing the API
Inside a plugin, access the global instance of `ConversationPlatform` by passing in the current `Container` to the `getInstance()` method. It will return a `Promise` that is resolved to the `ConversationPlatform` instance. On the instance, register a provider and pass in a name and handler by calling the `registerProvider()` function as shown below. 

The handler function will be called once a conversational component for the specified provider is activated in the widget. Use the provider to interact with the conversation.

##### Example
```ts
import { ConversationPlatform } from '@humany/widget-conversation';

const MyPlugin = async (container) => {
  const platform = await ConversationPlatform.getInstance(container);

  platform.registerProvider('ace-chat', (provider, component) => {
    // start interacting with the conversation here
  });
};
```

## Writing to the conversation
When writing content to the conversation you will first need to create an `Agent` object and then use its `print()` function. Specify the type of entry to print and pass in the content.

### `print(type: string, content: object)`

Returns a promise of a `Entry` message that can be used to update and/or remove the content from the conversation at a later stage.

##### Example
```ts
const agent = provider.createAgent();
const entry = await agent.print('guide', {
  // ...
});

entry.update({
  // ...
});

entry.remove();
```

### Message types
Message types `text`, `guide`, `list` and `form` are supported for `Agent`s. For the `User` object, only `text` is supported.

#### Text
Used to render plain text without HTML-formatting.  

##### Example
```ts
// print user message
provider.user.print('Lorem ipsum');

// print agent message
const agent = conversation.createAgent();
agent.print('Lorem ipsum');
```

#### Guide
Used to render a guide message with support for HTML and actions. Is only supported on `Agent`s.

Name | Type | Description
-----|------|------------
`title`|`string`|Title for the guide.
`body`|`string`|Body content for the guide. Supports HTML.
`actions`|`object`|Key-value-pairs representing available actions for the guide.

##### Example
```ts
agent.print(
  {
    title: 'Customer type',
    body: 'Do you represent a person or company?',
    actions: {
      person: 'Person',
      company: 'Company',
    },
  }
);
```

#### List
Used to render a list with actions. It has the same signature as `Guide`, but will have a different presentation. Is only supported on `Agent`s.

Name | Type | Description
-----|------|------------
`title`|`string`|Title for the guide.
`body`|`string`|Body content for the guide. Supports HTML.
`actions`|`object`|Key-value-pairs representing available actions for the guide.

##### Example
```ts
agent.print(
  {
    title: 'Download invoices',
    body: 'Click an invoice below to download a copy.',
    actions: {
      invoice_190201: 'Invoice 190201',
      invoice_190301: 'Invoice 190301',
      invoice_190401: 'Invoice 190401',
    },
  }
);
```

#### Form
Used to render a form that can be handled by `conversation.validateForm()` and `conversation.submitForm`. Is only supported on `Agent`s.

Name | Type | Description
-----|------|------------
`title`|`string`|Title for the guide.
`body`|`string`|Body content for the guide. Supports HTML.
`form`|`(FormBuilder) => void`|A callback function for building the form. Refer to the [`@humany/widget-forms`](https://www.npmjs.com/package/@humany/widget-forms) package for more information about `FormBuilder`.
`key`|`string`|The key used to refer to the form when validating and submitting the form.

##### Example
```ts
agent.print(
  {
    title: 'Log in',
    body: 'Enter your ID to login',
    formKey: 'my-login-form',
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
          name: 'submit',
          component: 'Submit',
          type: 'submit',
          evaluate: true,
          value: 'Log in',
        });
    },
  }
);
```

### Specify a sender name and/or avatar
The sender name and avatar of an agent message will default to the name and avatar of the bot. To override this, specify a custom name and/or avatar when creating the `Agent` object.

##### Example
```ts
const agent = provider.createAgent({ name: 'Mr. Agent', avatar: 'https://www.site.com/avatar.jpg' });

agent.print({
  title: 'I found the following invoices associated to your account:',
  actions: {
    action1: 'Action 1',
    action2: 'Action 2',
    action3: 'Action 3',
  },
});
```

### Loading/typing indicator
In many cases you will likely fetch data from an external resource before the content is written to the conversation. In this case you should use the `loader()` function to inform the user that something is about to happen. Even in cases when the response is available immediately it gives a better user experience to present a loading indicator for a short while.

##### Sequential example
```ts
const loader = provider.loader();
// ...
loader(); // remove loader
```

##### Promise example
```ts
conversation.loader(() => {
  return Promise.resolve(); // remove loader when promise is resolved
});
```

## Reading from the conversation
The second parameter to your provider handler is a `ComponentNode` instance representing the conversational component. On it you can read the component's properties and react to action emitted by the component.

### Actions
The following actions are emitted from the conversational component.

**Important**: For default actions it is important to call `next()` unless you want to completely stop the execution flow for the particular action. Not doing so will stop any succeeding handlers and may unintentionally break functionality.

#### `conversation.user-typing`
Is emitted when the user´s typing indicator is changed.

|Name|Type|Description|
|----|----|-----------|
|`textLength`|`number`|The current text length of the user's message.|

#### `conversation.user-submit`
Is emitted when the user submits a message.

|Name|Type|Description|
|----|----|-----------|
|`text`|`string`|The submitted text.|

#### `conversation.form`
Is emitted when the data of a form is changed.

|Name|Type|Description|
|----|----|-----------|
|`data`|`FormData`|The form data.|
|`formKey`|`string`|The unique key for the form.|
|`actionKey`|`string`|The key of the form component responsible for the change.|

## Handling forms
Forms are handled by the `formValidate` and the `formSubmit` hooks. Each hook take a form `key`, which are specified on each form message, and a handler for said hook. 

### Validating forms
Form validation is handled by the `validateForm` hook. Will be called before the `submitForm` hook. If `valid` is returned with a `true` value, the `submitForm` hook with the same `key` is called. If `valid` is returned with a `false` value, the submission is canceled and optionally passed `errors` are displayed.

Name | Type | Description
-----|------|------------
`formData`|`object`|Key value pair with each form value.
`valid`|`boolean`|Whether or not the form is valid.
`errors`|`object`|Key value pair with form validation errors. 

##### Example
```ts
conversation.validateForm('my-login-form', (formData) => {
  return MyLib.checkIfFormValid(formData).then((formIsValid) => {
    if (formIsValid) {
      return { valid: true };
    }
    return { 
      valid: false, 
      errors: {
        name: 'Name is required!',
      },
    };
  });
});
```

### Submitting forms
Form submission is handled by the `submitForm` hook by passing the `key` for the form to be handled and a handler.

Name | Type | Description
-----|------|------------
`formData`|`object`|Key value pair with each form value.

##### Example
```ts
conversation.submitForm('my-login-form', (formData) => {
  MyLib.submitForm(formData);
});
```