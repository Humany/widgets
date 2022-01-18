# Conversation

Displays a conversational component.

| Type           | Plugin                  | Package                       |
| -------------- | ----------------------- | ----------------------------- |
| `conversation` | `ConversationComponent` | `@humany/widget-conversation` |

## Properties

| Name               | Type                 | Required | Default               | Description                                                                      |
| ------------------ | -------------------- | -------- | --------------------- | -------------------------------------------------------------------------------- |
| `avatarSize`       | `string` \| `number` | No       | `32px`                | Size, as CSS `width` property, of the agent's avatar.                            |
| `inputDisabled`    | `boolean`            | No       | `false`               | Whether the input element should be disabled or not.                             |
| `inputHidden`      | `boolean`            | No       | `false`               | Whether the input element should be hidden or not.                               |
| `inputMultiline`   | `boolean`            | No       | `false`               | Whether the input element should wrap content and render multiple lines of text. |
| `inputPlaceholder` | `string`             | No       | `'Type your message'` | The placeholder text of the input element.                                       |
| `loading`          | `boolean`            | No       | `false`               | Whether the conversation is currently loading data or not.                       |
| `providers`        | `string[]`           | No       | `[]`                  | List of provider keys for the component.                                         |
| `sendButtonLabel`  | `string`             | No       | `'Send message'`      | Tooltip shown when hovering the send button.                                     |
| `userLabel`        | `string`             | No       | `''`                  | Name of the use in the conversation.                                             |

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

### `FormActionData`

| Name        | Type       | Description                                                                     |
| ----------- | ---------- | ------------------------------------------------------------------------------- |
| `actionKey` | `string`   | The action key triggering the action. normally `'submit'`.                      |
| `data`      | `FormData` | An object representing a form. See `@humany/widget-forms` for more information. |
| `formKey`   | `string`   | The unique key for the form.                                                    |
