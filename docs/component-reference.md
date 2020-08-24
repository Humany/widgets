# Component Reference
The following document describes all components available in the default distribution.

## BackLink
**Type:** `back-link`
**Plugin:** `BackLinkComponent` (`@humany/widget-components`)

Displays a link which when clicked navigates one step back on the widget's router.

#### Properties
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`label`|`String`|No|`''`|The text to be displayed.|

#### Actions

|Name|Data|Options|Description|
|----|----|-------|-----------|
|`click`|`{}`|_(none)_|Dispatched when the link is clicked.|

## Breadcrumbs
**Type:** `breadcrumbs`
**Plugin:** `BreadcrumbsComponent` (`@humany/widget-components`)

Displays breadcrumbs based on a static hierarchy. Be aware this component is opiniated regarding the hierarchy of the routes, and may not support custom routing configurations.

#### Properties
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`routes`|`BreadcrumbRoutes`|No|See `BreadcrumbRoutes`|Map of routes to be used by the component.|
|`guideCategoryRootLabel`|`String`|No|`''`|Label for the root category.|
|`mode`|`'list'\|'compact'`|No|`'list'`|Rendering mode of the component.|
|`tagLabel`|`String`|No|`''`|Label to be used when indicating selected tags in the trail. Supports replace for `{{tag}}`.|
|`phraseLabel`|`String`|No|`''`|Label to be used when indicating the current search phrase in the trail. Supports replace for `{{phrase}}`.|

#### Actions
_Not available_

#### `BreadcrumbRoutes`
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`initial`|`String`|No|`index`|What route to be treated as the initial when rendering the component.|
|`search`|`String`|No|`search`|Target route for search.|
|`guideCategory`|`String`|No|`browse`|Target route for categories.|
|`contactCategory`|`String`|No|`contact`|Target route for contact methods.|

## CloseButton
**Type:** `close-button`
**Plugin:** `CloseButtonComponent` (`@humany/widget-components`)

Displays a close button which when clicked dispatches an action.

#### Properties
_Not available_

#### Actions

|Name|Data|Options|Description|
|----|----|-------|-----------|
|`close`|`{}`|`CloseButtonActionData`|Dispatched when the button is clicked.|


##### `CloseButtonActionData`
|Name|Type|Description|
|----|----|-----------|
|`preventDefault`|`Boolean`|Whether or not the default close behaviour should be prevented.|

## ContactLink
**Type:** `contact-link`
**Plugin:** `ContactLinkComponent` (`@humany/widget-components`)

Displays a link which can be targeted to a specific route name or other widget within the same implementation.

#### Properties
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`widget`|`String`|Yes (if `route` is undefined)|`undefined`|Name of widget the link should target. This value is used if `route` is undefined.|
|`route`|`String`|No|`undefined`|Name of route the link should target.|
|`mode`|`'large'`\|`'compact'`|No|`'large'`|The rendering mode of the link.|
|`iconSize`|`'large'`\|`'small'`|No|`'large'`|The size of the icon.|
|`symbol`|`Symbol`|`No`|`undefined`|A symbol to be displayed for the link.|
| `descriptionLabel`|`String`|No|`undefined`|A description text to be displayed for the link.|
|`label`|`String`|No|`''`|The text to be displayed for the link.|
|`textAlign`|`'center'`\|`'right'`|No|`'center'` if `mode==='large'`, `'right'` if `mode==='compact'`.|The text align for the link.|

#### Actions
_Not available_

## ContactList
**Type:** `contact-list`
**Plugin:** `ContactListComponent` (`@humany/widget-components`)

Displays a list of contact methods, with an optional deflection guide list.

#### Properties
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`deflectionHeader`|`String`|No|`undefined`|Header text for deflection list.|
|`deflection`|`{ [contactCategoryId: string]: string[] }`|No|`{}`|Map between contact method categories and guide categories to fetch data for.|
|`deflectionPageSize`|`Number`|No|`5`|Maximun number of guides to fetch per category.|
|`routes`|`ContactListRoutes`|No|See `ContactListRoutes`|Map of routes to be used by the component.|


