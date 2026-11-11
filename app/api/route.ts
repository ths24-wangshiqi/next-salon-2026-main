import { MOCK_SHOPS } from "@/data/MockData";
import { NextResponse } from "next/server";

// http://localhost:3000/api/shops
// GETリクエスト（非同期通信）
export async function GET() {
    // TODO: DBからショップデータを取得
    const shops = MOCK_SHOPS
    // TODO: 取得したショップデータをJSON形式で返す
    // JSONでレスポンス
    return NextResponse.json({ shops })
}