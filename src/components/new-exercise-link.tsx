"use client";

import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "@/context/userProvider";

function NewExercise() {
  const user = useContext(UserContext).user;

  if (user == null) return <></>;

  return (
    <Link href="/new" className="flex flex-col">
      <button className="bg-button rounded-lg py-2 my-3 font-semibold">
        New Exercise
      </button>
    </Link>
  );
}

export default NewExercise;
