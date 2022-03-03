# Examples

## Changing the border-radius on the search bar

When it comes to styling you have several choices but it's always prefered to take the easiest option.

In this example we'll change the border-radius for the search bar.

The search bar is a component comprised of several HTML-elements. There is an input, two buttons and several other 

```html
<div role="search" class="humany-component humany-component-search">
    <form>
        <button type="button" class="humany-button" title="search">
            <svg class="humany-icon"></svg>
        </button>
        <input aria-label="Search." placeholder="Search" type="search" class="humany-input">
    </form>
</div>
```

In order to add rounded corners to the search component, or more specifically the input field, you can't just add `css-border-radius` to the `search`-component's properties. There's a `borderRadius`-property you can use but that also affects the white box that surrounds the box in mobile versions of the widget. So, you have to style the `form`-element in the component:

```css
.humany-component-search form { 
    border-radius: 25px;
}
```

## Change the typefaces of the widget

You're able to set the font-family in the entire widget by replacing the font definition. It is defined in the component's context settings:

```json
    "components": {
        "root-area": {
            "type": "area",
            ...,
            "context": {
                "cardinal": 3,
                "fonts": {
                "type": "Lato",
                "huge": "1.4em",
                "medium": "1.1em",
                "large": "1.1em"
                },
            ...
            }
        }
    }
```

By removing the `"type": "Lato"` line you change the fonts to automatically adjust to the text-stylings on your website. This won't be reflected on the built-in preview page, however, unless you add the prefered font-types in the configuration and link to it correctly.

The Lato-font is also present in the **Initial CSS** in the Implementation so that it is applied to the trigger button. If you want to use your own font, you need to remove that occurance as well.

## Change the styling of the trigger button

The styling for the is located in the **initial CSS**. In a newly created implementation this code is located at the very top, in the `.humany-trigger`-class:

```css
.humany-trigger {
	position: fixed;
	transform: scale(0);
	box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;
	bottom: 0px;
	right: 20px;
	z-index: 5;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	line-height: 55px;
	height: 55px;
	width: 55px;
	border-radius: 0px;
	cursor: pointer;
	background-color: #990AE3;
	font-family: Lato;
	text-decoration: none;
	border: 3px dashed transparent;
	box-sizing: border-box;
}
```

As this class isn't specified to a specific widget it's applied to all floating type widgets associated to the implementation. If you want custom trigger buttons for your floating type widgets you need to create widget-specific CSS rules with widget-specific classes.

## Changing the position of the floating type widget

### OneWidget (Version 5)

The position of the OneWidget-floating type widget is specified in the widget configuration. In the root area entry properties, more specifically:

```json
    "entry": [
        "root-area",
        {
            ...
            "properties": {
                "css-width": "380px",
                "css-height": "656px",
                "css-bottom": "95px",
                "css-right": "20px",
                "css-top": "auto",
                "css-left": "auto",
                "css-max-height": "calc(100% - 120px)"
            }
        }
    ],
```
Change the values to the desired position.

### Version 4.1 and below

For legacy versions and the bot-widget this CSS is hard coded into the widget-link and has to be altered with CSS in the Widget CSS-section in the implementation:

```css
    .humany-bot-widget .humany-active {
        bottom: 95px !important;
        right: 20px !important;
    }
```
!> Don't forget the **!important** rule. Otherwise it might not be applied.