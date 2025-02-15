import { NextResponse } from "next/server";
import {prisma} from '@/libs/prisma';

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  const exercise = await prisma.exercise.findFirst({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(exercise);
}
export function DELETE() {
  return NextResponse.json({ message: "deleting exercise" });
}
export function PUT() {
  return NextResponse.json({ message: "updating exercise" });
}
