"use server";

import { auth, signIn } from "@/auth";

export async function HandleSignIn() {
  await signIn("google");
}

export async function Auth() {
  const session = await auth();
  return session;
}
