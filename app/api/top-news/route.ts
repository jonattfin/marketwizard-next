import { NextRequest, NextResponse } from "next/server";
import api from '@/app/api/data';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const indice = searchParams.get("indice") ?? "";

  const data = await api.fetchTopNews(indice);
  return NextResponse.json(data);
}