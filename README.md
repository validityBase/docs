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

vBase helps producers of predictive data demonstrate its value. Trading signals, alternative data, forecasts, research, models — anything evaluated on its historical record can be made independently verifiable.

vBase creates point-in-time audit trails that let investors and other data consumers validate historical records directly. This enables them to evaluate the underlying data or strategy without worrying about potential revisions, uncertain timestamps, or selective presentation.

Because a point-in-time vBase record is easy to build and impossible to generate after the fact, it lets a producer send an inexpensive but highly credible signal about their work.

**The data can remain entirely private.** vBase uses cryptographic fingerprints (hashes) of the data to build audit trail records. Users can choose workflows in which the underlying data is **never sent to vBase.**

## Why verifiable history matters

Many predictive products — including trading strategies — are evaluated by how well their past predictions performed. 

The problem is that a genuine historical record is often indistinguishable from one that has been backdated, revised, or selectively presented. Because a consumer cannot easily tell the difference, valuable data gets discounted. 

Traditionally, producers address this problem by building trust one relationship at a time or, in some industries, through expensive third-party audits. 

vBase replaces much of this complex diligence with a standard, auditable verification process. The same historical record can be independently checked by different consumers, allowing each to focus on evaluating the data rather than the data producer.

## An example 

Suppose I tell you that I built a model that predicts whether gold prices will rise or fall each day. To demonstrate its value, I send you a spreadsheet of the model's daily predictions for the past five years — every one of them correct. 

To evaluate my model, you would reasonably want to know: Were those predictions really made when the spreadsheet says they were? Were any revised later? Am I showing you every prediction the model made? Did I test many models and present only the best one?

If the history I present is genuine and not selectively presented, my model is extraordinarily valuable. If the history was revised after the fact or cherry-picked, my model may have little or no value.

Both sides struggle with this problem. It is difficult for me to prove that the history I present is genuine, and difficult for you to independently verify any history I send you.

vBase lets me present my prediction history in an independently verifiable form, allowing you to answer every one of those questions directly and evaluate my model on its own merits. 

## What vBase makes verifiable

Depending on how vBase is used, an audit trail can provide independently verifiable evidence of:

- **Timing** — what data existed and by when
- **Integrity** — whether the data is unchanged from when its audit trail record was created
- **Completeness** — whether the dataset, time series, or strategy being presented matches the full history previously recorded in its Collection
- **Presentation context** — visibility into all audit trails recorded under a producer's identity, making selective presentation assessable

vBase does not determine whether the underlying data or prediction is good. It makes the history used to evaluate it independently verifiable.

[Learn how vBase works](docs/getting-started/how-vbase-works.md)


## Common use cases

vBase can be used anywhere the credibility of historical data matters. Common examples include:

* **Trading strategies and signals** — build a verifiable track record
* **Alternative and predictive data** — establish point-in-time history for buyer evaluation and backtesting
* **Forecasts and research** — demonstrate when predictions, recommendations, or research outputs existed
* **Models and AI systems** — maintain a verifiable history of model outputs and predictive claims

[See more example use cases](docs/welcome/example-use-cases.md)

## Get started

Use the [**Web App**](docs/web-tools/web-app-overview.md) for browser-based stamping and verification, the [**Python API Client**](docs/getting-started/api-py-quickstart.md) for most Python workflows, or the [**REST API**](vbase-django-tools/api/rest-api-user-guide.md) for direct integration from other systems.

* [Choose how to use vBase](docs/getting-started/choose-how-to-use-vbase.md)
* [Create a vBase account](docs/getting-started/create-a-vbase-account.md)
* [How vBase works](docs/welcome/how-vbase-works.md)
