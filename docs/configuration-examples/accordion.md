# Accordion guide list

We have three different components that support expanding and rendering guide children. Also known as: accordion guide lists.

These are: [`GuideListComponent`](component-reference.md#guidelist), [`GuideCategoryBrowserComponent`](component-reference.md#guidecategorybrowser) and [`ContactListComponent`](component-reference.md#contactlist).

!> Note that SEO support for widgets with accordion guides is _not_ currently available.

## Setup

The following is just an example, your configuration does not have to look exactly like this. We'll only show the relevant components in this tutorial.

This is done in the advanced settings in your OneWidget interface.

### Guide

The first thing you need is a guide:

```json
"guide": {
  "type": "guide"
}
```

### Starting configuration

In this scenario we'll assume the widget has an index, browse and contact view. In the index view there's a [`GuideListComponent`], a [`GuideCategoryBrowserComponent`] in the browse view and a [`ContactListComponent`] in the contact view.

These will, by default, be setup something like the following:

```json
"index-area": {
  "type": "area",
  "children": [
    "guide-list"
  ]
},
"guide-area": {
  "type": "area",
  "children": [
    "guide"
  ]
},
"browse-area": {
  "type": "area",
  "children": [
    "guide-category-browser"
  ]
},
"contact-area": {
  "type": "area",
  "children": [
    "contact-list"
  ]
},
"guide-list": {
  "type": "guide-list",
  "properties": {
    "accordion": false,
    "routes": {
      "guide": "guide"
    }
  }
},
"guide-category-browser": {
  "type": "guide-category-browser",
  "properties": {
    "accordion": false,
    "routes": {
      "guide": "guide"
    }
  }
},
"contact-list": {
  "type": "contact-list",
  "properties": {
    "deflectionAccordion": false,
    "routes": {
      "guide": "guide"
    }
  }
},
"views": {
  "index": {
    "path": "/",
    "entry": "index-area"
  },
  "guide": {
    "path": "/g:guide(\\d+)-:uriName",
    "entry": "guide-area"
  },
  "browse": {
    "path": "/browse",
    "entry": "browse-area"
  },
  "contact": {
    "path": "/contact",
    "entry": "contact-area"
  }
}
```

## Configuration

Now we're ready to configure our accordion.

### List components _(required)_

First we need to configure each component type to support accordion rendering. (You can find documentation for components [here](configuration-schema#views) and each component type [here](component-reference).)

We do this by:

1. Setting the `accordion`-property to `true`. The `contact-list` has a a unique property called `deflectionAccordion`.

2. Setting the `routes.guide`-property to whichever route the component is rendered on.  
   _If a `guide-category-browser` is rendered on the browse-route the `routes.guide`-property should be set to `"browse"`_.

3. Adding `guide` as a child to the component.

```json
"guide-list": {
  "type": "guide-list",
  "properties": {
    "accordion": true,
    "routes": {
      "guide": "index"
    }
  },
  "children": [
    "guide"
  ]
},
"guide-category-browser": {
  "type": "guide-category-browser",
  "properties": {
    "accordion": true,
    "routes": {
      "guide": "browse"
    }
  },
  "children": [
    "guide"
  ]
},
"contact-list": {
  "type": "contact-list",
  "properties": {
    "deflectionAccordion": true,
    "routes": {
      "guide": "contact"
    }
  },
  "children": [
    "guide"
  ]
}
```

!> If you are using a `guide-category-browser` it is highly encouraged to change the `columns` property to a value of `1` in order to avoid layout issues. Note that depending on which template was used on widget creation you may need to update the [component reference](configuration-schema#componentreference) as well (see example below.)

```diff
[
  "guide-category-browser",
  {
    "breakpoints": [
      "tablet",
      "desktop"
    ],
    "properties": {
-     "columns": null
+     "columns": 1
    }
  }
]
```

### Configure views for better URLs _(optional)_

If you want your URLs to keep the previous formatting you need to configure this on each view that should support rendering a guide. You can find documentation for views [here](configuration-schema#views).

```json
"views": {
  "index": {
    "path": [
      "/",
      "/g:guide(\\d+)-:uriName"
    ],
    "entry": "index-area"
  },
  "browse": {
    "path": [
      "/browse",
      "/browse/g:guide(\\d+)-:uriName"
    ],
    "entry": "browse-area"
  },
  "contact": {
    "path": [
      "/contact",
      "/contact/g:guide(\\d+)-:uriName"
    ],
    "entry": "contact-area"
  }
}
```

### Displaying guide headers _(optional)_

Your guide will now be rendered in a different context, which might have less space. With this in mind, you might want to change some properties. You can read all about the `guide` components properties [here](component-reference#guide).

The guide header displayed at the top of the guide, for instance, might be something that you want to hide. This can be done with a boolean property, like this:

```json
"guide": {
  "type": "guide",
  "properties": {
    "showHeader": false
  }
}
```

### Related tag list _(optional)_

If your widget contains tags, the `related-tag-list` is usually rendered together with the `guide` component. Now that the `guide` has moved, you might need to also move the tags too.

We can do this by adding a [reference](configuration-schema#componentreference) to our related tag list component as a child to our `guide` component.

```json
"guide": {
  "type": "guide",
  "children": [
    "related-tag-list"
  ]
},
"related-tag-list": {
  "type": "related-tag-list"
}
```

### Setting up a seperate `guide` component for accordion

With all these settings you might want to consider the option of keeping seperate `guide` specifically for the accordion.

Here's an example of that:

```json
"guide": {
  "type": "guide",
  "properties": {
    "showHeader": true
  }
},
"guide-accordion": {
  "type": "guide",
  "properties": {
    "showHeader": false
  },
  "children" [
    "related-tag-list"
  ]
},
"guide-list": {
  "type": "guide-list",
  "properties": {
    "accordion": true,
    "routes": {
      "guide": "index"
    }
  },
  "children": [
    "guide-accordion"
  ]
},
"index-area": {
  "type": "area",
  "children": [
    "guide-list"
  ]
},
"guide-area": {
  "type": "area",
  "children": [
    "guide"
  ]
}
```

This setup might be preferable if the widget is going to be used for SEO since we're indexing the guide route. It'll also act as a landing page for visitors coming from search engines.
