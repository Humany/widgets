# Orchestration API

## Humany object (Environment)
The Orchestration API consists of a global [`Humany`](/modules/@humany/widget-core/classes/humany.html) object, available as `window.humany` on default distributions. It orchestrates widgets and implementations and provides an API for controlling the life-cycle of widgets and their plugins. Each widget is represented by a `Widget` object. 

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
The [`Widget`](/modules/@humany/widget-core/classes/widget.html) object exposes an [`invoke()`](/modules/@humany/widget-core/classes/widget.html#invoke) method which can be used to send commands to a widget. Available commands are unique for each widget type, but from version 5 of the runtime (in contrast to previous versions) only one widget type is available; ACE One Widget.

The `invoke()` method accepts two arguments, the `commandName` and `data`. The `data` argument will be delegated to the function on the [`WidgetType`](/modules/@humany/widget-core/classes/widgettype.html) with the specified name.

### Example
The following code activates the widget and then renders it inside the provided DOM element.
```js
const widgetDOMElement = document.getElementById('my-widget-container');
widget.invoke('render', { widgetDOMElement })
```
!> To be able to invoke commands on a widget it must first be activated.

### Available commands for ACE One Widget

### `render(args: RenderData)`
Renders the widget to the DOM using the specified arguments.

|Name|Type|Required|Default|Description|
|----|----|--------|-------|-----------|
|`widgetDOMElement`|`DOMElement`|No|`document.createElement('div')`|The `DOMElement` which the widget should be rendered inside. If not specified a new `DOMElement` is created.|
|`triggerDOMElement`|`DOMElement`|No|`undefined`|The `DOMElement` to be used as "trigger element" for starting the widget.|
|

### `hide()`
Hides the widget. The widget will keep its current state but will not be visible to the user.

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