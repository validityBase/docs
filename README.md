---
description: Your data's value, made credible
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Welcome to vBase

vBase helps producers of predictive data, trading strategies, and analytical products — including trading signals, alternative data, forecasts, research, and models — demonstrate their value. 

vBase creates independently verifiable, point-in-time audit trails that let investors and other data consumers validate historical records directly. This enables them to evaluate the underlying data or strategy without discounting it for potential revisions, uncertain timestamps, or selective presentation.

**The data can remain entirely private.** vBase uses cryptographic fingerprints (hashes) of the data to build audit trail records. Users can choose workflows in which the underlying data is **never sent to vBase.**

## Why Verifiable History Matters

Many predictive products — including trading strategies — are evaluated by how well their past predictions performed. 

The problem is that a genuine historical record is often indistinguishable from one that is messy, revised, or selectively presented. Because a consumer cannot easily tell the difference, valuable data is often discounted. 

Traditionally, producers address this problem by building trust one relationship at a time or, in some industries, through expensive third-party audits. 

vBase makes the historical record independently verifiable, allowing each new data consumer to focus on evaluating the data rather than the data producer.

## An Example 

Suppose I tell you that I built a model that I claim can correctly predict whether gold prices will rise or fall each day. To demonstrate its value, I send you a spreadsheet containing my model’s predictions for the past five years.

To evaluate my model, you would reasonably want to know: Were those historical predictions really made when the spreadsheet says they were? Were any revised later? Am I showing you every prediction the model made? Did I test many models and present only the best one?

If the history is genuine and not selectively presented, my model is extraordinarily valuable. If the history was revised after the fact or cherry-picked, my model may have little or no value.

Both sides struggle with this problem. It is difficult for me to prove that the history I present is genuine, and difficult for you to independently verify any history I send you.

vBase lets the model builder present that prediction history in an independently verifiable form. The audit trail shows what data existed and by when, as well as the other audit trails maintained under the same vBase identity, allowing consumers to address the questions above and evaluate the underlying model on its own merits.

## What vBase Makes Verifiable

Depending on how vBase is used, an audit trail can provide independently verifiable evidence of:

- **Timing** — what data existed and by when
- **Integrity** — whether the data is unchanged from when its audit trail record was created
- **Completeness** — whether the dataset, time series, or strategy being presented matches the full history previously recorded in its Collection
- **Presentation context** — the other audit trails maintained under the same vBase identity, helping users assess whether a result may have been selectively presented

vBase does not determine whether the underlying data or prediction is good. It makes the history used to evaluate it independently verifiable.

[Learn how vBase works](docs/welcome/how-vbase-works.md)


## Common Use Cases

vBase can be used anywhere the credibility of historical data matters. Common examples include:

* **Trading strategies and signals** — build a verifiable track record
* **Alternative and predictive data** — establish point-in-time history for buyer evaluation and backtesting
* **Forecasts and research** — demonstrate when predictions, recommendations, or research outputs existed
* **Models and AI systems** — maintain a verifiable history of model outputs and predictive claims

[See more example use cases](docs/welcome/example-use-cases.md)

## Get Started

Use the **Web App** for browser-based stamping and verification, the **Python API Client** for most Python workflows, or the **REST API** for direct integration from other systems.

* [Choose How to Use vBase](docs/getting-started/choose-how-to-use-vbase.md)
* [Create a vBase Account](docs/getting-started/create-a-vbase-account.md)
* [How vBase Works](docs/welcome/how-vbase-works.md)
