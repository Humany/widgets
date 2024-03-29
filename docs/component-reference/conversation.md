# Conversation

Displays a conversational component.

| Type           | Plugin                  | Package                          |
| -------------- | ----------------------- | -------------------------------- |
| `conversation` | `ConversationComponent` | `@telia-ace/widget-conversation` |

## Properties

| Name                       | Type                                  | Required | Default                  | Description                                                                         |
| -------------------------- | ------------------------------------- | -------- | ------------------------ | ----------------------------------------------------------------------------------- |
| `avatarSize`               | `string` \| `number`                  | No       | `32px`                   | Size, as a CSS `width` property, of the agent's avatar.                             |
| `inputDisabled`            | `boolean`                             | No       | `false`                  | Decides if the input element should be disabled or not.                             |
| `inputHidden`              | `boolean`                             | No       | `false`                  | Decides if the input element should be hidden or not.                               |
| `inputMultiline`           | `boolean`                             | No       | `false`                  | Decides if the input element should wrap content and render multiple lines of text. |
| `inputPlaceholder`         | `string`                              | No       | `'Type your message'`    | The placeholder text of the input element.                                          |
| `loading`                  | `boolean`                             | No       | `false`                  | Decides if the conversation is currently loading data or not.                       |
| `providers`                | `string[]`                            | No       | `[]`                     | List of provider keys for the component.                                            |
| `sendButtonLabel`          | `string`                              | No       | `'Send message'`         | Tooltip shown when hovering the send button.                                        |
| `userLabel`                | `string`                              | No       | `''`                     | Name of the use in the conversation.                                                |
| `secondaryAction`          | [`SecondaryAction`](#secondaryaction) | No       | `undefined`              | Optional secondary action button.                                                   |
| `skipToLatestMessageLabel` | `string`                              | No       | `Skip to latest message` | Text for link to latest message.                                                    |

## Generic properties

_Not available_

## Context

| Name                       | Type                                                                                           |
| -------------------------- | ---------------------------------------------------------------------------------------------- |
| `typographyVariantMapping` | [`TypographyVariantMapping`](/component-reference/context-properties#typographyvariantmapping) |

## Actions

| Name          | Data                     | Options  | Description                                                                |
| ------------- | ------------------------ | -------- | -------------------------------------------------------------------------- |
| `action`      | `{ actionKey: string }`  | _(none)_ | Dispatched when an inner action of a conversational message is dispatched. |
| `form`        | `FormActionData`         | _(none)_ | Dispatched when a form is submitted.                                       |
| `user-submit` | `{ text: string }`       | _(none)_ | Dispatched when the user submits a text.                                   |
| `user-typing` | `{ textLength: Number }` | _(none)_ | Dispatched when the user is typing.                                        |

### `SecondaryAction`

| Name     | Type     | Description                                                          |
| -------- | -------- | -------------------------------------------------------------------- |
| `action` | `string` | An action that will be dispatched when the button is pressed.        |
| `label`  | `string` | Will be used as a "title" and aria-label on the HTML button element. |
| `icon`   | `string` | An icon to be displayed, defaults to "browse" icon if left empty.    |

### `FormActionData`

| Name        | Type       | Description                                                                        |
| ----------- | ---------- | ---------------------------------------------------------------------------------- |
| `actionKey` | `string`   | The action key triggering the action. Normally `'submit'`.                         |
| `data`      | `FormData` | An object representing a form. See `@telia-ace/widget-forms` for more information. |
| `formKey`   | `string`   | The unique key for the form.                                                       |
