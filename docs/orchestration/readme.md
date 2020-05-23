# Orchestration API

## Humany object (Environment)
The Orchestration API consists of a global [`Humany`](/modules/core/classes/humany.html) object, available as `window.humany` for default distributions. It orchestrates widgets and implementations and provides an API for controlling the life-cycle of widgets.

### List available widgets
The `humany.widgets` contains all available widgets on the runtime. A individual `Widget` object can be used to control its life-cycle as well as invoking commands.

Run the following command to list all available widgets for a page:
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