# Checklist de Transformación: StarkZap a Open The Doorz (D2)

Este checklist detalla los cambios necesarios para transformar el repositorio actual en la infraestructura soberana de **Open The Doorz**.

## 1. Rebranding y Identidad Visual

- [~] **Sustitución de Nombres:** Reemplazar `StarkZap` por `OpenTheDoorz` en todos los archivos del proyecto (`src/`, `examples/`, `tests/`, `package.json`).
- [ ] **Actualización de Assets:** Cambiar logos, iconos y favicons en `examples/web/` y `examples/mobile/assets/`.
- [x] **Configuración de Temas:** Ajustar la paleta de colores en `examples/mobile/constants/theme.ts` y estilos CSS en `examples/web/` para reflejar la identidad de Open The Doorz.

## 2. Núcleo del SDK (Core)

- [x] **Refactorización de la Clase Principal:** Renombrar la clase `StarkZap` a `OpenTheDoorz` en `src/sdk.ts`.
- [x] **Módulo de Neo-Banking:** Crear `src/banking/` para gestionar cuentas virtuales (CLABE, Pix, CVU).
- [x] **Módulo On-Ramp:** Implementar `src/onramp/` con lógica específica para México (SPEI) y Brasil (Pix).
- [x] **Integración DeFi:** Añadir conectores para protocolos de yield en `src/defi/`.

## 3. Interfaz de Usuario (UI/UX)

- [x] **Dashboard de Neo-Banking:** Rediseñar `examples/web/index.html` y `main.ts` para mostrar saldos bancarios y opciones de On-Ramp.
- [x] **Web de Presentación:** Crear una landing ejecutiva en `examples/web/presentation.html`.
- [ ] **Flujo de Onboarding:** Modificar el proceso de `onboard` en `src/sdk.ts` para incluir pasos de KYC/AML.
- [ ] **Visualización de Transacciones:** Crear componentes para mostrar el historial de transferencias bancarias y swaps DeFi.

## 4. Documentación y Ejemplos

- [ ] **Actualización de Guías:** Reescribir `mintlify-docs/` con el enfoque de Neo-Banking y On-Ramp.
- [ ] **Ejemplos de Servidor:** Modificar `examples/server/server.ts` para incluir endpoints de gestión de cuentas bancarias y webhooks de pago.

## 5. Pruebas y Calidad

- [x] **Nuevos Casos de Prueba:** Crear tests para los módulos de On-Ramp y Neo-Banking en `.Tests/` + `vitest.config.ts`.
- [ ] **Auditoría de Flujos:** Verificar la integridad de los swaps y transferencias en la red de prueba (Sepolia).

## 6. Pipeline y Operación Continua

- [x] **Pipeline de Calidad SDK:** Crear `.github/workflows/sdk-automation.yml` con lint/typecheck/test/build/docs/pack.
- [x] **Pipeline de Release:** Crear `.github/workflows/sdk-release.yml` con quality gate y publish controlado por tags.
- [x] **Gobernanza de API Enterprise:** Definir blueprint en `OpenTheDoorz/API_ENTERPRISE.md` y `OpenTheDoorz/PIPELINE.md`.
