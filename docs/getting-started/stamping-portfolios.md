# Building Portfolio Weights for vBase

vBase enables investors, allocators, and researchers to build a globally credible live performance record by [stamping](../welcome/what-is-a-stamp.md) portfolio rebalance weights.  

To ensure accurate parsing, uploads via the [Portfolio Stamping](https://app.vbase.com/stamp/?method=portfolio) interface must follow a simple standard format. To stamp a file of arbitrary structure, use the [File Stamping](https://app.vbase.com/stamp/?method=file) interface. 


## What counts as a valid portfolio upload?

A portfolio must provide:

| Requirement | Description |
|---|---|
| **Symbols** | Valid tickers or identifiers |
| **Weights** | Numeric values (long/short), decimals or percentages |
| **One row per security** | No multi-line entries |

You may paste directly into the textbox, upload a CSV file, or drag & drop a CSV into the textbox.

vBase accepts comma, semicolon, or tab delimiters, with comma as the default. Mixing different delimiters within the same file will cause an Invalid Structure error.

**Minimal Example (ready for paste)** <br>
symbol,weight<br>
AAPL,0.50<br>
MSFT,-0.20<br>
SPY,0.70



## Assigning Portfolio to a Collection

Every portfolio stamp must belong to a **Portfolio Collection**.

> 📌 A Collection organizes portfolio stamps into a verifiable investment strategy or signal.

You can add new collections by clicking the + icon next to the collection dropdown or [in your account](https://app.vbase.com/profile/#collections)


## Optional column headers

Headers are not required — but if included, they must **map to known names**.

**Valid symbol column names**
id,symbol,identifier,sym,symbol,ticker,ticker_symbol,security,asset,instrument,stock ticker,figi,isin,bbgid,bbg_ticker,bloomberg_id

**Valid weight column names**
wt,w,weight,weight_pct,weight_percent,weighting,percentage,pct,allocation,exposure,position,% of book,portfolio_weight,allocation_pct,allocation_percent


> If headers are missing, vBase assumes:
> **Column 1 = Symbol**, **Column 2 = Weight**



## Weight parsing rules  
*We standardize all values before stamping*

vBase normalizes:

| Input | Normalized Result |
|------|------:|
| `0.25` | 0.25 |
| `.25` | 0.25 |
| `0,25` | 0.25 |
| `25%` | 0.25 |
| `-2.5%` | -0.025 |
| `(25%)` | -0.25 |

> ⚠️ If both comma **and** dot decimals appear, this is is ambiguous and the upload will be rejected



## Portfolio Normalization

Before stamping, vBase automatically:

- Strips spaces, parentheses, thousands separators
- Converts percentages → decimals
- Converts European decimal formatting to US style
- Sums weights of duplicate tickers
- Validates structure & data types

📌 Only a fingerprint of the **Normalized CSV** is stamped — not the original.

You can download the normalized CSV file:

- On the confirmation page  
- Anytime via **Stamped File Storage**