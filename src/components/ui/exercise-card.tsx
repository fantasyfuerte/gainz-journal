import { type Exercise } from "@/components/exercise-list";
import Link from "next/link";

interface Props {
  exercise: Exercise;
}

function ExerciseCard({ exercise }: Props) {
  const name = exercise?.name ?? "";
  const id = exercise?.id ?? "no-id";
  const exerciseDate = new Date(exercise?.createdAt);
  const date = exerciseDate.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <li className="font-sans list-none text-secondary bg-secondary/30 py-2 px-4 rounded-lg">
      <Link href={`/exercise/${id}`}>
        <h2 className="">{name}</h2>
        <p className="text-secondary/70">Since {date}</p>
      </Link>
    </li>
  );
}

export default ExerciseCard;
