[**starkzap**](../README.md)

***

[starkzap](../globals.md) / SwapInput

# Type Alias: SwapInput

> **SwapInput** = `Omit`\<[`SwapRequest`](SwapRequest.md), `"chainId"` \| `"takerAddress"`\> & `object`

Defined in: [src/swap/interface.ts:45](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/swap/interface.ts#L45)

User-facing swap input accepted by wallet helpers.

Wallet methods auto-fill:
- `chainId` from the connected wallet chain
- `takerAddress` from the connected wallet address

## Type Declaration

### chainId?

> `optional` **chainId**: [`ChainId`](../classes/ChainId.md)

### takerAddress?

> `optional` **takerAddress**: [`Address`](Address.md)

### provider?

> `optional` **provider**: [`SwapProvider`](SwapProvider.md) \| `string`

Optional source provider or provider id; wallet default is used when omitted.
