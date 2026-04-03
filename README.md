# Keero Docs

Documentation site for the Keero modular AI hardware platform.

## Development

```bash
pnpm install
pnpm dev
```

Local site:

- `http://localhost:3000`

## Build

```bash
pnpm build
```

## Project Structure

```text
keero-docs/
├── app.config.ts
├── assets/
├── content/
│   └── en/
├── public/
│   └── keero/
├── nuxt.config.ts
└── package.json
```

## Content Focus

- mainboard architecture
- hardware connectors and signals
- manufacturing files and downloads
- modules and mechanics
- firmware status and roadmap

## Deployment

The project builds into `.output/` and is intended for deployment on Vercel or any Node-compatible hosting target.
