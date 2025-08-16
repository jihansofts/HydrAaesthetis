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
// lib/dbConnect.ts

import mongoose, { Mongoose, ConnectOptions } from "mongoose";

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in your environment variables");
}

declare global {
  var mongoose: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongoose || { conn: null, promise: null };

export async function connectDB(): Promise<Mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: ConnectOptions = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });

    // Only assign to global in non-production environments
    if (process.env.NODE_ENV !== "production") {
      global.mongoose = cached;
    }
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}