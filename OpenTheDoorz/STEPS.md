# Pasos Exhaustivos para la Transformación (D4)

Este documento detalla los pasos exhaustivos para cumplir con los requisitos de **Open The Doorz** y asegurar la integridad de la plataforma mediante pruebas rigurosas.

## Ejecución Real en el Repositorio (D3-D4)

### 1) Núcleo SDK soberano

1. **Archivo:** `src/sdk.ts`
   - Renombrar clase principal a `OpenTheDoorz`.
   - Mantener compatibilidad: `export const StarkZap = OpenTheDoorz`.
   - Integrar módulos nuevos como propiedades públicas:
     - `banking`
     - `onramp.spei`
     - `defi`
2. **Archivo:** `src/index.ts`
   - Exportar `OpenTheDoorz` y alias `StarkZap`.
   - Exportar módulos `banking`, `onramp`, `defi`.

### 2) Neo-Banking (Cuentas Virtuales)

1. **Archivo:** `src/banking/interface.ts`
   - Definir contratos `VirtualAccount`, `VirtualAccountCountry`, `CreateVirtualAccountInput`.
2. **Archivo:** `src/banking/virtual_accounts.ts`
   - Implementar `VirtualAccountsService` con:
     - `assign(...)`
     - `getByUser(...)`
     - `getByUserAndCountry(...)`
   - Generar CLABE/PIX/CVU determinísticos por usuario/país.
3. **Archivo:** `src/banking/index.ts`
   - Exponer barrel del módulo.

### 3) On-Ramp México (SPEI)

1. **Archivo:** `src/onramp/mexico.ts`
   - Implementar `SPEIProvider` con:
     - `createDepositIntent(...)`
     - `getIntent(...)`
     - `markFunded(...)`
     - `markSettled(...)`
   - Modelar estados: `pending | funded | expired | settled`.
2. **Archivo:** `src/onramp/index.ts`
   - Exponer barrel del módulo.

### 4) DeFi Yield

1. **Archivo:** `src/defi/yield.ts`
   - Implementar `DeFiYieldService` con:
     - `listVaults()`
     - `estimateYearlyReturn(...)`
     - `openPosition(...)`
     - `getPositionsByUser(...)`
   - Definir bóvedas con APY y perfil de riesgo por red.
2. **Archivo:** `src/defi/index.ts`
   - Exponer barrel del módulo.

### 5) Dashboard web (identidad Open The Doorz)

1. **Archivo:** `examples/web/index.html`
   - Aplicar paleta crema/coral/tierra.
   - Actualizar títulos, etiquetas y tono ejecutivo.
   - Añadir módulos visuales y operativos:
     - Cuentas Virtuales
     - On-Ramp SPEI
     - DeFi Yield
2. **Archivo:** `examples/web/main.ts`
   - Instanciar `OpenTheDoorz`.
   - Conectar eventos de UI con métodos:
     - `sdk.banking.assign(...)`
     - `sdk.onramp.spei.createDepositIntent(...)`
     - `sdk.defi.estimateYearlyReturn(...)`
     - `sdk.defi.openPosition(...)`

### 6) Pruebas especializadas (.Tests)

1. **Archivo:** `.Tests/onramp/mexico_spei.test.ts`
   - Validar generación SPEI y transición de estados.
2. **Archivo:** `.Tests/banking/virtual_accounts.test.ts`
   - Validar asignación por país y estabilidad por usuario+país.
3. **Archivo:** `.Tests/defi/yield_integration.test.ts`
   - Validar estimación de rendimiento y apertura de posición.
4. **Archivo:** `vitest.config.ts`
   - Incluir patrón `.Tests/**/*.test.ts` en proyecto unit.

### 7) Verificación

1. Ejecutar typecheck: `npm run typecheck`
2. Ejecutar pruebas nuevas: `npx vitest run --project unit .Tests/**/*.test.ts`
3. Compilar web: `cd examples/web && npm run build`

### 8) Web de Presentación (D10)

1. **Archivo:** `examples/web/presentation.html`
   - Definir hero ejecutivo, bloques de propuesta de valor y KPIs de negocio.
2. **Archivo:** `examples/web/presentation.ts`
   - Añadir comportamiento de interacción ligera para demo comercial.
3. **Archivo:** `examples/web/README.md`
   - Documentar rutas y comandos para dashboard operativo y presentación.

### 9) Pipeline automático (D11)

1. **Archivo:** `.github/workflows/sdk-automation.yml`
   - Ejecutar quality gate completo y publicar artifacts (tarball + api docs).
2. **Archivo:** `.github/workflows/sdk-release.yml`
   - Definir release por tags semánticos con publish guardado por secreto.
3. **Archivo:** `OpenTheDoorz/PIPELINE.md`
   - Formalizar gobernanza de integración, release y compatibilidad.

### Fase 1: Implementación de Requisitos Críticos

1.  **Módulo On-Ramp México (SPEI):**
    - **Archivo:** `src/onramp/mexico.ts`
    - **Acción:** Implementar la clase `SPEIProvider` con métodos para generar CLABEs únicas y monitorear depósitos entrantes.
    - **Prueba:** Ejecutar `.Tests/onramp/mexico_spei.test.ts` para validar la generación de CLABEs y la recepción de fondos.
