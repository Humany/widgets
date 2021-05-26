# ConversationReturnButton

Displays a return button when a conversation is ongoing and the user is not on the conversation route.

| Type                         | Plugin                              | Package                       |
| ---------------------------- | ----------------------------------- | ----------------------------- |
| `conversation-return-button` | `ConversationReturnButtonComponent` | `@humany/widget-conversation` |

## Properties

| Name     | Type                                                              | Required | Default     | Description                                                      |
| -------- | ----------------------------------------------------------------- | -------- | ----------- | ---------------------------------------------------------------- |
| `active` | `string`                                                          | No       | `false`     | Controls whether the component is rendered or not.               |
| `alert`  | [`ConversationReturnButtonAlert`](#conversationreturnbuttonalert) | No       | `undefined` | Renders a symbol that animates when a message has been received. |
| `label`  | `string`                                                          | No       | `undefined` | The buttons label.                                               |
| `mode`   | [`ConversationReturnButtonMode`](#conversationreturnbuttonmode)   | No       | `'flat'`    | Controls the buttons visual representation and effects.          |

### `ConversationReturnButtonAlert`

| Name     | Type                                                       | Required | Default     | Description                         |
| -------- | ---------------------------------------------------------- | -------- | ----------- | ----------------------------------- |
| `label`  | `string`                                                   | No       | `undefined` | Tooltip. Uses html-title attribute. |
| `show`   | `boolean`                                                  | No       | `false`     | Whether symbol is shown or not.     |
| `symbol` | [`Symbol`](/component-reference/generic-properties#symbol) | No       | `undefined` | Symbol definition.                  |

### `ConversationReturnButtonMode`

| Name              | Value              | Description                                                                  |
| ----------------- | ------------------ | ---------------------------------------------------------------------------- |
| Flashing          | `flashing`         | Button background-color will flash between context primary and accent color. |
| Flashing gradient | `flashingGradient` | Button uses a gradient between primary and accent colors that scrolls.       |
| Flat              | `flat`             | No animated effect. Button will use primary color as background-color.       |

## Generic properties

_Not available_

## Actions

| Name     | Data | Options  | Description                                                                                                |
| -------- | ---- | -------- | ---------------------------------------------------------------------------------------------------------- |
| `toggle` | `{}` | _(none)_ | Dispatched when the user clicks the button. Navigates to the view which contains a conversation component. |
