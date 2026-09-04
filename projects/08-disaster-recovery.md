# Project 8: Disaster Recovery Runbook

## Goal

Write an operational runbook for a production Postgres database.

## Include

1. **Backup strategy** — method, frequency, retention
2. **Restore procedure** — step-by-step to recover from backup
3. **Failover procedure** — promote replica to primary
4. **RPO and RTO** — defined targets and how your strategy meets them
5. **Monitoring checklist** — what alerts exist and thresholds

## Scenario drills (on paper)

- Primary disk failure at 3 AM
- Accidental `DROP TABLE` on production
- Replica lag exceeds 30 seconds during peak traffic

## Phase guide

[docs/database-learning/phases/08-production.md](../docs/database-learning/phases/08-production.md)
