---
description: Format and stamp portfolio weights as part of a verified investment track record
---

# Stamping a portfolio

This page covers the **portfolio-weights workflow** described in [Verified Investment Track Records](verified-track-record.md).

Use this approach when portfolio weights or holdings are the representation you want to preserve as the strategy's track record. It is also the required representation if you want vBase to calculate a live performance tearsheet.

Before starting, create the vBase account and Collection for the strategy as described in the [recommended track-record workflow](verified-track-record.md#recommended-workflow).

A portfolio track record is built by stamping a standardized representation of the portfolio at each rebalance or update. Over time, those Stamps create an independently verifiable history of the portfolio weights that would have been used to trade or calculate the strategy.

## 1. Format the portfolio

Each portfolio is a two-column table with one row per security:

- **Identifier** — a ticker (such as `AAPL` or `BTCUSD`) or a FIGI
- **Weight** — the position's portfolio weight as a decimal, so `0.21` means 21%

For example:

```csv
Ticker,Weight
AAPL,0.21
MSFT,0.19
NVDA,-0.10
BTCUSD,0.15
NFLX,-0.10
ORCL,0.15
AMZN,0.10
```

[Download the example portfolio CSV](/assets/Example_Portfolio.csv).

The standard format follows these rules:

- **Headers** — The header row is optional. Without one, the first column is treated as the identifier and the second as the weight. Common headers such as `Ticker`, `Symbol`, `FIGI`, `Weight`, and `Wt` are supported.
- **Short positions** — Use a negative weight, for example `MSFT,-0.20`.
- **Weight totals** — Weights do not need to sum to 1.
- **Cash and leverage** — There is no cash row. Any portion of the portfolio not allocated to securities is treated as cash. A sum of absolute portfolio weights greater than 1 represents gross leverage.

**To build a live performance tearsheet, stamp portfolio weights in this format.**

The [Portfolio Stamping tool](https://app.vbase.com/stamp/?method=portfolio) can be useful if you want to test or normalize your source data against this format before implementing your production workflow.

## 2. Stamp each portfolio update

Stamp the portfolio at each rebalance or update using the **same Collection established for the strategy in the parent workflow**.

The resulting history might look like:

```text
Collection: DIVERSIFIED-LONG-SHORT-STRATEGY

Sep 1  Portfolio weights → Stamp A
Sep 5  Portfolio weights → Stamp B
Sep 9  Portfolio weights → Stamp C

All Stamps: same Stamper + same Collection ID
```

Each Stamp gives that portfolio update a publicly verifiable timestamp.

For live tearsheet calculations, a stamped portfolio takes effect at the next applicable market close. For example, a portfolio stamped at 2pm ET on a trading day takes effect at that day's close; a portfolio stamped after the close takes effect at the next trading-day close.

Stamping does **not** publish the portfolio itself. The public Stamp contains the Content ID and other audit-trail identifiers, not the underlying positions. See [Privacy and Data Handling](../concepts/privacy-and-data-handling.md).

### Choose how to stamp

There are two common approaches:

- **Stamp the standard portfolio representation directly** — if your portfolio is already in the format described above, stamp that representation through the [File Stamping tool](https://app.vbase.com/stamp/?method=file), [Python API Client](../getting-started/api-py-quickstart.md), [REST API](../../vbase-django-tools/api/rest-api-user-guide.md), or another integration.

- **Normalize and stamp** — if your source data needs validation or normalization, use the [Portfolio Stamping tool](https://app.vbase.com/stamp/?method=portfolio). The tool converts supported portfolio inputs into the standard vBase representation and stamps the normalized portfolio directly through the browser.

vBase also supports automated portfolio workflows through [Interactive Brokers](linking-interactive-brokers.md), [QuantConnect](linking-quantconnect.md), and managed integrations.

Regardless of the method, each Stamp should represent the portfolio using the standard format described above.

## 3. Preserve the stamped portfolio

Preserve the exact portfolio representation associated with each Stamp so that it remains available for later validation.

If you stamp the standard portfolio representation directly, preserve that exact file or data representation.

If you use the Portfolio Stamping tool, preserve the **normalized portfolio produced by the tool**, because that normalized representation — not the original input — is what is stamped.

In supported workflows, vBase can optionally retain a backup copy of the stamped portfolio. Otherwise, retain the stamped portfolio in your own archive.

## 4. Activate a tearsheet

vBase live performance tearsheets are calculated from the stamped portfolio history.

**To calculate the performance shown in the tearsheet, vBase must have access to the stamped portfolio weights**, either through vBase backup storage or by receiving the stamped files separately.

The live tearsheet displays performance only; it does **not** display the underlying portfolio weights.

See an example: [ASGSP5DR](https://portfolios.vbase.com/?sym=ASGSP5DR).

Once portfolio stamping is set up, contact [portfolios@vbase.com](mailto:portfolios@vbase.com) with your Collection name and preferred tearsheet symbol to activate a tearsheet.

## Learn more

- [Verified Investment Track Records](verified-track-record.md) — the overall workflow for building a verified strategy track record
- [Linking with Interactive Brokers](linking-interactive-brokers.md) — automate portfolio stamping from Interactive Brokers
- [Linking with QuantConnect](linking-quantconnect.md) — automate portfolio stamping from QuantConnect
- [Building a Verifiable History](../concepts/building-a-verifiable-history.md) — best practices for maintaining a point-in-time history