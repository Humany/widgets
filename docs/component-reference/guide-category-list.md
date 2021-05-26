# GuideCategoryList

Displays a list of guide categories.

| Type                  | Plugin                       | Package                     |
| --------------------- | ---------------------------- | --------------------------- |
| `guide-category-list` | `GuideCategoryListComponent` | `@humany/widget-components` |

## Properties

| Name                      | Type                                                                                              | Required | Default                                                                    | Description                                                                                                                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `activeCategoryAriaLabel` | `string`                                                                                          | No       | `''`                                                                       | The `aria-label` attribute for selected categories.                                                                                                                                               |
| `categoryAriaLabel`       | `string`                                                                                          | No       | `''`                                                                       | The `aria-label` attribute for categories.                                                                                                                                                        |
| `direction`               | `'vertical'` \| `'horizontal'`                                                                    | No       | `'vertical'`                                                               | The rendering mode of the list.                                                                                                                                                                   |
| `fallbackOnInitialRoute`  | `boolean`                                                                                         | No       | `false`                                                                    | Whether or not to fallback on the widgets initial route when deselecting the current category without any other route parameters present.                                                         |
| `levels`                  | `number` \| `'all'`                                                                               | No       | `1`                                                                        | How many levels of categories/subcategories to render.                                                                                                                                            |
| `matchFilters`            | [`Partial<MatchFilterProperties>`](/component-reference/generic-properties#matchfilterproperties) | No       | `{ search: false }`                                                        | Optional match filters when fetching categories.                                                                                                                                                  |
| `mode`                    | [`GuideCategoryListMode \| GuideCategoryListMode[]`](#guidecategorylistmode)                      | No       | `{ type: 'badges', columns: null, description: false, scrollable: false }` | Display mode of category items. If `levels` is set to a number higher than `1` or `'all'`, the mode can be different for each level by providing an array of `GuideCategoryListMode` definitions. |
| `route`                   | `string`                                                                                          | No       | `'search'`                                                                 | Target route name when generating guide links.                                                                                                                                                    |

### Deprecated properties

| Name               | Type                     | Required | Default  | Description                                                                                                                                                                                       |
| ------------------ | ------------------------ | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `badgeSize`        | `'large'` \| `'compact'` | No       | `'large` | Size of category badges. This property is deprecated and has bee replaced with the `type` parameter of the `mode` property where `tiles` equals the `large` option and `badges` equals `compact`. |
| `columns`          | `number`                 | No       | `null`   | Number of columns each item should be repeated. This property is deprecated and should be replaced with the `columns` parameter of the `mode` property.                                           |
| `showDescriptions` | `boolean`                | No       | `true`   | Whether category descriptions should be rendered or not. Not supported when `badgeSize: 'compact'`.                                                                                               |

### `GuideCategoryListMode`

| Name          | Type                                                | Description                                                                                        |
| ------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`        | `'tiles'` \| `'badges'` \| `'circles'` \| `'pills'` | Visual styling of categories                                                                       |
| `scrollable`  | `boolean`                                           | Enable/disable scroll of the category list (only supported by mode with type `circles`)            |
| `columns`     | `number`                                            | Number of columns each item should repeated (only supported by mode with type `tiles`)             |
| `description` | `boolean`                                           | Whether category descriptions should be rendered or not (only supported by mode with type `tiles`) |

## Generic properties

_Not available_

## Actions

_Not available_
