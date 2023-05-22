# GuideCategoryTree

Displays a nested hierarchical list of guide categories.

| Type                  | Plugin                       | Package                                                      |
|-----------------------|------------------------------|------------------------------------------------------------- |
| `guide-category-tree` | `GuideCategoryTreeComponent` | `@telia-ace/knowledge-widget-components-guide-category-tree` |

## Properties

| Name                      | Type                   | Required | Default     | Description                                                                                                                               |
|---------------------------|------------------------|----------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `activeCategoryAriaLabel` | `string`               | No       | `''`        | The `aria-label` attribute for selected categories.                                                                                       |
| `categoryAriaLabel`       | `string`               | No       | `''`        | The `aria-label` attribute for categories.                                                                                                |
| `fallbackOnInitialRoute`  | `boolean`              | No       | `false`     | Toggles fallback on the widgets initial route when deselecting the current category without any other route parameters present. |
| `rootCategoryHeader`      | `string`               | No       | `undefined` | Display name of the root category.                                                                                                        |
| `route`                   | `string`               | No       | `'search'`  | Target route name when generating guide links.                                                                                            |
| `showMatchCount`          | `boolean`              | No       | `true`      | Toggles if category match count is shown.                                                                                          |
| `mode`                    | `'large' \| 'compact'` | No       | `'large'`   | Display option for how category items should be rendered using large or compact templates.                                                           |

## Generic properties

_Not available_

## Actions

_Not available_
