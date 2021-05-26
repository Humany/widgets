# GuideList

Displays a list of guide links.

| Type         | Plugin               | Package                     |
| ------------ | -------------------- | --------------------------- |
| `guide-list` | `GuideListComponent` | `@humany/widget-components` |

## Properties

| Name                      | Type                                                                                              | Required | Default                                                | Description                                                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| `accordion`               | `boolean`                                                                                         | No       | `false`                                                | Whether or not guides should be expandable within the guide list.                                  |
| `allowPaging`             | `boolean`                                                                                         | No       | `false`                                                | Whether ot not the list should allow paging.                                                       |
| `alphabeticAscending`     | `string`                                                                                          | No       | `undefined`                                            | Label for sorting by alphabetic ascending.                                                         |
| `alphabeticDescending`    | `string`                                                                                          | No       | `undefined`                                            | Label for sorting by alphabetic descending.                                                        |
| `categoryFallbackHeader`  | `string`                                                                                          | No       | `undefined`                                            | Label for the category fallback header, used when generating header.                               |
| `categoryLinkLabel`       | `string`                                                                                          | No       | `undefined`                                            | Label for link to show more guides.                                                                |
| `categoryRootLabel`       | `string`                                                                                          | No       | `undefined`                                            | Label for the root category.                                                                       |
| `columns`                 | `number` \| `null`                                                                                | No       | `null`                                                 | How many columns the guide list should be split into.                                              |
| `fetchGuidesLabel`        | `string`                                                                                          | No       | `undefined`                                            | Label for link to fetch more guides.                                                               |
| `forPhraseLabel`          | `string`                                                                                          | No       | `undefined`                                            | Label for "for {{searchPhrase}}", used when generating header.                                     |
| `inCategoryLabel`         | `string`                                                                                          | No       | `undefined`                                            | Label for "in {{guideCategory}}", used when generating header.                                     |
| `localPaging`             | `boolean`                                                                                         | No       | `false`                                                | Whether or not the paging should use a local variable instead of using the `take` route parameter. |
| `matchFilters`            | [`Partial<MatchFilterProperties>`](/component-reference/generic-properties#matchfilterproperties) | No       | `{ search: false, tag: false, guideCategory: false }`  | Optional match filters when fetching guides.                                                       |
| `modifiedAscending`       | `string`                                                                                          | No       | `undefined`                                            | Label for sorting by last modified ascending.                                                      |
| `modifiedDescending`      | `string`                                                                                          | No       | `undefined`                                            | Label for sorting by last modified descending.                                                     |
| `noMatchesLabel`          | `string`                                                                                          | No       | `undefined`                                            | Label for "no matches found", used when generating header.                                         |
| `onlyFavorites`           | `boolean`                                                                                         | No       | `false`                                                | Whether or not the guide list only should contain favorited guides.                                |
| `pageSize`                | `number`                                                                                          | No       | `5`                                                    | Number of guides to fetch per page.                                                                |
| `popularityDescending`    | `string`                                                                                          | No       | `undefined`                                            | Label for sorting by most popular descending.                                                      |
| `publishedAscending`      | `string`                                                                                          | No       | `undefined`                                            | Label for sorting by published ascending.                                                          |
| `publishedDescending`     | `string`                                                                                          | No       | `undefined`                                            | Label for sorting by published descending.                                                         |
| `rootLabel`               | `string`                                                                                          | No       | `undefined`                                            | Label for the root, used when generating header.                                                   |
| `routes`                  | [`Partial<RoutingProperties>`](/component-reference/generic-properties#routingproperties)         | No       | `{ guide: 'guide', page: 'browse' }`                   | Map of routes to be used by the component.                                                         |
| `searchResultsEmptyLabel` | `string`                                                                                          | No       | `undefined`                                            | Label for "no matches found", used when generating header when searching.                          |
| `searchResultsLabel`      | `string`                                                                                          | No       | `undefined`                                            | Label for search results, used when generating header when searching.                              |
| `showFavoriteToggle`      | `boolean`                                                                                         | No       | `false`                                                | Whether or not the favorite toggle button should be shown.                                         |
| `sortingHeader`           | `string`                                                                                          | No       | `undefined`                                            | Header for the sorting picker.                                                                     |
| `sorting`                 | [`SortingProperties`](#sortingproperties)                                                         | No       | `{ default: 'popularity-descending', picker: 'none' }` | Configuration for sorting the guide list.                                                          |
| `tags`                    | `boolean`                                                                                         | No       | `boolean`                                              | Whether or not tags should be shown on each guide.                                                 |
| `withTagLabel`            | `string`                                                                                          | No       | `undefined`                                            | Label for "with {{tag}}", used when generating header.                                             |

## Generic properties

| Name                                                                               |
| ---------------------------------------------------------------------------------- |
| [`FavoriteProperties`](/component-reference/generic-properties#favoriteproperties) |
| [`MetaDataProperties`](/component-reference/generic-properties#metadataproperties) |

## Actions

_Not available_

### `SortingProperties`

| Name      | Type                                                               | Description                                                                             |
| --------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| `default` | [`SortingType`](#sortingtype)                                      | Default sorting order.                                                                  |
| `picker`  | [`PickerType`](/component-reference/generic-properties#pickertype) | Type of picker for the sorting selector. Supports `'dropdown'`, `'drawer'` and `'none'` |

### `SortingType`

| Name                  | Value                     | Description                                              |
| --------------------- | ------------------------- | -------------------------------------------------------- |
| Alphabetic Ascending  | `'alphabetic-ascending'`  | Sorts the guide list in alphabetic order from A-Z.       |
| Alphabetic Descending | `'alphabetic-descending'` | Sorts the guide list from alphabetic order from Z-A.     |
| Modified Ascending    | `'modified-ascending'`    | Sorts the guide list by last modified from old-new.      |
| Modified Descending   | `'modified-descending'`   | Sorts the guide list by last modified from new-old.      |
| Popularity Descending | `'popularity-descending'` | Sorts the guide list from most popular to least popular. |
| Published Ascending   | `'published-ascending'`   | Sorts the guide list by by published from old-new.       |
| Published Descending  | `'published-descending'`  | Sorts the guide list by published from new-old.          |
