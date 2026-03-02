[**starkzap**](../README.md)

***

[starkzap](../globals.md) / AccountConfig

# Interface: AccountConfig

Defined in: [src/types/wallet.ts:55](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/types/wallet.ts#L55)

Full account configuration for connecting a wallet.

## Example

```ts
import { StarkSigner, OpenZeppelinPreset } from "@openthedoorz/sdk";

{
  signer: new StarkSigner(privateKey),
  accountClass: OpenZeppelinPreset, // optional, defaults to OpenZeppelin
}
```

## Properties

### signer

> **signer**: [`SignerInterface`](SignerInterface.md)

Defined in: [src/types/wallet.ts:57](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/types/wallet.ts#L57)

Signer for transaction signing

***

### accountClass?

> `optional` **accountClass**: [`AccountClassConfig`](AccountClassConfig.md)

Defined in: [src/types/wallet.ts:59](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/types/wallet.ts#L59)

Account class configuration (default: OpenZeppelin)
