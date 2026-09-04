# Phase 3 — Postgres Internals for Developers

**Duration:** 2 weeks

## Learning objectives

Understand transactions, ACID, isolation levels, indexes, and schema migrations.

## 1. Transactions

```sql
BEGIN;
  UPDATE accounts SET balance = balance - 100 WHERE id = 'alice';
  UPDATE accounts SET balance = balance + 100 WHERE id = 'bob';
COMMIT;  -- both succeed, or ROLLBACK if either fails
```

Without a transaction, a crash between the two UPDATEs loses $100.

## 2. ACID

| Property | Meaning |
|----------|---------|
| **Atomicity** | All statements in a transaction succeed or none do |
| **Consistency** | Constraints hold before and after (e.g. balance ≥ 0) |
| **Isolation** | Concurrent transactions don't corrupt each other |
| **Durability** | Committed data survives crashes (WAL) |

## 3. Isolation levels

Postgres default: **Read Committed**

| Level | Prevents |
|-------|----------|
| Read Committed | Dirty reads |
| Repeatable Read | Non-repeatable reads |
| Serializable | Phantom reads (strongest) |

**Anomaly example:** Two transfers read the same balance simultaneously and both succeed — use `SELECT ... FOR UPDATE` or Serializable isolation for financial operations.

## 4. Indexes

```sql
CREATE INDEX idx_notes_user_id ON notes(user_id);
```

- B-tree index: default, good for `=`, `<`, `>`, `BETWEEN`
- Speeds up reads; slows down writes (index must be updated)
- Add indexes on columns you filter or JOIN on — measure first (Phase 5)

## 5. Migrations

Never change production schema by hand. Use version-controlled migrations:

- **Prisma Migrate** — if using Prisma ORM
- **Flyway / Liquibase** — SQL-based, language-agnostic
- **Alembic** — if using Python/SQLAlchemy

Each migration: one logical change, reversible when possible.

## Project: Bank transfer demo

Brief: [projects/03-bank-transfer.md](../../projects/03-bank-transfer.md)

Simulate two concurrent transfers and observe behavior with and without transactions.

## Exit criteria

- [ ] Explain ACID in plain English with the bank transfer example
- [ ] Describe what happens when two transactions update the same row
- [ ] Run a migration that adds a column without downtime

## Next phase

[Phase 4 — Building Real Applications](04-building-applications.md)
