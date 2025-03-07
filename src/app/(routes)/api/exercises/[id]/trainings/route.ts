import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { Set } from "@prisma/client";

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

  const body = await request.json();
  if (body.msg === "findmany") {
    const { ids } = body;
    const sets = await prisma.set.findMany({
      where: {
        trainingId: {
          in: ids,
        },
      },
    });
    if (sets.length === 0)
      return NextResponse.json({ message: "No sets found" });
    return NextResponse.json(sets);
  }
  const { sets } = body;
  console.log(body);
  const newTraining = await prisma.training.create({
    data: {
      exerciseId: Number(id),
      sets: {
        create: sets.map((set: Set) => ({
          reps: set.reps,
          weight: set.weight,
        })),
      },
    },
  });
  console.log(newTraining);
  return NextResponse.json({ message: "creating training" });
}
