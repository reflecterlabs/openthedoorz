[**starkzap**](../README.md)

***

[starkzap](../globals.md) / OnboardPrivyResolveResult

# Interface: OnboardPrivyResolveResult

Defined in: [src/types/onboard.ts:42](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/types/onboard.ts#L42)

## Properties

### walletId

> **walletId**: `string`

Defined in: [src/types/onboard.ts:43](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/types/onboard.ts#L43)

***

### publicKey

> **publicKey**: `string`

Defined in: [src/types/onboard.ts:44](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/types/onboard.ts#L44)

***

### serverUrl?

> `optional` **serverUrl**: `string`

Defined in: [src/types/onboard.ts:45](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/types/onboard.ts#L45)

***

### rawSign()?

> `optional` **rawSign**: (`walletId`, `messageHash`) => `Promise`\<`string`\>

Defined in: [src/types/onboard.ts:46](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/types/onboard.ts#L46)

#### Parameters

##### walletId

`string`

##### messageHash

`string`

#### Returns

`Promise`\<`string`\>

***

### headers?

> `optional` **headers**: `PrivySigningHeaders`

Defined in: [src/types/onboard.ts:47](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/types/onboard.ts#L47)

***

### buildBody?

> `optional` **buildBody**: `PrivySigningBody`

Defined in: [src/types/onboard.ts:48](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/types/onboard.ts#L48)

***

### requestTimeoutMs?

> `optional` **requestTimeoutMs**: `number`

Defined in: [src/types/onboard.ts:49](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/types/onboard.ts#L49)

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/onboard.ts:50](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/types/onboard.ts#L50)
