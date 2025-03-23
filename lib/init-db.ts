import { db } from './db';

export async function initializeDatabase() {
  try {
    await db.connect();
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Failed to initialize database:', error);
    process.exit(1);
  }
}