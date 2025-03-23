import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request: NextRequest) {
  try {
    const encodedEmail = request.nextUrl.searchParams.get("q");
    if (encodedEmail === null) {
      return NextResponse.json(
        { message: "Missing or invalid query parameter 'q'" },
        { status: 400 }
      );
    }
    const email = decodeURIComponent(encodedEmail);

    if (!email) {
      return NextResponse.json(
        { message: "Missing or invalid query parameter 'q'" },
        { status: 400 }
      );
    }
    const exercises = await prisma.exercise.findMany({
      where: {
        user: {
          email: email,
        },
      },
    });

    if (exercises.length === 0) {
      return NextResponse.json({ message: "No exercises found" });
    }

    return NextResponse.json(exercises);
  } catch (error) {
    console.error("Error fetching exercises:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { exercise, description, email } = body;

    if (
      exercise === undefined ||
      description === undefined ||
      email === undefined
    )
      return NextResponse.json({ message: "Invalid request body" });

    const existingExercise = await prisma.exercise.findFirst({
      where: {
        name: exercise,
        user: {
          email: email,
        },
      },
    });

    if (existingExercise !== null) throw new Error("Exercise already exists");

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user === null) throw new Error("User not found");

    const newExercise = await prisma.exercise.create({
      data: {
        name: exercise,
        description: description,
        userId: user.id,
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
