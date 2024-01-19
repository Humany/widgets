# Tracking Platform for ACE Knowledge widgets

The Tracking Platform provides an API for tracking and listening to events and user interactions in Humany widgets. Version 2 of this package supports ACE One Widget available in version 5 of the ACE Knowledge widget framework.

## Accessing the API

Inside a plugin, pass the current `Container` instance to the static `getInstance()` method to access the global instance of `TrackingPlatform`.

```javascript
import { TrackingPlatform } from "@telia-ace/widget-tracking";

const MyTrackingPlugin = async (container) => {
  const platform = await TrackingPlatform.getInstance(container);
};
```

## Registering an analyzer

In order to actions events at least one analyzer must be registered on the `TrackingPlatform` instance. Import `GridWidgetAnalyzer` and register it with a custom key. Make sure the key is unique to avoid conflicts with existing analyzers.

```javascript
import {
  TrackingPlatform,
  GridWidgetAnalyzer,
} from "@telia-ace/widget-tracking";
```

```
platform.registerAnalyzer(
  'my-analyzer',
  [GridWidgetAnalyzer],
  ({ type, resolve }) => {
    resolve().then((data) => {
      console.log(`action emitted: ${type}`, data);
    });
  },
);
```

**Note:** Some actions _may_ result in additional requests being made, which in turn could result in extra costs depending on your subscription level. For this reason it's recommended to check for the `type` and only resolve the data for relevant actions.

## `GridWidgetAnalyzer`

The `GridWidgetAnalyzer` is the default analyzer for ACE One Widgets (`GridWidget`). It exposes the following actions:

### `WidgetOpen`

Emitted when widget is opened. Provides the location object which contains the current route name and params.

#### Response:

```typescript
{
  location: Location;
}
```

### `WidgetClose`

Emitted when widget is closed.

#### Response:

```typescript
{
    location: Location,
    guide: {
      id: number | undefined,     // Only available for bot widget
      title: string | undefined,  // Only available for bot widget
    },
}
```

### `ReadGuide`

Emitted when a guide is opened.

Provides the current guide.

#### Response:

```typescript
{
  guide: GuideItem,
  categories: CategoryItem[],  // Only available for floating widgets
  location: Location,
}
```

### `FeedbackGiven`

Emitted when a feedback is given to a guide.

Provides the following data:

- **guide**: Guide which feedback was given to
- **categories**: Categories which the guide belongs to (only avaible in floating widgets)
- **feedbackType**: Type of feedback which was given
- **location**: Current location

#### Response:

```typescript
{
  guide: GuideItem,
  categories: CategoryItem[],  // Only available for floating widgets
  feedbackType: string,
  location: Location,
}
```

### `ContactMethodEnter`

Emitted when a contact method is opened, such as an email form.

Provides the contact method and the current location.

#### Response:

```typescript
{
  contactMethod: any,
  location: Location,
}
```

### `ContactMethodComplete`

Emitted when a contact method is submitted.

Provides the contact method and the current location.

#### Response:

```typescript
{
  contactMethod: any,
  location: Location,
}
```

### `Search`

Emitted when a search has been made.

Provides the following data:

- **phrase**: Search phrase
- **hits**: Number of hits displayed to user when search was made
- **totalHits**: Total number of hits search generated
- **location**: Current location

#### Response:

```typescript
{
  phrase: string,
  hits: number,
  totalHits: number,
  location: Location,
}
```

### `SearchResultClick`

Emitted when a search result is clicked on.

Provides the following data:

- **position**: Position of the search result clicked on among the search result list.
- **guide**: Guide clicked on
- **location**: Current location

#### Response:

```typescript
{
  position: number,
  guide: GuideItem,
  location: Location,
}
```

#### `ContactMethodOffered`

Emitted when contact methods is offered but not yet entered,

```typescript
{
  contactMethods: {
    id: string,
    title: string,
    type: string,
  },
  [],
}
```

#### `ContactMethodValidate`

Emitted when a contact method is validated but not yet completed,

```typescript
{
  contactMethod: {
    id: string,
    title: string,
    type: string,
  },
  from: {
    type: string,
    data?: { [key: string]: any },
  },
  valid: boolean,
}
```

#### `Navigate`

Emitted on route change

```typescript
{
  location: Location,
}
```

### `SecondaryButtonClick`

Emitted when clicking the help button.

#### Response:

```typescript
{
  location: Location,
}
```

### `ButtonListItemClick`

Emitted when clicking a button in list (bot).

#### Response:

```typescript
{
  id: number,
  label: string,
}
```

### `LinkListItemClick`

Emitted when clicking an item in list (bot).

#### Response:

```typescript
{
  label: string,
  option: string,
}
```

### `ContactMethodListItemClick`

Emitted when clicking a contact item in list (bot).

#### Response:

```typescript
{
  contactMethod: {
    id: string,
    title: string,
  },
}
```

### `GuideListItemClick`

Emitted when clicking a guide item in list (floating, inline & portal).

#### Response:

```typescript
{
  guide: {
    id: string,
    title: string,
  },
}
```

### `ContactListItemClick`

Emitted when clicking a contact item in list (floating, inline & portal).

#### Response:

```typescript
{
  contactMethod: {
    id: string,
    title: string,
  },
}
```

### `ConversationMessage`

Emitted when sending a message.

#### Response:

```typescript
{
  sender: string; // agent, user, system
}
```

### `ContactLinkClick`

Emitted when clicking a contact link.

#### Response:

```typescript
{
  location: Location,
  guide: {
    id: string,
    title: string,
  },
}
```

### `FeedbackGivenBot`

Emitted when giving feedback in bot dialog (bot).

#### Response:

```typescript
{
   feedbackResponse: string
    guide: {
      id: number,
      title: string,
    },
}
```

### `GuideCategoryListItemClicked`

Emitted when clicking a guide category item in a list.

#### Response:

```typescript
{
  id: string,
  title: string,
}
```

### `HttpClientError`

Emitted when an error occurrs in the httpClinet.

#### Response:

```typescript
{
  location: string,
  message: string,
  error: any,
}
```

### Types

```typescript
GuideItem {
  id: number;
  title: String;
}
```

```typescript
CategoryItem {
  id: number;
  name: String;
}
```

```typescript
Location {
  name: string;
  params: { [key: string]: string };
}
```

```typescript
WidgetOpenResponse {
  location: Location;
}
```

```typescript
ReadGuideResponse {
  guide: GuideItem;
  categories: CategoryItem[]; // (for floating widgets only)
  location: Location;
}
```

```typescript
FeedbackGivenResponse {
  guide: GuideItem;
  categories: CategoryItem[]; // (for floating widgets only)
  feedbackType: string;
  location: Location;
}
```

```typescript
SearchResponse {
  phrase: string;
  hits: number;
  location: Location;
}
```

```typescript
SearchResultClickResponse {
  position: number;
  guide: GuideItem;
  location: Location;
}
```

```typescript
ContactMethodEnterResponse {
  contactMethod: any;
  location: Location;
}
```

```typescript
ContactMethodCompleteResponse {
  contactMethod: any;
  location: Location;
}
```
