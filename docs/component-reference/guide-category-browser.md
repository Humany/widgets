# GuideCategoryBrowser

Displays a category browser for a list of categories, rendered as a grid.

| Type                     | Plugin                          | Package                     |
| ------------------------ | ------------------------------- | --------------------------- |
| `guide-category-browser` | `GuideCategoryBrowserComponent` | `@humany/widget-components` |

## Properties

| Name                      | Type                                                                                      | Required | Default              | Description                                                                               |
| ------------------------- | ----------------------------------------------------------------------------------------- | -------- | -------------------- | ----------------------------------------------------------------------------------------- |
| `accordion`               | `boolean`                                                                                 | No       | `false`              | Whether or not guides should be expandable within each guide list.                        |
| `categoryLinkLabel`       | `string`                                                                                  | No       | `undefined`          | The text used for link to display more guides in subcategory.                             |
| `columns`                 | `number`                                                                                  | No       | `null`               | Number of columns each item should be repeated.                                           |
| `fetchGuidesLabel`        | `string`                                                                                  | No       | `undefined`          | The text used for the link to fetch more guides.                                          |
| `guideListCategoryHeader` | `string`                                                                                  | No       | `''`                 | The text used for the header of most the common questions box, for a particular category. |
| `guideListHeader`         | `string`                                                                                  | No       | `undefined`          | The text used for the header of most the common questions box.                            |
| `pageSize`                | `string`                                                                                  | No       | `10`                 | Number of guides to fetch when paginating.                                                |
| `routes`                  | [`Partial<RoutingProperties>`](/component-reference/generic-properties#routingproperties) | No       | `{ guide: 'guide' }` | Map of routes to be used by the component.                                                |

## Generic properties

_Not available_

## Actions

_Not available_
