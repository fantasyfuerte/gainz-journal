import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const exercises = await prisma.exercise.findMany();
  if (exercises.length === 0)
    return NextResponse.json({ message: "No exercises found" });
  return NextResponse.json(exercises);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { exercise, description } = body;

    if (exercise === undefined || description === undefined)
      return NextResponse.json({ message: "Invalid request body" });

    const existingExercise = await prisma.exercise.findFirst({
      where: {
        name: exercise,
      },
    });

    if (existingExercise !== null) throw new Error("Exercise already exists");

    const newExercise = await prisma.exercise.create({
      data: {
        name: exercise,
        description: description,
      },
    });
    return NextResponse.json({
      message: "creating exercise",
      id: newExercise.id,
    });
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ message: e.message, status: 404 });
  }
}
