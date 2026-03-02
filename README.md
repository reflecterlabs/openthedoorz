# Open The Doorz — Financial infrastructure for LatAm on Starknet

<img width="1200" height="675" alt="Twitter post - 3 (1)" src="https://github.com/user-attachments/assets/66df6de6-b0b8-4c83-8589-aeb53927451e" />

</div>

---

Bring neo-banking rails, on-ramp flows, treasury DeFi, and Starknet wallet infrastructure to any web or mobile app in minutes. One TypeScript SDK: onboarding, wallet abstraction, ERC20, staking, swaps, and sponsored transactions — with enterprise-ready flows for **web**, **mobile**, and **Node.js** backends.

> This repository is now aligned to **Open The Doorz**. Backward compatibility is preserved through the `StarkZap` alias and existing `starkzap` import paths where required.

**Core docs in this repo:** [docs/guide.md](docs/guide.md) · [OpenTheDoorz/ARCHITECTURE.md](OpenTheDoorz/ARCHITECTURE.md) · [OpenTheDoorz/RUNBOOK.md](OpenTheDoorz/RUNBOOK.md)

**Audit package:** [docs/AUDIT_READINESS.md](docs/AUDIT_READINESS.md)

**Working examples:** [examples/web](examples/web) · [examples/mobile](examples/mobile) · [examples/server](examples/server)

---

## Installation

```bash
npm install starkzap
```

Peer dependencies (installed automatically with `starkzap`):

- [`starknet`](https://www.npmjs.com/package/starknet) (v9+) — Starknet.js core (installed with `starkzap`)
- [`@cartridge/controller`](https://www.npmjs.com/package/@cartridge/controller) — optional peer, only needed for Cartridge support

For specific integrations, you may need:

- **Privy** (server): `npm install @privy-io/node` — see `examples/server`
- **Privy** (React Native / Expo): see the [Privy docs](https://docs.privy.io) for the Expo SDK
- **AVNU Paymaster**: no extra package; configure a paymaster URL — see `examples/server` and `docs/guide.md`

Compatibility package usage remains `starkzap` on npm. Internally, the main class is now `OpenTheDoorz` (with `StarkZap` alias exported for compatibility).

---

## Quick Start

```typescript
import {
  OpenTheDoorz,
  StarkSigner,
  OnboardStrategy,
  Amount,
  fromAddress,
  sepoliaTokens,
} from "starkzap";

const sdk = new OpenTheDoorz({ network: "sepolia" });

const { wallet } = await sdk.onboard({
  strategy: OnboardStrategy.Signer,
  account: { signer: new StarkSigner("0xYOUR_PRIVATE_KEY") },
  deploy: "if_needed",
});

const STRK = sepoliaTokens.STRK;
const balance = await wallet.balanceOf(STRK);
console.log(balance.toFormatted()); // "150.25 STRK"

const tx = await wallet.transfer(STRK, [
  { to: fromAddress("0xRECIPIENT"), amount: Amount.parse("10", STRK) },
]);
await tx.wait();
```

For onboarding flows (Privy, Cartridge, enterprise operations) and more examples, see [docs/guide.md](docs/guide.md).

---

## Documentation

All implementation and operations docs for this repository are tracked locally under `docs/` and `OpenTheDoorz/`.

- [SDK Guide](docs/guide.md)
- [Audit Readiness](docs/AUDIT_READINESS.md)
- [Architecture](OpenTheDoorz/ARCHITECTURE.md)
- [Enterprise API](OpenTheDoorz/API_ENTERPRISE.md)
- [Pipeline](OpenTheDoorz/PIPELINE.md)
- [Runbook](OpenTheDoorz/RUNBOOK.md)

---

## Examples

The repo includes web, mobile, and server examples in `examples/`. See the [Examples docs](https://docs.starknet.io/build/starkzap/examples) for run instructions and details.

---

## Contributors✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/0xlucqs"><img src="https://avatars.githubusercontent.com/u/70894690?v=4?s=100" width="100px;" alt="0xLucqs"/><br /><sub><b>0xLucas</b></sub></a><br /><a href="https://github.com/keep-starknet-strange/starkzap/commits?author=0xLucqs" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/micbakos"><img src="https://avatars.githubusercontent.com/u/6217006?v=4?s=100" width="100px;" alt="micbakos"/><br /><sub><b>micbakos</b></sub></a><br /><a href="https://github.com/keep-starknet-strange/starkzap/commits?author=micbakos" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/0xsisyfos"><img src="https://avatars.githubusercontent.com/u/107465625?v=4?s=100" width="100px;" alt="0xsisyfos"/><br /><sub><b>0xsisyfos</b></sub></a><br /><a href="https://github.com/keep-starknet-strange/starkzap/commits?author=0xsisyfos" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Akashneelesh"><img src="https://avatars.githubusercontent.com/u/66639153?v=4?s=100" width="100px;" alt="Akashneelesh"/><br /><sub><b>Akashneelesh</b></sub></a><br /><a href="https://github.com/Akashneelesh/awesome-starkzap/commits?author=Akashneelesh" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/abdelhamidbakhta"><img src="https://avatars.githubusercontent.com/u/45264458?v=4?s=100" width="100px;" alt="Abdel @ StarkWare "/><br /><sub><b>Abdel @ StarkWare </b></sub></a><br /><a href="https://github.com/keep-starknet-strange/alexandria/commits?author=abdelhamidbakhta" title="Code">💻</a></td>

    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>


<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

---

## Contributing

```bash
npm install
npm run typecheck
npm test
npm run test:integration   # requires starknet-devnet
npm run lint
npm run prettier
npm run build
```

Token and validator presets can be regenerated with `npm run generate:tokens`, `npm run generate:tokens:sepolia`, `npm run generate:validators`, and `npm run generate:validators:sepolia`.

---

## License

[MIT](LICENSE) — 0xLucqs
