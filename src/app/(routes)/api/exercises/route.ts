import { NextResponse } from "next/server";

export function Get() {
  return NextResponse.json({ message: "Hello from API" });
}
