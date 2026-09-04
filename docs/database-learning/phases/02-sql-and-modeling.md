# Phase 2 — SQL & Data Modeling

**Duration:** 2–3 weeks

## Learning objectives

Design schemas from requirements, write multi-table queries with JOINs, and understand normalization.

## 1. Relationships

| Type | Example | Implementation |
|------|---------|----------------|
| One-to-many | User → Notes | `notes.user_id` references `users.id` |
| Many-to-many | Students ↔ Courses | Junction table `enrollments(student_id, course_id)` |

## 2. JOINs

```sql
-- All notes with their author's email
SELECT n.title, u.email
FROM notes n
INNER JOIN users u ON n.user_id = u.id;

-- All users, even those with no notes
SELECT u.email, COUNT(n.id) AS note_count
FROM users u
LEFT JOIN notes n ON n.user_id = u.id
GROUP BY u.id, u.email;
```

| JOIN | Returns |
|------|---------|
| `INNER JOIN` | Only rows with a match in both tables |
| `LEFT JOIN` | All rows from left table; NULL if no match on right |
| `RIGHT JOIN` | All rows from right table |
| `FULL OUTER JOIN` | All rows from both; NULL where no match |

## 3. Aggregations

```sql
SELECT user_id, COUNT(*) AS note_count, MAX(created_at) AS last_note
FROM notes
GROUP BY user_id
HAVING COUNT(*) > 5;
```

- `WHERE` filters rows **before** grouping
- `HAVING` filters groups **after** grouping

## 4. Subqueries and CTEs

```sql
-- CTE (preferred for readability)
WITH active_users AS (
  SELECT user_id FROM notes WHERE created_at > now() - interval '30 days'
)
SELECT u.email FROM users u
WHERE u.id IN (SELECT user_id FROM active_users);
```

## 5. Normalization

| Form | Rule |
|------|------|
| 1NF | Atomic values; no repeating groups |
| 2NF | No partial dependency on composite keys |
| 3NF | No transitive dependency (A → B → C stored in one table) |

**When to denormalize (preview):** Read-heavy dashboards where JOIN cost exceeds duplication cost. Defer until Phase 5.

## Exercises

1. Design an e-commerce schema: users, products, orders, order_items
2. Write: "Total revenue per user this month"
3. Write: "Products never ordered"
4. Draw an ER diagram on paper before writing SQL

## Project: E-commerce schema

Brief: [projects/02-ecommerce-schema.md](../../projects/02-ecommerce-schema.md)

## Exit criteria

- [ ] Design a schema from a written requirements doc
- [ ] Write a 3-table JOIN query confidently
- [ ] Explain when you'd break 3NF on purpose

## Next phase

[Phase 3 — Postgres Internals](03-postgres-internals.md)
