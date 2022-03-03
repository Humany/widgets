# CSS documentation

## Getting started

Styling your widget is fundamental to making it blend seemlessly onto your website or customizing your portal to look on brand for your customer support.

### Using the Preview feature

You're able to preview the widget from the Interface-view. Right click the interface and select Preview. This will trigger a prompt where you can either leave blank or fill in the URL to where the interface is embedded.

If you leave the URL-field blank you'll see the widget as it appear in our preview mode.

!> **The preview mode is not an accurate representation of the widget on your website! It should only be used for base reference for widget functionality.**

When a widget is embedded on a site it'll take on certain CSS and behaviour from the site. A widget should always be previewed on a test site in order to verify styling and behaviour.

### Dynamic classes

When rendering a OneWidget there are a number of dynamic class names that are generated with styling. These classes can have names like `liKZOX` or `sc-gisBJw` and are randomly generated. These names can change when you update the widget. **These classes should not be used when writing CSS rules!**

## Writing CSS for widgets

All elements in the widgets have classnames that identify them. All components in OneWidget contain the `humany-component`-class. They also contain more specific names like `humany-guide-category-tree` and `humany-item-list` so you can easily identify each element in a widget.

When writing CSS for specific elements in a component you can write the heirarchy:

```css
.humany-guide-category-list .humany-guide-link {
    font-family: "Comic Sans MS", "Comic Sans", cursive;
}
```

This line of code changes the font of guide links in GuideCategoryLists in your widget to make it more appealing.

### Widget configuration

There is some component specific CSS in the configuration. You can add CSS directly by using either specific `context`-properties (`"context": { "borderRadius": "5px" }`) or writing `css`-prefixed properties (`"properties": { "css-border-radius": "5px" }`).

Styling done this way usually styles the wrapper `div` and not individual elements inside the component. If you want to style them you have to you use the implementation.

### Implementation / Custom Widget Styling

Using the implementation is the preferred way to deliver CSS to a webpage. This is bundled in the installation script. The implementation's CSS is applied to all widgets that belong to it. To limit the scope of the CSS you can prefix the CSS with the widget name:


```css
.humany_floating-widget .humany-guide-category-list .humany-guide-link {
    font-family: "Comic Sans MS", "Comic Sans", cursive;
}
```

This specifies that it's only the widget with the name *floating widget* that the style is applied to.

#### Initial CSS

This CSS is loaded in with the trigger element for floating type widgets, like the bot and floating. It's used to minimize the footprint loaded for users who aren't clicking the trigger button.

#### Widget CSS

The main CSS component for widgets. This is stored in a `widgets.css`-file that is loaded on the page.

### Optional: External CSS

You can always store your widget CSS in a file that you load on your web page. There can be external factors for wanting the CSS in an external file.

Also, be mindful that CSS on your webpage might affect the widget's look and feel.