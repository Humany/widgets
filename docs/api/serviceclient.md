# @humany/serviceclient

The Service Client provides an API for interacting with classic Humany projections. A projection is a URL representing a subset of content (guides, categories, contact methods etc) in a Humany application.

## Projection URL Format
The standard format of a Projection URL consists of the root application url followed by the projection name.
```
https://[application].humany.net/[projection-name]
```

## Create an instance of Service Client
Create an instance by passing the Projection URL as the first constructor argument.

```javascript
import { ServiceClient } from '@humany/serviceclient';

const projection = '[projection-url]';
const serviceClient = new ServiceClient(projection);
```

### Passing additional options
The second constructor argument can be used to pass additional `ServiceClientOptions`.

#### `ServiceClientOptions`

|Argument|Description|Type|
|:--:|:--:|:----------|
|**`funnel`**|Funnel to report statistics on.|`string`|
|**`client`**|Unique ID for the client|`string`|
|**`site`**|Site (URI) to report statistics on.|`string`|
|**`paging`**|Default paging options|`object`|

**Comments**
- Funnel, Client and Site can be overriden by using the options parameter on specific API calls.

## Match
Match guides based on a search phrase.
### `match(phrase, success, [error])`

|Argument|Description|Type|
|:--:|:--:|:----------|
|**`phrase`**|The phrase to match.|`string`|
|**`success`**|Callback returning the result.|`function`|
|**`error`**|Callback returning a description of the error.|`function`|

### `match(phrase, options, success, [error])`

|Argument|Description|Type|
|:--:|:--:|:----------|
|**`phrase`**|The phrase to match.|`string`|
|**`options`**|Additional matching options|`MatchingOptions`|
|**`success`**|Callback returning the result.|`function`|
|**`error`**|Callback returning a description of the error.|`function`|

#### `MatchingOptions`

|Argument|Description|Type|
|:--:|:--:|:----------|
|**`statisticsDisabled`**|Whether statistics should be reported for the request.|`boolean` (default: false)|
|**`categoryId `**|Limit the matching to the specified category|`number`|

**Example**
```javascript
serviceClient.match('hello world', (matchResult) => {
  console.log('matched guides:', matchResult.Matches);
});
```

## Get categories

### `getCategories(success, [error])`

|Argument|Description|Type|
|:--:|:--:|:----------|
|**`success`**|Callback returning the result.|`function`|
|**`error`**|Callback returning a description of the error.|`function`|

### `getCategories(options, success, [error])`

|Argument|Description|Type|
|:--:|:--:|:----------|
|**`options`**|Additional matching options|`CategoriesOptions`|
|**`success`**|Callback returning the result.|`function`|
|**`error`**|Callback returning a description of the error.|`function`|

#### `CategoriesOptions`

|Argument|Description|Type|
|:--:|:--:|:----------|
|**`phrase `**|Get categories containging guides matching a phrase|`string`|
|**`categoryId `**|Limit the matching to the specified category|`number`|
|**`expand`**|Possible values: `'none'`, `'children'`, `'descendants'`|`string`|

**Example**
```javascript
serviceClient.getCategories((categoryResult) => {
  console.log('all categories:', categoryResult.Children);
});
```

## Get guide

### `getGuide(id, success, [error])`

|Argument|Description|Type|
|:--:|:--:|:----------|
|**`id`**|Guide ID.|`number`|
|**`success`**|Callback returning the result.|`function`|
|**`error`**|Callback returning a description of the error.|`function`|

### `getGuide(id, options, success, [error])`

|Argument|Description|Type|
|:--:|:--:|:----------|
|**`id`**|Guide ID.|`number`|
|**`options`**|Additional guide options.|`GuideOptions`|
|**`success`**|Callback returning the result.|`function`|
|**`error`**|Callback returning a description of the error.|`function`|

### `getGuide(id, connectionKey, success, [error])`

|Argument|Description|Type|
|:--:|:--:|:----------|
|**`id`**|Guide ID.|`number`|
|**`connectionKey`**|A connection key (part of dialog) to get.|`string`|
|**`success`**|Callback returning the result.|`function`|
|**`error`**|Callback returning a description of the error.|`function`|

### `getGuide(id, connectionKey, options, success, [error])`

|Argument|Description|Type|
|:--:|:--:|:----------|
|**`id`**|Guide ID.|`number`|
|**`connectionKey`**|A connection key (part of dialog) to get.|`string`|
|**`options`**|Additional guide options.|`GuideOptions`|
|**`success`**|Callback returning the result.|`function`|
|**`error`**|Callback returning a description of the error.|`function`|

#### `GuideOptions`

|Argument|Description|Type|
|:--:|:--:|:----------|
|**`statisticsDisabled`**|Whether statistics should be reported for the request.|`boolean` (default: false)|

**Comments**
- If the Guide is not intended to be displayed as a result of a previous match statistics should be disabled.

## Give feedback on guide

### `giveFeedback(id, connectionKey, feedbackType, [success, error])`

|Argument|Description|Type|
|:--:|:--:|:----------|
|**`id`**|Guide ID.|`number`|
|**`connectionKey`**|A connection key (part of dialog) to give feedback on.|`string`|
|**`feedbackType`**|Type of feedback to give (`Positive` or `Negative`).|`string`|

## Accessing the Service Client from a plugin
For implementations running version 4 you can author a plugin and access the current Service Client through the `container` under the key `'matchingClient'`. The value must be resolved asynchronously as in the example below.

```javascript
import { Plugin } from '@humany/widget-core';

class MyPlugin extends Plugin {
  initialize() {
    this.container.getAsync('matchingClient').then((matchingClient) => {
      // use 'matchingClient' here
    });  
  }
}
```
See the [Skeleton Plugin repository](https://github.com/Humany/webprovisions-skeleton-plugin) for an example on how to author a Webprovisions plugin.