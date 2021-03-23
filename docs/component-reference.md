# Component Reference
The following document describes all components available in the default distribution.

## BackLink
Displays a link which when clicked navigates one step back on the widget's router.

| Type        | Plugin              | Package                     |
| ----------- | ------------------- | --------------------------- |
| `back-link` | `BackLinkComponent` | `@humany/widget-components` |

### Properties
| Name    | Type     | Required | Default | Description               |
| ------- | -------- | -------- | ------- | ------------------------- |
| `label` | `string` | No       | `''`    | The text to be displayed. |

### Generic properties
_Not available_

### Actions

| Name    | Data | Options  | Description                          |
| ------- | ---- | -------- | ------------------------------------ |
| `click` | `{}` | _(none)_ | Dispatched when the link is clicked. |

## Breadcrumbs
Displays breadcrumbs based on a static hierarchy. Be aware this component is opiniated regarding the hierarchy of the routes, and may not support custom routing configurations.

| Type          | Plugin                 | Package                     |
| ------------- | ---------------------- | --------------------------- |
| `breadcrumbs` | `BreadcrumbsComponent` | `@humany/widget-components` |

### Properties
| Name                     | Type                                               | Required | Default                                                                                       | Description                                                                                                 |
| ------------------------ | -------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `guideCategoryRootLabel` | `string`                                           | No       | `''`                                                                                          | Label for the root category.                                                                                |
| `mode`                   | `'list' \| 'compact'`                              | No       | `'list'`                                                                                      | Rendering mode of the component.                                                                            |
| `phraseLabel`            | `string`                                           | No       | `''`                                                                                          | Label to be used when indicating the current search phrase in the trail. Supports replace for `{{phrase}}`. |
| `routes`                 | [`Partial<RoutingProperties>`](#routingproperties) | No       | `{ initial: 'index', search: 'search', guideCategory: 'browse', contactCategory: 'contact' }` | Map of routes to be used by the component.                                                                  |
| `tagLabel`               | `string`                                           | No       | `''`                                                                                          | Label to be used when indicating selected tags in the trail. Supports replace for `{{tag}}`.                |
| `truncationThreshold`    | `number`                                           | No       | `30`                                                                                          | How many characters should be displayed in each breadcrumb item before truncating said item.                |

### Generic properties
_Not available_

### Actions
_Not available_

## CloseButton
Displays a close button which when clicked dispatches an action.

| Type           | Plugin                 | Package                     |
| -------------- | ---------------------- | --------------------------- |
| `close-button` | `CloseButtonComponent` | `@humany/widget-components` |

### Properties
| Name        | Type     | Required | Default     | Description                                            |
| ----------- | -------- | -------- | ----------- | ------------------------------------------------------ |
| `ariaLabel` | `string` | No       | `undefined` | Label applied to the buttons arialabel HTML attribute. |

### Generic properties
_Not available_

### Actions

| Name    | Data | Options                                           | Description                            |
| ------- | ---- | ------------------------------------------------- | -------------------------------------- |
| `close` | `{}` | [`CloseButtonActionData`](#closebuttonactiondata) | Dispatched when the button is clicked. |

##### `CloseButtonActionData`
| Name             | Type      | Description                                                     |
| ---------------- | --------- | --------------------------------------------------------------- |
| `preventDefault` | `boolean` | Whether or not the default close behaviour should be prevented. |

## ContactLink
Displays a link which can be targeted to a specific route name or other widget within the same implementation.

| Type           | Plugin                 | Package                     |
| -------------- | ---------------------- | --------------------------- |
| `contact-link` | `ContactLinkComponent` | `@humany/widget-components` |

### Properties
| Name               | Type                     | Required                      | Default                                                          | Description                                                                        |
| ------------------ | ------------------------ | ----------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `descriptionLabel` | `string`                 | No                            | `undefined`                                                      | A description text to be displayed for the link.                                   |
| `iconSize`         | `'large'` \| `'small'`   | No                            | `'large'`                                                        | The size of the icon.                                                              |
| `label`            | `string`                 | No                            | `''`                                                             | The text to be displayed for the link.                                             |
| `mode`             | `'large'` \| `'compact'` | No                            | `'large'`                                                        | The rendering mode of the link.                                                    |
| `route`            | `string`                 | No                            | `undefined`                                                      | Name of route the link should target.                                              |
| `symbol`           | [`Symbol`](#symbol)      | `No`                          | `undefined`                                                      | A symbol to be displayed for the link.                                             |
| `textAlign`        | `'center'` \| `'right'`  | No                            | `'center'` if `mode==='large'`, `'right'` if `mode==='compact'`. | The text align for the link.                                                       |
| `widget`           | `string`                 | Yes (if `route` is undefined) | `undefined`                                                      | Name of widget the link should target. This value is used if `route` is undefined. |

### Generic properties
_Not available_

### Actions
_Not available_

## ContactList
Displays a list of contact methods, with an optional deflection guide list.

| Type           | Plugin                 | Package                     |
| -------------- | ---------------------- | --------------------------- |
| `contact-list` | `ContactListComponent` | `@humany/widget-components` |


### Properties
| Name                  | Type                                               | Required | Default                          | Description                                                                              |
| --------------------- | -------------------------------------------------- | -------- | -------------------------------- | ---------------------------------------------------------------------------------------- |
| `deflectionAccordion` | `boolean`                                          | No       | `false`                          | Whether the guides displayed in the deflection guide list should expand below the guide. |
| `deflectionHeader`    | `string`                                           | No       | `undefined`                      | Header text for deflection list.                                                         |
| `deflectionPageSize`  | `number`                                           | No       | `5`                              | Maximun number of guides to fetch per category.                                          |
| `deflection`          | `{ [contactCategoryId: string]: string[] }`        | No       | `{}`                             | Map between contact method categories and guide categories to fetch data for.            |
| `routes`              | [`Partial<RoutingProperties>`](#routingproperties) | No       | `{ contactCategory: 'contact' }` | Map of routes to be used by the component.                                               |

### Generic properties
| Name                                |
| ----------------------------------- |
| [`FormProperties`](#formproperties) |

### Actions
_Not available_

## ContactMethod
Displays a contact method.

| Type             | Plugin                   | Package                     |
| ---------------- | ------------------------ | --------------------------- |
| `contact-method` | `ContactMethodComponent` | `@humany/widget-components` |

### Properties
| Name        | Type      | Required | Default     | Description                                                                                         |
| ----------- | --------- | -------- | ----------- | --------------------------------------------------------------------------------------------------- |
| `autoFocus` | `boolean` | No       | `false`     | Whether a contact method form, if present, should grab focus when rendered or not.                  |
| `id`        | `string`  | No       | `undefined` | Id of contact method to fetch initially. The contact method must be part of the current projection. |

### Generic properties
| Name                                |
| ----------------------------------- |
| [`FormProperties`](#formproperties) |

### Actions
_Not available_

## Conversation
Displays a conversational component.

| Type           | Plugin                  | Package                       |
| -------------- | ----------------------- | ----------------------------- |
| `conversation` | `ConversationComponent` | `@humany/widget-conversation` |

### Properties
| Name               | Type                 | Required | Default               | Description                                                                      |
| ------------------ | -------------------- | -------- | --------------------- | -------------------------------------------------------------------------------- |
| `avatarSize`       | `string` \| `number` | No       | `32px`                | Size, as CSS `width` property, of the agent's avatar.                            |
| `inputDisabled`    | `boolean`            | No       | `false`               | Whether the input element should be disabled or not.                             |
| `inputHidden`      | `boolean`            | No       | `false`               | Whether the input element should be hidden or not.                               |
| `inputMultiline`   | `boolean`            | No       | `false`               | Whether the input element should wrap content and render multiple lines of text. |
| `inputPlaceholder` | `string`             | No       | `'Type your message'` | The placeholder text of the input element.                                       |
| `loading`          | `boolean`            | No       | `false`               | Whether the conversation is currently loading data or not.                       |
| `providers`        | `string[]`           | No       | `[]`                  | List of provider keys for the component.                                         |
| `sendButtonLabel`  | `string`             | No       | `'Send message'`      | Tooltip shown when hovering the send button.                                     |
| `userLabel`        | `string`             | No       | `''`                  | Name of the use in the conversation.                                             |

### Generic properties
_Not available_

### Actions

| Name          | Data                     | Options  | Description                                                                |
| ------------- | ------------------------ | -------- | -------------------------------------------------------------------------- |
| `action`      | `{ actionKey: string }`  | _(none)_ | Dispatched when an inner action of a conversational message is dispatched. |
| `form`        | `FormActionData`         | _(none)_ | Dispatched when a form is submitted.                                       |
| `user-submit` | `{ text: string }`       | _(none)_ | Dispatched when the user submits a text.                                   |
| `user-typing` | `{ textLength: Number }` | _(none)_ | Dispatched when the user is typing.                                        |

#### `FormActionData`
| Name        | Type       | Description                                                                     |
| ----------- | ---------- | ------------------------------------------------------------------------------- |
| `actionKey` | `string`   | The action key triggering the action. normally `'submit'`.                      |
| `data`      | `FormData` | An object representing a form. See `@humany/widget-forms` for more information. |
| `formKey`   | `string`   | The unique key for the form.                                                    |


## ConversationReturnButton
Displays a return button when a conversation is ongoing and the user is not on the conversation route.

| Type                         | Plugin                              | Package                       |
| ---------------------------- | ----------------------------------- | ----------------------------- |
| `conversation-return-button` | `ConversationReturnButtonComponent` | `@humany/widget-conversation` |

### Properties
| Name     | Type                                                              | Required | Default     | Description                                                      |
| -------- | ----------------------------------------------------------------- | -------- | ----------- | ---------------------------------------------------------------- |
| `active` | `string`                                                          | No       | `false`     | Controls whether the component is rendered or not.               |
| `alert`  | [`ConversationReturnButtonAlert`](#conversationreturnbuttonalert) | No       | `undefined` | Renders a symbol that animates when a message has been received. |
| `label`  | `string`                                                          | No       | `undefined` | The buttons label.                                               |
| `mode`   | [`ConversationReturnButtonMode`](#conversationreturnbuttonmode)   | No       | `'flat'`    | Controls the buttons visual representation and effects.          |

#### `ConversationReturnButtonAlert`
| Name     | Type                | Required | Default     | Description                         |
| -------- | ------------------- | -------- | ----------- | ----------------------------------- |
| `label`  | `string`            | No       | `undefined` | Tooltip. Uses html-title attribute. |
| `show`   | `boolean`           | No       | `false`     | Whether symbol is shown or not.     |
| `symbol` | [`Symbol`](#symbol) | No       | `undefined` | Symbol definition.                  |

#### `ConversationReturnButtonMode`
| Name              | Value              | Description                                                                  |
| ----------------- | ------------------ | ---------------------------------------------------------------------------- |
| Flashing          | `flashing`         | Button background-color will flash between context primary and accent color. |
| Flashing gradient | `flashingGradient` | Button uses a gradient between primary and accent colors that scrolls.       |
| Flat              | `flat`             | No animated effect. Button will use primary color as background-color.       |

### Generic properties
_Not available_

### Actions
| Name     | Data | Options  | Description                                                                                                |
| -------- | ---- | -------- | ---------------------------------------------------------------------------------------------------------- |
| `toggle` | `{}` | _(none)_ | Dispatched when the user clicks the button. Navigates to the view which contains a conversation component. |

## Copyright
Displays a copyright sign.

| Type        | Plugin               | Package                     |
| ----------- | -------------------- | --------------------------- |
| `copyright` | `CopyrightComponent` | `@humany/widget-components` |

### Properties
| Name   | Type                     | Required | Default     | Description                      |
| ------ | ------------------------ | -------- | ----------- | -------------------------------- |
| `mode` | `'compact'` \| `'large'` | No       | `'compact'` | Generic sizing of the component. |

### Generic properties
_Not available_

### Actions
_Not available_

## EmbeddedWidget
Displays an embedded inline widget.

| Type              | Plugin                    | Package                     |
| ----------------- | ------------------------- | --------------------------- |
| `embedded-widget` | `EmbeddedWidgetComponent` | `@humany/widget-components` |

### Properties
| Name     | Type     | Required | Default | Description                                                              |
| -------- | -------- | -------- | ------- | ------------------------------------------------------------------------ |
| `widget` | `string` | Yes      |         | Name of widget to render. The widget must be in the same implementation. |

## GuideCategoryBrowser
Displays a category browser for a list of categories, rendered as a grid.

| Type                     | Plugin                          | Package                     |
| ------------------------ | ------------------------------- | --------------------------- |
| `guide-category-browser` | `GuideCategoryBrowserComponent` | `@humany/widget-components` |

### Properties
| Name                      | Type                                               | Required | Default              | Description                                                                               |
| ------------------------- | -------------------------------------------------- | -------- | -------------------- | ----------------------------------------------------------------------------------------- |
| `categoryLinkLabel`       | `string`                                           | No       | `undefined`          | The text used for link to display more guides in subcategory.                             |
| `columns`                 | `number`                                           | No       | `null`               | Number of columns each item should be repeated.                                           |
| `fetchGuidesLabel`        | `string`                                           | No       | `undefined`          | The text used for the link to fetch more guides.                                          |
| `guideListCategoryHeader` | `string`                                           | No       | `''`                 | The text used for the header of most the common questions box, for a particular category. |
| `guideListHeader`         | `string`                                           | No       | `undefined`          | The text used for the header of most the common questions box.                            |
| `pageSize`                | `string`                                           | No       | `10`                 | Number of guides to fetch when paginating.                                                |
| `routes`                  | [`Partial<RoutingProperties>`](#routingproperties) | No       | `{ guide: 'guide' }` | Map of routes to be used by the component.                                                |

### Generic properties
_Not available_

### Actions
_Not available_

## GuideCategoryDropdown
Displays a list of guide categories as a drop down list.

| Type                      | Plugin                           | Package                     |
| ------------------------- | -------------------------------- | --------------------------- |
| `guide-category-dropdown` | `GuideCategoryDropdownComponent` | `@humany/widget-components` |

### Properties
| Name                      | Type                                                       | Required | Default                         | Description                                                                                                                               |
| ------------------------- | ---------------------------------------------------------- | -------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `activeCategoryAriaLabel` | `string`                                                   | No       | `''`                            | The `aria-label` attribute for selected categories.                                                                                       |
| `categoryAriaLabel`       | `string`                                                   | No       | `''`                            | The `aria-label` attribute for categories.                                                                                                |
| `fallbackOnInitialRoute`  | `boolean`                                                  | No       | `false`                         | Whether or not to fallback on the widgets initial route when deselecting the current category without any other route parameters present. |
| `matchFilters`            | [`Partial<MatchFilterProperties>`](#matchfilterproperties) | No       | `{ search: false, tag: false }` | Optional match filters when fetching categories.                                                                                          |
| `rootCategoryHeader`      | `string`                                                   | No       | `undefined`                     | Display name of the root category.                                                                                                        |
| `route`                   | `string`                                                   | No       | `'search'`                      | Target route name when generating guide links.                                                                                            |
| `showMatchCount`          | `boolean`                                                  | No       | `false`                         | Whether or not amount of guides in a given category should be shown.                                                                      |

### Generic properties
_Not available_

### Actions
_Not available_

## GuideCategoryList
Displays a list of guide categories.

| Type                  | Plugin                       | Package                     |
| --------------------- | ---------------------------- | --------------------------- |
| `guide-category-list` | `GuideCategoryListComponent` | `@humany/widget-components` |

### Properties
| Name                      | Type                                                       | Required | Default             | Description                                                                                                                               |
| ------------------------- | ---------------------------------------------------------- | -------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `activeCategoryAriaLabel` | `string`                                                   | No       | `''`                | The `aria-label` attribute for selected categories.                                                                                       |
| `badgeSize`               | `'large'` \| `'small'`                                     | No       | `'large`            | Size of category badges.                                                                                                                  |
| `categoryAriaLabel`       | `string`                                                   | No       | `''`                | The `aria-label` attribute for categories.                                                                                                |
| `columns`                 | `number`                                                   | No       | `null`              | Number of columns each item should be repeated.                                                                                           |
| `direction`               | `'vertical'` \| `'horizontal'`                             | No       | `'vertical'`        | The rendering mode of the list.                                                                                                           |
| `fallbackOnInitialRoute`  | `boolean`                                                  | No       | `false`             | Whether or not to fallback on the widgets initial route when deselecting the current category without any other route parameters present. |
| `matchFilters`            | [`Partial<MatchFilterProperties>`](#matchfilterproperties) | No       | `{ search: false }` | Optional match filters when fetching categories.                                                                                          |
| `route`                   | `string`                                                   | No       | `'search'`          | Target route name when generating guide links.                                                                                            |
| `showDescriptions`        | `boolean`                                                  | No       | `true`              | Whether category descriptions should be rendered or not. Not supported when `badgeSize: 'compact'`.                                       |

### Generic properties
_Not available_

### Actions
_Not available_

## GuideCategoryTree
Displays a nested hierarchical list of guide categories.

| Type                  | Plugin                       | Package                     |
| --------------------- | ---------------------------- | --------------------------- |
| `guide-category-tree` | `GuideCategoryTreeComponent` | `@humany/widget-components` |

### Properties
| Name                      | Type      | Required | Default     | Description                                                                                                                               |
| ------------------------- | --------- | -------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `activeCategoryAriaLabel` | `string`  | No       | `''`        | The `aria-label` attribute for selected categories.                                                                                       |
| `categoryAriaLabel`       | `string`  | No       | `''`        | The `aria-label` attribute for categories.                                                                                                |
| `fallbackOnInitialRoute`  | `boolean` | No       | `false`     | Whether or not to fallback on the widgets initial route when deselecting the current category without any other route parameters present. |
| `rootCategoryHeader`      | `string`  | No       | `undefined` | Display name of the root category.                                                                                                        |
| `route`                   | `string`  | No       | `'search'`  | Target route name when generating guide links.                                                                                            |
| `showMatchCount`          | `boolean` | No       | `true`      | Whether to show the category match count or not.                                                                                          |

### Generic properties
_Not available_

### Actions
_Not available_

## GuideList
Displays a list of guide links.

| Type         | Plugin               | Package                     |
| ------------ | -------------------- | --------------------------- |
| `guide-list` | `GuideListComponent` | `@humany/widget-components` |

### Properties
| Name                      | Type                                                       | Required | Default                                                | Description                                                                                        |
| ------------------------- | ---------------------------------------------------------- | -------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| `accordion`               | `boolean`                                                  | No       | `false`                                                | Whether or not guides should expand below each guide when clicked.                                 |
| `allowPaging`             | `boolean`                                                  | No       | `false`                                                | Whether ot not the list should allow paging.                                                       |
| `alphabeticAscending`     | `string`                                                   | No       | `undefined`                                            | Label for sorting by alphabetic ascending.                                                         |
| `alphabeticDescending`    | `string`                                                   | No       | `undefined`                                            | Label for sorting by alphabetic descending.                                                        |
| `categoryFallbackHeader`  | `string`                                                   | No       | `undefined`                                            | Label for the category fallback header, used when generating header.                               |
| `categoryLinkLabel`       | `string`                                                   | No       | `undefined`                                            | Label for link to show more guides.                                                                |
| `categoryRootLabel`       | `string`                                                   | No       | `undefined`                                            | Label for the root category.                                                                       |
| `columns`                 | `number` \| `null`                                         | No       | `null`                                                 | How many columns the guide list should be split into.                                              |
| `fetchGuidesLabel`        | `string`                                                   | No       | `undefined`                                            | Label for link to fetch more guides.                                                               |
| `forPhraseLabel`          | `string`                                                   | No       | `undefined`                                            | Label for "for {{searchPhrase}}", used when generating header.                                     |
| `inCategoryLabel`         | `string`                                                   | No       | `undefined`                                            | Label for "in {{guideCategory}}", used when generating header.                                     |
| `localPaging`             | `boolean`                                                  | No       | `false`                                                | Whether or not the paging should use a local variable instead of using the `take` route parameter. |
| `matchFilters`            | [`Partial<MatchFilterProperties>`](#matchfilterproperties) | No       | `{ search: false, tag: false, guideCategory: false }`  | Optional match filters when fetching guides.                                                       |
| `modifiedAscending`       | `string`                                                   | No       | `undefined`                                            | Label for sorting by last modified ascending.                                                      |
| `modifiedDescending`      | `string`                                                   | No       | `undefined`                                            | Label for sorting by last modified descending.                                                     |
| `noMatchesLabel`          | `string`                                                   | No       | `undefined`                                            | Label for "no matches found", used when generating header.                                         |
| `onlyFavorites`           | `boolean`                                                  | No       | `false`                                                | Whether or not the guide list only should contain favorited guides.                                |
| `pageSize`                | `number`                                                   | No       | `5`                                                    | Number of guides to fetch per page.                                                                |
| `popularityDescending`    | `string`                                                   | No       | `undefined`                                            | Label for sorting by most popular descending.                                                      |
| `publishedAscending`      | `string`                                                   | No       | `undefined`                                            | Label for sorting by published ascending.                                                          |
| `publishedDescending`     | `string`                                                   | No       | `undefined`                                            | Label for sorting by published descending.                                                         |
| `rootLabel`               | `string`                                                   | No       | `undefined`                                            | Label for the root, used when generating header.                                                   |
| `routes`                  | [`Partial<RoutingProperties>`](#routingproperties)         | No       | `{ guide: 'guide', page: 'browse' }`                   | Map of routes to be used by the component.                                                         |
| `searchResultsEmptyLabel` | `string`                                                   | No       | `undefined`                                            | Label for "no matches found", used when generating header when searching.                          |
| `searchResultsLabel`      | `string`                                                   | No       | `undefined`                                            | Label for search results, used when generating header when searching.                              |
| `showFavoriteToggle`      | `boolean`                                                  | No       | `false`                                                | Whether or not the favorite toggle button should be shown.                                         |
| `sortingHeader`           | `string`                                                   | No       | `undefined`                                            | Header for the sorting picker.                                                                     |
| `sorting`                 | [`SortingProperties`](#sortingproperties)                  | No       | `{ default: 'popularity-descending', picker: 'none' }` | Configuration for sorting the guide list.                                                          |
| `tags`                    | `boolean`                                                  | No       | `boolean`                                              | Whether or not tags should be shown on each guide.                                                 |
| `withTagLabel`            | `string`                                                   | No       | `undefined`                                            | Label for "with {{tag}}", used when generating header.                                             |

### Generic properties
| Name                                        |
| ------------------------------------------- |
| [`FavoriteProperties`](#favoriteproperties) |
| [`MetaDataProperties`](#metadataproperties) |

### Actions
_Not available_

#### `SortingProperties`
| Name      | Type                                | Description                                                                             |
| --------- | ----------------------------------- | --------------------------------------------------------------------------------------- |
| `default` | [`Enum<SortingType>`](#sortingtype) | Default sorting order.                                                                  |
| `picker`  | [`Enum<PickerType>`](#pickertype)   | Type of picker for the sorting selector. Supports `'dropdown'`, `'drawer'` and `'none'` |

#### `SortingType`
| Name                  | Value                     | Description                                              |
| --------------------- | ------------------------- | -------------------------------------------------------- |
| Alphabetic Ascending  | `'alphabetic-ascending'`  | Sorts the guide list in alphabetic order from A-Z.       |
| Alphabetic Descending | `'alphabetic-descending'` | Sorts the guide list from alphabetic order from Z-A.     |
| Modified Ascending    | `'modified-ascending'`    | Sorts the guide list by last modified from old-new.      |
| Modified Descending   | `'modified-descending'`   | Sorts the guide list by last modified from new-old.      |
| Popularity Descending | `'popularity-descending'` | Sorts the guide list from most popular to least popular. |
| Published Ascending   | `'published-ascending'`   | Sorts the guide list by by published from old-new.       |
| Published Descending  | `'published-descending'`  | Sorts the guide list by published from new-old.          |

## Guide
Displays a guide, including feedback, dialogs and related guides.

| Type    | Plugin           | Package                     |
| ------- | ---------------- | --------------------------- |
| `guide` | `GuideComponent` | `@humany/widget-components` |

### Properties
| Name                        | Type                                          | Required | Default        | Description                                                      |
| --------------------------- | --------------------------------------------- | -------- | -------------- | ---------------------------------------------------------------- |
| `contactFeedbackLabel`      | `string`                                      | No       | `undefined`    | Label for negative feedback when handover is available.          |
| `contactHeader`             | `string`                                      | No       | `underfined`   | Header for contact list after nagtive feedback.                  |
| `copyActionLabel`           | `string`                                      | No       | `undefined`    | Label for the toolbar copy action button.                        |
| `defaultAnswerVersionLabel` | `string`                                      | No       | `undefined`    | Label for the default answer version.                            |
| `feedbackDirection`         | `Enum<string>` (`'horizontal' \| 'vertical'`) | No       | `'horizontal'` | Rendering direction of the feedback buttons.                     |
| `feedbackHeader`            | `string`                                      | No       | `undefined`    | Header text for feedback.                                        |
| `feedbackRecognitionLabel`  | `string`                                      | No       | `undefined`    | Label to display when feedback has been given.                   |
| `negativeFeedbackLabel`     | `string`                                      | No       | `undefined`    | Label for negative feedback when _**NO**_ handover is available. |
| `positiveFeedbackLabel`     | `string`                                      | No       | `undefined`    | Label for positive feedback.                                     |
| `printActionLabel`          | `string`                                      | No       | `undefined`    | Label for the toolbar print action button.                       |
| `showAnswerVersions`        | `boolean`                                     | No       | `false`        | Whether answer versions should be displayed or not.              |
| `showFeedback`              | `boolean`                                     | No       | `true`         | Whether feedback buttons should be displayed or not.             |
| `showHeader`                | `boolean`                                     | No       | `false`        | Whether the guide header should be shown or not.                 |
| `toolbarFunctionsHeader`    | `string`                                      | No       | `undefined`    | Header for the toolbar functions menu.                           |
| `toolbarFunctionsTooltip`   | `string`                                      | No       | `undefined`    | Tooltip for the toolbar functions menu button.                   |
| `toolbarLanguageHeader`     | `string`                                      | No       | `undefined`    | Header for the toolbar language menu.                            |
| `toolbarLanguageTooltip`    | `string`                                      | No       | `undefined`    | Tooltip for the toolbar language menu button.                    |
| `toolbar`                   | `Toolbar`                                     | No       | `Toolbar`      | Configuration for the guide toolbar.                             |

#### `Toolbar`
| Name                 | Type                              | Required | Default  | Description                                                                            |
| -------------------- | --------------------------------- | -------- | -------- | -------------------------------------------------------------------------------------- |
| `allowCopy`          | `boolean`                         | No       | `false`  | Whether the copy action button should be shown or not.                                 |
| `allowPrint`         | `boolean`                         | No       | `false`  | Whether the print action button should be shown or not.                                |
| `guideCategories`    | `boolean`                         | No       | `false`  | Whether the guide category information should be shown or not.                         |
| `language`           | `boolean`                         | No       | `false`  | Whether the language picker should be shown or not.                                    |
| `picker`             | [`Enum<PickerType>`](#pickertype) | No       | `'none'` | Type of picker for the toolbar actions. Supports `'dropdown'`, `'drawer'` and `'none'` |
| `showFavoriteToggle` | `boolean`                         | No       | `false`  | Whether the favorite toggle button should be shown or not.                             |

### Generic properties
| Name                                                  |
| ----------------------------------------------------- |
| [`FavoriteProperties`](#favoriteproperties)           |
| [`FormProperties`](#formproperties)                   |
| [`LanguageLabelProperties`](#languagelabelproperties) |
| [`MetaDataProperties`](#metadataproperties)           |

### Actions
_Not available_

## Header
Displays a header text.

| Type     | Plugin            | Package                     |
| -------- | ----------------- | --------------------------- |
| `header` | `HeaderComponent` | `@humany/widget-components` |

### Properties
| Name             | Type                 | Required | Default     | Description                        |
| ---------------- | -------------------- | -------- | ----------- | ---------------------------------- |
| `header`         | `string`             | No       | `undefined` | Text to display.                   |
| `maxHeaderWidth` | `string` \| `number` | No       | `'100%'`    | Max width, as CSS length.          |
| `tooltip`        | `string`             | No       | `undefined` | Tooltip text when hovering header. |


### Generic properties
_Not available_

### Actions
_Not available_

## NotificationList
Displays a list of notifications.

| Type                | Plugin                      | Package                     |
| ------------------- | --------------------------- | --------------------------- |
| `notification-list` | `NotificationListComponent` | `@humany/widget-components` |

### Properties
| Name         | Type      | Required | Default | Description                                  |
| ------------ | --------- | -------- | ------- | -------------------------------------------- |
| `category`   | `string`  | Yes      |         | Category ID to display notifications from.   |
| `showHeader` | `boolean` | No       | `true`  | Whether or not a header should be displayed. |


### Generic properties
_Not available_

### Actions
_Not available_

## NotificationRow
Displays a notification row.

| Type               | Plugin                     | Package                     |
| ------------------ | -------------------------- | --------------------------- |
| `notification-row` | `NotificationRowComponent` | `@humany/widget-components` |

### Properties
| Name                    | Type       | Required | Default | Description                                                                                |
| ----------------------- | ---------- | -------- | ------- | ------------------------------------------------------------------------------------------ |
| `allowPaging`           | `boolean`  | No       | `true`  | Whether or not the component should allow to page multiple notifications.                  |
| `closeAriaLabel`        | `string`   | No       | `''`    | The `aria-label` attribute for the close button.                                           |
| `expandAriaLabel`       | `string`   | No       | `''`    | The `aria-label` attribute for the expand button.                                          |
| `expandable`            | `boolean`  | No       | `false` | Whether or not the noticiation body should be able to be expanded.                         |
| `pageNextAriaLabel`     | `string`   | No       | `''`    | The `aria-label` attribute for the next page button.                                       |
| `pagePreviousAriaLabel` | `string`   | No       | `''`    | The `aria-label` attribute for the previous page button.                                   |
| `types`                 | `string[]` | No       | `[]`    | Array of accepted notification types. Possible values: `'top'`, `'middle'` and `'bottom'`. |

### Generic properties
_Not available_

### Actions
_Not available_

## RelatedGuideList
Displays a list of related guides for a particular guide, resolved by the current route data.

| Type                 | Plugin                      | Package                     |
| -------------------- | --------------------------- | --------------------------- |
| `related-guide-list` | `RelatedGuideListComponent` | `@humany/widget-components` |

### Properties
| Name                 | Type      | Required | Default     | Description                                                |
| -------------------- | --------- | -------- | ----------- | ---------------------------------------------------------- |
| `header`             | `string`  | No       | `undefined` | Header text for the guide list.                            |
| `showFavoriteToggle` | `boolean` | No       | `false`     | Whether or not the favorite toggle button should be shown. |
| `tags`               | `boolean` | No       | `boolean`   | Whether or not tags should be shown on each guide.         |

### Generic properties
| Name                                        |
| ------------------------------------------- |
| [`FavoriteProperties`](#favoriteproperties) |
| [`MetaDataProperties`](#metadataproperties) |

### Actions
_Not available_

## RelatedTagList
Displays a list of related tags for a particular guide, resolved by the current route data.

| Type               | Plugin                    | Package                     |
| ------------------ | ------------------------- | --------------------------- |
| `related-tag-list` | `RelatedTagListComponent` | `@humany/widget-components` |

### Properties
| Name     | Type     | Required | Default     | Description                      |
| -------- | -------- | -------- | ----------- | -------------------------------- |
| `header` | `string` | No       | `undefined` | Header text for the tag list.    |
| `route`  | `string` | No       | `'search'`  | Route name for generating links. |


### Generic properties
_Not available_

### Actions
_Not available_

## Search
Displays a search element.

| Type     | Plugin            | Package                     |
| -------- | ----------------- | --------------------------- |
| `search` | `SearchComponent` | `@humany/widget-components` |

### Properties
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

### Generic properties
_Not available_

### Actions
_Not available_

#### `FilterConfig`
| Name            | Type                                   | Description                                                                 |
| --------------- | -------------------------------------- | --------------------------------------------------------------------------- |
| `autoSelect`    | `boolean`                              | Whether or not the first element should be focused when using quick filter. |
| `guideCategory` | `boolean`                              | Whether or not guide categories should be shown/supported.                  |
| `position`      | `Enum<string>` (`'inside' \| 'below'`) | Position of filter badges relative to search field.                         |
| `tag`           | `boolean`                              | Whether or not tags should be shown/supported.                              |

## TabStop
Non-visual component that acts as stop anchor when tabbing.

| Type       | Plugin             | Package                     |
| ---------- | ------------------ | --------------------------- |
| `tab-stop` | `TabStopComponent` | `@humany/widget-components` |

### Properties
| Name       | Type                                | Required | Default     | Description                                                           |
| ---------- | ----------------------------------- | -------- | ----------- | --------------------------------------------------------------------- |
| `position` | `Enum<string>` (`'start' \| 'end'`) | No       | `undefined` | Position, in relation to its tab siblings, the stop anchor is placed. |


### Generic properties
_Not available_

### Actions
_Not available_

## TagList
Displays a list of tags.

| Type       | Plugin             | Package                     |
| ---------- | ------------------ | --------------------------- |
| `tag-list` | `TagListComponent` | `@humany/widget-components` |

### Properties
| Name                     | Type                                 | Required | Default     | Description                                                                                                                          |
| ------------------------ | ------------------------------------ | -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `fallbackOnInitialRoute` | `boolean`                            | No       | `false`     | Whether or not to fallback on the widgets initial route when deselecting the current tag without any other route parameters present. |
| `header`                 | `string`                             | No       | `undefined` | Header text for the tag list.                                                                                                        |
| `rootTagLabel`           | `string`                             | No       | `undefined` | Label on the root tag.                                                                                                               |
| `route`                  | `string`                             | No       | `search`    | Name of route the tag links should target.                                                                                           |
| `showIcons`              | `boolean`                            | No       | `search`    | Whether or not to show icons in tags.                                                                                                |
| `showMatchCount`         | `boolean`                            | No       | `search`    | Whether or not amount of guides in a given tag should be shown.                                                                      |
| `static`                 | `boolean`                            | No       | `false`     | Whether or not to use the static tag end point (`true` = `/tags`, `false` = `/tagsonguides`).                                        |
| `style`                  | `Enum<string>` (`'badge' \| 'pill'`) |          | No          | `'badge'`                                                                                                                            | Generic styling of the tags. |


### Generic properties
_Not available_

### Actions
_Not available_

## WidgetHeader
Displays a widget header, with optional back link and close button.

| Type            | Plugin                  | Package                     |
| --------------- | ----------------------- | --------------------------- |
| `widget-header` | `WidgetHeaderComponent` | `@humany/widget-components` |

### Properties
| Name        | Type                                          | Required | Default     | Description                                                                        |
| ----------- | --------------------------------------------- | -------- | ----------- | ---------------------------------------------------------------------------------- |
| `actions`   | [`{ [key:string]: ActionNode }`](#actionnode) | No       | `{}`        | Object map with `ActionNode`s.                                                     |
| `header`    | `string`                                      | No       | `undefined` | Header text.                                                                       |
| `route`     | `string`                                      | No       | `undefined` | Target route for generating header link. If not defined, no link will be rendered. |
| `tagLine`   | `string`                                      | No       | `undefined` | Tagline text.                                                                      |
| `textAlign` | `string`                                      | No       | `'center'`  | Object map with action keys and display text.                                      |
| `tooltip`   | `string`                                      | No       | `''`        | Tooltip text for header.                                                           |

##### `ActionNode`
| Name       | Type                                 | Description                               |
| ---------- | ------------------------------------ | ----------------------------------------- |
| `label`    | `string`                             | Label for the action.                     |
| `padding`  | `string` \| `number`                 | Padding, as CSS property, for the button. |
| `position` | `Enum<string>` (`'right' \| 'left'`) | Position of the action button.            |
| `size`     | `string` \| `number`                 | Size, as CSS property, for the button.    |
| `symbol`   | [`Symbol`](#symbol)                  | Symbol for the action button.             |
| `type`     | `string`                             | Type of action.                           |


### Generic properties
_Not available_

### Actions
| Name    | Data | Options                                                       | Description                                             |
| ------- | ---- | ------------------------------------------------------------- | ------------------------------------------------------- |
| `back`  | `{}` | _(none)_                                                      | Dispatched when the `'back'` action button is clicked.  |
| `close` | `{}` | [`WidgetHeaderCloseActionData`](#widgetheadercloseactiondata) | Dispatched when the `'close'` action button is clicked. |

##### `WidgetHeaderCloseActionData`
| Name             | Type      | Description                                                     |
| ---------------- | --------- | --------------------------------------------------------------- |
| `preventDefault` | `boolean` | Whether or not the default close behaviour should be prevented. |

## Area
Renders a grid based area containing children.

| Type   | Plugin          | Package                     |
| ------ | --------------- | --------------------------- |
| `area` | `AreaComponent` | `@humany/widget-components` |

### Properties
| Name         | Type                                                  | Required | Default     | Description                                                                                                  |
| ------------ | ----------------------------------------------------- | -------- | ----------- | ------------------------------------------------------------------------------------------------------------ |
| `animation`  | `string`                                              | No       | `undefined` | Animation when rendering.                                                                                    | ; |
| `columns`    | `number`                                              | No       | `1`         | Amount of grid columns.                                                                                      | ; |
| `fullScreen` | `boolean`                                             | No       | `false`     | Used if `mode` is set to `'drawer'`. Whether the drawer should take up the entire screen or just part of it. | ; |
| `header`     | `string`                                              | No       | `undefined` | Used if `mode` is set to `'drawer'`. Header displayed at the top of the drawer.                              | ; |
| `mode`       | `Enum<string>` (`'static' \| 'drawer' \| 'dropdown'`) | No       | `'static'`  | Rendering mode.                                                                                              | ; |
| `scrollable` | `boolean`                                             | No       | `false`     | Whether or not the area should be scrollable.                                                                | ; |
| `trigger`    | [`Trigger`](#trigger)                                 | No       | `undefined` | Used if `mode` is set to `'drawer'` or `'dropdown'`. Settings for button to trigger area.                    | ; |

##### `Trigger`
| Name     | Type                | Description                               |
| -------- | ------------------- | ----------------------------------------- |
| `label`  | `string`            | A label to be displayed for the trigger.  |
| `size`   | `number`            | Size for the symbol, if defined.          |
| `symbol` | [`Symbol`](#symbol) | A symbol to be displayed for the trigger. |


### Generic properties
_Not available_

### Actions
_Not available_

## ImageLink
Displays an image with support for navigation.

| Type         | Plugin               | Package                     |
| ------------ | -------------------- | --------------------------- |
| `image-link` | `ImageLinkComponent` | `@humany/widget-components` |

### Properties
| Name        | Type     | Required | Default     | Description                                                                      |
| ----------- | -------- | -------- | ----------- | -------------------------------------------------------------------------------- |
| `ariaLabel` | `string` | No       | `undefined` | Label applied to the link arialabel HTML attribute and image alt HTML attribute. |
| `image`     | `string` | No       | `undefined` | Image to display. Used as src on a `<img/>`-element.                             |
| `route`     | `string` | No       | `undefined` | Route to navigate to on click.                                                   |


### Generic properties
_Not available_

### Actions
_Not available_

## Settings
Displays settings for the widget.

| Type       | Plugin              | Package                     |
| ---------- | ------------------- | --------------------------- |
| `settings` | `SettingsComponent` | `@humany/widget-components` |

### Properties
| Name                   | Type      | Required | Default     | Description                                                |
| ---------------------- | --------- | -------- | ----------- | ---------------------------------------------------------- |
| `allowLanguages`       | `boolean` | No       | `false`     | Whether or not to allow swapping between widget languages. |
| `languagePickerHeader` | `string`  | No       | `undefined` | Header for the language list.                              |

### Generic properties
_Not available_

### Actions
_Not available_

# Generic Component Property Types

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
| Name            | Type                                                             | Description                                                   |
| --------------- | ---------------------------------------------------------------- | ------------------------------------------------------------- |
| `format`        | `Enum<string>` (`'hh:mm' \| 'yyyy-mm-dd' \| 'yyyy-mm-dd hh:mm'`) | Formatting for dates.                                         |
| `modifiedBy`    | `string`                                                         | Whether or not to display which editor last modified a guide. |
| `publishedBy`   | `string`                                                         | Whether or not to display which editor published a guide.     |
| `showModified`  | `boolean`                                                        | Whether or not to display when guide was last modified.       |
| `showPublished` | `boolean`                                                        | Whether or not to display when guide was published.           |

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

Supported SVG-symbols:  `'search'`, `'clear'`, `'close'`, `'back'`, `'alert'`, `'send'`, `'chat'`, `'agent'`, `'minimize'`, `'sorting'`, `'copy'`, `'print'`, `'language'`, `'information'`, `'options'`, `'caret-right'`, `'caret-left'`, `'caret-up'`, `'caret-down'`, `'chat-new'`, `'star-empty'`, `'star-filled'`, `'cog-wheel'`.

Font Awesome Version: 4.7.

| Name      | Type                                               | Description                                |
| --------- | -------------------------------------------------- | ------------------------------------------ |
| `content` | `string`                                           | Symbol content.                            |
| `type`    | `Enum<string>` (`'Uri' \| 'Svg' \| 'FontAwesome'`) | Type of symbol. Supported Svg-symbols are: |
