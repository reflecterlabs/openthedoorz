[**starkzap**](../README.md)

***

[starkzap](../globals.md) / SPEIProvider

# Class: SPEIProvider

Defined in: [src/onramp/mexico.ts:41](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/onramp/mexico.ts#L41)

## Constructors

### Constructor

> **new SPEIProvider**(`params`): `SPEIProvider`

Defined in: [src/onramp/mexico.ts:45](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/onramp/mexico.ts#L45)

#### Parameters

##### params

###### chainId

[`ChainId`](ChainId.md)

#### Returns

`SPEIProvider`

## Methods

### createDepositIntent()

> **createDepositIntent**(`input`): [`SpeiDepositIntent`](../interfaces/SpeiDepositIntent.md)

Defined in: [src/onramp/mexico.ts:49](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/onramp/mexico.ts#L49)

#### Parameters

##### input

[`CreateSpeiDepositInput`](../interfaces/CreateSpeiDepositInput.md)

#### Returns

[`SpeiDepositIntent`](../interfaces/SpeiDepositIntent.md)

***

### getIntent()

> **getIntent**(`intentId`): [`SpeiDepositIntent`](../interfaces/SpeiDepositIntent.md) \| `null`

Defined in: [src/onramp/mexico.ts:86](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/onramp/mexico.ts#L86)

#### Parameters

##### intentId

`string`

#### Returns

[`SpeiDepositIntent`](../interfaces/SpeiDepositIntent.md) \| `null`

***

### markFunded()

> **markFunded**(`intentId`): [`SpeiDepositIntent`](../interfaces/SpeiDepositIntent.md)

Defined in: [src/onramp/mexico.ts:100](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/onramp/mexico.ts#L100)

#### Parameters

##### intentId

`string`

#### Returns

[`SpeiDepositIntent`](../interfaces/SpeiDepositIntent.md)

***

### markSettled()

> **markSettled**(`intentId`): [`SpeiDepositIntent`](../interfaces/SpeiDepositIntent.md)

Defined in: [src/onramp/mexico.ts:113](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/onramp/mexico.ts#L113)

#### Parameters

##### intentId

`string`

#### Returns

[`SpeiDepositIntent`](../interfaces/SpeiDepositIntent.md)