#### Actions
_Not available_

#### `ContactListRoutes`
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`contactCategory`|`String`|No|`contact`|Target route for contact methods.|

## ContactMethod
**Type:** `contact-method`
**Plugin:** `ContactMethodComponent` (`@humany/widget-components`)

Displays a contact method.

#### Properties
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`id`|`String`|Yes||ID of contact method to display. The contact method must be part of the current projection.|
|`multilineForm`|`Boolean`|No|`true`|Whether the form, if present, should render some components on separate lines or not.|
|`fileUploadHeader`|`String`|No|`undefined`|Header text for file upload components in the form.|
|`fileSizeErrorLabel`|`String`|No|`'Attached file exceeds maximum file size.'`|Error text to display if an attached file exceeds the maximum.|
|`submitButtonLabel`|`String`|No|`'Submit'`|Text for submit button on form.|
|`validationHeader`|`String`|No|`undefined`|Header text for validation summary.|

#### Actions
_Not available_

## Conversation
**Type:** `conversation`
**Plugin:** `ConversationComponent` (`@humany/widget-conversation`)

Displays a conversational component.

#### Properties
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`providers`|`String[]`|No|`[]`|List of provider keys for the component.|
|`loading`|`Boolean`|No|`false`|Whether the conversation is currently loading data or not.|
|`inputPlaceholder`|`String`|No|`undefined`|The placeholder text of the input element.|
|`inputHidden`|`Boolean`|No|`false`|Whether the input element should be hidden or not.|
|`inputDisabled`|`Boolean`|No|`false`|Whether the input element should be disabled or not.|
|`userLabel`|`String`|No|`''`|Name of the use in the conversation.|
|`avatarSize`|`String`\|`Number`|No|`32px`|Size, as CSS `width` property, of the agent's avatar.

#### Actions

|Name|Data|Options|Description|
|----|----|-------|-----------|
|`user-submit`|`{ text: String }`|_(none)_|Dispatched when the user submits a text.|
|`user-typing`|`{ textLength: Number }`|_(none)_|Dispatched when the user is typing.|
|`form`|`FormActionData`|_(none)_|Dispatched when a form is submitted.|
|`action`|`{ actionKey: String }`|_(none)_|Dispatched when an inner action of a conversational message is dispatched.|

##### `FormActionData`
|Name|Type|Description|
|----|----|-----------|
|`data`|`FormData`|An object representing a form. See `@humany/widget-forms` for more information.|
|`actionKey`|`String`|The action key triggering the action. normally `'submit'`.|
|`formKey`|`String`|The unique key for the form.|

## Copyright
**Type:** `copyright`
**Plugin:** `CopyrightComponent` (`@humany/widget-components`)

Displays a copyright sign.

#### Properties
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`mode`|`'compact'`\|`'large'`|No|`'compact'`|A copyright sign.|

#### Actions
_Not available_

## EmbeddedWidget
**Type:** `embedded-widget`
**Plugin:** `EmbeddedWidgetComponent` (`@humany/widget-components`)

Displays an embedded inline widget.

#### Properties
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`widget`|`String`|Yes||Name of widget to render. The widget must be in the same implementation.|

## GuideCategoryBrowser
**Type:** `guide-category-browser`
**Plugin:** `GuideCategoryBrowserComponent` (`@humany/widget-components`)

Displays a category browser for a list of categories, rendered as a grid.

#### Properties
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`guideListHeader`|`String`|No|`undefined`|The text used for the header of most the common questions box.|
|`guideListCategoryHeader`|`String`|No|`''`|The text used for the header of most the common questions box, for a particular category.|
|`fetchGuidesLabel`|`String`|No|`undefined`|The text used for the link to fetch more guides.|
|`categoryLinkLabel`|`String`|No|`undefined`|The text used for link to display more guides in subcategory.|
|`pageSize `|`String`|No|`10`|Number of guides to fetch when paginating.|
|`columns`|`Number`|No|`null`|Number of columns each item should be repeated.|
|`routes`|`GuideCategoryBrowser`|No|See `GuideCategoryBrowserRoutes`|Route map used for generating links.|

