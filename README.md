# SmartCut for WooCommerce

Sell cut-to-size materials in WooCommerce. Customers enter the sizes they want,
the plugin prices the job and shows a cutting diagram, and every order arrives
with PDF, CSV, DXF and PTX files attached ready for the saw.

It is powered by the [SmartCut API](https://smartcut.dev) — the same
cutting-optimization engine that runs on industrial beam saws.

## What it does

- **Linear, sheet and roll** calculations — timber and bar, plywood and MDF,
  vinyl and fabric.
- **Live quotations** as the customer types their sizes.
- **Cutting diagrams** showing how their parts come off the stock.
- **Machining** — holes, radius corners and other operations, priced per part.
- **Edge banding** on any side of a wood-based sheet, and **finishes** on either
  face.
- **Decimal or fractional units**, in whichever measurement system your
  customers use.
- **Files on every order** — PDF, CSV, DXF and PTX attached automatically.
- **Formula-based pricing**, so your own costing rules drive the quote rather
  than a fixed per-metre rate.

Pricing models supported: by area, by cut length, by full stock plus cut length,
a cut-to-size surcharge, or your own formula.

## Requirements

| | |
|---|---|
| WordPress | 6.0 or later |
| WooCommerce | 8.0 or later |
| PHP | 7.4 or later |
| Account | A [SmartCut account](https://smartcut.dev/account) with your domain registered |

## Installation

1. Install and activate the plugin. WooCommerce must be active first.
2. Create a product category for your cut-to-size products.
3. Go to **Settings → SmartCut** and select that category.
4. Go to **Tools → SmartCut Templates** to create your template products.
5. Sign up at [smartcut.dev](https://smartcut.dev/account) and add your domain.

Full setup guide: [Setting up your store](https://store.smartcut.dev/setting-up-your-store/)

Translations can be edited with
[Loco Translate](https://wordpress.org/plugins/loco-translate/).

## See it working

[store.smartcut.dev](https://store.smartcut.dev) is a real WooCommerce shop
running this plugin. Browse it as a customer would and add a cut-to-size product
to the basket to see the quote, the diagram and the attached files.

## Not on WooCommerce?

The same engine is available directly. The OpenAPI specification, runnable
examples in curl, Node, Python and PHP, and the MCP configuration are at
[github.com/jgmedialtd/smartcut-api](https://github.com/jgmedialtd/smartcut-api).

## Privacy

The plugin collects no personal data. To produce a calculation it sends the part
and stock dimensions to the SmartCut API. No customer data is accessed, sent or
stored. The API's
[privacy policy](https://cutrevolution.com/privacy-policy.html) covers what
happens to that request.

## Support

For setup help, billing or anything about your SmartCut account, use the contact
form at [smartcut.dev/contact](https://smartcut.dev/contact).

The plugin is provided as-is, without warranty of any kind. The "Powered by
SmartCut" credit must not be removed. The plugin is free of charge and that
credit is what we ask in return.
