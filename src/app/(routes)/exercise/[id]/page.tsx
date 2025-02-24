"use client";

import { loadExercise, loadTrainings } from "@/libs/fetchs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CgDisc } from "react-icons/cg";
import { type Exercise } from "@/components/exercise-list";
import { Capitalize } from "@/libs/utils";
import WorkoutsList from "@/components/workouts-list";

export type Training = {
  date: string;
  weight: number;
  reps: number;
};

function ExercisePage() {
  const [exercise, setExercise] = useState<null | Exercise>(null);
  const [description, setDescription] = useState<string>(
    exercise?.description || ""
  );
  const [trainings, setTrainings] = useState<null | Training[]>(null);

  const [saveButtonVisible, setSaveButtonVisible] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    loadExercise(Number(id)).then((data) => {
      setExercise(data);
      setDescription(data.description);
    });
  }, [id]);

  useEffect(() => {
    if (exercise?.description == description) setSaveButtonVisible(false);
    else setSaveButtonVisible(true);
  }, [description, exercise]);

  useEffect(() => {
    loadTrainings(Number(id)).then((data) => {
      setTrainings(data);
    });
  }, [id]);

  return (
    <main className="bg-background h-screen pt-16 px-4">
      {exercise === null ? (
        <CgDisc
          className="animate-spin text-primary/80 mx-auto mt-10"
          size={40}
        />
      ) : (
        <>
          <h1 className="text-xl font-bold text-primary">
            {exercise.name.split(" ").map(Capitalize).join(" ")}
          </h1>
          <div className="flex gap-2">
            <p className="text-secondary/75 mt-2 text-sm">{exercise.date}</p>
            <p className="text-secondary/75 mt-2 text-sm">{exercise.time}</p>
          </div>
          <textarea
            className="text-secondary/75 mt-2 text-sm pr-5 bg-transparent w-full outline-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <WorkoutsList trainings={trainings} />
          {saveButtonVisible && (
            <button className="bg-button text-lg text-primary font-bold rounded-lg py-2 px-4 mt-12 self-end">
              Save
            </button>
          )}
        </>
      )}
    </main>
  );
}

export default ExercisePage;
