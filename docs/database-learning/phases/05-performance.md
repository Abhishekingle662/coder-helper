# Phase 5 — Performance & Query Optimization

**Duration:** 2 weeks

## Learning objectives

Diagnose slow queries with EXPLAIN, design indexes, and know when to cache vs fix the query.

## 1. EXPLAIN ANALYZE

```sql
EXPLAIN ANALYZE
SELECT * FROM notes WHERE user_id = 'some-uuid';
```

Look for:
- **Seq Scan** on large tables → likely needs an index
- **Nested Loop** with high row counts → missing index on JOIN column
- **actual time** vs **planning time**

## 2. Index strategy

```sql
-- Single column
CREATE INDEX idx_notes_user_id ON notes(user_id);

-- Composite (order matters — leftmost prefix rule)
CREATE INDEX idx_notes_user_created ON notes(user_id, created_at DESC);

-- Partial (smaller, faster for filtered queries)
CREATE INDEX idx_active_notes ON notes(user_id) WHERE deleted_at IS NULL;
```

Don't index everything. Each index costs write performance and disk space.

## 3. When to denormalize

Duplicate data intentionally when:
- Read path is 100× hotter than write path
- JOIN across millions of rows is too slow even with indexes
- Example: store `order_total` on `orders` instead of summing `order_items` every time

Tradeoff: updates must keep denormalized fields in sync.

## 4. Caching with Redis

**Cache-aside pattern:**
1. App checks Redis for key
2. Cache miss → query Postgres → store in Redis with TTL
3. On write → update Postgres → invalidate Redis key

**When to cache:** Expensive reads that tolerate slight staleness.
**When NOT to cache:** The query is slow because of a missing index — fix the index first.

## Project: Optimize slow queries

Brief: [projects/05-slow-queries.md](../../projects/05-slow-queries.md)

## Exit criteria

- [ ] Read a query plan and identify a sequential scan on a large table
- [ ] Add an index that measurably improves a slow query
- [ ] Explain cache-aside and when invalidation becomes hard

## Next phase

[Phase 6 — Scaling Postgres](06-scaling-postgres.md)
