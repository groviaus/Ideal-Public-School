/**
 * db.js — MySQL connection pool (singleton).
 * Uses mysql2/promise. Credentials come from .env.local.
 */

import mysql from "mysql2/promise"

let pool

export function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST || "localhost",
      port: parseInt(process.env.DB_PORT || "3306"),
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      timezone: "+00:00",
    })
  }
  return pool
}
