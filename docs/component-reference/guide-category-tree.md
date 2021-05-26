# GuideCategoryTree

Displays a nested hierarchical list of guide categories.

| Type                  | Plugin                       | Package                     |
| --------------------- | ---------------------------- | --------------------------- |
| `guide-category-tree` | `GuideCategoryTreeComponent` | `@humany/widget-components` |

## Properties

| Name                      | Type      | Required | Default     | Description                                                                                                                               |
| ------------------------- | --------- | -------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `activeCategoryAriaLabel` | `string`  | No       | `''`        | The `aria-label` attribute for selected categories.                                                                                       |
| `categoryAriaLabel`       | `string`  | No       | `''`        | The `aria-label` attribute for categories.                                                                                                |
| `fallbackOnInitialRoute`  | `boolean` | No       | `false`     | Whether or not to fallback on the widgets initial route when deselecting the current category without any other route parameters present. |
| `rootCategoryHeader`      | `string`  | No       | `undefined` | Display name of the root category.                                                                                                        |
| `route`                   | `string`  | No       | `'search'`  | Target route name when generating guide links.                                                                                            |
| `showMatchCount`          | `boolean` | No       | `true`      | Whether to show the category match count or not.                                                                                          |

## Generic properties

_Not available_

## Actions

_Not available_
