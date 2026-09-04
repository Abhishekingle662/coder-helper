-- Phase 1: Notes app schema and CRUD
-- Run: psql -U postgres -d learning -f sql/examples/phase-01-notes-app.sql

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS users (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email      TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS notes (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title      TEXT NOT NULL,
  body       TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Sample data
INSERT INTO users (email) VALUES ('alice@example.com') RETURNING id;
-- Copy the returned UUID for the next inserts, or use a subquery:

INSERT INTO notes (user_id, title, body)
SELECT id, 'First note', 'Hello, Postgres!'
FROM users WHERE email = 'alice@example.com';

INSERT INTO notes (user_id, title, body)
SELECT id, 'Shopping list', 'Milk, eggs, bread'
FROM users WHERE email = 'alice@example.com';

-- Read: all notes for a user, newest first
SELECT n.title, n.body, n.created_at
FROM notes n
JOIN users u ON n.user_id = u.id
WHERE u.email = 'alice@example.com'
ORDER BY n.created_at DESC;

-- Update
UPDATE notes SET title = 'Updated title'
WHERE title = 'First note';

-- Delete
DELETE FROM notes WHERE title = 'Shopping list';

-- Verify row order is not guaranteed without ORDER BY
SELECT id FROM notes;  -- run twice — order may differ
