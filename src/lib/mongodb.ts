import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "linknamu";

// 개발 모드의 HMR에서도 연결을 하나만 유지하도록 global에 캐시
const globalForMongo = globalThis as unknown as {
  mongoClientPromise?: Promise<MongoClient>;
};

/** MONGODB_URI가 없으면 null을 반환 (클릭 집계 없이도 페이지는 동작) */
export async function getDb() {
  if (!uri) return null;
  globalForMongo.mongoClientPromise ??= new MongoClient(uri).connect();
  const client = await globalForMongo.mongoClientPromise;
  return client.db(dbName);
}
