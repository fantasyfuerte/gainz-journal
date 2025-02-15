import { type Exercise } from "@/components/nav-bar";

interface Props {
  exercise: Exercise;
}

function ExerciseCard(exercise: Props) {
  const name = exercise.exercise?.name ?? "No name provided";

  return (
    <li className="font-sans list-none text-secondary bg-secondary/30 py-2 px-4 rounded-lg">
      <h2 className="">{name}</h2>
      <p className="text-secondary/70">10x100 9x100 7x100</p>
    </li>
  );
}

export default ExerciseCard;