#### `GuideCategoryBrowser`
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`guide`|`String`|No|`guide`|Route used to generate links when navigating to a guide.|

#### Actions
_Not available_

## GuideCategoryDropdown
**Type:** `guide-category-dropdown`
**Plugin:** `GuideCategoryDropdownComponent` (`@humany/widget-components`)

Displays a list of guide categories as a drop down list.

#### Properties
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`matchCurrentSearchPhrase`|`Boolean`|No|`false`|Whether or not the component should be reactive to the search phrase parameter of the current route data.|
|`rootCategoryHeader`|`String`|No|`undefined`|Display name of the root category.|
|`route`|`String`|No|`'search'`|Target route name when generating guide links.|
|`categoryAriaLabel`|`String`|No|`''`|The `aria-label` attribute for categories.|
|`activeCategoryAriaLabel`|`String`|No|`''`|The `aria-label` attribute for selected categories.|
|`showMatchCount`|`Boolean`|No|`false`|Whether or not amount of guides in a given category should be shown.|

#### Actions
_Not available_

## GuideCategoryList
**Type:** `guide-category-list`
**Plugin:** `GuideCategoryListComponent` (`@humany/widget-components`)

Displays a list of guide categories.

#### Properties
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`matchCurrentSearchPhrase`|`Boolean`|No|`false`|Whether or not the component should be reactive to the search phrase parameter of the current route data.|
|`route`|`String`|No|`'search'`|Target route name when generating guide links.|
|`columns`|`Number`|No|`null`|Number of columns each item should be repeated.|
|`badgeSize`|`'large'`\|`'small'`|No|`'large`|Size of category badges.|
|`showDescriptions`|`Boolean`|No|`true`|Whether category descriptions should be rendered or not.|
|`direction`|`'vertical'`\|`'horizontal'`|No|`'vertical'`|The rendering mode of the list.|
|`categoryAriaLabel`|`String`|No|`''`|The `aria-label` attribute for categories.|
|`activeCategoryAriaLabel`|`String`|No|`''`|The `aria-label` attribute for selected categories.|

#### Actions
_Not available_

## GuideCategoryTree
**Type:** `guide-category-tree`
**Plugin:** `GuideCategoryTreeComponent` (`@humany/widget-components`)

Displays a nested hierarchical list of guide categories.

#### Properties
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`rootCategoryHeader`|`String`|No|`undefined`|Display name of the root category.|
|`route`|`String`|No|`'search'`|Target route name when generating guide links.|
|`categoryAriaLabel`|`String`|No|`''`|The `aria-label` attribute for categories.|
|`activeCategoryAriaLabel`|`String`|No|`''`|The `aria-label` attribute for selected categories.|

#### Actions
_Not available_

## GuideList
**Type:** `guide-list`
**Plugin:** `GuideListComponent` (`@humany/widget-components`)

Displays a list of guide links.

#### Properties
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`categoryLinkLabel`|`String`|No|`undefined`|Label for link to show more guides.|
|`fetchGuidesLabel`|`String`|No|`undefined`|Label for link to fetch more guides.|
|`routes`|`GuideListRoutes`|No|See `GuideListRoutes`|Route names for generating links.|
|`matchCurrentGuideCategory`|`Boolean`|No|`false`|Whether or not the component should be reactive to the guide category parameter of the current route data|
|`matchCurrentSearchPhrase`|`Boolean`|No|`false`|Whether or not the component should be reactive to the search phrase parameter of the current route data|
|`matchCurrentTag`|`Boolean`|No|`false`|Whether or not the component should be reactive to the tag parameter of the current route data|
|`allowPaging`|`Boolean`|No|`false`|Whether ot not the list should allow paging.|
|`pageSize`|`Number`|No|`5`|Number of guides to fetch per page.|
|`searchResultsLabel`|`String`|No|`''`||
|`searchResultsEmptyLabel`|`String`|No|`''`||
|`categoryFallbackHeader`|`String`|No|`''`||
|`rootLabel`|`String`|No|`''`||
|`categoryRootLabel`|`String`|No|`''`||
|`forPhraseLabel`|`String`|No|`''`||
|`noMatchesLabel`|`String`|No|`''`||
|`inCategoryLabel`|`String`|No|`''`||
|`withTagLabel`|`String`|No|`''`||

