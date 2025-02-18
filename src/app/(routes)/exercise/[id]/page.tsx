"use client";

import { loadExercise } from "@/libs/fetchs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function Capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function ExercisePage() {
  const [exercise, setExercise] = useState({
    name: "",
    description: "",
    createdAt: "",
    date: "",
    time: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadExercise(Number(id)).then((data) => {
      setExercise(data);
      console.log(data);
    });
  }, [id]);

  return (
    <main className="bg-background h-screen pt-16 px-4">
      <h1 className="text-xl font-bold text-primary">
        {exercise.name.split(" ").map(Capitalize).join(" ")}
      </h1>
      <p className="text-secondary/75 mt-2 text-sm">{exercise.date}</p>
      <p className="text-secondary/75 mt-2 text-sm">{exercise.time}</p>
      <textarea
        className="text-secondary/75 mt-2 text-sm pr-5 bg-transparent w-full outline-none"
        value={exercise.description}
        onChange={(e) =>
          setExercise({ ...exercise, description: e.target.value })
        }
      ></textarea>
      <h2 className="text-primary/80 text-lg font-semibold mt-8">Workouts</h2>
    </main>
  );
}

export default ExercisePage;
