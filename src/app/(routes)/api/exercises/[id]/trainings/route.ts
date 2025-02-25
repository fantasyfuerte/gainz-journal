import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  const { id } = await params;
  const trainings = await prisma.training.findMany({
    where: {
      exerciseId: Number(id),
    },
  });
  if (trainings.length === 0)
    return NextResponse.json({ message: "No trainings found" });
  return NextResponse.json(trainings);
}

export async function POST(request: Request, { params }: Params) {
  const { id } = await params;
  const newTraining = await prisma.training.create({
    data: {
      exerciseId: Number(id),
    },
  });
  console.log(newTraining);
  return NextResponse.json({ message: "creating training" });
}
