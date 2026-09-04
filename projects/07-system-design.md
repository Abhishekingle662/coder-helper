# Project 7: System Design Exercises

## Goal

Practice designing systems where the database is a core architectural decision.

## Pick one (or all)

### A. Twitter feed
- Store tweets, followers, generate home timeline
- Identify read vs write bottlenecks
- Propose scaling strategy

### B. URL shortener
- 1M writes/sec requirement
- Guarantee unique short codes
- How do you shard?

### C. Instagram photos
- Metadata in DB, blobs in object storage
- Feed generation strategy

## Deliverable

One-page design doc per system:
- Schema (tables and key columns)
- Read/write paths
- Bottleneck analysis
- Scaling approach and tradeoffs

## Phase guide

[docs/database-learning/phases/07-system-design.md](../docs/database-learning/phases/07-system-design.md)
