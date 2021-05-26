# Accordion
We have three different components that support expanding and rendering children, suggestively a guide component, when clicking a guide link.

These are: [`GuideListComponent`](component-reference.md#guidelist), [`GuideCategoryBrowserComponent`](component-reference.md#guidecategorybrowser) and [`ContactListComponent`](component-reference.md#contactlist).

## Setup
This example supposes that your configuration has a couple of things already set up. The following are just examples, your configuration does not have to look exactly like this.

### Guide
The idea with accordion is to displaying a guide by expanding it below a clicked guide link. 
With that in mind, we need to have a guide component definition looking something like the following.
```json
"guide": {
  "type": "guide"
}
```

### GuideList / GuideCategoryBrowser / ContactList
Finally we are going to need to need  a GuideListComponent, GuideCategoryBrowserComponent and/or a ContactListComponent.
```json
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
}
```

### Views
In order for the guide links to be able to get the correct route target we need to have some views setup.
```json
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
Now we should be ready to configure our accordion.

### List components _(required)_
First we need to configure each component type [listed above](#guidelist-guidecategorybrowser-contactlist) to support accordion rendering. You can find documentation for components [here](configuration-schema#views) and each component type [here](component-reference).

We do this by:
1. Setting the `accordion`-property to `true`.  
The _`deflectionAccordion`-property for `contact-list`_.
2. Setting the `routes.guide`-property to whichever route the component is rendered on.  
_If a `guide-list` is rendered on the search-route the `routes.guide`-property should be set to `"search"`_.  
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

### Views _(optional)_
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

### Guide _(optional)_
Considering your guide will now be rendered in a different context, which for example might have less space, you might want to change some properties. You can read about the guide components properties [here](component-reference#guide).

Since the title of a given guide is already rendered in the parent guide list, you might want to hide the guide components header.

```json
"guide": {
  "type": "guide",
  "properties": {
    "showHeader": false
  }
}
```

### Related tag list _(optional)_
If your widget contains tags. The related tag list is usually rendered beside the guide component, in the same area. Considering that we have now moved our guide component we might need to also move your related tag list component.

We can do this by adding a [reference](configuration-schema#componentreference) to our related tag list component as a child to our guide component.

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