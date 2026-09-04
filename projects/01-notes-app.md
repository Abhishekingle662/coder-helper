# Project 1: Notes App Schema

## Goal

Create a minimal schema for a notes application with users and notes.

## Requirements

- `users`: id (UUID), email (unique, required), created_at
- `notes`: id (UUID), user_id (FK to users), title (required), body (optional), created_at
- Deleting a user deletes their notes (CASCADE)
- Use UUIDs, not serial integers

## Deliverables

1. SQL file creating both tables
2. Insert at least 2 users and 3 notes
3. Queries demonstrating:
   - All notes for one user
   - Count of notes per user
   - Update and delete operations

## Stretch

- Add `updated_at` column that auto-updates on row change
- Add a `deleted_at` soft-delete column instead of hard DELETE

## Reference

- Phase guide: [docs/database-learning/phases/01-foundations.md](../docs/database-learning/phases/01-foundations.md)
- Starter SQL: [sql/examples/phase-01-notes-app.sql](../sql/examples/phase-01-notes-app.sql)
