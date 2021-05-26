# Guide

Displays a guide, including feedback, dialogs and related guides.

| Type    | Plugin           | Package                     |
| ------- | ---------------- | --------------------------- |
| `guide` | `GuideComponent` | `@humany/widget-components` |

## Properties

| Name                        | Type                         | Required | Default        | Description                                                                                                                                                                                                                                                                                            |
| --------------------------- | ---------------------------- | -------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `backButtonLabel`           | `string`                     | No       | `undefined`    | Label for embedded back button. Only available as a child to a [GuideList](/component-reference/guide-list.md), [GuideCategoryBrowser](/component-reference/guide-category-browser.md) or [ContactList](/component-reference/contact-list.md) with `accordion` or `deflectionAccordion` set to `true`. |
| `contactFeedbackLabel`      | `string`                     | No       | `undefined`    | Label for negative feedback when handover is available.                                                                                                                                                                                                                                                |
| `contactHeader`             | `string`                     | No       | `underfined`   | Header for contact list after nagtive feedback.                                                                                                                                                                                                                                                        |
| `copyActionLabel`           | `string`                     | No       | `undefined`    | Label for the toolbar copy action button.                                                                                                                                                                                                                                                              |
| `defaultAnswerVersionLabel` | `string`                     | No       | `undefined`    | Label for the default answer version.                                                                                                                                                                                                                                                                  |
| `feedbackDirection`         | `'horizontal' \| 'vertical'` | No       | `'horizontal'` | Rendering direction of the feedback buttons.                                                                                                                                                                                                                                                           |
| `feedbackHeader`            | `string`                     | No       | `undefined`    | Header text for feedback.                                                                                                                                                                                                                                                                              |
| `feedbackRecognitionLabel`  | `string`                     | No       | `undefined`    | Label to display when feedback has been given.                                                                                                                                                                                                                                                         |
| `negativeFeedbackLabel`     | `string`                     | No       | `undefined`    | Label for negative feedback when _**NO**_ handover is available.                                                                                                                                                                                                                                       |
| `positiveFeedbackLabel`     | `string`                     | No       | `undefined`    | Label for positive feedback.                                                                                                                                                                                                                                                                           |
| `printActionLabel`          | `string`                     | No       | `undefined`    | Label for the toolbar print action button.                                                                                                                                                                                                                                                             |
| `showAnswerVersions`        | `boolean`                    | No       | `false`        | Whether answer versions should be displayed or not.                                                                                                                                                                                                                                                    |
| `showFeedback`              | `boolean`                    | No       | `true`         | Whether feedback buttons should be displayed or not.                                                                                                                                                                                                                                                   |
| `showHeader`                | `boolean`                    | No       | `false`        | Whether the guide header should be shown or not.                                                                                                                                                                                                                                                       |
| `toolbarFunctionsHeader`    | `string`                     | No       | `undefined`    | Header for the toolbar functions menu.                                                                                                                                                                                                                                                                 |
| `toolbarFunctionsTooltip`   | `string`                     | No       | `undefined`    | Tooltip for the toolbar functions menu button.                                                                                                                                                                                                                                                         |
| `toolbarLanguageHeader`     | `string`                     | No       | `undefined`    | Header for the toolbar language menu.                                                                                                                                                                                                                                                                  |
| `toolbarLanguageTooltip`    | `string`                     | No       | `undefined`    | Tooltip for the toolbar language menu button.                                                                                                                                                                                                                                                          |
| `toolbar`                   | `Toolbar`                    | No       | `Toolbar`      | Configuration for the guide toolbar.                                                                                                                                                                                                                                                                   |

### `Toolbar`

| Name                 | Type                                                               | Required | Default  | Description                                                                            |
| -------------------- | ------------------------------------------------------------------ | -------- | -------- | -------------------------------------------------------------------------------------- |
| `allowCopy`          | `boolean`                                                          | No       | `false`  | Whether the copy action button should be shown or not.                                 |
| `allowPrint`         | `boolean`                                                          | No       | `false`  | Whether the print action button should be shown or not.                                |
| `guideCategories`    | `boolean`                                                          | No       | `false`  | Whether the guide category information should be shown or not.                         |
| `language`           | `boolean`                                                          | No       | `false`  | Whether the language picker should be shown or not.                                    |
| `picker`             | [`PickerType`](/component-reference/generic-properties#pickertype) | No       | `'none'` | Type of picker for the toolbar actions. Supports `'dropdown'`, `'drawer'` and `'none'` |
| `showFavoriteToggle` | `boolean`                                                          | No       | `false`  | Whether the favorite toggle button should be shown or not.                             |

## Generic properties

| Name                                                                                         |
| -------------------------------------------------------------------------------------------- |
| [`FavoriteProperties`](/component-reference/generic-properties#favoriteproperties)           |
| [`FormProperties`](/component-reference/generic-properties#formproperties)                   |
| [`LanguageLabelProperties`](/component-reference/generic-properties#languagelabelproperties) |
| [`MetaDataProperties`](/component-reference/generic-properties#metadataproperties)           |

## Actions

_Not available_
