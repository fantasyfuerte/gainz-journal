"use server";

import { auth, signIn, signOut } from "@/auth";

export async function HandleSignIn() {
  await signIn("google");
}

export async function Auth() {
  const session = await auth();
  return session;
}

export async function HandleSignOut() {
  await signOut();
}
