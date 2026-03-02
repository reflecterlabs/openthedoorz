# Open The Doorz — Enterprise API Blueprint

## Objetivo

Definir una API estable para empresas que integran infraestructura financiera soberana (on-ramp, cuentas virtuales, treasury DeFi) manteniendo compatibilidad con el SDK heredado.

## Principios de diseño

1. **Compatibilidad primero:** mantener alias y contratos previos mientras se introduce namespace nuevo (`OpenTheDoorz` + alias `StarkZap`).
2. **Contratos tipados y explícitos:** todas las entradas/salidas con tipos de dominio.
3. **Idempotencia operativa:** operaciones de on-ramp y banking deben soportar reintentos seguros.
4. **Observabilidad nativa:** cada flujo produce eventos auditables.
5. **Separación de concerns:** módulos aislados para wallet, banking, on-ramp, defi, compliance.

## Superficies API recomendadas

### 1) Onboarding & Compliance

- `onboard(...)`: conexión de identidad/wallet y preparación de cuenta.
- `compliance.startKyc(userId)`
- `compliance.evaluateRisk(userId, context)`

### 2) Banking (cuentas virtuales)

- `banking.assign({ userId, country })`
- `banking.getByUser(userId)`
- `banking.getByUserAndCountry(userId, country)`

### 3) On-Ramp (SPEI)

- `onramp.spei.createDepositIntent({ userId, amountMxn, targetAsset })`
- `onramp.spei.getIntent(intentId)`
- `onramp.spei.markFunded(intentId)`
- `onramp.spei.markSettled(intentId)`

### 4) DeFi Treasury

- `defi.listVaults()`
- `defi.estimateYearlyReturn(vaultId, amount)`
- `defi.openPosition({ userId, vaultId, amount })`
- `defi.getPositionsByUser(userId)`

## Contratos para clientes enterprise

### Idempotency-Key

Toda operación de escritura expuesta por backend B2B debe aceptar `Idempotency-Key` para prevenir doble ejecución.

### Correlation-ID

Cada request debe propagar `Correlation-ID` para trazabilidad E2E.

### Versionado

- Mantener `v1` para compatibilidad heredada.
- Introducir capacidades nuevas como extensiones no rompientes.
- Evitar removals hasta una ventana de deprecación documentada.

## Estrategia de compatibilidad comunitaria

1. Alias de clase principal (`StarkZap` -> `OpenTheDoorz`).
2. Mantener import path heredado mientras se documenta namespace nuevo.
3. Evitar cambios breaking en tipos públicos sin RFC.
4. Publicar changelog con migraciones pequeñas y ejemplos comparativos.

## Criterios de calidad software

- **Seguridad:** validación de inputs, no exponer secretos, auditoría de dependencias.
- **Confiabilidad:** tests unitarios + integración + smoke build examples.
- **Mantenibilidad:** módulos cohesivos, documentación viva, lint/typecheck estricto.
- **Performance:** límites de timeout/retry en conectores de terceros.
