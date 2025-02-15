import { NextResponse } from "next/server";

interface Params {
  params: { id: number };
}

export function GET(request: Request, { params }: Params) {
  return NextResponse.json({ message: "showing exercise", params });
}
export function DELETE() {
  return NextResponse.json({ message: "deleting exercise" });
}
export function PUT() {
  return NextResponse.json({ message: "updating exercise" });
}
