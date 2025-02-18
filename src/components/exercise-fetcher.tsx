import ExerciseCard from "./exercise-card";
import { loadExercises } from "@/libs/fetchs";

export type Exercise = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
};

async function ExerciseFetcher() {
  const exercises = await loadExercises();
  return (
    <ul className="flex flex-col gap-3">
      {exercises.map((exercise: Exercise) => (
        <ExerciseCard exercise={exercise} key={exercise.id} />
      ))}
    </ul>
  );
}

export default ExerciseFetcher;
