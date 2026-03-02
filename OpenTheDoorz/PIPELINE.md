# Open The Doorz — Pipeline Operativo del SDK

## Meta

Garantizar entrega automática, mantenida y segura del SDK sin duplicar trabajo respecto al proyecto heredado.

## Flujo CI/CD propuesto

### 1) Pull Request Gate

Workflows: `CI` + `SDK Automation`

Checks obligatorios:

- `lint`
- `typecheck`
- `test` (unit)
- `build` (SDK)
- `build` examples/web

Resultado:

- Artifact `sdk-package` (`npm pack`)
- Artifact `api-docs`

### 2) Main Branch Integration

Al merge en `main` se vuelve a ejecutar la suite completa para asegurar reproducibilidad.

### 3) Release Candidate

Workflow: `SDK Release`

En tag `v*`:

1. Repite quality gate.
2. Empaqueta tarball.
3. Publica en npm si existe `NPM_TOKEN`.

## Política de compatibilidad

1. No eliminar exports públicos existentes sin deprecación previa.
2. Mantener alias de transición para APIs heredadas.
3. Cualquier cambio de tipos públicos requiere tests y notas de migración.

## Política de mantenimiento

1. Hotfixes en ramas cortas con PR obligatorio.
2. Regeneración de presets solo vía scripts (`scripts/`).
3. Artefactos generados nunca se editan manualmente.

## Checklist de release

1. `npm run lint`
2. `npm run typecheck`
3. `npm run test`
4. `npm run build`
5. `npm run docs:api`
6. Tag semántico: `vX.Y.Z`
