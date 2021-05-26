# GuideCategoryDropdown

Displays a list of guide categories as a drop down list.

| Type                      | Plugin                           | Package                     |
| ------------------------- | -------------------------------- | --------------------------- |
| `guide-category-dropdown` | `GuideCategoryDropdownComponent` | `@humany/widget-components` |

## Properties

| Name                      | Type                                                                                              | Required | Default                         | Description                                                                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------------------- | -------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `activeCategoryAriaLabel` | `string`                                                                                          | No       | `''`                            | The `aria-label` attribute for selected categories.                                                                                       |
| `categoryAriaLabel`       | `string`                                                                                          | No       | `''`                            | The `aria-label` attribute for categories.                                                                                                |
| `fallbackOnInitialRoute`  | `boolean`                                                                                         | No       | `false`                         | Whether or not to fallback on the widgets initial route when deselecting the current category without any other route parameters present. |
| `matchFilters`            | [`Partial<MatchFilterProperties>`](/component-reference/generic-properties#matchfilterproperties) | No       | `{ search: false, tag: false }` | Optional match filters when fetching categories.                                                                                          |
| `rootCategoryHeader`      | `string`                                                                                          | No       | `undefined`                     | Display name of the root category.                                                                                                        |
| `route`                   | `string`                                                                                          | No       | `'search'`                      | Target route name when generating guide links.                                                                                            |
| `showMatchCount`          | `boolean`                                                                                         | No       | `false`                         | Whether or not amount of guides in a given category should be shown.                                                                      |

## Generic properties

_Not available_

## Actions

_Not available_