2.  **Módulo de Cuentas Virtuales (Neo-Banking):**
    - **Archivo:** `src/banking/virtual_accounts.ts`
    - **Acción:** Desarrollar la lógica para asignar y consultar cuentas virtuales (CLABE, Pix, CVU) vinculadas a la identidad del usuario.
    - **Prueba:** Ejecutar `.Tests/banking/virtual_accounts.test.ts` para asegurar la correcta asignación y recuperación de datos bancarios.
3.  **Módulo DeFi Yield:**
    - **Archivo:** `src/defi/yield.ts`
    - **Acción:** Integrar conectores para protocolos de liquidez en Starknet que permitan generar rendimientos sobre saldos inactivos.
    - **Prueba:** Ejecutar `.Tests/defi/yield_integration.test.ts` para verificar la correcta interacción con los protocolos DeFi.

### Fase 2: Aseguramiento de Calidad y Pruebas Exhaustivas

1.  **Pruebas de Integración:**
    - **Archivo:** `tests/integration/openthedoorz.test.ts`
    - **Acción:** Crear un flujo completo de onboarding, depósito SPEI, conversión a USDC y colocación en un protocolo de yield.
    - **Prueba:** Ejecutar el test de integración para validar el flujo end-to-end de la plataforma.
2.  **Pruebas de Seguridad y Cumplimiento:**
    - **Archivo:** `tests/security/kyc_aml.test.ts`
    - **Acción:** Verificar que los flujos de KYC/AML bloqueen transacciones no autorizadas y cumplan con las normativas regionales.
    - **Prueba:** Ejecutar los tests de seguridad para asegurar el cumplimiento normativo.
3.  **Pruebas de Interfaz de Usuario (UI):**
    - **Archivo:** `examples/web/tests/dashboard.test.ts`
    - **Acción:** Validar que el dashboard de Open The Doorz muestre correctamente los saldos bancarios y las opciones de On-Ramp.
    - **Prueba:** Ejecutar los tests de UI para garantizar una experiencia de usuario fluida y profesional.

# Pasos Detallados para la Transformación (D3)

Este documento enumera los pasos técnicos específicos para transformar el repositorio **StarkZap** en la infraestructura soberana de **Open The Doorz**.

### Fase 1: Rebranding y Configuración del Núcleo

1.  **Renombrar Clase Principal:** En `src/sdk.ts`, cambiar `export class StarkZap` a `export class OpenTheDoorz`.
2.  **Actualizar Punto de Entrada:** En `src/index.ts`, exportar la nueva clase `OpenTheDoorz`.
3.  **Modificar `package.json`:** Cambiar el nombre del paquete de `@starkzap/sdk` a `@openthedoorz/sdk` y actualizar la descripción y autor.
4.  **Búsqueda y Reemplazo Global:** Ejecutar una búsqueda global en todo el proyecto para reemplazar "StarkZap" por "OpenTheDoorz" en comentarios, documentación y variables.

### Fase 2: Desarrollo de Módulos de Neo-Banking y On-Ramp

1.  **Crear Directorio de Banking:** Crear la carpeta `src/banking`.
2.  **Definir Interfaz de Cuentas Virtuales:** En `src/banking/interface.ts`, definir las estructuras para `VirtualAccount` (con propiedades como `clabe`, `pixKey`, `cbu`).
3.  **Crear Directorio On-Ramp:** Crear la carpeta `src/onramp`.
4.  **Implementar Lógica SPEI:** En `src/onramp/mexico.ts`, desarrollar la clase `SPEIProvider` que interactuará con un servicio externo para generar y monitorear transferencias SPEI.
5.  **Integrar Módulos en el SDK:** En `src/sdk.ts`, importar y exponer los nuevos módulos de `banking` y `onramp` a través de la clase `OpenTheDoorz`.

### Fase 3: Transformación de la Interfaz de Usuario (UI)

1.  **Rediseñar `examples/web`:** Convertir la aplicación de ejemplo en un dashboard financiero. Modificar `examples/web/index.html` para añadir secciones de "Cuentas Bancarias", "On-Ramp" y "Portafolio DeFi".
2.  **Conectar UI con el SDK:** En `examples/web/main.ts`, instanciar `OpenTheDoorz` y conectar los botones y vistas del nuevo dashboard con las funciones del SDK (ej. `sdk.banking.getVirtualAccounts()`, `sdk.onramp.spei.initiateDeposit()`).

### Fase 4: Creación de Pruebas Específicas

1.  **Crear Directorio `.Tests`:** Generar una nueva carpeta `.Tests` en la raíz del proyecto.
2.  **Desarrollar Pruebas para On-Ramp:** En `.Tests/onramp/mexico_spei.test.ts`, escribir casos de prueba para verificar la creación y validación de depósitos SPEI.
3.  **Desarrollar Pruebas para Banking:** En `.Tests/banking/virtual_accounts.test.ts`, crear pruebas para la asignación y consulta de cuentas virtuales.
