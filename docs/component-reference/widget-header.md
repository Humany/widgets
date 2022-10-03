# WidgetHeader

Displays a widget header, with optional back link and close button.

| Type            | Plugin                  | Package                     |
|-----------------|-------------------------|-----------------------------|
| `widget-header` | `WidgetHeaderComponent` | `@humany/widget-components` |

## Properties

| Name        | Type                                          | Required | Default     | Description                                                                        |
|-------------|-----------------------------------------------|----------|-------------|------------------------------------------------------------------------------------|
| `actions`   | [`{ [key:string]: ActionNode }`](#actionnode) | No       | `{}`        | Object map with `ActionNode`.                                                     |
| `header`    | `string`                                      | No       | `undefined` | Header text.                                                                       |
| `route`     | `string`                                      | No       | `undefined` | Target route for generating header link. If not defined, no link will be rendered. |
| `tagline`   | `string`                                      | No       | `undefined` | Tagline text.                                                                      |
| `textAlign` | `string`                                      | No       | `'center'`  | Object map with action keys and display text.                                      |
| `tooltip`   | `string`                                      | No       | `''`        | Tooltip text for header.                                                           |

### `ActionNode`

| Name       | Type                                                       | Description                                          |
|------------|------------------------------------------------------------|------------------------------------------------------|
| `label`    | `string`                                                   | Label for the action.                                |
| `order`    | `number`                                                   | Number used for ordering the action within the list. |
| `padding`  | `string` \| `number`                                       | Padding, as CSS property, for the button.            |
| `position` | `'right' \| 'left'`                                        | Position of the action button.                       |
| `show`     | `boolean`                                                  | Whether or not the action button should be rendered. |
| `size`     | `string` \| `number`                                       | Size, as CSS property, for the button.               |
| `symbol`   | [`Symbol`](/component-reference/generic-properties#symbol) | Symbol for the action button.                        |
| `tooltip`  | `string`                                                   | Tooltip text for the action button.                  |
| `type`     | `string`                                                   | Type of action.                                      |

## Generic properties

_Not available_

## Context

| Name                       | Type                                                                                           |
|----------------------------|------------------------------------------------------------------------------------------------|
| `typographyVariantMapping` | [`TypographyVariantMapping`](/component-reference/context-properties#typographyvariantmapping) |

## Actions

| Name    | Data | Options                                                       | Description                                             |
|---------|------|---------------------------------------------------------------|---------------------------------------------------------|
| `back`  | `{}` | _(none)_                                                      | Dispatched when the `'back'` action button is clicked.  |
| `close` | `{}` | [`WidgetHeaderCloseActionData`](#widgetheadercloseactiondata) | Dispatched when the `'close'` action button is clicked. |

### `WidgetHeaderCloseActionData`

| Name             | Type      | Description                                                     |
|------------------|-----------|-----------------------------------------------------------------|
| `preventDefault` | `boolean` | Whether or not the default close behaviour should be prevented. |
