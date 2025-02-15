import { NextResponse } from "next/server";

export function GET(request: Request, { params }: { params: { id: number } }) {
  return NextResponse.json({ message: "showing exercise", params });
}
export function DELETE() {
  return NextResponse.json({ message: "deleting exercise" });
}
export function PUT() {
  return NextResponse.json({ message: "updating exercise" });
}
