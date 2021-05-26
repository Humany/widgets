# Search

Displays a search element.

| Type     | Plugin            | Package                     |
| -------- | ----------------- | --------------------------- |
| `search` | `SearchComponent` | `@humany/widget-components` |

## Properties

| Name                | Type                                         | Required | Default                                                    | Description                                                                                        |
| ------------------- | -------------------------------------------- | -------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `ariaLabel`         | `string`                                     | No       | `undefined`                                                | Label applied to the input arialabel HTML attribute.                                               |
| `autoFocus`         | `boolean`                                    | No       | `false`                                                    | Whether or not the search input should focus on render.                                            |
| `clearButtonLabel`  | `string`                                     | No       | `undefined`                                                | Label for the reset button.                                                                        |
| `clearButtonLabel`  | `string`                                     | No       | `undefined`                                                | Label for the reset button.                                                                        |
| `filterBadges`      | [`FilterConfig`](#filterconfig) \| `boolean` | No       | `{ position: 'inside', tag: false, guideCategory: false }` | Whether or not to display the current tag and/or guide category.                                   |
| `incremental`       | `boolean`                                    | No       | `true`                                                     | Whether or not the search should happen incrementally as you type.                                 |
| `patchParams`       | `boolean`                                    | No       | `false`                                                    | Whether or not the search should keep other route parameters when searching.                       |
| `placeholder`       | `string`                                     | No       | `undefined`                                                | Placeholder text for the input element.                                                            |
| `placeholder`       | `string`                                     | No       | `undefined`                                                | Placeholder text for the input element.                                                            |
| `quickFilters`      | [`FilterConfig`](#filterconfig) \| `boolean` | No       | `{ autoSelect: false, tag: false, guideCategory: false }`  | Whether or not to allow selecting of tag and/or guide category by typing '#' / '@'.                |
| `role`              | `string`                                     | No       | `'search'`                                                 | The `role` attribute for the input element.                                                        |
| `role`              | `string`                                     | No       | `'search'`                                                 | The `role` attribute for the input element.                                                        |
| `route`             | `string`                                     | No       | `'search'`                                                 | Route name for generating links.                                                                   |
| `route`             | `string`                                     | No       | `'search'`                                                 | Route to navigate to when searching.                                                               |
| `searchButtonLabel` | `string`                                     | No       | `undefined`                                                | Label for the search button.                                                                       |
| `searchButtonLabel` | `string`                                     | No       | `undefined`                                                | Label for the search button.                                                                       |
| `showChildren`      | `boolean`                                    | No       | `false`                                                    | Whether or not children should be rendered. Can only be rendered when clear button is not visible. |
| `showClearButton`   | `boolean`                                    | No       | `false`                                                    | Whether or not a clear button should be displayed when searching.                                  |
| `showClearButton`   | `boolean`                                    | No       | `false`                                                    | Whether or not a reset button should be displayed.                                                 |
| `showSearchButton`  | `boolean`                                    | No       | `false`                                                    | Whether or not a search button should be displayed.                                                |
| `showSearchButton`  | `boolean`                                    | No       | `false`                                                    | Whether or not a search button should be displayed.                                                |

## Generic properties

_Not available_

## Actions

_Not available_

### `FilterConfig`

| Name            | Type                  | Description                                                                 |
| --------------- | --------------------- | --------------------------------------------------------------------------- |
| `autoSelect`    | `boolean`             | Whether or not the first element should be focused when using quick filter. |
| `guideCategory` | `boolean`             | Whether or not guide categories should be shown/supported.                  |
| `position`      | `'inside' \| 'below'` | Position of filter badges relative to search field.                         |
| `tag`           | `boolean`             | Whether or not tags should be shown/supported.                              |
