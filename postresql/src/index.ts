import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://madhavsahi16:dO5eH4ZxIkAB@ep-hidden-hill-a5ij22gy.us-east-2.aws.neon.tech/postgres_db_madhav?sslmode=require",
});

async function createUsersTable() {
  try {
    await client.connect();
    const result = await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log(result);
  } catch (error) {
    console.error("Error creating users table :- ", error);
  } finally {
    await client.end();
  }
}

createUsersTable();
