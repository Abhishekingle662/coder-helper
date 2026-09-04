# Phase 6 — Scaling Postgres

**Duration:** 2–3 weeks

## Learning objectives

Scale read traffic with replicas, partition large tables, and understand write scaling limits.

## 1. Vertical vs horizontal scaling

| Approach | How | Limit |
|----------|-----|-------|
| Vertical | Bigger machine (more CPU/RAM/SSD) | Hardware ceiling |
| Horizontal reads | Read replicas | Replication lag |
| Horizontal writes | Sharding (Phase 7) | Complexity |

## 2. Read replicas

```
         ┌─── Replica 1 (reads)
Primary ─┼─── Replica 2 (reads)
 (writes) └─── Replica 3 (reads)
```

- Primary handles all writes; replicas stream WAL (write-ahead log)
- **Replication lag:** User creates a post → might not appear on replica for milliseconds to seconds
- Product decision: read-your-writes consistency requires routing recent writes to primary

## 3. Table partitioning

```sql
CREATE TABLE measurement (
  logdate   DATE NOT NULL,
  peaktemp  INT,
  unitsales INT
) PARTITION BY RANGE (logdate);

CREATE TABLE measurement_y2024m01 PARTITION OF measurement
  FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');
```

Use for: time-series data, very large tables where queries always filter by partition key.

## 4. Connection limits at scale

- Postgres: ~100 connections default
- 20 app servers × 10 connections = 200 → connection refused
- **PgBouncer** in transaction pooling mode: thousands of app connections → dozens of DB connections

## Project: Read replica simulation

Brief: [projects/06-read-replica.md](../../projects/06-read-replica.md)

## Exit criteria

- [ ] Explain when read replicas help and when they don't
- [ ] Create a range-partitioned table
- [ ] Explain why a single Postgres node can't infinitely scale writes

## Next phase

[Phase 7 — System Design](07-system-design.md)
