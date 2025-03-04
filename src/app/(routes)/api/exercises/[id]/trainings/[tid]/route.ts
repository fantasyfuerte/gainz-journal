import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
  params: { id: string; tid: string };
}

export async function GET(request: Request, { params }: Params) {
  const { tid } = await params;
  const sets = await prisma.set.findMany({
    where: {
      trainingId: Number(tid),
    },
  });
  if (sets.length === 0)
    return NextResponse.json({ message: "No trainings found" });
  return NextResponse.json(sets);
}

export async function DELETE(request: Request, { params }: Params) {
  const { tid } = await params;
  const training = await prisma.training.delete({
    where: {
      id: Number(tid),
    },
  });
  if (training === null)
    return NextResponse.json({ message: "No trainings found" });
  return NextResponse.json({ message: "Training deleted" });
}
