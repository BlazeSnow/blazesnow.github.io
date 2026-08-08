if (Test-Path .vitepress/dist) { Remove-Item -Recurse -Force .vitepress/dist }

pnpm run docs:build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

pnpm exec wrangler deploy
exit $LASTEXITCODE
