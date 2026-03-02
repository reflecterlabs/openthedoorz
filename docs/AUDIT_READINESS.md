# Open The Doorz — Audit Readiness Dossier

## 1) Scope and Objective

This dossier documents the current state of the Open The Doorz repository for technical audit and delivery review.

Audit objective:
- Verify that the repository identity, architecture, operational docs, and build/test gates are aligned with Open The Doorz.
- Confirm that core SDK and examples are operational with reproducible commands.
- Capture known boundaries and deferred items explicitly.

## 2) Product Identity and Positioning

Repository focus:
- Open The Doorz financial infrastructure SDK on Starknet.
- Core pillars: wallet onboarding, neo-banking virtual accounts, on-ramp rails (SPEI flow), and DeFi treasury primitives.

Brand alignment status:
- Main SDK class exposed as `OpenTheDoorz`.
- Backward compatibility alias preserved as `StarkZap`.
- Landing + dashboard flow updated in web example (`/` and `/dash`).
- Root metadata and docs updated to Open The Doorz narrative.

## 3) Technical Architecture Summary

Core modules:
- `src/sdk.ts`: orchestration and module composition.
- `src/banking/*`: virtual account operations.
- `src/onramp/*`: fiat-to-crypto intake flow interfaces.
- `src/defi/*`: yield strategy primitives.
- `src/wallet/*`, `src/tx/*`, `src/erc20/*`, `src/staking/*`: foundational Starknet operations.

Examples:
- `examples/web`: executive landing + operational dashboard.
- `examples/server`: Privy wallet/sign proxy + AVNU paymaster proxy.
- `examples/mobile`: Expo-based integration sample.

## 4) Delivery Controls and Quality Gates

Primary local gates:
- `npm run typecheck`
- `npm test`
- `npm run build`

Pipeline posture:
- CI workflows present under `.github/workflows/` for quality and release automation.
- Documentation export and API generation flows scripted.

## 5) Operational Readiness

Environment requirements:
- Root `.env` for local integration paths.
- Server requires `PRIVY_APP_ID`, `PRIVY_APP_SECRET`, `AVNU_API_KEY`.

Routing behavior (web + server examples):
- Web landing: `/`
- Web dashboard: `/dash` (with redirect support for `/dash` → `/dash/`)
- Server health: `/api/health`
- Server root: informational JSON payload

Deployment route hardening:
- `examples/web/vercel.json` contains rewrite support.
- `examples/web/public/_redirects` contains static redirect for hosts such as Cloudflare Pages.

## 6) Risks, Constraints, and Explicit Boundaries

Known constraints:
- Generated docs and preset artifacts must not be hand-edited (`docs/api/**`, `docs/export/**`, preset files).
- Release/publish actions require explicit human approval.
- Real banking/KYC/AML integrations are represented as SDK/domain scaffolding and examples, not regulated production connectors.

Compatibility policy:
- Existing integrations importing from `starkzap` remain supported.
- New implementation language and docs prioritize Open The Doorz naming.

## 7) Evidence Index

Key references for audit walkthrough:
- `README.md`
- `docs/guide.md`
- `OpenTheDoorz/ARCHITECTURE.md`
- `OpenTheDoorz/API_ENTERPRISE.md`
- `OpenTheDoorz/PIPELINE.md`
- `OpenTheDoorz/RUNBOOK.md`
- `examples/web/index.html`
- `examples/web/dash/index.html`
- `examples/server/server.ts`

## 8) Auditor Checklist

- [ ] Branding and metadata reflect Open The Doorz.
- [ ] Core SDK build and tests are passing.
- [ ] Docs in `docs/` map to implementation reality.
- [ ] Web and server examples boot and respond on expected routes.
- [ ] Compatibility alias and migration posture are documented.
