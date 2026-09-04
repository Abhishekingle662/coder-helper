# Project 2: E-commerce Schema

## Goal

Design a normalized schema for a simple online store.

## Entities

- **users** — customers
- **products** — items for sale (name, price, description)
- **orders** — a purchase by a user (status, created_at)
- **order_items** — line items (product, quantity, price at time of order)

## Requirements

1. Draw an ER diagram before writing SQL
2. Normalize to 3NF
3. Store price on `order_items` at time of purchase (not just reference product price)
4. Write queries for:
   - Total revenue per user
   - Best-selling product by quantity
   - Orders placed in the last 7 days with item details

## Phase guide

[docs/database-learning/phases/02-sql-and-modeling.md](../docs/database-learning/phases/02-sql-and-modeling.md)
