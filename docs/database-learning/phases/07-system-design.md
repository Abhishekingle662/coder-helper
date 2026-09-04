# Phase 7 — System Design with Databases

**Duration:** 3–4 weeks

## Learning objectives

Think architecturally about data at scale: sharding, consistency tradeoffs, and reliable event publishing.

## 1. Sharding

Split data across multiple DB instances by a **shard key** (e.g. `user_id % num_shards`).

| Benefit | Cost |
|---------|------|
| Write scale beyond one node | No cross-shard JOINs |
| Isolated failure domains | Rebalancing is painful |
| | Application must route queries |

## 2. CAP theorem

In a network partition, you choose:

- **Consistency** — all nodes see the same data (may reject writes)
- **Availability** — every request gets a response (may be stale)

You cannot have both C and A during a partition. Postgres with synchronous replication leans C; async replicas lean A.

## 3. Consistency models

| Model | Behavior | Example |
|-------|----------|---------|
| Strong | Read always sees latest write | Bank balance |
| Eventual | Replicas converge over time | Social media like count |
| Causal | Related events stay ordered | Chat messages in a thread |

## 4. CQRS (Command Query Responsibility Segregation)

Separate write model (normalized, transactional) from read model (denormalized, optimized for queries).

Use when: read and write patterns are radically different (e.g. Twitter timeline generation).

## 5. Outbox pattern

**Problem:** "Write to DB, then publish event to Kafka" — crash between steps loses the event.

**Solution:** Write the event to an `outbox` table in the same transaction as the business write. A separate process reads the outbox and publishes.

## 6. Idempotency

Duplicate requests (retries, network blips) must not double-charge or double-create.

Use: idempotency keys stored in DB with unique constraint.

## Design exercises

1. **Twitter feed** — store tweets, followers, generate timeline
2. **URL shortener** — unique short codes at high write throughput
3. **Instagram** — photo metadata in DB, blobs in S3

Brief: [projects/07-system-design.md](../../projects/07-system-design.md)

## Exit criteria

- [ ] Whiteboard a system design with the DB as a labeled component
- [ ] Explain CAP with a concrete example (not just the acronym)
- [ ] Describe the outbox pattern and why dual-write is unsafe

## Next phase

[Phase 8 — Production](08-production.md)
