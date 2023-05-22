# GuideCategoryBrowser

Displays a category browser for a list of categories, rendered as a grid.

| Type                     | Plugin                          | Package                                                         |
| ------------------------ | ------------------------------- | --------------------------------------------------------------- |
| `guide-category-browser` | `GuideCategoryBrowserComponent` | `@telia-ace/knowledge-widget-components-guide-category-browser` |

## Properties

| Name                      | Type                                                                                      | Required | Default              | Description                                                                               |
| ------------------------- | ----------------------------------------------------------------------------------------- | -------- | -------------------- | ----------------------------------------------------------------------------------------- |
| `accordion`               | `boolean`                                                                                 | No       | `false`              | Decides if guides should be expandable within guide lists.                        |
| `categoryLinkLabel`       | `string`                                                                                  | No       | `undefined`          | Text used for the subcategory-link. Selects the subcategory.                             |
| `columns`                 | `number`                                                                                  | No       | `null`               | Number of columns each item should be repeated.                                           |
| `fetchGuidesLabel`        | `string`                                                                                  | No       | `undefined`          | Text used for the link that loads more guides in the main guide view of the component.                                          |
| `guideListCategoryHeader` | `string`                                                                                  | No       | `''`                 | The text used for the header of most the common questions box, for a particular category. |
| `guideListHeader`         | `string`                                                                                  | No       | `undefined`          | The text used for the header of most the common questions box.                            |
| `pageSize`                | `string`                                                                                  | No       | `10`                 | Number of guides to fetch when paginating.                                                |
| `routes`                  | [`Partial<RoutingProperties>`](/component-reference/generic-properties#routingproperties) | No       | `{ guide: 'guide' }` | Map of routes to be used by the component.                                                |

## Generic properties

_Not available_

## Actions

_Not available_
