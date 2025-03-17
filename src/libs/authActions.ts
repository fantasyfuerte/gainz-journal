"use server";

import { signIn } from "@/auth";

export async function HandleSignIn() {
  await signIn("google");
}
