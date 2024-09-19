// mongoose 랑 mongodb 연동시키기

import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// [2] cached = global.mongoose // global은 노드의 browser의 window 객체의 개념. global에 mongoose라는 객체를 추가하는 것임..
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cached: MongooseConnection = (global as any).mongoose

if(!cached) {
  // [1] 맨 처음 or 캐쉬된게 없다면 => global object에 mongoose를 추가하고, cached = global.mongoose={conn:null, promise:null}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cached = (global as any).mongoose = { 
    conn: null, promise: null 
  }
}

export const connectToDatabase = async () => {
  // mongoDB와 이미 연결 되어있다면 해당 connection 제공하고 리턴 || 아예 url이 없다면 에러 발생 || url은 있는데 연결이 안되어 있다면, 연결시키고 connection 리턴하라는 함수
  if(cached.conn) return cached.conn;

  if(!MONGODB_URL) throw new Error('Missing MONGODB_URL');

  cached.promise = 
    cached.promise || 
    mongoose.connect(MONGODB_URL, { 
      dbName: 'imaginify', bufferCommands: false 
    })

  cached.conn = await cached.promise;

  return cached.conn;
}