# ContactList

Displays a list of contact methods, with an optional deflection guide list.

| Type           | Plugin                 | Package                                               |
| -------------- | ---------------------- | ----------------------------------------------------- |
| `contact-list` | `ContactListComponent` | `@telia-ace/knowledge-widget-components-contact-list` |

## Properties

| Name                  | Type                                                                                      | Required | Default                          | Description                                                                   |
| --------------------- | ----------------------------------------------------------------------------------------- | -------- | -------------------------------- | ----------------------------------------------------------------------------- |
| `deflectionAccordion` | `boolean`                                                                                 | No       | `false`                          | Whether or not guides should be expandable within the deflection guide list.  |
| `deflectionHeader`    | `string`                                                                                  | No       | `undefined`                      | Header text for deflection list.                                              |
| `deflectionPageSize`  | `number`                                                                                  | No       | `5`                              | Maximun number of guides to fetch per category.                               |
| `deflection`          | `{ [contactCategoryId: string]: string[] }`                                               | No       | `{}`                             | Map between contact method categories and guide categories to fetch data for. |
| `routes`              | [`Partial<RoutingProperties>`](/component-reference/generic-properties#routingproperties) | No       | `{ contactCategory: 'contact' }` | Map of routes to be used by the component.                                    |

## Generic properties

| Name                                                                       |
| -------------------------------------------------------------------------- |
| [`FormProperties`](/component-reference/generic-properties#formproperties) |

## Context

| Name                       | Type                                                                                           |
| -------------------------- | ---------------------------------------------------------------------------------------------- |
| `typographyVariantMapping` | [`TypographyVariantMapping`](/component-reference/context-properties#typographyvariantmapping) |

## Actions

_Not available_