#### Actions
_Not available_

#### `GuideListRoutes`
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`page`|`String`|No|`browse`|Target route for page links.|
|`guide`|`String`|No|`guide`|Target route for guides.|

## Guide
**Type:** `guide`
**Plugin:** `GuideComponent` (`@humany/widget-components`)

Displays a guide, including feedback, dialogs and related guides.

#### Properties
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`feedbackHeader`|`String`|No|`undefined`|Header text for feedback.|
|`feedbackDirection`|`'horizontal'`\|`'vertical'`|No|`'horizontal'`|Rendering direction of the feedback buttons.|
|`positiveFeedbackLabel`|`String`|No|`undefined`|Label for positive feedback.|
|`contactFeedbackLabel`|`String`|No|`undefined`|Label for negative feedback when handover is available.|
|`negativeFeedbackLabel`|`String`|No|`undefined`|Label for negative feedback when _**NO**_ handover is available.|
|`showFeedback`|`Boolean`|No|`true`||
|`showRelatedGuides`|`Boolean`|No|`true`||
|`contactHeader`|`String`|No|`underfined`|Header for contact list after nagtive feedback.|
|`multilineForm`|`Boolean`|No|`true`|Whether the form, if present, should render some components on separate lines or not.|
|`fileUploadHeader`|`String`|No|`undefined`|Header text for file upload components in the form.|
|`fileSizeErrorLabel`|`String`|No|`'Attached file exceeds maximum file size.'`|Error text to display if an attached file exceeds the maximum.|
|`submitButtonLabel`|`String`|No|`'Submit'`|Text for submit button on form.|
|`validationHeader`|`String`|No|`undefined`|Header text for validation summary.|


#### Actions
_Not available_

## Header
**Type:** `header`
**Plugin:** `HeaderComponent` (`@humany/widget-components`)

Displays a header text.

#### Properties
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`header`|`String`|No|`undefined`|Text to display.|
|`tooltip`|`String`|No|`undefined`|Tooltip text when hovering header.|
|`maxHeaderWidth`|`String`\|`Number`|No|`'100%'`|Max width, as CSS length.|


#### Actions
_Not available_

## NotificationList
**Type:** `notification-list`
**Plugin:** `NotificationListComponent` (`@humany/widget-components`)

Displays a list of notifications.

#### Properties
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`category`|`String`|Yes||Category ID to display notifications from.|
|`showHeader`|`Boolean`|No|`true`|Whether or not a header should be displayed.|


#### Actions
_Not available_

## NotificationRow
**Type:** `notification-row`
**Plugin:** `NotificationRowComponent` (`@humany/widget-components`)

Displays a notification row.

#### Properties
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`types`|`String[]`|No|`[]`|Array of accepted notification types. Possible values: `'top'`, `'middle'` and `'bottom'`.|
|`allowPaging`|`Boolean`|No|`true`|Whether or not the component should allow to page multiple notifications.|
|`expandable`|`Boolean`|No|`false`|Whether or not the noticiation body should be able to be expanded.|
|`pageNextAriaLabel`|`String`|No|`''`|The `aria-label` attribute for the next page button.|
|`pagePreviousAriaLabel`|`String`|No|`''`|The `aria-label` attribute for the previous page button.|
|`closeAriaLabel`|`String`|No|`''`|The `aria-label` attribute for the close button.|
|`expandAriaLabel`|`String`|No|`''`|The `aria-label` attribute for the expand button.|

