[**starkzap**](../README.md)

***

[starkzap](../globals.md) / EkuboSwapProviderOptions

# Interface: EkuboSwapProviderOptions

Defined in: [src/swap/ekubo.ts:58](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/swap/ekubo.ts#L58)

## Properties

### apiBase?

> `optional` **apiBase**: `string`

Defined in: [src/swap/ekubo.ts:60](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/swap/ekubo.ts#L60)

Optional Ekubo quoter base URL override.

***

### fetcher()?

> `optional` **fetcher**: (`input`, `init?`) => `Promise`\<`Response`\>

Defined in: [src/swap/ekubo.ts:62](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/swap/ekubo.ts#L62)

Optional fetch implementation override for custom runtimes/tests.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

#### Parameters

##### input

`URL` | `RequestInfo`

##### init?

`RequestInit`

#### Returns

`Promise`\<`Response`\>
