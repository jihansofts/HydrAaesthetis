// import mongoose, { Mongoose } from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI as string;

// if (!MONGODB_URI) {
//   throw new Error(
//     "Please define the MONGODB_URI environment variable inside .env.local"
//   );
// }

// // Define a type for the cached connection
// interface MongooseCache {
//   conn: Mongoose | null;
//   promise: Promise<Mongoose> | null;
// }

// // Extend the NodeJS.Global interface
// declare global {
//   // This must match the variable name we store it in
//   // eslint-disable-next-line no-var
//   var mongoose: MongooseCache | undefined;
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// export async function connectDB(): Promise<Mongoose> {
//   if (cached!.conn) return cached!.conn;

//   if (!cached!.promise) {
//     cached!.promise = mongoose.connect(MONGODB_URI, {
//       dbName: "hydraaesthetis",
//     });
//   }
//   cached!.conn = await cached!.promise;
//   return cached!.conn;
// }
// lib/mongoose.ts
import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

// Define a type for cached connection
interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Extend NodeJS global to store cached connection (TypeScript safe)
declare global {
  // eslint-disable-next-line no-var
  var _mongoose: MongooseCache | undefined;
}

// Use global cache to avoid multiple connections in dev
const cached: MongooseCache = global._mongoose ?? { conn: null, promise: null };
global._mongoose = cached;

export async function connectDB(): Promise<Mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
