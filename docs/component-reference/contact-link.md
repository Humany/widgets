# ContactLink

Displays a link which can be targeted to a specific route name or other widget within the same implementation.

| Type           | Plugin                 | Package                                               |
| -------------- | ---------------------- | ----------------------------------------------------- |
| `contact-link` | `ContactLinkComponent` | `@telia-ace/knowledge-widget-components-contact-link` |

## Properties

| Name               | Type                                                       | Required                      | Default                                                          | Description                                                                        |
| ------------------ | ---------------------------------------------------------- | ----------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `descriptionLabel` | `string`                                                   | No                            | `undefined`                                                      | A description text to be displayed for the link.                                   |
| `iconSize`         | `'large'` \| `'small'`                                     | No                            | `'large'`                                                        | The size of the icon.                                                              |
| `label`            | `string`                                                   | No                            | `''`                                                             | The text to be displayed for the link.                                             |
| `mode`             | `'large'` \| `'compact'`                                   | No                            | `'large'`                                                        | The rendering mode of the link.                                                    |
| `route`            | `string`                                                   | No                            | `undefined`                                                      | Name of route the link should target.                                              |
| `symbol`           | [`Symbol`](/component-reference/generic-properties#symbol) | `No`                          | `undefined`                                                      | A symbol to be displayed for the link.                                             |
| `textAlign`        | `'center'` \| `'right'`                                    | No                            | `'center'` if `mode==='large'`, `'right'` if `mode==='compact'`. | The text align for the link.                                                       |
| `widget`           | `string`                                                   | Yes (if `route` is undefined) | `undefined`                                                      | Name of widget the link should target. This value is used if `route` is undefined. |

## Generic properties

_Not available_

## Actions

_Not available_
