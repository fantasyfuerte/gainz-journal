"use client";

import ExerciseCard from "./exercise-card";
import { loadExercises } from "@/libs/fetchs";
import { useEffect, useState } from "react";

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
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    loadExercises().then((data) => setExercises(data));
  }, []);

  return (
    <ul className="flex flex-col gap-3">
      {exercises.slice(0, shorter ? 3 : undefined).map((exercise: Exercise) => (
        <ExerciseCard exercise={exercise} key={exercise.id} />
      ))}
    </ul>
  );
}

export default Exercise;
