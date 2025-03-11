import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function DELETE(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathSegments = pathname.split("/");
  const id = pathSegments[pathSegments.length - 1];

  const training = await prisma.training.delete({
    where: {
      id: Number(id),
    },
  });
  if (training === null)
    return NextResponse.json({ message: "No trainings found" });
  return NextResponse.json({ message: "Training deleted" });
}
