# Exporting Signals from QuantConnect to vBase

Link your QuantConnect algorithm to validityBase (vBase) to create a verifiable, point‑in‑time audit trail of your strategy’s live portfolio targets. This guide mirrors our other How‑Tos and walks you through setup, usage, and troubleshooting for the QuantConnect **Signal Exports → vBase** integration.


---

## Who this is for

* QuantConnect users running live or paper algorithms who want to export portfolio targets to vBase.
* Anyone using QuantConnect who wants a **verifiable, point‑in‑time** record of signals for marketing, research reproducibility, or compliance.

> vBase creates a blockchain‑anchored audit trail of your signals and models. Data fingerprints (hashes) from your signals and models are made verifiably complete, point-in-time, and free from selective presentation. This allows you to build trust and showcase your work with confidence that it will be taken seriously. 

---

## Prerequisites

1. **vBase account & API Key**

   * Sign in to vBase and copy your API key from **[Account Settings](https://app.vbase.com/profile#account_settings)**.

2. **A vBase Collection**

   * Think of a *collection* as the dataset/strategy name where your stamped targets will live. Create one in **[Collections](https://app.vbase.com/profile#collections)** if you haven't previously set one up. 
   * You can also setup collections via our [REST API](../../vbase-py/api.md)

3. **QuantConnect project** running in live or paper trading.

4. **LEAN SDK** support for Signal Exports (built‑in on QuantConnect Cloud).

---

## What gets exported and stamped?

When you send **portfolio targets** from your algorithm, the vBase Signal Export builds a simple CSV in the form `sym,wt` (symbol, target weight). Under the hood, the provider derives weights from your `PortfolioTarget` inputs. This stamped CSV is the immutable record of your target portfolio at that moment.

> **Why weights?** Weights unambiguously capture your intended sizing regardless of current cash/holdings and are convenient for downstream performance dashboards and live tickers.

---

## Add the vBase Signal Export provider

Add the provider during algorithm **initialization**.

### Python

```python
from AlgorithmImports import *

class MyAlgo(QCAlgorithm):
    def initialize(self):
        api_key = self.get_parameter("VBASE_API_KEY")  # or hardcode for quick tests
        collection_name = "MyStrategy"

        # store_stamped_file=True -> vBase stores the stamped CSV for you
        # idempotent=False -> repeated identical exports will create distinct stamps (set True to de‑dupe)
        self.signal_export.add_signal_export_provider(
            VBaseSignalExport(api_key, collection_name, store_stamped_file=True, idempotent=False)
        )

    def on_data(self, data):
        # example: equal‑weight two assets
        targets = [
            PortfolioTarget("SPY", 0.5),
            PortfolioTarget("QQQ", 0.5)
        ]
        self.signal_export.set_target_portfolio(targets)
```

### C#

```csharp
using QuantConnect;
using QuantConnect.Algorithm;
using QuantConnect.Algorithm.Framework.Portfolio;
using QuantConnect.Algorithm.Framework.Portfolio.SignalExports;

public class MyAlgo : QCAlgorithm
{
    public override void Initialize()
    {
        var apiKey = GetParameter("VBASE_API_KEY");
        var collectionName = "MyStrategy";

        // storeStampedFile: true  | idempotent: false
        SignalExport.AddSignalExportProvider(
            new VBaseSignalExport(apiKey, collectionName, storeStampedFile: true, idempotent: false)
        );
    }

    public override void OnData(Slice data)
    {
        var targets = new List<PortfolioTarget>
        {
            new PortfolioTarget(Symbol.Create("SPY", SecurityType.Equity, Market.USA), 0.5m),
            new PortfolioTarget(Symbol.Create("QQQ", SecurityType.Equity, Market.USA), 0.5m)
        };
        SignalExport.SetTargetPortfolio(targets);
    }
}
```

---

## Provider arguments (quick reference)

| Argument                                  | Type   | Default | Description                                                                                                                                                   |
| ----------------------------------------- | ------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `api_key` / `apiKey`                      | string | —       | Your vBase API key (Account Settings).                                                                                                                        |
| `collection_name` / `collectionName`      | string | —       | The vBase collection to receive these stamps. Use one collection per strategy, unless you need separate feeds.                                                |
| `store_stamped_file` / `storeStampedFile` | bool   | `True`  | If `True`, vBase stores the stamped CSV for you (recommended). If `False`, you **must** store the exact stamped file yourself or you’ll lose verifiability.   |
| `idempotent`                              | bool   | `False` | If `True`, resending identical targets won’t create duplicate stamps.                                                                                         |

> You can register **multiple** signal export providers per algorithm if you need to broadcast to several destinations.

---

## Supported asset classes

All asset classes supported by your algorithm are supported by the vBase signal export provider. The export records the **target weights** you submit for each symbol.

---

## Usage patterns

* **Periodic rebalances**: schedule target exports (e.g., daily at 15:55) using QC’s scheduling helpers.
* **Event‑driven**: export right after signals are computed.
* **On fills**: after executions, export the *new* desired target portfolio.

> Tip: keep exports **idempotent** if your on‑bar logic may emit identical targets repeatedly.

---

## Verifying your stamps in vBase

1. Open the vBase app, go to **Stamped File Storage** in User Settings, and download a zip of your strategy history. 
2. Anyone can now load that archive into [https://app.vbase.com/verify/?method=collection](https://app.vbase.com/verify/?method=collection) to verify that the strategy history is completely, point-in-time, and free from selective presentation. 
3. Use the collection as a source for [live performance dashboards and a shareable live index](https://docs.vbase.com/use-case-how-tos/verified-track-record).

---

## Examples & demos

* Reference demonstration algorithms (Python and C#) that show adding the provider and sending targets.
* For CI/CD, pass your `VBASE_API_KEY` via project parameters or environment variables.

---

## Troubleshooting

**I don’t see stamps arriving in vBase**

* Confirm the provider was added in `initialize()` and that `set_target_portfolio()` is being called.
* Check that the `collection_name` matches an existing collection you own.
* Verify the API key and project parameter name.

**I set `store_stamped_file=False` and now I can’t verify**

* You must retain the **exact** stamped CSV emitted at export time. If it was lost or modified, the proof won’t match. Prefer `True` unless you have strict storage policies.

**Duplicate stamps**

* Set `idempotent=True` to de‑duplicate identical exports. In some cases idempotency will be undesirable if you wish to stamp portfolio weights identical to those you've stamped previously. 

**Symbols or weights look wrong**

* Ensure you’re constructing `PortfolioTarget` objects with *weights* (not quantities). If you need custom formatting, implement/override the provider’s CSV builder in your fork.

---

## Security & best practices

* Prefer **project parameters** or secret management to avoid hard‑coding API keys.
* Use **separate collections** for different strategies.
* Stamp **before** you trade if you want your intent on record; or **after** fills if you only want executed target states—both patterns are fine, just be consistent.

---

## Next steps

* Build a **vBase dashboard** or **live ticker** from your stamped targets. E-mail portfolios@vbase.com with your collection name to enable this. 
* Share a read‑only link with teammates or allocators.
* Explore automated backtest → stamp → live handoff pipelines using our SDKs.

---

## Related docs

* vBase: Collections, Origin Records, Dashboards (overview)
* QuantConnect: Signal Exports → vBase provider (reference)

---

*Questions?* Reach us on [support@vbase.com](mailto:support@vbase.com) or the vBase [Discord](https://discord.gg/THHst83J) channel.
