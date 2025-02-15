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
export async function DELETE(request:Request, { params }: Params) {
  try{
    const deletedExercise = await prisma.exercise.delete({
      where: {
        id: Number(params.id),
      },
    });
    if (deletedExercise === null) throw new Error("Exercise not found");
    return NextResponse.json({ message: "Exercise deleted" });
  }
  catch(e){
    if (e instanceof Error)
      return NextResponse.json({ message: e.message, status: 404 });
  }
}

export function PUT() {
  return NextResponse.json({ message: "updating exercise" });
}
