# Generic Component Property Types

Generic properties used by multiple component types.

## FormProperties

Properties which configure how forms behave within a component.

| Name                       | Type      | Description                                                              |
| -------------------------- | --------- | ------------------------------------------------------------------------ |
| `fileSizeErrorLabel`       | `string`  | Error label for when trying to upload a file of incorrect size.          |
| `fileUploadHeader`         | `string`  | Header for file uploading form component.                                |
| `multilineForm`            | `boolean` | Whether the form should render some components on separate lines or not. |
| `requiredDescriptionLabel` | `string`  | Label describing required fields.                                        |
| `submitButtonLabel`        | `string`  | Label for form submit button.                                            |
| `validationHeader`         | `string`  | Header for the validation summary.                                       |

## MetaDataProperties

Properties which configure rendering of guide metadata within a component.

| Name                     | Type                    | Description                                     |
| ------------------------ | ----------------------- | ----------------------------------------------- |
| `metadataByLabel`        | `string`                | Label to be used as prefix for editor.          |
| `metadataModifiedLabel`  | `string`                | Label to describe when guide was last modified. |
| `metadataPublishedLabel` | `string`                | Label to describe when guide was published.     |
| `metadata`               | [`Metadata`](#metadata) | Configuration object for what to display.       |

### Metadata

| Name            | Type                                            | Description                                             |
| --------------- | ----------------------------------------------- | ------------------------------------------------------- |
| `format`        | `'hh:mm' \| 'yyyy-mm-dd' \| 'yyyy-mm-dd hh:mm'` | Formatting for dates.                                   |
| `showModified`  | `boolean`                                       | Whether or not to display when guide was last modified. |
| `showPublished` | `boolean`                                       | Whether or not to display when guide was published.     |

## RoutingProperties

Properties which configure routing of a component.

| Name              | Type     | Description                                     |
| ----------------- | -------- | ----------------------------------------------- |
| `contactCategory` | `string` | Route used for contact category links.          |
| `guideCategory`   | `string` | Route used for guide category links.            |
| `guide`           | `string` | Route used for guide links.                     |
| `index`           | `string` | Route used for links pointing to index route.   |
| `initial`         | `string` | Route used for links pointing to initial route. |
| `page`            | `string` | Route used when paging a list.                  |
| `search`          | `string` | Route used when searching.                      |

## MatchFilterProperties

Properties which configure which match filters should be applied on the content of a component.

| Name            | Type      | Description                                                         |
| --------------- | --------- | ------------------------------------------------------------------- |
| `guideCategory` | `boolean` | Whether or not the current guide category should be used as filter. |
| `search`        | `boolean` | Whether or not the current search phrase should be used as filter.  |
| `tag`           | `boolean` | Whether or not the current tag should be used as filter.            |

## FavoriteProperties

Properties which configure texts used for toggling favorite status on guides.

| Name                         | Type     | Description                                                        |
| ---------------------------- | -------- | ------------------------------------------------------------------ |
| `addFavoriteTooltip`         | `string` | Tooltip when hovering over button to add guide as favorite.        |
| `removeFavoriteCancelLabel`  | `string` | Label for cancel button when confirming guide favorite removal.    |
| `removeFavoriteConfirmLabel` | `string` | Label for confirm button when confirming guide favorite removal.   |
| `removeFavoriteHeader`       | `string` | Header for modal when confirming guide favorite removal.           |
| `removeFavoriteLabel`        | `string` | Label for modal when confirming guide favorite removal.            |
| `removeFavoriteTooltip`      | `string` | Tooltip when hovering over button to remove the guide as favorite. |

## LanguageLabelProperties

Properties which configure texts used for different languages.

| Name              | Type     | Description                |
| ----------------- | -------- | -------------------------- |
| `daLanguageLabel` | `string` | Danish language label.     |
| `deLanguageLabel` | `string` | German language label.     |
| `elLanguageLabel` | `string` | Greek language label.      |
| `enLanguageLabel` | `string` | English language label.    |
| `esLanguageLabel` | `string` | Spanish language label.    |
| `fiLanguageLabel` | `string` | Finnish language label.    |
| `frLanguageLabel` | `string` | French language label.     |
| `isLanguageLabel` | `string` | Icelandic language label.  |
| `itLanguageLabel` | `string` | Italian language label.    |
| `ltLanguageLabel` | `string` | Lithuanian language label. |
| `lvLanguageLabel` | `string` | Latvian language label.    |
| `nlLanguageLabel` | `string` | Dutch language label.      |
| `nnLanguageLabel` | `string` | Norwegian language label.  |
| `plLanguageLabel` | `string` | Polish language label.     |
| `ptLanguageLabel` | `string` | Portuguese language label. |
| `ruLanguageLabel` | `string` | Russian language label.    |
| `svLanguageLabel` | `string` | Swedish language label.    |

## PickerType

Enum containing different types of pickers.

| Name     | Value        | Description                                           |
| -------- | ------------ | ----------------------------------------------------- |
| Drawer   | `'drawer'`   | Displays a drawer, animating into the view.           |
| Dropdown | `'dropdown'` | Displays a dropdown beneath the picker toggle button. |
| Modal    | `'modal'`    | Displays an overlay with a modal.                     |
| None     | `'none'`     | Does not display the picker.                          |

## Symbol

Configuration for a given symbol.

Supported SVG-symbols: `'search'`, `'clear'`, `'close'`, `'back'`, `'alert'`, `'send'`, `'chat'`, `'agent'`, `'minimize'`, `'sorting'`, `'copy'`, `'print'`, `'language'`, `'information'`, `'options'`, `'caret-right'`, `'caret-left'`, `'caret-up'`, `'caret-down'`, `'chat-new'`, `'star-empty'`, `'star-filled'`, `'cog-wheel'`.

Font Awesome Version: 4.7.

| Name      | Type                              | Description                                |
| --------- | --------------------------------- | ------------------------------------------ |
| `content` | `string`                          | Symbol content.                            |
| `type`    | `'Uri' \| 'Svg' \| 'FontAwesome'` | Type of symbol. Supported Svg-symbols are: |
