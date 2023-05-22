# Area

Renders a grid based area containing children.

| Type   | Plugin          | Package                             |
| ------ | --------------- | ----------------------------------- |
| `area` | `AreaComponent` | `@telia-ace/widget-components-area` |

## Properties

| Name         | Type                                 | Required | Default     | Description                                                                                                  |
| ------------ | ------------------------------------ | -------- | ----------- | ------------------------------------------------------------------------------------------------------------ |
| `animation`  | `string`                             | No       | `undefined` | Animation when rendering.                                                                                    | ; |
| `columns`    | `number`                             | No       | `1`         | Amount of grid columns.                                                                                      | ; |
| `fullScreen` | `boolean`                            | No       | `false`     | Used if `mode` is set to `'drawer'`. Whether the drawer should take up the entire screen or just part of it. | ; |
| `header`     | `string`                             | No       | `undefined` | Used if `mode` is set to `'drawer'`. Header displayed at the top of the drawer.                              | ; |
| `mode`       | `'static' \| 'drawer' \| 'dropdown'` | No       | `'static'`  | Rendering mode.                                                                                              | ; |
| `scrollable` | `boolean`                            | No       | `false`     | Whether or not the area should be scrollable.                                                                | ; |
| `trigger`    | [`Trigger`](#trigger)                | No       | `undefined` | Used if `mode` is set to `'drawer'` or `'dropdown'`. Settings for button to trigger area.                    | ; |

### `Trigger`

| Name        | Type                                                       | Description                               |
| ----------- | ---------------------------------------------------------- | ----------------------------------------- |
| `ariaLabel` | `string`                                                   | An aria-label for the trigger.            |
| `label`     | `string`                                                   | A label to be displayed for the trigger.  |
| `size`      | `number`                                                   | Size for the symbol, if defined.          |
| `symbol`    | [`Symbol`](/component-reference/generic-properties#symbol) | A symbol to be displayed for the trigger. |

## Generic properties

_Not available_

## Actions

_Not available_
