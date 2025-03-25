import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import bcrypt from "bcrypt";

interface User {
  id?: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

class DatabaseManager {
  private db: Database | null = null;
  private static instance: DatabaseManager;

  private constructor() {}

  public isConnected(): boolean {
    return this.db !== null;
  }

  public static getInstance(): DatabaseManager {
    if (!DatabaseManager.instance) {
      DatabaseManager.instance = new DatabaseManager();
    }
    return DatabaseManager.instance;
  }

  public async connect(): Promise<void> {
    try {
      this.db = await open({
        filename: "./users.db",
        driver: sqlite3.Database,
      });

      await this.initializeDatabase();
    } catch (error) {
      console.error("Database connection error:", error);
      throw error;
    }
  }

  private async initializeDatabase(): Promise<void> {
    if (!this.db) throw new Error("Database not connected");

    await this.db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }

  public async createUser(user: Omit<User, "id">): Promise<User | null> {
    if (!this.db) throw new Error("Database not connected");

    try {
      const hashedPassword = await bcrypt.hash(user.password, 10);

      const result = await this.db.run(
        `INSERT INTO users (firstName, lastName, username, email, password)
         VALUES (?, ?, ?, ?, ?)`,
        [
          user.firstName,
          user.lastName,
          user.username,
          user.email,
          hashedPassword,
        ]
      );

      if (result.lastID) {
        const createdUser = await this.getUserById(result.lastID);
        return createdUser;
      }
      return null;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  public async verifyUser(
    email: string,
    password: string
  ): Promise<User | null> {
    if (!this.db) throw new Error("Database not connected");

    try {
      const user = await this.db.get("SELECT * FROM users WHERE email = ?", [
        email,
      ]);

      if (!user) return null;

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) return null;

      return user;
    } catch (error) {
      console.error("Error verifying user:", error);
      throw error;
    }
  }

  private async getUserById(id: number): Promise<User | null> {
    if (!this.db) throw new Error("Database not connected");

    try {
      const user = await this.db.get("SELECT * FROM users WHERE id = ?", [id]);
      return user || null;
    } catch (error) {
      console.error("Error getting user:", error);
      throw error;
    }
  }

  public async getCurrentUser(): Promise<User | null> {
    if (!this.db) throw new Error("Database not connected");

    try {
      // For demonstration, we'll get the last logged-in user
      // In a real application, this should use session management
      const user = await this.db.get(
        "SELECT * FROM users ORDER BY id DESC LIMIT 1"
      );
      return user || null;
    } catch (error) {
      console.error("Error getting current user:", error);
      throw error;
    }
  }
}

export const db = DatabaseManager.getInstance();
