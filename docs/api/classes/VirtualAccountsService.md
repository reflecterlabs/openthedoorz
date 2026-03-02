[**starkzap**](../README.md)

***

[starkzap](../globals.md) / VirtualAccountsService

# Class: VirtualAccountsService

Defined in: [src/banking/virtual\_accounts.ts:59](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/banking/virtual_accounts.ts#L59)

## Constructors

### Constructor

> **new VirtualAccountsService**(): `VirtualAccountsService`

#### Returns

`VirtualAccountsService`

## Methods

### assign()

> **assign**(`input`): [`VirtualAccount`](../interfaces/VirtualAccount.md)

Defined in: [src/banking/virtual\_accounts.ts:62](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/banking/virtual_accounts.ts#L62)

#### Parameters

##### input

[`CreateVirtualAccountInput`](../interfaces/CreateVirtualAccountInput.md)

#### Returns

[`VirtualAccount`](../interfaces/VirtualAccount.md)

***

### getByUser()

> **getByUser**(`userId`): [`VirtualAccount`](../interfaces/VirtualAccount.md)[]

Defined in: [src/banking/virtual\_accounts.ts:74](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/banking/virtual_accounts.ts#L74)

#### Parameters

##### userId

`string`

#### Returns

[`VirtualAccount`](../interfaces/VirtualAccount.md)[]

***

### getByUserAndCountry()

> **getByUserAndCountry**(`userId`, `country`): [`VirtualAccount`](../interfaces/VirtualAccount.md) \| `null`

Defined in: [src/banking/virtual\_accounts.ts:84](https://github.com/reflecterlabs/openthedoorz/blob/df069cde44cff04ee84c73f00c7735db5bedde11/src/banking/virtual_accounts.ts#L84)

#### Parameters

##### userId

`string`

##### country

[`VirtualAccountCountry`](../type-aliases/VirtualAccountCountry.md)

#### Returns

[`VirtualAccount`](../interfaces/VirtualAccount.md) \| `null`
