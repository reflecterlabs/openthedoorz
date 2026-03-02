[**starkzap**](../README.md)

***

[starkzap](../globals.md) / DeployOptions

# Interface: DeployOptions

Defined in: [src/types/wallet.ts:155](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/types/wallet.ts#L155)

Options for `wallet.deploy()`

## Properties

### feeMode?

> `optional` **feeMode**: [`FeeMode`](../type-aliases/FeeMode.md)

Defined in: [src/types/wallet.ts:157](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/types/wallet.ts#L157)

How fees are paid (default: "user_pays")

***

### timeBounds?

> `optional` **timeBounds**: [`PaymasterTimeBounds`](PaymasterTimeBounds.md)

Defined in: [src/types/wallet.ts:159](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/types/wallet.ts#L159)

Optional time bounds for paymaster-sponsored deployment
