# Project 5: Optimize Slow Queries

## Goal

Take a deliberately unoptimized schema and query set, diagnose bottlenecks, and fix them.

## Setup

Create tables with 100k+ rows (use `generate_series` to seed). Run queries without indexes. Use `EXPLAIN ANALYZE` to find sequential scans.

## Tasks

1. Document baseline query times
2. Identify bottlenecks in query plans
3. Add appropriate indexes
4. Measure improvement
5. Decide: for one query, is caching or indexing the right fix? Justify.

## Phase guide

[docs/database-learning/phases/05-performance.md](../docs/database-learning/phases/05-performance.md)
