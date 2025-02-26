"use client";

import { API_BASE_URL, loadExercise, loadTrainings } from "@/libs/fetchs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CgDisc } from "react-icons/cg";
import { type Exercise } from "@/components/exercise-list";
import { Capitalize } from "@/libs/utils";
import WorkoutsList from "@/components/workouts-list";
import { Training } from "@/components/workouts-list";

function ExercisePage() {
  const [exercise, setExercise] = useState<null | Exercise>(null);
  const [description, setDescription] = useState<string>(
    exercise?.description || ""
  );
  const [trainings, setTrainings] = useState<null | Training[]>(null);

  const [saveButtonVisible, setSaveButtonVisible] = useState<boolean>(false);
  const { id } = useParams();

  async function handleAddWorkout() {
    const req = await fetch(`${API_BASE_URL}/api/exercises/${id}/trainings`, {
      method: "POST",
    });
    if (req.ok) {
      loadTrainings(Number(id)).then((data) => {
        setTrainings(data);
      });
    }
  }

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
          <ul className="flex gap-2">
            <button
              className="bg-button text-lg text-primary font-bold rounded-lg py-2 px-4 mt-12 self-end"
              onClick={handleAddWorkout}
            >
              Add workout
            </button>
            {saveButtonVisible && (
              <button className="bg-cta text-lg text-primary font-bold rounded-lg py-2 px-4 mt-12 self-end">
                Save
              </button>
            )}
          </ul>
        </>
      )}
    </main>
  );
}

export default ExercisePage;
