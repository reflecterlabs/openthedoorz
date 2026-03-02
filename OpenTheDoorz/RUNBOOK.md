# Open The Doorz — Runbook Operativo

## 1) Arranque rápido local

### Web (dashboard + presentación)

```bash
npm run dev:web
```

URLs:

- Dashboard operativo: `http://localhost:5173/`
- Landing ejecutiva: `http://localhost:5173/presentation.html`

### Backend (Privy + paymaster proxy)

```bash
cp examples/server/.env.example examples/server/.env
npm run dev:server
```

> Requiere completar `PRIVY_APP_ID`, `PRIVY_APP_SECRET`, `AVNU_API_KEY`.

### Full stack de ejemplo

```bash
npm run dev:all
```

## 2) Quality gate local (igual a pipeline)

```bash
npm run pipeline:local
```

Incluye:

1. `prettier:check`
2. `lint`
3. `typecheck`
4. `test`
5. `build:testnet`

## 3) Build / Deploy prep

### Build testnet

```bash
npm run build:testnet
```

### Preparación release mainnet

```bash
npm run deploy:mainnet
```

Esto deja:

- SDK compilado
- Web compilada
- docs exportadas

La publicación final queda en el pipeline `SDK Release` por tag `v*`.

## 4) Operación CI/CD

- CI base: `.github/workflows/ci.yml`
- Automatización SDK: `.github/workflows/sdk-automation.yml`
- Release controlado: `.github/workflows/sdk-release.yml`
