import dotenv from 'dotenv'

dotenv.config();

export interface IServerConfig {
  port: number | string
}

export interface IMongoDBConfig {
  auth: boolean
  dbHost: string
  dbPort: number | string
  dbName: string
  dbUser?: string | null
  dbPassword?: string | null
}

export const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT
};

export const mongodb = {
  auth: Boolean(process.env.MONGO_DB_AUTH || false),
  dbHost: process.env.DB_HOST || 'localhost',
  dbPort: process.env.DB_PORT || 27017,
  dbName: process.env.DB_NAME || 'example-db',
  dbUser: process.env.DB_USER || null,
  dbPassword: process.env.DB_PASSWORD || null
}