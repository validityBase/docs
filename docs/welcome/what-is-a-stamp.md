# What Is a Stamp?

A **stamp** is a cryptographic proof that a piece of data or a file existed — exactly as it was — at a specific point in time.
Each vBase stamp records a **fingerprint** of your data immutably on a public blockchain, creating a verifiable timestamp showing when the data existed and which dataset (aka Collection of stamps) it belongs to. 

For data vendors and quants, this provides a transparent audit trail for datasets, models, and trading strategies — turning “trust me” into “verify it yourself.”

## Why Stamps Matter

Data is constantly changing. Records are cleaned, adjusted, or re-released; model results evolve with new inputs.
Without a verifiable record of *what was known, when*, investors and clients who analyze predictive data can’t be sure whether results reflect genuine foresight or hindsight.

A vBase stamp solves this by giving data a **publicly verifiable timestamp** — showing exactly when the data was produced. 


## How a Stamp Works

<picture><img src="./stamping_process.png" alt="Stamping Process Flow" width="50%"></picture>

<picture><img src="./validation_process.png" alt="Validation Process Flow" width="50%"></picture>

**Step-by-step:**

1. Compute a cryptographic fingerprint (hash) of your data, portfolio or model output.
2. The hash is written to the blockchain.
3. The resulting blockchain transaction provides an immutable timestamp that can be independently attested to by 1000s of nodes all over the world.
4. Anyone can later verify that the same data produces the same hash — proving the data's integrity and timestamp.



## What a Stamp Contains

Each vBase stamp publishes three elements to the blockchain:

| Field                          | Description                                                                                                                   |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| **Address**                    | The blockchain address (identity) of the stamping account.                                                                        |
| **Hash**                       | A cryptographic fingerprint (SHA-3) of the data being stamped. This ensures the content can be verified without revealing it. |
| **Collection ID** *(optional)* | A fingerprint of the Collection (dataset) name. Groups related stamps together (e.g., all updates for a dataset or strategy).                                                 |

These components form a an immutable public record — a proof of existence that can be independently verified and used to prove a dataset's timestamps, completeness and impartial presentation.

A graphical example of a vBase stamp: 

<picture><img src="./vBase Stamp 3.png" alt="Example Stamp" width="50%"></picture>



## Examples in Practice

* **Alternative Data Provider:** A data provider stamps each daily file of social-sentiment metrics before distributing to clients. Later these stamps are used to prove the sentiment data history is full point-in-time and complete 
**Quant Researcher:** An investment manager stamps a file containing his portfolio weights each time the portfolio is rebalanced. Later these stamps create a verifiable portfolio history, proving the manager's strategy and outputs weren't retrofitted, revised after-the-fact, or selectively presented.
**Index Calculation Agent:** A index calculator stamps a file of portfolio weights at each rebalance. Later these stamps provide a verifiable audit trail for the index weights over time. 

## Verifying a Stamp

To verify a stamp, a user with a copy of the data:

1. Computes the hash of the data.
2. Retrieves the corresponding on-chain stamp by looking the hash up via vBase tools or the public smart contract.
3. Confirms the timestamp on chain is the same or earlier than the claimed creation or publication date of the data.
4. (optional) Confirms each file in a dataset contains a corresponding blockchain stamp.  

vBase automates this through its validation API and web tools. 


## Security and Trust Model

* **Immutable Ledger:** All stamps are anchored to a public blockchain (Polygon) — ensuring permanent, verifiable timestamps.
* **Privacy Preserved:** Only the hash, not the data itself, is published; sensitive content never leaves your control.
* **Tamper Detection:** Any alteration to the data — even a single byte — changes the fingerprint, immediately exposing any revisions.
* **Independent Verifiability:** Anyone can verify a stamp using the blockchain record; they don't need to rely on vBase.


## Best Practices

* Stamp **raw and derived** data (both original and model output).
* Use **collection IDs** to group related versions (e.g., “Mean Reversion Signal” or “Sentiment Scores”).
* Publish your user ID in investor decks, reports, or academic work.


## Frequently Asked Questions

**Do I need to deal with cryptocurrencies?**
No. vBase pays blockchain transaction costs on your behalf, so you don’t need crypto to use it.

**Can I delete or replace a stamp?**
No — stamps are permanent, but you can issue a new one for revised data.

**What if my data changes after stamping?**
The fingerprint will differ. If you publish the fingerprint of the revised data, it will be clear when the data changed. 

**Is my data exposed?**
No, only the hash is public. The content itself remains private. A hash is just a 256-bit fingerprint of your data. 


<!-- ## Next Steps

* [Try Stamping Your First Dataset →](../../quickstart/)
* [Learn How Verification Works →](../verification/)
* [See How Collections Organize Stamps →](./what-is-a-collection/)

-->