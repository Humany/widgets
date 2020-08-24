# `@humany/widget-tracking`
The Tracking Platform provides an API for tracking and listening to events and user interactions in Humany widgets. Version 2 of this package supports ACE One Widget available in version 5 of the ACE Knowledge widget framework.

## Accessing the API
Inside a plugin, pass the current `Container` instance to the static `getInstance()` method to access the global instance of `TrackingPlatform`. 

```javascript
import { TrackingPlatform } from '@humany/widget-tracking';

const MyTrackingPlugin = async (container) => {
  const platform = await TrackingPlatform.getInstance(container);
};
```

## Registering an analyzer
In order to actions events at least one analyzer must be registered on the `TrackingPlatform` instance. Import `GridWidgetAnalyzer` and register it with a custom key. Make sure the key is unique to avoid conflicts with existing analyzers.

```javascript
import { TrackingPlatform, GridWidgetAnalyzer } from '@humany/widget-tracking';
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
  location: Location
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
* __guide__: Guide which feedback was given to
* __categories__: Categories which the guide belongs to (only avaible in floating widgets)
* __feedbackType__: Type of feedback which was given
* __location__: Current location

#### Response:
```typescript
{
  guide: GuideItem,
  categories: CategoryItem[],  // Only available for floating widgets
  feedbackType: string,
  location: Location
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
* __phrase__: Search phrase
* __hits__: Number of hits displayed to user when search was made
* __totalHits__: Total number of hits search generated
* __location__: Current location

#### Response:
```typescript
{
  phrase: string,
  hits: number,
  totalHits: number,
  location: Location
}
```

### `SearchResultClick`
Emitted when a search result is clicked on.

Provides the following data:
* __position__: Position of the search result clicked on among the search result list.
* __guide__: Guide clicked on
* __location__: Current location

#### Response:
```typescript
{
  position: number,
  guide: GuideItem,
  location: Location
}
```

#### `ContactMethodOffered`
Emitted when contact methods is offered but not yet entered,

```typescript
{
  contactMethods: {
    id: string;
    title: string;
    type: string;
  }[]
}
```

#### `ContactMethodValidate`
Emitted when a contact method is validated but not yet completed,

```typescript
{
  contactMethod: {
    id: string;
    title: string;
    type: string;
  },
  from: {
    type: string;
    data?: { [key: string]: any };
  };
  valid: boolean;
}
```

#### `Navigate`
Emitted on route change

```typescript
{
  location: Location,
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