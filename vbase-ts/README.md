**@validity-base/vbase-ts**

***

# vbase-ts

vBase TypeScript Software Development Kit (SDK)

---

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE.txt](_media/LICENSE.txt) file for details.

## Introduction

vBase maintains a global auditable record of when data was created, by whom, and how it has changed (collectively, “data provenance”). Data producers can prove the provenance of their data to any external party, increasing its value and marketability. Data consumers can ensure the integrity of historical data and any derivative calculations. The result is trustworthy information that can be put into production quickly without expensive and time-consuming trials.

Verifiable provenance establishes the credibility of data and calculations. For example, if you wish to prove investment skill, the recipient must be sure they are receiving a complete and accurate record of your timestamped trades or portfolios.

vBase resolves several expensive market failures common to financial data. Some of the areas that benefit include:

- Provably point-in-time datasets
- Auditable investing track records
- Sound backtests, historical simulations, and time-series modeling

vBase services do not require access to the data itself, assuring privacy. They also do not rely on centralized intermediaries, eliminating the technical, operating, and business risks of a trusted party controlling your data and its validation. vBase ensures data security and interoperability that is unattainable with legacy centralized systems. It does so by storing digital fingerprints of data, metadata, and revisions on secure public blockchains.

With vBase, creating and consuming provably correct data is as easy as pressing a button.

## Tests

### Unit Tests

1. Change to the working directory:

   ```bash
   cd ~/validityBase/vbase-ts
   ```

1. Run localhost tests:

   1. Run all tests:

      ```bash
      npm run test
      ```

   1. Run a specific named test:

      ```bash
      npm run test -- --grep "Executes addSet$"
      ```

### Stress Tests

1. Run general RPC stress tests:

   - Terminal 1:

   ```
   npm run start:proxy-stress
   ```

   - Terminals 2+:

   ```
   npm run test:stress:proxy
   ```

1. Run RPC delay stress tests:

   - Terminal 1:

   ```
   npm run start:proxy-stress:long-delay
   ```

   - Terminals 2+:

   ```
   npm run test:stress:proxy
   ```

1. Run RPC high failure stress tests:

   - Terminal 1:

   ```
   npm run start:proxy-stress:high-failure
   ```

   - Terminals 2+:

   ```
   npm run test:stress:proxy
   ```

## Cleanup

1. Format:

   ```bash
   npm run format:write
   ```

1. Lint:

   ```bash
   npm run lint:write
   ```

## Functions

### escalatedSendTransaction()

> **escalatedSendTransaction**(`web3`, `signer`, `to`, `data`, `logger`, `gasLimit`?): `Promise`\<`TransactionReceipt`\>

Defined in: [transactions.ts:315](https://github.com/validityBase/vbase-ts/blob/00ba15301d369d59fd7ee1b02ed0a37d1b29525f/src/vbase/transactions.ts#L315)

Sends an Ethereum transaction with escalation logic to increase gas price if needed.

#### Parameters

##### web3

`Web3`

The Web3 instance used for interacting with the blockchain.

##### signer

`Signer`

The Ethereum signer responsible for signing the transaction.

##### to

`string`

The recipient Ethereum address.

##### data

`string`

The encoded transaction data.

##### logger

`Logger`\<`never`, `boolean`\>

The logger instance for debugging and error tracking.

##### gasLimit?

`number`

Optional gas limit for the transaction.

#### Returns

`Promise`\<`TransactionReceipt`\>

- A promise that resolves to the transaction hash.

#### Throws

If the transaction fails to send or encounters an error.

***

### jsonPrettyStringify()

> **jsonPrettyStringify**(`obj`): `string`

Defined in: [utils.ts:54](https://github.com/validityBase/vbase-ts/blob/00ba15301d369d59fd7ee1b02ed0a37d1b29525f/src/vbase/utils.ts#L54)

Converts an object into a pretty-printed JSON string.

This function is useful for logging and debugging by formatting objects
with indentation for better readability.

#### Parameters

##### obj

`any`

The object to be converted into a formatted JSON string.

#### Returns

`string`

A JSON-formatted string with indentation for readability.

***

### serializeBigInts()

> **serializeBigInts**(`obj`): `any`

Defined in: [utils.ts:14](https://github.com/validityBase/vbase-ts/blob/00ba15301d369d59fd7ee1b02ed0a37d1b29525f/src/vbase/utils.ts#L14)

Recursively serializes BigInt values within an object, array, or nested structure.

This function converts all `bigint` values to their string representation with an `"n"` suffix,
ensuring compatibility with JSON serialization or systems that do not support native BigInts.

#### Parameters

##### obj

`any`

The object, array, or value that may contain BigInt values.

#### Returns

`any`

A new object, array, or value where all BigInts have been converted to strings.
