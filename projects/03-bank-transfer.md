# Project 3: Bank Transfer Demo

## Goal

Demonstrate why transactions matter with a money transfer between accounts.

## Setup

```sql
CREATE TABLE accounts (
  id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name     TEXT NOT NULL,
  balance  NUMERIC(12,2) NOT NULL CHECK (balance >= 0)
);

INSERT INTO accounts (name, balance) VALUES
  ('Alice', 1000.00),
  ('Bob', 500.00);
```

## Tasks

1. Transfer $100 from Alice to Bob inside a transaction
2. Simulate a failure mid-transfer (raise an exception after debit) — verify Bob's balance unchanged
3. Run two concurrent transfers from the same account — observe behavior without locking vs with `SELECT ... FOR UPDATE`

## Phase guide

[docs/database-learning/phases/03-postgres-internals.md](../docs/database-learning/phases/03-postgres-internals.md)
