# Open The Doorz — Arquitectura Técnica

## Capas

### 1) SDK Core

- `src/sdk.ts`: orquestación principal (`OpenTheDoorz`) y compatibilidad (`StarkZap`).
- `src/index.ts`: export surface pública para comunidad y empresas.

### 2) Módulos de dominio

- `src/banking/*`: cuentas virtuales por región.
- `src/onramp/*`: rieles de ingreso fiat-crypto.
- `src/defi/*`: vaults y posiciones de rendimiento.
- `src/wallet/*`, `src/tx/*`, `src/swap/*`: capacidades heredadas de ejecución y liquidez.

### 3) Integración de canales

- `examples/web`: dashboard operativo + landing de presentación.
- `examples/mobile`: app móvil de referencia.
- `examples/server`: backend para integraciones de terceros (Privy/paymaster).

### 4) Calidad y entrega

- `tests/`: suite unitaria e integración existente.
- `.Tests/`: casos específicos Open The Doorz por dominio.
- `.github/workflows/`: CI + automatización SDK + release.

## Contratos de estabilidad

1. Mantener nombres y exports heredados durante transición.
2. Añadir capacidades de negocio como módulos aditivos.
3. Tratar cambios breaking como iniciativas versionadas con migración.

## Seguridad y compliance (baseline)

1. Inputs validados en bordes (SDK/API backend).
2. Idempotencia para operaciones de pago.
3. Trazabilidad mediante correlation IDs.
4. Eventos auditables para on-ramp y treasury.
