# Software Requirements Specification (SRS): Open The Doorz Infrastructure

## 1. Introducción

Este documento detalla los requisitos para transformar el SDK de StarkZap en la infraestructura soberana de **Open The Doorz**. El objetivo es evolucionar de un SDK de swaps a una plataforma integral de **Neo-Banking, On-Ramp y DeFi** para el mercado latinoamericano.

## 2. Análisis MoSCoW

### Must Have (Obligatorio)

- **Rebranding Total:** Sustitución de toda referencia a "StarkZap" por "Open The Doorz" en código, documentación y UI.
- **Módulo On-Ramp México (SPEI):** Integración de un flujo para recibir MXN vía SPEI y convertirlos a activos digitales (USDC/ETH) usando la infraestructura de Starknet.
- **Cuentas Virtuales (Neo-Banking):** Capacidad de generar y mostrar datos bancarios (CLABE, Pix, CVU) vinculados a la identidad del usuario.
- **Interfaz de Usuario (Web/Mobile):** Transformación de los ejemplos actuales en un Dashboard financiero profesional que proyecte solidez bancaria.
- **Seguridad y Cumplimiento:** Implementación de flujos de KYC/AML integrados en el proceso de onboarding.

### Should Have (Deseable)

- **Módulo DeFi Yield:** Integración de protocolos de liquidez para que los saldos inactivos generen rendimientos automáticos.
- **Emisión de Tarjetas:** Simulación o integración de APIs para la gestión de tarjetas corporativas virtuales.
- **Soporte Multidivisa Regional:** Rieles operativos para Brasil (Pix) y Argentina (CBU/CVU).
- **Notificaciones en Tiempo Real:** Webhooks y alertas para transacciones bancarias y swaps completados.

### Could Have (Podría tener)

- **Préstamos Colateralizados:** Funcionalidad para solicitar crédito usando activos digitales como garantía.
- **Analytics Avanzados:** Dashboard con métricas de gasto, ahorro y proyecciones de rendimiento.
- **Modo Offline/PWA:** Optimización de la web para funcionar como una aplicación móvil instalable con alta velocidad.

### Won't Have (No tendrá en esta fase)

- **Intercambio de Activos Físicos:** No se gestionará la entrega física de divisas.
- **Soporte para Blockchains fuera de Starknet:** El foco se mantiene exclusivamente en la eficiencia de Starknet.

## 3. Objetivos Técnicos de Transformación

1.  **Core SDK:** Modificar `src/sdk.ts` y `src/index.ts` para reflejar la nueva identidad y capacidades de Neo-Banking.
2.  **Providers:** Añadir `src/onramp/mexico.ts` para la lógica de SPEI.
3.  **UI/UX:** Rediseñar `examples/web` para convertirlo en el Dashboard de Open The Doorz.
4.  **Docs:** Actualizar `mintlify-docs` con la nueva propuesta de valor y guías de uso de Neo-Banking.
