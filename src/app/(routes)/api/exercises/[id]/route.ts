import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  const { id } = await params;

  try {
    const exercise = await prisma.exercise.findFirst({
      where: {
        id: Number(id),
      },
    });
    if (exercise === null) throw new Error("Exercise not found");
    return NextResponse.json({
      ...exercise,
      date:
        exercise.createdAt.getDate() +
        "/" +
        Number(exercise.createdAt.getMonth() + 1) +
        "/" +
        exercise.createdAt.getFullYear().toString(),
      time:
        exercise.createdAt.getHours() > 12
          ? `${exercise.createdAt.getHours() - 12}:${
              exercise.createdAt.getMinutes() <= 9
                ? "0" + exercise.createdAt.getMinutes()
                : exercise.createdAt.getMinutes()
            } PM`
          : `${exercise.createdAt.getHours()}:${exercise.createdAt.getMinutes()} AM`,
    });
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ message: e.message, status: 404 });
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const { id } = await params;
    const deletedExercise = await prisma.exercise.delete({
      where: {
        id: Number(id),
      },
    });
    if (deletedExercise === null) throw new Error("Exercise not found");
    return NextResponse.json({ message: "Exercise deleted" });
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ message: e.message, status: 404 });
  }
}

export async function PUT(request: Request, { params }: Params) {
  const { description } = await request.json();

  try {
    const updatedExercise = await prisma.exercise.update({
      where: {
        id: Number(params.id),
      },
      data: {
        description,
      },
    });

    return NextResponse.json(updatedExercise);
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ message: e.message, status: 404 });
  }
}
