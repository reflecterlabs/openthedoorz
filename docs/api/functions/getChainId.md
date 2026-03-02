[**starkzap**](../README.md)

***

[starkzap](../globals.md) / getChainId

# Function: getChainId()

> **getChainId**(`provider`): `Promise`\<[`ChainId`](../classes/ChainId.md)\>

Defined in: [src/types/config.ts:102](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/types/config.ts#L102)

Detect the chain ID from an RPC provider.

## Parameters

### provider

[`RpcProvider`](../interfaces/RpcProvider.md)

The RPC provider to query

## Returns

`Promise`\<[`ChainId`](../classes/ChainId.md)\>

The detected ChainId

## Throws

Error if the provider returns an unsupported chain
