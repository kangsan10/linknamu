import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { profile } from "@/data/profile";

type ClickDoc = { _id: string; count: number; updatedAt: Date };

const linkIds = new Set(profile.links.map((link) => link.id));

/** 링크 클릭 1회 기록 — body: { id: string } */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;
  if (typeof id !== "string" || !linkIds.has(id)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  const db = await getDb();
  if (!db) {
    return NextResponse.json({ error: "MONGODB_URI가 설정되지 않았습니다." }, { status: 503 });
  }

  await db
    .collection<ClickDoc>("clicks")
    .updateOne({ _id: id }, { $inc: { count: 1 }, $set: { updatedAt: new Date() } }, { upsert: true });

  return new NextResponse(null, { status: 204 });
}

/** 링크별 클릭 수 조회 */
export async function GET() {
  const db = await getDb();
  if (!db) {
    return NextResponse.json({ error: "MONGODB_URI가 설정되지 않았습니다." }, { status: 503 });
  }

  const docs = await db.collection<ClickDoc>("clicks").find().toArray();
  const counts = Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
  return NextResponse.json(
    profile.links.map((link) => ({ id: link.id, title: link.title, count: counts[link.id] ?? 0 })),
  );
}
