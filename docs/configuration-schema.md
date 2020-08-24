# Configuration Schema
This doumentation describes the Configuration Schema for widgets from runtime version 5. For cloud-based widgets the configuration file can be modified in the Admin Portal by editing a widget and expand the "Advanced configuration" section.

In the runtime, the configuration is available on the widget's `Container`:
```js
widget.container.get('$settings');
```

## `breakpoints`
Defines available breakpoints in the widget. A breakpoint is referenced by its key and is used to apply overrides for components (see [`ComponentReferenceOverride`](#componentreferenceoverride)). The value of a breakpoint must be a valid [CSS Media Query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries).

**Example:**
```json
"breakpoints": {
  "desktop": "(min-width: 1025px) and (max-width: 1280px)"
}
```

## `components`
Defines all available components in the widget. An individual component is referenced by its key.

|Name|Type|Required|Default|Description|
|----|----|--------|-------|-----------|
|`type`|`string`|Yes||The component type as defined by the component implementation.|
|`properties`|[`ComponentProperties`](#componentproperties)|No|`{}`|Default properties for the component. Properties can also be defined or overridden in a [`ComponentReference`](#componentreference).|
|`context`|[`ComponentContext`](#componentcontext)|No|`{}`|Default context for the component. Context can also be defined or overridden in a [`ComponentReference`](#componentreference).|
|`layout`|[`ComponentLayout`](#componentlayout)|No|`{ "indent": 0, "size": "full", "order": Array.index }`|Default layout for the component. Layout can also be defined or overridden in a [`ComponentReference`](#componentreference).|
|`children`|[`ComponentReference[]`](#componentreference)|No|`undefined`|Array of references to child components. Only applicable to components of type `area`.|

### `ComponentProperties`
An object with arbitrary properties for the component.

**Example:**
```json
"my-component": {
  "type": "article",
  "properties": {
    "title": "Hello world"
  }
}
```

### `ComponentContext`
An object defining the context for the component. It is similar to `ComponentProperties` but its content will cascade down to child components, if available.

### `ComponentLayout`
An object defining the layout of the component in relation to its parent grid.

|Name|Type|Required|Default|Description|
|----|----|--------|-------|-----------|
|`size`|`Number` \| `"full"` \| `"none"` |No|`"full"`|The size, in number of columns, the component should spread. Set to `"none"` to hide the component.|
|`indent`|`Number`|No|`0`|The number of columns the component should be indented.|
|`order`|`Number`|No|`Array.index`|Defines the order of the component in relation to its siblings.|

### `ComponentReference`
References a component by its key. A referenced component must be defined in the `components` property. Can be defined as a string or array, which also supports overrides.

**Example:**
```json
// simple reference
"my-component"
```
```json
// complex reference with overrides
[
  "my-component", 
  { 
    "breakpoints": ["tablet"],
    "properties": { "title": "Overridden title for tablet devices" }
  }
]
```
#### `ComponentReferenceOverride`

|Name|Type|Required|Default|Description|
|----|----|--------|-------|-----------|
|`breakpoints`|`"all"` or `string[]`|No|`"all"`|Array defining the [breakpoints](#breakpoints) the override should be applied to.|
|`properties`|`ComponentProperties`|No|`{}`|Default properties for the component. Properties can also be defined or overridden in a `ComponentReference`.|
|`context`|`ComponentContext`|No|`{}`|Default context for the component. Context can also be defined or overridden in a `ComponentReference`.|
|`layout`|`ComponentLayout`|No|`{ "indent": 0, "size": "full", "order": Array.index }`|Default layout for the component. Layout can also be defined or overridden in a `ComponentReference`.|

## `data`
Defines the remote endpoint for the Humany projection to get and post data from.

|Name|Type|Required|Default|Description|
|----|----|--------|-------|-----------|
|`projection`|`string`|Yes||Absolute URL to a remote projection endpoint.|
|`site`|`"current"` \| `"referrer"`|No|`'current'`|Whether the current site value should be resolved from current or referrer page. Will always fallback to `"current"` if the referrer value, for any reason, isn't available.|
|`forceHttps`|`boolean`|No|`false`|Whether HTTPS should be enforced in communication with the data projection endpoint. If not set to `true` a protocol-relative URL will be used.|

**Example:**
```json
"data": {
  "projection": "//sandbox.humany.net/widget-name",
  "site": "referrer",
  "forceHttps": true
}
```

## `entry`
A [`ComponentReference`](#componentreference) pointing to the component definition to use as the entry point of the widget.

**Example:**
```json
"entry": "root-area"
```

## `routing`
Defines the routing configuration for the widget.

|Name|Type|Required|Default|Description|
|----|----|--------|-------|-----------|
|`initialPath`|`String`|No|`undefined`|Default initial path when widget is started.|
|`mode`|[`RouterMode`](#routermode)|No|`"scopedHash"`|The router mode to use.|

### `RouterMode`
An enum of available router modes.

|Name|Description|
|----|-----------|
|`"browser"`|Will store the view state in the browser address bar. This mode requires that the server is configured to support all defined paths.|
|`"memory"`|Will store the view state in memory.|
|`"scopedHash"`|Will store the view state in the hash on the browser address bar. The state will be scoped, allowing multiple widgets to use the hash at the same time.|
|`"hash"`|Will exclusively store the view state in the hash on the browser address bar. Only one widget on the same page is possible.|

**Example:**
```json
"routing": {
  "initialPath": "/",
  "mode": "scopedHash"
}
```

## `trigger`
Defines whether or not the widget should have a manual trigger to activate.

|Type|Required|Default|Description|
|----|--------|-------|-----------|
|`Boolean` or [`TriggerBadge`](#triggerbadge)|No|`undefined`|`false` will not render a trigger. `true` will use the source trigger element and activate the widget on click.|

### `TriggerBadge`
An object defining a trigger badge.

|Name|Type|Required|Default|Description|
|----|----|--------|-------|-----------|
|`symbol`|[`Symbol`](#symbol)|No|`undefined`|The symbol to be rendered inside the badge.|
|`label`|`String`|No|`''`|An optional label to be rendered inside the badge.|

### `Symbol`
Defines a symbol, either an icon or image.

|Name|Type|Required|Default|Description|
|----|----|--------|-------|-----------|
|`type`|`String`|Yes||The type of icon to be used. Possible values are `"FontAwesome"` and `"Uri"`.|
|`content`|`String`|Yes||The icon content for the specified type.|

## `views`
Defines available routes in the widget. A route is identified by its key and consists of a route path regular expression along with a [`ComponentReference`](#componentreference) ponting to the component definition for its content.

|Name|Type|Required|Default|Description|
|----|----|--------|-------|-----------|
|`path`|`String` \| `String[]`|Yes||A path or array of paths patterns.|
|`entry`|[`ComponentReference`](#componentreference)|Yes||Entry point fot the route.|

**Example:**
```json
"views": {
  "index": {
    "path": "/",
    "entry": "index-area"
  }
}
```
