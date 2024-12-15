# related commands
.PHONY: db-generate db-push db-migrate-dev db-migrate-deploy db-pull db-studio dev

# Generate Prisma Client (used for database operations)
db-generate:
	npx prisma generate

# Push schema changes to the database (directly applies changes without migration)
db-push:
	npx prisma db push

# Create and apply migrations for development
db-migrate-dev:
	npx prisma migrate dev --name init

# Apply migrations for production environment
db-migrate-deploy:
	npx prisma migrate deploy

# Pull database schema into schema.prisma
db-pull:
	npx prisma db pull

# Launch Prisma Studio (database GUI for managing records)
db-studio:
	npx prisma studio

dev:
	npm run dev
