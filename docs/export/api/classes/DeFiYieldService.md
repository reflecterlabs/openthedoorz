[**starkzap**](../README.md)

***

[starkzap](../globals.md) / DeFiYieldService

# Class: DeFiYieldService

Defined in: [src/defi/yield.ts:46](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/defi/yield.ts#L46)

## Constructors

### Constructor

> **new DeFiYieldService**(`params`): `DeFiYieldService`

Defined in: [src/defi/yield.ts:50](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/defi/yield.ts#L50)

#### Parameters

##### params

###### chainId

[`ChainId`](ChainId.md)

#### Returns

`DeFiYieldService`

## Methods

### listVaults()

> **listVaults**(): [`YieldVault`](../interfaces/YieldVault.md)[]

Defined in: [src/defi/yield.ts:54](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/defi/yield.ts#L54)

#### Returns

[`YieldVault`](../interfaces/YieldVault.md)[]

***

### estimateYearlyReturn()

> **estimateYearlyReturn**(`vaultId`, `amount`): `number`

Defined in: [src/defi/yield.ts:58](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/defi/yield.ts#L58)

#### Parameters

##### vaultId

`string`

##### amount

`number`

#### Returns

`number`

***

### openPosition()

> **openPosition**(`params`): [`YieldPosition`](../interfaces/YieldPosition.md)

Defined in: [src/defi/yield.ts:71](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/defi/yield.ts#L71)

#### Parameters

##### params

###### userId

`string`

###### vaultId

`string`

###### amount

`number`

#### Returns

[`YieldPosition`](../interfaces/YieldPosition.md)

***

### getPositionsByUser()

> **getPositionsByUser**(`userId`): [`YieldPosition`](../interfaces/YieldPosition.md)[]

Defined in: [src/defi/yield.ts:96](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/defi/yield.ts#L96)

#### Parameters

##### userId

`string`

#### Returns

[`YieldPosition`](../interfaces/YieldPosition.md)[]
