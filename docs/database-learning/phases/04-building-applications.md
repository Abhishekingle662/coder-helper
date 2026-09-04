# Phase 4 — Building Real Applications

**Duration:** 2–3 weeks

## Learning objectives

Connect an application to Postgres correctly: connection pooling, parameterized queries, ORMs, and avoiding common pitfalls.

## 1. Architecture

```
Client → API Server → Connection Pool → PostgreSQL
```

The API server should **not** open a new DB connection per request at scale. Postgres defaults to ~100 max connections.

## 2. Connection pooling

- **PgBouncer** — sits between app and Postgres, multiplexes connections
- **Pool in app** — e.g. `pg.Pool` in Node, SQLAlchemy pool in Python
- Rule of thumb: `pool_size = (num_cores * 2) + effective_spindle_count` per app instance

## 3. Parameterized queries (always)

```javascript
// BAD — SQL injection
db.query(`SELECT * FROM users WHERE email = '${req.body.email}'`);

// GOOD
db.query('SELECT * FROM users WHERE email = $1', [req.body.email]);
```

## 4. ORM vs raw SQL

| ORM | Raw SQL |
|-----|---------|
| Faster to prototype | Full control |
| Hides SQL details | You see every query |
| N+1 risk if lazy-loading | You write explicit JOINs |
| Migrations built-in | You manage migrations separately |

Use ORMs for CRUD; drop to raw SQL for complex reports and performance-critical paths.

## 5. The N+1 problem

```javascript
// N+1: 1 query for users + N queries for each user's notes
const users = await db.query('SELECT * FROM users');
for (const user of users) {
  user.notes = await db.query('SELECT * FROM notes WHERE user_id = $1', [user.id]);
}

// Fix: one JOIN
const rows = await db.query(`
  SELECT u.*, n.id AS note_id, n.title
  FROM users u LEFT JOIN notes n ON n.user_id = u.id
`);
```

## Project: REST API with Postgres

Brief: [projects/04-rest-api.md](../../projects/04-rest-api.md)

Build CRUD + auth with proper pooling and parameterized queries throughout.

## Exit criteria

- [ ] Build a working CRUD API backed by Postgres
- [ ] Explain the N+1 problem and fix one instance
- [ ] Explain why string interpolation in SQL is dangerous

## Next phase

[Phase 5 — Performance](05-performance.md)
