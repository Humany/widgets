# Orchestration API

## Humany object (Environment)
The Orchestration API consists of a global [`Humany`](modules/@humany/widget-core/classes/humany.html) object, available as `window.humany` on default distributions. It orchestrates widgets and implementations and provides an API for controlling the life-cycle of widgets and their plugins. Each widget is represented by a `Widget` object. 

### List available widgets
The `widgets` property of the `Humany` object contains all registered widgets on the current page. Run the following command to list all available widgets for a page:
```js
humany.widgets.all();
```

### Get a single widget
Run the following command to get the widget named "my-widget":
```js
humany.widgets.find('my-widget');
```

### Multi-tenant or multiple implementations
In a multi-tenant setup or on a page where more than one implementation is available, a widget name is not quanteed to be unique.

Run the following command to limit the search on both tenant and implementation:
```js
humany.widgets.find({ 
  widget: 'my-widget', 
  implementation: 'default', 
  tenant: 'acme',
});
```

## Commands
The [`Widget`](modules/@humany/widget-core/classes/widget.html) object exposes an [`invoke()`](modules/@humany/widget-core/classes/widget.html#invoke) method which can be used to send commands to a widget. Available commands are unique for each widget type, but from version 5 of the runtime (in contrast to previous versions) only one widget type is available; ACE One Widget.

The `invoke()` method accepts two arguments, the `commandName` and `data`. The `data` argument will be delegated to the function on the [`WidgetType`](modules/@humany/widget-core/classes/widgettype.html) with the specified name.

!> To be able to invoke commands on a widget it must first be activated.

### Available commands for ACE One Widget

### `attach(args: AttachData)`
Prepares the widget and the DOM for rendering using the provided arguments. If `widgetDOMElement` or `triggerDOMElement` are missing, these will be generated and attached to the body if applicable in regard to the widget's configuration. Provided elements are cached and will be restored to their initial states upon `widget.deactivate()` or `widget.invoke('detach')`.

#### `AttachData`
|Name|Type|Required|Default|Description|
|----|----|--------|-------|-----------|
|`widgetDOMElement`|`DOMElement`|No|`document.createElement('div')`|The `DOMElement` which the widget should be rendered inside. If not specified a new `DOMElement` is created.|
|`triggerDOMElement`|`DOMElement`|No|`undefined`|The `DOMElement` to be used as "trigger element" for starting the widget.|
|`withRenderState`|`InitialRenderState`|No|`undefined`|Shorthand for setting the widget's `RenderState` after attach.|
|`key`|`string`|No|`uuid`|Optional key to enable multiple view outlets of the same widget.|


#### `enum(string) InitialRenderState`
|Value|Description|
|----|----|
|`open`|Triggers command `open()`.|
|`closed`|Triggers command `close()`.|
|`hidden`|Triggers command `hide()` and starts the router service.|
|`storage`|Looks for a previous state on this widget and triggers it if applicable.|

##### Example
The following triggers the `attach` command for a floating-style widget, prepares the DOM and opens the widget. 
```js
  const widgetDOMElement = document.getElementById('my-widget-container');
  const triggerDOMElement = document.getElementById('my-trigger-element');
  widget.invoke('attach', { widgetDOMElement, triggerDOMElement, withRenderState: 'open' });
```

### `detach(key?: string)`
Detaches the widget and resets the DOM to it's original state. If you provided a `key` in the `attach` command you can use that to only remove that specific view outlet. If `key` is undefined, all view outlets will be detached.

<details>
<summary>Example: Detach basic</summary>

```js
  openWidget() {
    const widgetDOMElement = document.getElementById('my-widget-container');
    const triggerDOMElement = document.getElementById('my-trigger-element');
    widget.invoke('attach', { widgetDOMElement, triggerDOMElement, withRenderState: 'open' });
  }

  removeWidget() {
    widget.invoke('detach');
  }
```

</details>
<details>
<summary>Example: Detach with key</summary>
The following example illustrates how to render the same widget in two different elements, for example in a modal, simultaneously. Using the `key` argument in the `attach` method you can append and remove view outlets as you please.

```js

  async initialize() {
    const embeddedWidgetDOMElement = document.getElementById('my-widget-container');
    // we first activate the widget and invoke attach for the main view outlet and opens it
    await widget.activate();
    await widget.invoke('attach', {widgetDOMElement: embeddedWidgetDOMElement, withRenderState: 'open'});

  }

  async onModalOpen() {
    // register new view outlet with a key and open the widget
    const modalWidgetDOMElement = document.getElementById('my-modal-widget-container');
    await widget.invoke('attach', {widgetDOMElement: modalWidgetDOMElement, key: 'modal-view'});
    widget.invoke('open');
  }

  async onModalClose() {
    // when the modal is closed we detach this view outlet, but retain the main embedded version.
    await widget.invoke('detach', 'modal-view');
  }

```


</details>

### `render(args: RenderData)`
!> This command is deprecated and replaced with `attach`. At this point the arguments are simply passed on to `attach` but this may be subject to change in the future.

Prepares the widget and the DOM for rendering using the specified arguments.

|Name|Type|Required|Default|Description|
|----|----|--------|-------|-----------|
|`widgetDOMElement`|`DOMElement`|No|`document.createElement('div')`|The `DOMElement` which the widget should be rendered inside. If not specified a new `DOMElement` is created.|
|`triggerDOMElement`|`DOMElement`|No|`undefined`|The `DOMElement` to be used as "trigger element" for starting the widget.|
|`open`|`boolean`|No|`false`|If `true` the widget will also trigger the `open` command's procedures.|


### `close()`
Closes the widget and resets the state and router service.
### `hide()`
Hides the widget. The widget will keep its current state and is available in the DOM, but will not be visible to the user.
### `open()`
Opens the widget, making it visible to the user.

!> This will have no effect unless the `render` command has been priorly invoked.
### `renderState()`
Retrieve the current render state of the widget.

Resolves: `'closed' | 'open' | 'hidden'`
##### Example
```js
  widget.invoke('renderState').then((result) => {
    console.log(state);
  });
```

## Configuration
On the `humany` object, call the `configure()` function to specify a configuration handler. The handler will receive two arguments. The first is a `Configurator` object, which is used to apply configuration commands for an implementation. Configuration commands will by default be applied to all containing widgets. The second argument is the implementation on which the commands will be applied to.

```js
humany.configure((config, implementation) => {
  // add configuration here
});
```

!> Do note the `humany.configure()` is a wrapper for all underlying implementations on the runtime. This means it will be called once for every implementation. See below how to limit the configuration for a specific implementation.

### Configuring specific implementations
In a multi-implementation setup it may be desirable to limit which implementation to apply the configuration to. The `humany.configure()` can be called with a selector as the first argument. The handler below will only be called once even if multiple implementations are available on the page.

```js
humany.configure('<implementation-name>', (config, implementation) => {
  // add configuration here
});
```

### `config.plugin()`
Registeres a plugin. The plugin will be executed after the widget is created. If the widget is already created, the plugin is executed immediately.

### `config.routing()`
Provides a way to override the default routing configuration of a widget. See `RoutingSettings` for more information.

## Implementations

## Widgets

## Plugins
Plugins are used to extend the default behaviour of a widget and is following the same life-cycle as the widget itself. A plugin instance is always scoped to a single widget and receives a reference to the widget's `Container` instance. The container is a central piece of the widget, providing access to all registered services registered on the widget. The `Container` is often required when working with other APIs in the framework.

### Creating a plugin
A plugin is a plain javascript function, optionally async, with two arguments passed to it.

```js
const MyPlugin = async (container, settings) => {
  // write code here
};
```

### Registering a plugin
Plugins are registered through the `plugin()` configuration command:

```js
humany.configure((config) => {
  // register on all widgets
  config.plugin(MyPlugin);

  // register on specific widget only
  config('my-widget').plugin(MyPlugin);
});
```
