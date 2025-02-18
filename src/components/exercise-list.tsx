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

async function Exercise({ shorter = false }: Props) {
  const exercises = await loadExercises();

  return (
    <ul className="flex flex-col gap-3">
      {exercises.slice(0, shorter ? 3 : undefined).map((exercise: Exercise) => (
        <ExerciseCard exercise={exercise} key={exercise.id} />
      ))}
    </ul>
  );
}

export default Exercise;
