# Component API
The Component API provides functions for modifying the properties on components as well as reacting to actions.

## Acessing the API
Inside a plugin, call the static [`ComponentPlatform.getInstance()`](modules/@humany/widget-core/classes/componentplatform.html#getinstance) by passing in the current `Container` as shown below. It will return a `Promise` that is resolved to the global `ComponentPlatform` instance. 
```js
import { ComponentPlatform } from '@humany/widget-core';

const MyPlugin = async (container) => {
  const platform = await ComponentPlatform.getInstance(container);
};
```

## Targeting components
The Component API is abstract in such a way that you do not target individual components directly. Instead you will define a query representing the components to modify. This approach is meant to reduce the risk that your plugin will break if the underlying component configuration changes, which from a plugin perspective is likely.

?> In order to control a component in more detail and to read its properties, see [`Extending components`](#extending-components) below.

Below code will create an `ComponentController` instance which is a wrapper for all the components matching the query.
```js
// create a query targeting all components of type 'guide'
const guides = platform.components().ofType('guide').select();
```
On the controller you can write properties as well as watching actions and provide custom behaviour.

## Properties
The object passed to `writeProperties()` will be deep merged with the component's existing properties.
```js
guides.writeProperties({
  title: 'New value of title property',
});
```
When writing properties it's possible to specify one or more breakpoints for the changeset to be limited to. The breakpoints must be specified in the [breakpoints](configuration-schema/#breakpoints) section of the widget configuration.
```js
guides.writeProperties({
  title: 'Title shown for mobile devices',
}, { breakpoints: ['mobile'] });
```

## Context
The `ComponentContext` is similar to `ComponentProperties` but cascades down the child-hierarchy. This is normally applied to areas, but will work on any component. Use `writeContext()` on the controller to modify the context for the components.
```js
guides.writeContext({
  primaryColor: 'red',
});
```

## Layout
The `ComponentLayout` defines the layout of the component in relation to its parent grid. Use `writeLayout()` on the controller to modify the layout of the components.
```js
guides.writeLayout({
  size: 'none',
});
```

## Watching actions
You can watch actions to extend the behaviour when an action is dispatched. Make sure to call the `next()` function to not break the execution chain. If `next()` is omitted, the default handler for the action will not be executed, as well as any subsequent watchers.
```js
guides.actions.watch('feedback', (input, next, component) => {
  return next(input);
});
```

## Extending components
Use the `extendComponent()` utility to extend a specific component type "from the inside." Pass the `Container` as the first argument and the type of the component to extend as the second. The third argument is a handler function that will be called once for every active component of the specified type.

|Name|Type|Required|Default|Description|
|----|----|--------|-------------|-----------|
|`container`|`Container`|Yes||The `Container` instance for the current widget.|
|`type`|`String`|Yes||The component type to extend.|
|`handler`|[`ExtendComponentHandler`](#extendcomponenthandler)|Yes||The handler used to extend the component.|

#### `ExtendComponentHandler`
Handler for extending a component. It will be called whenever a component of the defined type is activated within the widget. The handler will be called with a `ComponentNodeController` as only argument. The `ComponentNodeController` is similar to `ComponentController`, but is tied directly to the underlying `ComponentNode` and provides functions for writing _and_ reading properties and context as well as managing its actions.

```js
import { extendComponent } from '@humany/widget-core';

const MyPlugin = (container) => {
  return extendComponent(container, 'guide', (component) => {
    // extend the component here

    return () => {
      // dispose
    }
  });
};
```
The handler will be called with a `ComponentNodeController` as the only argument. Use this to read and write properties, context, layout and listen to actions.

```js
return extendComponent(container, 'guide', (component) => {
  // extend the component here
  const properties = component.properties((properties) => {
    // 'properties' updated
  });

  component.writeProperties({ title: 'Updated title' });

  component.actions.watch('feedback', (input, next) => {
    console.log('feedback given', input);
    return next(input);
  });

  return () => {
    // dispose
  };
});
```
?> See the [Configuration Schema](configuration-schema/#introduction) for a list of all available components and their properties and actions.

!> The Component API currently only supports a subset of all available components.