#### Actions
_Not available_

## RelatedGuideList
**Type:** `related-guide-list`
**Plugin:** `RelatedGuideListComponent` (`@humany/widget-components`)

Displays a list of related guides for a particular guide, resolved by the current route data.

#### Properties
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`header`|`String`|No|`undefined`|Header text for the guide list.|


#### Actions
_Not available_

## RelatedTagList
**Type:** `related-tag-list`
**Plugin:** `RelatedTagListComponent` (`@humany/widget-components`)

Displays a list of related tags for a particular guide, resolved by the current route data.

#### Properties
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`header`|`String`|No|`undefined`|Header text for the tag list.|
|`route`|`String`|No|`'search'`|Route name for generating links.|


#### Actions
_Not available_

## Search
**Type:** `search`
**Plugin:** `SearchComponent` (`@humany/widget-components`)

Displays a search element.

#### Properties
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`placeholder`|`String`|No|`undefined`|Placeholder text for the input element.|
|`searchButtonLabel`|`String`|No|`undefined`|Label for the search button.|
|`clearButtonLabel`|`String`|No|`undefined`|Label for the reset button.|
|`showSearchButton`|`Boolean`|No|`false`|Whether or not a search button should be displayed.|
|`showClearButton`|`Boolean`|No|`false`|Whether or not a reset button should be displayed.|
|`route`|`String`|No|`'search'`|Route name for generating links.|
|`role`|`String`|No|`'search'`|The `role` attribute for the input element.|


#### Actions
_Not available_

## TabStop
**Type:** `tab-stop`
**Plugin:** `TabStopComponent` (`@humany/widget-components`)

Non-visual component that acts as stop anchor when tabbing.

#### Properties
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`position`|`'start'`\|`'end'`|No|`undefined`|Position, in relation to its tab siblings, the stop anchor is placed.|


#### Actions
_Not available_

## TagList
**Type:** `tag-list`
**Plugin:** `TagListComponent` (`@humany/widget-components`)

Displays a list of tags.

#### Properties
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`header`|`String`|No|`undefined`|Header text for the tag list.|
|`route`|`String`|No|`search`|Name of route the links should target.|


#### Actions
_Not available_

## WidgetHeader
**Type:** `widget-header`
**Plugin:** `WidgetHeaderComponent` (`@humany/widget-components`)

Displays a widget header, with optional back link and close button.

#### Properties
|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`header`|`String`|No|`undefined`|Header text.|
|`tagLine`|`String`|No|`undefined`|Tagline text.|
|`tooltip`|`String`|No|`''`|Tooltip text for header.|
|`actions`|`Object`|No|`{}`|Object map with `ActionNode`s.|
|`textAlign `|`String`|No|`'center'`|Object map with action keys and display text.|
|`route `|`String`|No|`undefined`|Target route for generating header link. If not defined, no link will be rendered.|

##### `ActionNode`
|Name|Type|Description|
|----|----|-----------|
|`type`|`String`|Type of action.|
|`label`|`String`|Label for the action.|
|`position`|`Enum<String>` (`'right'\|'left'`)|Position of the action button.|
|`symbol`|`Symbol`|Symbol for the action button.|
|`size`|`String` \| `Number`|Size, as CSS property, for the button.|
|`padding`|`String` \| `Number`|Padding, as CSS property, for the button.|


#### Actions
|Name|Data|Options|Description|
|----|----|-------|-----------|
|`close`|`{}`|`WidgetHeaderCloseActionData`|Dispatched when the `'close'` action button is clicked.|
|`back`|`{}`|_(none)_|Dispatched when the `'back'` action button is clicked.|

##### `WidgetHeaderCloseActionData`
|Name|Type|Description|
|----|----|-----------|
|`preventDefault`|`Boolean`|Whether or not the default close behaviour should be prevented.|
