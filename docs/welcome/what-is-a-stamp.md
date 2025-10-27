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

<br>

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

* **Alternative Data Provider:** Stamp daily or even minute-by-minute data produced -- for example sentiment scores, developer activity, employment aggregates. Later, these stamps prove the dataset’s point-in-time integrity and completeness, as well as when the data would have been delivered.  
* **Quant Researcher:** Stamp each portfolio weights file at rebalance. Over time, these stamps form a verifiable strategy history, proving results weren’t retroactively changed or selectively presented.  
* **Fundamental Analyst:** Stamp research models and reports as they’re updated to document when investment theses were formed — proving that good calls were made without the benefit of hindsight.  
* **Agentic AI Model Builder:** Stamp each batch of AI predictions or outputs to establish a timestamped verifiable record of model behavior and predictive performance.  
* **Survey Data Provider:** Stamp raw survey responses and aggregate outputs to show an authentic, point-in-time record and eliminate concerns about survivorship bias, outlier removal and selective presentation.  
* **Index Calculation Agent:** Stamp portfolio weights or constituent files at every rebalance to maintain an immutable audit trail of index composition and methodology.  
* **Auditable Recordkeeping:** Stamp each month’s risk, compliance, or valuation report to preserve a verifiable, time-stamped record of what was known and reported at the time.  
* **Backtest Verification:** Stamp backtest results to show when a backtest was executed, the exact parameters, and how many runs were created. 
* **Project Deliverables:** Stamp client deliverables, milestone files, or datasets at delivery to create an immutable record of what was provided at each stage.






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
* Keep a secure copy of every file you stamp. These original files are what you’ll use later to prove exactly what data existed at the time of stamping. By default, the web app stores a copy automatically; when using the API, you can enable the storeStampedFile flag if you want vBase to retain a copy on your behalf.
* For track record verification, we can support stamping and displaying structured data, see [Building a Verified Track Record](../getting-started/verified-track-record.md)


## Frequently Asked Questions

**Do I need to deal with cryptocurrencies?**
No. vBase pays blockchain transaction costs on your behalf, so you don’t need crypto to use it.

**Can I delete or replace a stamp?**
No, stamps are permanent, but you can issue a new one for revised data.

**What if my data changes after stamping?**
The fingerprint will differ. If you publish the fingerprint of the revised data, it will be clear when the data changed. 

**Is my data exposed?**
No, only the hash is public. The content itself remains private. A hash is just a 256-bit fingerprint of your data. 


<!-- ## Next Steps

* [Try Stamping Your First Dataset →](../../quickstart/)
* [Learn How Verification Works →](../verification/)
* [See How Collections Organize Stamps →](./what-is-a-collection/)

-->