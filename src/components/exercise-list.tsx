"use client"

import ExerciseCard from "./exercise-card";
import { loadExercises } from "@/libs/fetchs";

export type Exercise = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
};

interface Props {
  shorter?: boolean;
}

function ExerciseList({shorter = false }:Props) {
  const exercises = ""

  return (
    <ul className="flex flex-col gap-3">
      {exercises.map((exercise: Exercise) => (
        <ExerciseCard exercise={exercise} key={exercise.id} />
      ))}
    </ul>
  );
}

export default ExerciseList;
