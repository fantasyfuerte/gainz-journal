import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const exercise = await prisma.exercise.findFirst({
      where: {
        id: Number(params.id),
      },
    });
    if (exercise === null) throw new Error("Exercise not found");
    return NextResponse.json(exercise);
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ message: e.message, status: 404 });
  }
}
export function DELETE() {
  return NextResponse.json({ message: "deleting exercise" });
}
export function PUT() {
  return NextResponse.json({ message: "updating exercise" });
}
