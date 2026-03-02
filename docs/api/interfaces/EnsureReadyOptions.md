[**starkzap**](../README.md)

***

[starkzap](../globals.md) / EnsureReadyOptions

# Interface: EnsureReadyOptions

Defined in: [src/types/wallet.ts:143](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/types/wallet.ts#L143)

Options for `wallet.ensureReady()`.

## Example

```ts
await wallet.ensureReady({
  deploy: "if_needed",
  feeMode: "sponsored",
  onProgress: (e) => console.log(e.step)
});
```

## Properties

### deploy?

> `optional` **deploy**: [`DeployMode`](../type-aliases/DeployMode.md)

Defined in: [src/types/wallet.ts:145](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/types/wallet.ts#L145)

When to deploy (default: "if_needed")

***

### feeMode?

> `optional` **feeMode**: [`FeeMode`](../type-aliases/FeeMode.md)

Defined in: [src/types/wallet.ts:147](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/types/wallet.ts#L147)

How to pay for deployment if needed (default: wallet's default)

***

### onProgress()?

> `optional` **onProgress**: (`event`) => `void`

Defined in: [src/types/wallet.ts:149](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/types/wallet.ts#L149)

Callback for progress updates

#### Parameters

##### event

[`ProgressEvent`](ProgressEvent.md)

#### Returns

`void`
