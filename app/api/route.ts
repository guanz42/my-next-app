import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    message: "Hello world!",
    id: 123,
  };

  return NextResponse.json({ data });
}
