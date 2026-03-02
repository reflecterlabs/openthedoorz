# Planificación de Build y Deployment (D5-D9)

Este documento detalla los pasos finales para el lanzamiento de la plataforma **Open The Doorz**.

### Fase 1: Build y Auditoría (D5-D6)

1.  **Build para Testnet (D5):**
    - **Acción:** Compilar el SDK y la aplicación web para la red de prueba (Sepolia).
    - **Comando:** `npm run build:testnet`
    - **Objetivo:** Verificar la funcionalidad completa en un entorno controlado.
2.  **Auditoría de Comportamiento (D6):**
    - **Acción:** Realizar pruebas de estrés y auditoría de seguridad en la red de prueba.
    - **Objetivo:** Identificar y corregir posibles vulnerabilidades antes del lanzamiento oficial.

### Fase 2: Lanzamiento y Configuración (D7-D8)

1.  **Release y Configuración DNS (D7):**
    - **Acción:** Configurar el dominio `openthedoorz.com` y desplegar la aplicación web en Vercel o un servicio similar.
    - **Objetivo:** Establecer la presencia oficial de la plataforma en la web.
2.  **Deploy a Mainnet (D8):**
    - **Acción:** Desplegar el SDK y la aplicación web en la red principal (Mainnet) de Starknet.
    - **Comando:** `npm run deploy:mainnet`
    - **Objetivo:** Lanzar oficialmente la plataforma para el público general.

### Fase 3: Monitoreo y Distribución (D9)

1.  **Test y Monitoreo On-Demand (D9):**
    - **Acción:** Implementar herramientas de monitoreo en tiempo real para detectar errores y problemas de rendimiento.
    - **Objetivo:** Asegurar la estabilidad y calidad de la plataforma durante su fase inicial de distribución.
2.  **Distribución y Marketing:**
    - **Acción:** Iniciar campañas de marketing y distribución para atraer a los primeros usuarios y empresas.
    - **Objetivo:** Escalar la plataforma y consolidar la presencia de Open The Doorz en el mercado latinoamericano.

### Fase 4: Web de Presentación y Go-to-Market Técnico (D10)

1.  **Landing de Presentación Ejecutiva:**
    - **Acción:** Mantener una vista de presentación separada del dashboard operativo en `examples/web/presentation.html`.
    - **Objetivo:** Facilitar demos comerciales y comunicación de propuesta de valor empresarial.
2.  **Narrativa de Producto y API:**
    - **Acción:** Consolidar arquitectura, API enterprise y plan de ejecución en `OpenTheDoorz/`.
    - **Objetivo:** Alinear negocio, producto e ingeniería en una sola fuente de verdad.

### Fase 5: Pipeline Automático y Mantenimiento (D11)

1.  **Automatización de Calidad SDK:**
    - **Acción:** Ejecutar pipeline de lint/typecheck/test/build/docs/pack en `.github/workflows/sdk-automation.yml`.
    - **Objetivo:** Reducir regresiones y asegurar entregas repetibles.
2.  **Release Pipeline:**
    - **Acción:** Publicar release candidates en tags `v*` con quality gate y publish opcional en `.github/workflows/sdk-release.yml`.
    - **Objetivo:** Entrega continua controlada sin romper compatibilidad comunitaria.

### Estado de Implementación (Operativo)

1. **Comandos implementados en raíz**
   - `npm run build:testnet`
   - `npm run deploy:mainnet`
   - `npm run dev:web`
   - `npm run dev:server`
   - `npm run dev:all`
   - `npm run pipeline:local`
2. **Runbook operativo**
   - Documentado en `OpenTheDoorz/RUNBOOK.md` para que cualquier miembro del equipo pueda levantar entorno, validar calidad y preparar release.
