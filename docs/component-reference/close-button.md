# CloseButton

Displays a close button which when clicked dispatches an action.

| Type           | Plugin                 | Package                                     |
| -------------- | ---------------------- | ------------------------------------------- |
| `close-button` | `CloseButtonComponent` | `@telia-ace/widget-components-close-button` |

## Properties

| Name        | Type     | Required | Default     | Description                                            |
| ----------- | -------- | -------- | ----------- | ------------------------------------------------------ |
| `ariaLabel` | `string` | No       | `undefined` | Label applied to the buttons arialabel HTML attribute. |

## Generic properties

_Not available_

## Actions

| Name    | Data | Options                                           | Description                            |
| ------- | ---- | ------------------------------------------------- | -------------------------------------- |
| `close` | `{}` | [`CloseButtonActionData`](#closebuttonactiondata) | Dispatched when the button is clicked. |

### `CloseButtonActionData`

| Name             | Type      | Description                                                     |
| ---------------- | --------- | --------------------------------------------------------------- |
| `preventDefault` | `boolean` | Whether or not the default close behaviour should be prevented. |
