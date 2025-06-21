import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define mongo_uri in env variables");
}

let cachced = global.mongoose;

if (!cachced) {
  cachced = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  //connected
  if (cachced.conn) {
    return cachced.conn;
  }

  if (!MONGODB_URI) {
    throw new Error("Please define mongo_uri in env variables");
  }

  //not connected
  if (!cachced.promise) {
    const opts = {
      bufferCommands: true,
      maxPoolSize: 10,
    };
    mongoose.connect(MONGODB_URI, opts).then(() => mongoose.connection);
  }

  // connecting
  try {
    cachced.conn = await cachced.promise;
  } catch (error) {
    cachced.promise = null;
    throw error;
  }

  return cachced.conn;
}
