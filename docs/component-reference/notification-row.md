# NotificationRow

Displays a notification row.

| Type               | Plugin                     | Package                     |
|--------------------|----------------------------|-----------------------------|
| `notification-row` | `NotificationRowComponent` | `@humany/widget-components` |

## Properties

| Name                    | Type                        | Required | Default | Description                                                                                |
|-------------------------|-----------------------------|----------|---------|--------------------------------------------------------------------------------------------|
| `allowPaging`           | `boolean`                   | No       | `true`  | Toggles pagination option when there are multiple notifications.                  |
| `closeAriaLabel`        | `string`                    | No       | `''`    | The `aria-label` attribute for the close button.                                           |
| `expandAriaLabel`       | `string`                    | No       | `''`    | The `aria-label` attribute for the expand button.                                          |
| `expandable`            | `boolean`                   | No       | `false` | Controls if the notification body is expandable.                         |
| `pageNextAriaLabel`     | `string`                    | No       | `''`    | The `aria-label` attribute for the next page button.                                       |
| `pagePreviousAriaLabel` | `string`                    | No       | `''`    | The `aria-label` attribute for the previous page button.                                   |
| `types`                 | `'top'\|'middle'\|'bottom'` | No       | `[]`    | Array of accepted notification types. Possible values: `'top'`, `'middle'` and `'bottom'`. |

## Generic properties

_Not available_

## Actions

_Not available_
