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

### Default-Network Tests

1. Change to the working directory:

   ```bash
   cd ~/validityBase/vbase-ts
   ```

1. Run tests against Hardhat's default in-process network:

   1. Run all tests, including the stress suite:

      ```bash
      npm run test
      ```

   1. Run a specific named test:

      ```bash
      npm run test -- --grep "Executes addSet$"
      ```

### Stress Tests

Before running any proxy stress test, start an RPC service on `localhost:8545`.
The proxy scripts listen on port 8546 and forward requests to that service.

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

## Classes

### ConfirmationTimeoutError

Defined in: [src/vbase/transactions.ts:122](https://github.com/validityBase/vbase-ts/blob/83c945084f61493e3d7d8ef052fcf8168d94f62c/src/vbase/transactions.ts#L122)

Thrown by escalatedSendTransaction() when no receipt is found after the
initial send and all gas-price escalations. The transaction may be pending
or mined, so the outcome is uncertain and the credit is NOT refunded.

#### Extends

- `Error`

#### Constructors

##### new ConfirmationTimeoutError()

> **new ConfirmationTimeoutError**(`maxEscalations`, `txHashes`): [`ConfirmationTimeoutError`](README.md#confirmationtimeouterror)

Defined in: [src/vbase/transactions.ts:129](https://github.com/validityBase/vbase-ts/blob/83c945084f61493e3d7d8ef052fcf8168d94f62c/src/vbase/transactions.ts#L129)

###### Parameters

###### maxEscalations

`number`

###### txHashes

readonly `string`[]

###### Returns

[`ConfirmationTimeoutError`](README.md#confirmationtimeouterror)

###### Overrides

`Error.constructor`

#### Properties

##### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

###### Inherited from

`Error.message`

##### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

###### Inherited from

`Error.name`

##### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

###### Inherited from

`Error.stack`

##### txHashes

> `readonly` **txHashes**: readonly `string`[]

Defined in: [src/vbase/transactions.ts:128](https://github.com/validityBase/vbase-ts/blob/83c945084f61493e3d7d8ef052fcf8168d94f62c/src/vbase/transactions.ts#L128)

Every submitted transaction hash: the initial send and each same-nonce
replacement. At most one can be mined; query their receipts to determine
the outcome before resubmitting.

##### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Defined in: node\_modules/@types/node/globals.d.ts:143

Optional override for formatting stack traces

###### Parameters

###### err

`Error`

###### stackTraces

`CallSite`[]

###### Returns

`any`

###### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

###### Inherited from

`Error.prepareStackTrace`

##### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/@types/node/globals.d.ts:145

###### Inherited from

`Error.stackTraceLimit`

#### Methods

##### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Defined in: node\_modules/@types/node/globals.d.ts:136

Create .stack property on a target object

###### Parameters

###### targetObject

`object`

###### constructorOpt?

`Function`

###### Returns

`void`

###### Inherited from

`Error.captureStackTrace`

***

### MinedRevertError

Defined in: [src/vbase/transactions.ts:102](https://github.com/validityBase/vbase-ts/blob/83c945084f61493e3d7d8ef052fcf8168d94f62c/src/vbase/transactions.ts#L102)

Thrown by escalatedSendTransaction() when a submitted transaction is mined
with a revert status. Gas was spent regardless of the revert, so the credit
is NOT refunded.

#### Extends

- `Error`

#### Constructors

##### new MinedRevertError()

> **new MinedRevertError**(`txHash`, `status`): [`MinedRevertError`](README.md#minedreverterror)

Defined in: [src/vbase/transactions.ts:107](https://github.com/validityBase/vbase-ts/blob/83c945084f61493e3d7d8ef052fcf8168d94f62c/src/vbase/transactions.ts#L107)

###### Parameters

###### txHash

`string`

###### status

`unknown`

###### Returns

[`MinedRevertError`](README.md#minedreverterror)

###### Overrides

`Error.constructor`

#### Properties

##### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

###### Inherited from

`Error.message`

##### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

###### Inherited from

`Error.name`

##### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

###### Inherited from

`Error.stack`

##### status

> `readonly` **status**: `unknown`

Defined in: [src/vbase/transactions.ts:106](https://github.com/validityBase/vbase-ts/blob/83c945084f61493e3d7d8ef052fcf8168d94f62c/src/vbase/transactions.ts#L106)

The receipt's on-chain status value (e.g. `0n`).

##### txHash

> `readonly` **txHash**: `string`

Defined in: [src/vbase/transactions.ts:104](https://github.com/validityBase/vbase-ts/blob/83c945084f61493e3d7d8ef052fcf8168d94f62c/src/vbase/transactions.ts#L104)

Hash of the reverted transaction.

##### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Defined in: node\_modules/@types/node/globals.d.ts:143

Optional override for formatting stack traces

###### Parameters

###### err

`Error`

###### stackTraces

`CallSite`[]

###### Returns

`any`

###### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

###### Inherited from

`Error.prepareStackTrace`

##### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/@types/node/globals.d.ts:145

###### Inherited from

`Error.stackTraceLimit`

#### Methods

##### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Defined in: node\_modules/@types/node/globals.d.ts:136

Create .stack property on a target object

###### Parameters

###### targetObject

`object`

###### constructorOpt?

`Function`

###### Returns

`void`

###### Inherited from

`Error.captureStackTrace`

***

### PreSubmissionError

Defined in: [src/vbase/transactions.ts:61](https://github.com/validityBase/vbase-ts/blob/83c945084f61493e3d7d8ef052fcf8168d94f62c/src/vbase/transactions.ts#L61)

Thrown by escalatedSendTransaction() when there is positive evidence that no
transaction reached the network: fetching the gas price or nonce failed, or
every initial send attempt was definitively rejected (e.g. insufficient
funds, or a node's pre-broadcast gas check such as "intrinsic gas too
low"). Callers may treat the transaction as not submitted and refund the
credit.

#### Extends

- `Error`

#### Constructors

##### new PreSubmissionError()

> **new PreSubmissionError**(`cause`): [`PreSubmissionError`](README.md#presubmissionerror)

Defined in: [src/vbase/transactions.ts:68](https://github.com/validityBase/vbase-ts/blob/83c945084f61493e3d7d8ef052fcf8168d94f62c/src/vbase/transactions.ts#L68)

###### Parameters

###### cause

`unknown`

###### Returns

[`PreSubmissionError`](README.md#presubmissionerror)

###### Overrides

`Error.constructor`

#### Properties

##### cause

> `readonly` **cause**: `unknown`

Defined in: [src/vbase/transactions.ts:67](https://github.com/validityBase/vbase-ts/blob/83c945084f61493e3d7d8ef052fcf8168d94f62c/src/vbase/transactions.ts#L67)

The underlying error, for inspecting its type, code, and stack. When the
initial send exhausts its retry budget, this is the retry-budget error,
whose own `cause` is the final provider error.

##### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

###### Inherited from

`Error.message`

##### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

###### Inherited from

`Error.name`

##### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

###### Inherited from

`Error.stack`

##### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Defined in: node\_modules/@types/node/globals.d.ts:143

Optional override for formatting stack traces

###### Parameters

###### err

`Error`

###### stackTraces

`CallSite`[]

###### Returns

`any`

###### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

###### Inherited from

`Error.prepareStackTrace`

##### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/@types/node/globals.d.ts:145

###### Inherited from

`Error.stackTraceLimit`

#### Methods

##### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Defined in: node\_modules/@types/node/globals.d.ts:136

Create .stack property on a target object

###### Parameters

###### targetObject

`object`

###### constructorOpt?

`Function`

###### Returns

`void`

###### Inherited from

`Error.captureStackTrace`

***

### SubmissionUncertainError

Defined in: [src/vbase/transactions.ts:85](https://github.com/validityBase/vbase-ts/blob/83c945084f61493e3d7d8ef052fcf8168d94f62c/src/vbase/transactions.ts#L85)

Thrown by escalatedSendTransaction() when the initial send never returned a
transaction hash, but at least one attempt failed in a way that does not
rule out the node having accepted the transaction: a timeout, network or
server error, an "already known" response, or any unrecognized error. The
transaction may be pending or mined, so the credit is NOT refunded; check
the account's nonce and pending transactions before resubmitting.

#### Extends

- `Error`

#### Constructors

##### new SubmissionUncertainError()

> **new SubmissionUncertainError**(`cause`): [`SubmissionUncertainError`](README.md#submissionuncertainerror)

Defined in: [src/vbase/transactions.ts:88](https://github.com/validityBase/vbase-ts/blob/83c945084f61493e3d7d8ef052fcf8168d94f62c/src/vbase/transactions.ts#L88)

###### Parameters

###### cause

`unknown`

###### Returns

[`SubmissionUncertainError`](README.md#submissionuncertainerror)

###### Overrides

`Error.constructor`

#### Properties

##### cause

> `readonly` **cause**: `unknown`

Defined in: [src/vbase/transactions.ts:87](https://github.com/validityBase/vbase-ts/blob/83c945084f61493e3d7d8ef052fcf8168d94f62c/src/vbase/transactions.ts#L87)

The underlying error; structured as [PreSubmissionError.cause](README.md#cause).

##### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

###### Inherited from

`Error.message`

##### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

###### Inherited from

`Error.name`

##### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

###### Inherited from

`Error.stack`

##### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Defined in: node\_modules/@types/node/globals.d.ts:143

Optional override for formatting stack traces

###### Parameters

###### err

`Error`

###### stackTraces

`CallSite`[]

###### Returns

`any`

###### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

###### Inherited from

`Error.prepareStackTrace`

##### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/@types/node/globals.d.ts:145

###### Inherited from

`Error.stackTraceLimit`

#### Methods

##### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Defined in: node\_modules/@types/node/globals.d.ts:136

Create .stack property on a target object

###### Parameters

###### targetObject

`object`

###### constructorOpt?

`Function`

###### Returns

`void`

###### Inherited from

`Error.captureStackTrace`

## Functions

### escalatedSendTransaction()

> **escalatedSendTransaction**(`web3`, `signer`, `to`, `data`, `logger`, `gasLimit`?, `maxGasLimit`?): `Promise`\<`TransactionReceipt`\>

Defined in: [src/vbase/transactions.ts:884](https://github.com/validityBase/vbase-ts/blob/83c945084f61493e3d7d8ef052fcf8168d94f62c/src/vbase/transactions.ts#L884)

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

##### maxGasLimit?

`number`

Optional hard ceiling for the gas limit. The
  initial gas limit and every gas-limit increase on retry are capped at it.

#### Returns

`Promise`\<`TransactionReceipt`\>

- A promise that resolves to the transaction receipt.

#### Throws

If fetching the gas price or nonce fails, or
  every initial send attempt was definitively rejected, so no transaction
  reached the network. The original error is available as `cause`.

#### Throws

If the initial send fails but an attempt
  may have reached the node (e.g. a timeout). The transaction may be pending
  or mined. The original error is available as `cause`.

#### Throws

If a submitted transaction is mined with a revert
  status. The reverted hash and status are available as `txHash` and `status`.

#### Throws

If no receipt is found after the initial
  send and all escalations. Every submitted hash is available as `txHashes`.

***

### estimateGasLimit()

> **estimateGasLimit**(`data`, `logger`): `number`

Defined in: [src/vbase/transactions.ts:723](https://github.com/validityBase/vbase-ts/blob/83c945084f61493e3d7d8ef052fcf8168d94f62c/src/vbase/transactions.ts#L723)

#### Parameters

##### data

`string`

##### logger

`Logger`\<`never`, `boolean`\>

#### Returns

`number`

***

### jsonPrettyStringify()

> **jsonPrettyStringify**(`obj`): `string`

Defined in: [src/vbase/utils.ts:54](https://github.com/validityBase/vbase-ts/blob/83c945084f61493e3d7d8ef052fcf8168d94f62c/src/vbase/utils.ts#L54)

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

Defined in: [src/vbase/utils.ts:14](https://github.com/validityBase/vbase-ts/blob/83c945084f61493e3d7d8ef052fcf8168d94f62c/src/vbase/utils.ts#L14)

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
