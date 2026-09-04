# Full Learning Roadmap

From zero to large-scale system design with databases as a core component.

## Phase overview

```
Phase 1  Foundations          → Why databases exist, basic SQL
Phase 2  SQL & Data Modeling  → JOINs, normalization, schema design
Phase 3  Postgres Internals   → Transactions, ACID, migrations
Phase 4  Building Real Apps   → APIs, connection pooling, ORMs
Phase 5  Performance          → EXPLAIN, indexes, caching
Phase 6  Scaling Postgres     → Replicas, partitioning
Phase 7  System Design        → Sharding, CAP, CQRS, outbox pattern
Phase 8  Production           → Backups, monitoring, polyglot persistence
```

---

## Phase 1 — Foundations

**Duration:** 1–2 weeks · **Guide:** [phases/01-foundations.md](phases/01-foundations.md)

**Concepts:** Database vs files; relational model; primary keys; CRUD SQL; data types; constraints

**System design seed:** *Where does persistent state live, and who is allowed to change it?*

**Project:** Notes app schema (`users` + `notes`)

**Exit criteria:**
- Explain why a JSON file breaks down with concurrent users
- Write CRUD queries without looking them up
- Explain what a primary key is and why rows have no implicit order

---

## Phase 2 — SQL & Data Modeling

**Duration:** 2–3 weeks · **Guide:** [phases/02-sql-and-modeling.md](phases/02-sql-and-modeling.md)

**Concepts:** JOINs; aggregations; subqueries; CTEs; 1:N and N:M; normalization; ER diagrams

**System design seed:** *Model the domain first. Schema mistakes are expensive to fix at scale.*

**Project:** E-commerce schema

**Exit criteria:**
- Design a schema from written requirements
- Write a 3-table JOIN query confidently
- Explain when to denormalize

---

## Phase 3 — Postgres Internals for Developers

**Duration:** 2 weeks · **Guide:** [phases/03-postgres-internals.md](phases/03-postgres-internals.md)

**Concepts:** Foreign keys; indexes; transactions; ACID; isolation levels; migrations

**System design seed:** *Correctness before speed. A fast wrong answer is worse than a slow right one.*

**Project:** Bank transfer demo with rollback

**Exit criteria:**
- Explain ACID with a real example
- Describe concurrent update behavior
- Run a migration that adds a column safely

---

## Phase 4 — Building Real Applications

**Duration:** 2–3 weeks · **Guide:** [phases/04-building-applications.md](phases/04-building-applications.md)

**Concepts:** App-DB architecture; connection pooling; ORM vs raw SQL; parameterized queries; N+1

**System design seed:** *The database is a shared resource. Every app instance competes for connections.*

**Project:** REST API with Postgres backend

**Exit criteria:**
- Build a working CRUD API
- Explain and fix an N+1 query
- Never interpolate user input into SQL

---

## Phase 5 — Performance & Query Optimization

**Duration:** 2 weeks · **Guide:** [phases/05-performance.md](phases/05-performance.md)

**Concepts:** EXPLAIN ANALYZE; index strategy; slow query diagnosis; denormalization; Redis caching

**System design seed:** *Measure first. Don't add Redis because Twitter uses Redis.*

**Project:** Optimize a deliberately slow query set

**Exit criteria:**
- Read a query plan and identify a sequential scan
- Add an index that fixes a slow query
- Explain cache-aside and invalidation

---

## Phase 6 — Scaling Postgres

**Duration:** 2–3 weeks · **Guide:** [phases/06-scaling-postgres.md](phases/06-scaling-postgres.md)

**Concepts:** Vertical vs horizontal scaling; read replicas; replication lag; partitioning

**System design seed:** *Read replicas solve read scaling. They do NOT solve write scaling.*

**Project:** Simulate read-heavy load with a replica

**Exit criteria:**
- Explain when read replicas help vs. don't
- Set up a partitioned table for time-series data
- Explain write scaling limits of a single Postgres node

---

## Phase 7 — System Design with Databases

**Duration:** 3–4 weeks · **Guide:** [phases/07-system-design.md](phases/07-system-design.md)

**Concepts:** Sharding; CAP theorem; consistency models; CQRS; outbox pattern; idempotency

**System design seed:** *There is no free lunch. Every scaling decision trades something away.*

**Project:** Design Twitter feed / URL shortener on paper

**Exit criteria:**
- Whiteboard a system design with DB as a labeled component
- Explain CAP with a concrete example
- Describe the outbox pattern

---

## Phase 8 — Production & Beyond Postgres

**Duration:** 2 weeks · **Guide:** [phases/08-production.md](phases/08-production.md)

**Concepts:** Backups; PITR; monitoring; when NOT to use Postgres; polyglot persistence; RLS

**System design seed:** *Postgres is your default. Everything else needs a justification.*

**Project:** Disaster recovery runbook (RPO/RTO)

**Exit criteria:**
- Choose the right storage for 5 different use cases
- Explain RPO and RTO
- List 3 things managed DB services handle for you
