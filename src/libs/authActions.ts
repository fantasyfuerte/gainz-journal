"use server";

import { auth, signIn, signOut } from "@/auth";
import { prisma } from "./prisma";

export async function HandleSignIn() {
  await signIn("google");
}

export async function Auth() {
  const session = await auth();
  if (!session || !session.user || !session.user.email) return null;
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!existingUser) {
      await prisma.user.create({
        data: { email: session.user.email },
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function HandleSignOut() {
  await signOut();
}
