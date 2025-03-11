import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
  params: { id: string; tid: string };
}

export async function DELETE(request: NextRequest, { params }: Params) {
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

