import { MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const mongoClient = new MongoClient(process.env.DATABASE_URI)

try {
  await mongoClient.connect()
  console.log("MongoDB connected")
} catch (err) {
  console.log(err.message)
}

export const db = mongoClient.db()
