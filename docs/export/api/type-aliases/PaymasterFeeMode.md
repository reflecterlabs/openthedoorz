[**starkzap**](../README.md)

***

[starkzap](../globals.md) / PaymasterFeeMode

# Type Alias: PaymasterFeeMode

> **PaymasterFeeMode** = `StarknetFeeMode`

Defined in: [src/types/sponsorship.ts:25](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/types/sponsorship.ts#L25)

Fee mode for paymaster transactions.
- `{ mode: 'sponsored' }`: AVNU paymaster covers gas
- `{ mode: 'default', gasToken: '0x...' }`: Pay in specified token

## Example

```ts
// Sponsored (gasless)
{ mode: 'sponsored' }

// Pay in STRK
{ mode: 'default', gasToken: STRK_ADDRESS }
```
