# TagList

Displays a list of tags.

| Type       | Plugin             | Package                     |
| ---------- | ------------------ | --------------------------- |
| `tag-list` | `TagListComponent` | `@humany/widget-components` |

## Properties

| Name                     | Type                | Required | Default     | Description                                                                                                                          |
| ------------------------ | ------------------- | -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `fallbackOnInitialRoute` | `boolean`           | No       | `false`     | Whether or not to fallback on the widgets initial route when deselecting the current tag without any other route parameters present. |
| `header`                 | `string`            | No       | `undefined` | Header text for the tag list.                                                                                                        |
| `rootTagLabel`           | `string`            | No       | `undefined` | Label on the root tag.                                                                                                               |
| `route`                  | `string`            | No       | `search`    | Name of route the tag links should target.                                                                                           |
| `showIcons`              | `boolean`           | No       | `search`    | Whether or not to show icons in tags.                                                                                                |
| `showMatchCount`         | `boolean`           | No       | `search`    | Whether or not amount of guides in a given tag should be shown.                                                                      |
| `static`                 | `boolean`           | No       | `false`     | Whether or not to use the static tag end point (`true` = `/tags`, `false` = `/tagsonguides`).                                        |
| `style`                  | `'badge' \| 'pill'` |          | No          | `'badge'`                                                                                                                            | Generic styling of the tags. |

## Generic properties

_Not available_

## Actions

_Not available_
