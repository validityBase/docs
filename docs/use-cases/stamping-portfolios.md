---
description: Format and stamp portfolio weights to build a verifiable portfolio track record
---

# Stamping a portfolio

Portfolio track records in vBase are built by stamping a standardized representation of the portfolio at each rebalance or update.

By doing so, the producer creates a **verifiable track record**: a time series of portfolio weights, as would be maintained by an index calculation agent, but with each rebalance independently timestamped and verifiable against the public audit trail. The stamped portfolio weights can then be used to build a verified live performance tearsheet.

This page explains the portfolio format required to build and maintain a verifiable track record, and how to use it to build a live tearsheet for a trading signal or strategy.


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

<figure>
  <img src="../assets/example-portfolio.png" alt="Example portfolio CSV with ticker and weight columns" width="65%">
  <figcaption>Example portfolio weights in a simple two-column format.</figcaption>
</figure>

[Download the example portfolio CSV](../assets/Example_Portfolio.csv).

The format follows these rules:

- **Headers** — The header row is optional. Without one, the first column is read as the identifier and the second as the weight. If you include one, use recognized column names, such as `Ticker`, `Symbol` or `FIGI` for the identifier and `Weight` or `Wt` for the weight. Header names are not case-sensitive.
- **Short positions** — Use a negative weight, for example `MSFT,-0.20`.
- **Weight totals** — Weights do not need to sum to 1. They are taken as stated, so net and gross exposure can be any value.
- **Cash and leverage** — There is no cash row. Any portion of the portfolio not allocated to securities is treated as cash. A sum of absolute portfolio weights greater than 1 represents gross leverage.

**To build a live performance tearsheet for a strategy, stamp portfolio weights in this format.**


## 2. Create a Collection

Use a **Collection** to group all portfolio updates for the same strategy into a single track record. The track record consists of Stamps created by the same Stamper using the same Collection ID.

For example:

```text
Strategy: DIVERSIFIED-LONG-SHORT

Sep 1  Portfolio weights → Stamp A
Sep 5  Portfolio weights → Stamp B
Sep 9  Portfolio weights → Stamp C

All Stamps: same Stamper + same Collection ID
```

Collections can be created through the [vBase Web App](https://app.vbase.com/profile/#collections) or API.

See [Stamps and Collections](../concepts/stamps-and-collections.md) for more detail.


## 3. Stamp each portfolio update

Stamp the portfolio at each rebalance or update, always into the same Collection. 

The stamped portfolio acquires a publicly verifiable timestamp. For live tearsheet calculations, a stamped portfolio takes effect at the next applicable market close. For example, a portfolio stamped at 2pm ET on a trading day takes effect at that day's close; a portfolio stamped after the close takes effect at the next trading-day close.

Stamping does not publish the portfolio itself. The public Stamp contains the Content ID and audit-trail identifiers, not the underlying positions. See [Privacy and Data Handling](../concepts/privacy-and-data-handling.md).

There are two approaches:

- **Stamp the standard portfolio representation directly** — if your portfolio is already in the format described above, stamp it through the [File Stamping tool](https://app.vbase.com/stamp/?method=file), [Python API Client](../getting-started/api-py-quickstart.md), [REST API](../../vbase-django-tools/api/rest-api-user-guide.md), or another integration.

- **Normalize and stamp** — if your source data needs validation or normalization, use the [Portfolio Stamping tool](https://app.vbase.com/stamp/?method=portfolio). The tool converts supported portfolio inputs into the standard vBase representation and stamps the normalized portfolio directly through the browser.

vBase also supports automated portfolio workflows through [Interactive Brokers](linking-interactive-brokers.md), [QuantConnect](linking-quantconnect.md), and managed integrations.

Regardless of the method, each Stamp should represent the portfolio using the standard format.


## 4. Preserve the stamped portfolio

A Stamp records only a fingerprint of the portfolio, not the portfolio itself. Verifying a rebalance later requires an exact copy of the data that was stamped. If no exact copy remains available, the Stamp still exists, but that rebalance can no longer be validated against it.

If you stamp a standardized portfolio directly, preserve that exact file or data representation. If you use the Portfolio Stamping tool, preserve the normalized portfolio stamped by the tool, not your original input.

In many workflows, vBase can optionally retain a backup copy of the stamped portfolio to support later validation. If no backup copy is retained, be sure to store the stamped portfolio in your own archive.


## 5. Activate a tearsheet

vBase live performance tearsheets are calculated from the stamped track record.

**To calculate the performance shown in the tearsheet, vBase must have access to the stamped portfolio weights**, either through vBase backup storage or by receiving the stamped files separately.

The live tearsheet displays performance only; it does **not** display the underlying portfolio weights.

See an example: [ASGSP5DR](https://portfolios.vbase.com/?sym=ASGSP5DR).

Once your portfolio stamping is set up, contact [portfolios@vbase.com](mailto:portfolios@vbase.com) with your Collection name and preferred tearsheet symbol to activate a tearsheet.


## Learn more

- [Verified Investment Track Records](verified-track-record.md) — choose what type of track record to build
- [Linking with Interactive Brokers](linking-interactive-brokers.md) — automate portfolio stamping from Interactive Brokers
- [Linking with QuantConnect](linking-quantconnect.md) — automate portfolio stamping from QuantConnect
- [Building a Verifiable History](../concepts/building-a-verifiable-history.md) — best practices for maintaining a point-in-time history
