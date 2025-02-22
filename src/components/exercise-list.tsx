"use client";

import ExerciseCard from "./exercise-card";
import { loadExercises } from "@/libs/fetchs";
import { useEffect, useState } from "react";
import { CgDisc } from "react-icons/cg";

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

  useEffect(() => {
    loadExercises()
      .then((data) => data.sort((a: Exercise, b: Exercise) => b.id - a.id))
      .then(setExercises);
  }, []);

  return (
    <ul className="flex flex-col gap-3">
      {exercises == null ? (
        <CgDisc
          className="animate-spin text-primary/80 mx-auto mt-16"
          size={40}
        />
      ) : (
        exercises
          ?.slice(0, shorter ? 3 : undefined)
          .map((exercise: Exercise) => (
            <ExerciseCard exercise={exercise} key={exercise.id} />
          ))
      )}
    </ul>
  );
}

export default Exercise;
