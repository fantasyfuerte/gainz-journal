"use client";

import { loadExercise } from "@/libs/fetchs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function ExercisePage() {

    const [exercise, setExercise] = useState({name: "No name provided", description: "No description provided", muscles: []});

  const { id } = useParams();

useEffect(() => {
    loadExercise(Number(id)).then((data) => {
      setExercise(data);
      console.log(data)
    });
}, [id]);

  return (
    <main className="bg-background h-screen pt-16 px-4">
      <h1 className="text-primary text-xl font-bold">{exercise.name}</h1>
    </main>
  );
}

export default ExercisePage;
