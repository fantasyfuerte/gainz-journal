import { type Exercise } from "@/components/nav-bar";
import Link from "next/link";

interface Props {
  exercise: Exercise;
}

function ExerciseCard({ exercise }: Props) {
  const name = exercise?.name ?? "No name provided";
  const id = exercise?.id ?? "no-id";

  return (
    <li className="font-sans list-none text-secondary bg-secondary/30 py-2 px-4 rounded-lg">
      <Link href={`/exercise/${id}`}>
        <h2 className="">{name}</h2>
        <p className="text-secondary/70">10x100 9x100 7x100</p>
      </Link>
    </li>
  );
}

export default ExerciseCard;
