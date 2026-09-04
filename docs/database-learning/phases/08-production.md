# Phase 8 — Production & Beyond Postgres

**Duration:** 2 weeks

## Learning objectives

Operate databases in production, recover from failures, and choose the right storage for each job.

## 1. Backups

| Method | RPO | Use case |
|--------|-----|----------|
| `pg_dump` | Hours (last backup) | Small DBs, dev/staging |
| Continuous archiving + WAL | Minutes | Production |
| Managed service snapshots | Varies | RDS, Supabase, Neon |

**PITR (Point-in-Time Recovery):** Restore to any second within retention window.

## 2. Monitoring

- `pg_stat_statements` — top queries by total time
- Slow query log — queries exceeding threshold
- Connection count alerts — approaching max_connections
- Replication lag alerts — replica falling behind

## 3. When NOT to use Postgres

| Use case | Better choice | Why |
|----------|---------------|-----|
| Time-series metrics | TimescaleDB, InfluxDB | Compression, retention policies |
| Full-text search at scale | Elasticsearch | Inverted indexes, relevance scoring |
| Blob storage | S3, GCS | Cheaper, CDN-friendly |
| Session cache | Redis | Sub-ms reads, TTL built-in |
| Graph traversals | Neo4j | Native graph queries |

**Rule:** Postgres is your default. Everything else needs a justification.

## 4. Polyglot persistence

Use multiple stores in one system:
- Postgres for transactional data
- Redis for sessions and hot cache
- S3 for files
- Elasticsearch for search index (synced from Postgres via outbox)

## 5. Security

- **Row-Level Security (RLS):** Postgres enforces `user_id = current_user_id()` at DB level
- **Least privilege:** App gets `SELECT, INSERT, UPDATE` — not `SUPERUSER`
- **Encryption at rest:** Managed services handle this; self-hosted needs setup

## 6. RPO and RTO

- **RPO (Recovery Point Objective):** How much data can you lose? (e.g. 5 minutes)
- **RTO (Recovery Time Objective):** How fast must you be back online? (e.g. 1 hour)

These drive backup strategy and infrastructure cost.

## Project: Disaster recovery runbook

Brief: [projects/08-disaster-recovery.md](../../projects/08-disaster-recovery.md)

## Exit criteria

- [ ] Choose the right storage for 5 different use cases and justify each
- [ ] Explain RPO and RTO for a system you design
- [ ] List 3 things a managed DB service handles that you'd do yourself on bare metal

## Congratulations

You've completed the full curriculum. Revisit weak phases, build a side project end-to-end, and practice system design whiteboarding with databases as a first-class component.
