pnpm --prefix ./ui run build -c=production
# pnpm --prefix ./functions run build
firebase use nternouski
firebase deploy --only "hosting"