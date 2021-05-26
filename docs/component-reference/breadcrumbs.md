# Breadcrumbs

Displays breadcrumbs based on a static hierarchy. Be aware this component is opiniated regarding the hierarchy of the routes, and may not support custom routing configurations.

| Type          | Plugin                 | Package                     |
| ------------- | ---------------------- | --------------------------- |
| `breadcrumbs` | `BreadcrumbsComponent` | `@humany/widget-components` |

## Properties

| Name                     | Type                                                                                      | Required | Default                                                                                       | Description                                                                                                 |
| ------------------------ | ----------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `guideCategoryRootLabel` | `string`                                                                                  | No       | `''`                                                                                          | Label for the root category.                                                                                |
| `mode`                   | `'list' \| 'compact'`                                                                     | No       | `'list'`                                                                                      | Rendering mode of the component.                                                                            |
| `phraseLabel`            | `string`                                                                                  | No       | `''`                                                                                          | Label to be used when indicating the current search phrase in the trail. Supports replace for `{{phrase}}`. |
| `routes`                 | [`Partial<RoutingProperties>`](/component-reference/generic-properties#routingproperties) | No       | `{ initial: 'index', search: 'search', guideCategory: 'browse', contactCategory: 'contact' }` | Map of routes to be used by the component.                                                                  |
| `tagLabel`               | `string`                                                                                  | No       | `''`                                                                                          | Label to be used when indicating selected tags in the trail. Supports replace for `{{tag}}`.                |
| `truncationThreshold`    | `number`                                                                                  | No       | `30`                                                                                          | How many characters should be displayed in each breadcrumb item before truncating said item.                |

## Generic properties

_Not available_

## Actions

_Not available_
