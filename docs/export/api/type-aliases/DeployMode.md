[**starkzap**](../README.md)

***

[starkzap](../globals.md) / DeployMode

# Type Alias: DeployMode

> **DeployMode** = `"never"` \| `"if_needed"` \| `"always"`

Defined in: [src/types/wallet.ts:116](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/types/wallet.ts#L116)

When to deploy the account contract.
- `"never"`: Don't deploy, fail if not deployed
- `"if_needed"`: Deploy only if not already deployed
- `"always"`: Always attempt deployment
