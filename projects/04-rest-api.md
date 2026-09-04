# Project 4: REST API with Postgres

## Goal

Build a small API that reads and writes to Postgres with production-minded patterns.

## Requirements

- Endpoints: register user, login (simple JWT or session), CRUD for notes
- Parameterized queries only — no string interpolation
- Connection pooling (not one connection per request)
- Environment-based config (`DATABASE_URL`)
- At least one endpoint that demonstrates fixing an N+1 query

## Stack suggestions

- Node: Express + `pg` pool
- Python: FastAPI + SQLAlchemy/asyncpg
- Go: chi + pgxpool

## Phase guide

[docs/database-learning/phases/04-building-applications.md](../docs/database-learning/phases/04-building-applications.md)
