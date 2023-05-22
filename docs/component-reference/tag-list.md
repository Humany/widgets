# TagList

Displays a list of tags.

| Type       | Plugin             | Package                                           |
|------------|--------------------|-------------------------------------------------- |
| `tag-list` | `TagListComponent` | `@telia-ace/knowledge-widget-components-tag-list` |

## Properties

| Name                     | Type      | Required | Default     | Description                                                                                                                          |
|--------------------------|-----------|----------|-------------|--------------------------------------------------------------------------------------------------------------------------------------|
| `fallbackOnInitialRoute` | `boolean` | No       | `false`     | Toggles fallback on the widgets initial route when deselecting the current tag without any other route parameters present. |
| `header`                 | `string`  | No       | `undefined` | Header text for the tag list.                                                                                                        |
| `itemAriaLabel`          | `string`  | No       | `''`        | The `aria-label` for each item in the list. Dynamic values are available for `{{title}}` and `{{matches}}`.                          |
| `rootTagLabel`           | `string`  | No       | `undefined` | Label on the root tag.                                                                                                               |
| `route`                  | `string`  | No       | `search`    | Name of route the tag links should target.                                                                                           |
| `showIcons`              | `boolean` | No       | `search`    | To show or not to show icons for tags.                                                                                                |
| `showMatchCount`         | `boolean` | No       | `search`    | Toggles visibility for guide match count for tags.                                                                      |
| `static`                 | `boolean` | No       | `false`     | Whether or not to use the static tag end point (`true` = `/tags`, `false` = `/tagsonguides`).                                        |
| `style`                  | `'badge' \| 'pill'` |          | No          | `'badge'`                                                                                                                            | Generic styling of the tags. |

## Generic properties

_Not available_

## Actions

_Not available_
