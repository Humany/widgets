# Context Property Property Types

[Context properties](/configuration-schema#componentcontext), which are used by multiple components.

## TypographyVariantMapping

Context value which sets certain components to use a different html element when rendering typography elements.

| Name | Type     | Description                                                |
| ---- | -------- | ---------------------------------------------------------- |
| `h1` | `string` | Sets which html element to use when rendering h1 elements. |
| `h2` | `string` | Sets which html element to use when rendering h2 elements. |
| `h3` | `string` | Sets which html element to use when rendering h3 elements. |
| `h4` | `string` | Sets which html element to use when rendering h4 elements. |
| `h5` | `string` | Sets which html element to use when rendering h5 elements. |
| `h6` | `string` | Sets which html element to use when rendering h6 elements. |

In the example below, `root-area` and all its descendants will render:
- `h2` instead of `h1`
- `h3` instead of `h2`
- `h4` instead of `h3`
- `h5` instead of `h4`
- `h6` instead of `h5`

**Example:**

```json
"root-area": {
  "type": "area",
  "context": {
    "typographyVariantMapping": {
        "h1": "h2",
        "h2": "h3",
        "h3": "h4",
        "h4": "h5",
        "h5": "h6"
    }
  },
  "children": [
    "widget-header",
    "guide-list"
  ]
}
```