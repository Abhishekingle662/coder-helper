# Phase 1 — Foundations

**Duration:** 1–2 weeks

## Learning objectives

By the end of this phase you will understand why applications use databases instead of files, and you will be able to create tables and run basic SQL queries in PostgreSQL.

## 1. Why not a file?

A JSON file works for a solo developer on one machine. It breaks down when:

| Problem | File | Database |
|---------|------|----------|
| Two users write at the same time | Last write wins — data loss | Transactions serialize or lock safely |
| "Find all notes by user X" | Read entire file, filter in code | Indexed query returns rows in milliseconds |
| "Email must be unique" | Check in app code — race conditions | `UNIQUE` constraint enforced at write time |
| Partial failure mid-write | Corrupted file | Transaction rolls back entirely |

**System design takeaway:** The database is the single source of truth with enforced rules. Application code can crash; the DB keeps data consistent.

## 2. The relational model

- **Database** — a container (e.g. `learning`)
- **Schema** — a namespace inside a database (default: `public`)
- **Table** — a collection of rows with a fixed set of named columns
- **Row** — one record (e.g. one user)
- **Column** — one field with a data type (e.g. `email TEXT`)

Important Postgres facts:
- Row order is **not guaranteed** unless you `ORDER BY`
- Rows do **not** get automatic IDs — you define a **primary key**

## 3. Core SQL

```sql
-- Create
CREATE TABLE users (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email      TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Insert
INSERT INTO users (email) VALUES ('alice@example.com');

-- Read
SELECT id, email FROM users WHERE email = 'alice@example.com';

-- Update
UPDATE users SET email = 'alice.new@example.com' WHERE email = 'alice@example.com';

-- Delete
DELETE FROM users WHERE email = 'alice.new@example.com';
```

## 4. Common data types

| Type | Use for |
|------|---------|
| `INTEGER` / `BIGINT` | Counts, IDs (if not UUID) |
| `TEXT` | Strings of any length |
| `BOOLEAN` | true / false |
| `TIMESTAMPTZ` | Timestamps with timezone |
| `UUID` | Distributed-friendly unique IDs |
| `NUMERIC(p,s)` | Money (never use FLOAT for money) |
| `JSONB` | Semi-structured data (use sparingly in Phase 1) |

## 5. Constraints

```sql
NOT NULL    -- column must have a value
UNIQUE      -- no duplicate values in column
DEFAULT     -- value if none provided
PRIMARY KEY -- unique identifier for each row
REFERENCES  -- foreign key (Phase 2)
```

## Exercises

1. Create a `notes` table with `id`, `user_id`, `title`, `body`, `created_at`
2. Insert 3 notes for one user
3. Select all notes ordered by `created_at` descending
4. Update a note's title
5. Delete one note

See: [sql/examples/phase-01-notes-app.sql](../../sql/examples/phase-01-notes-app.sql)

## Project: Notes app schema

Design and implement:
- `users` table (id, email, created_at)
- `notes` table (id, user_id → users, title, body, created_at)

Requirements:
- Email must be unique
- Every note must belong to a user
- Use UUIDs for primary keys

Brief: [projects/01-notes-app.md](../../projects/01-notes-app.md)

## Exit criteria

- [ ] Explain why a JSON file breaks down with 100 concurrent users
- [ ] Write SELECT / INSERT / UPDATE / DELETE without looking them up
- [ ] Explain what a primary key is and why `SELECT *` has no guaranteed row order

## Next phase

[Phase 2 — SQL & Data Modeling](02-sql-and-modeling.md)
