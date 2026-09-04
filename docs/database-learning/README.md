# Database Learning Roadmap

A structured, hands-on curriculum for learning **databases, SQL, and PostgreSQL** — from first principles through building real applications and designing large-scale systems.

Part of the [coder-helper](https://github.com/Abhishekingle662/coder-helper) repository alongside AlgoFlash.

## Who this is for

- Developers who want to understand databases deeply, not just copy ORM snippets
- Engineers preparing for system design interviews where data storage is a core decision
- Anyone building apps who needs to know *when* a database wins over a file, and *why*

## What you'll learn

| Tier | Phases | Outcome |
|------|--------|---------|
| **Build** | 1–4 | Design schemas and wire apps to Postgres |
| **Optimize** | 5–6 | Diagnose slow queries and scale reads |
| **Architect** | 7–8 | Design systems where the database is a first-class decision |

## Tech stack

- **PostgreSQL** — primary database throughout (one DB, learned deeply)
- **SQL** — the language you use to talk to it
- **Redis** — introduced in Phase 5 for caching patterns
- **Your choice of app layer** — Node, Python, Go, etc. (Phase 4)

## Roadmap at a glance

| Phase | Topic | Duration |
|-------|-------|----------|
| 1 | [Foundations](phases/01-foundations.md) | 1–2 weeks |
| 2 | [SQL & Data Modeling](phases/02-sql-and-modeling.md) | 2–3 weeks |
| 3 | [Postgres Internals](phases/03-postgres-internals.md) | 2 weeks |
| 4 | [Building Real Apps](phases/04-building-applications.md) | 2–3 weeks |
| 5 | [Performance](phases/05-performance.md) | 2 weeks |
| 6 | [Scaling Postgres](phases/06-scaling-postgres.md) | 2–3 weeks |
| 7 | [System Design](phases/07-system-design.md) | 3–4 weeks |
| 8 | [Production](phases/08-production.md) | 2 weeks |

Full overview: [ROADMAP.md](ROADMAP.md)

## Getting started

### 1. Install PostgreSQL

- **Windows:** [PostgreSQL installer](https://www.postgresql.org/download/windows/)
- **macOS:** `brew install postgresql@17 && brew services start postgresql@17`
- **Linux:** `sudo apt install postgresql postgresql-contrib`

```bash
psql --version
```

### 2. Create a practice database

```bash
psql -U postgres -c "CREATE DATABASE learning;"
psql -U postgres -d learning
```

### 3. Start Phase 1

Open [phases/01-foundations.md](phases/01-foundations.md) and work through the concepts, SQL exercises, and project.

Runnable SQL examples: [../../sql/examples/](../../sql/examples/)

Project briefs: [../../projects/](../../projects/)

## How to use this curriculum

1. **Work sequentially** — Phases 5–8 assume you've built something in Phases 1–4
2. **Do the projects** — reading alone won't stick
3. **Check exit criteria** — don't advance until you can explain each checkpoint in your own words
4. **Use official docs** — [PostgreSQL documentation](https://www.postgresql.org/docs/current/) is the source of truth

## Suggested pace

| Time available | Complete in |
|----------------|-------------|
| 5–8 hrs/week | 4–5 months |
| 10–15 hrs/week | 2–3 months |
| Full-time focus | 6–8 weeks |

## References

- [PostgreSQL Official Documentation](https://www.postgresql.org/docs/current/)
- [Use The Index, Luke](https://use-the-index-luke.com/)
- [Designing Data-Intensive Applications](https://dataintensive.net/) — Phases 7–8
