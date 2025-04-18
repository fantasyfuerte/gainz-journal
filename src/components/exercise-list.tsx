"use client";

import ExerciseCard from "./exercise-card";
import { loadExercises } from "@/libs/fetchs";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CgDisc } from "react-icons/cg";
import { UserContext } from "@/context/userProvider";
import SignIn from "./sign-in";

export type Exercise = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  date: string;
  time: string;
};

interface Props {
  shorter?: boolean;
}

function Exercise({ shorter = false }: Props) {
  const [exercises, setExercises] = useState<Exercise[] | null>(null);
  const user = useContext(UserContext).user;

  useEffect(() => {
    if (user === null || user.email === undefined || user.email === null)
      return;
    loadExercises(user.email)
      .then((data) => {
        if (data.message === "No exercises found") return [];
        return data.sort((a: Exercise, b: Exercise) => b.id - a.id);
      })
      .then(setExercises);
  }, [user]);

  return (
    <>
      {user == null ? (
        <div className="absolute left-0 w-full">
          <SignIn />
        </div>
      ) : (
        <ul className="flex flex-col gap-3 font-sans pb-5">
          {exercises == null ? (
            <CgDisc
              className="animate-spin text-primary/80 mx-auto mt-16"
              size={40}
            />
          ) : exercises.length === 0 && shorter ? (
            <>
              <Link href="/new" className="flex flex-col">
                <button className="bg-button rounded-lg py-2 my-3 text-primary font-semibold">
                  New Exercise
                </button>
              </Link>
            </>
          ) : exercises.length === 0 ? (
            <p className="text-primary/80 text-center">No exercises found</p>
          ) : (
            exercises
              ?.slice(0, shorter ? 3 : undefined)
              .map((exercise: Exercise) => (
                <ExerciseCard exercise={exercise} key={exercise.id} />
              ))
          )}
        </ul>
      )}
    </>
  );
}

export default Exercise;
