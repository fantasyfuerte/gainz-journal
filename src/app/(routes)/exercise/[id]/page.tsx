"use client";

import {
  deleteExercise,
  loadExercise,
  loadTrainings,
  updateExercise,
} from "@/libs/fetchs";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CgDisc } from "react-icons/cg";
import { type Exercise } from "@/components/exercise-list";
import { Capitalize } from "@/libs/utils";
import WorkoutsList from "@/components/workouts-list";
import { type Training } from "@/components/workouts-list";
import AddWorkOutModal from "@/components/add-workout-modal";
import Chart from "@/components/chart";

function ExercisePage() {
  const [exercise, setExercise] = useState<null | Exercise>(null);
  const [description, setDescription] = useState<string>(
    exercise?.description || ""
  );
  const [trainings, setTrainings] = useState<null | Training[]>(null);
  const [saveButtonVisible, setSaveButtonVisible] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const [refreshTrigger2, setRefreshTrigger2] = useState(false);

  const { id } = useParams();

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this exercise?")) return;
    deleteExercise(Number(id));
    redirect("/");
  }

  async function handleUpdate() {
    updateExercise(Number(id), description);
    setRefreshTrigger((prev) => !prev);
  }

  useEffect(() => {
    loadExercise(Number(id)).then((data) => {
      setExercise(data);
      setDescription(data.description);
    });
  }, [id, refreshTrigger]);

  useEffect(() => {
    if (exercise?.description == description) setSaveButtonVisible(false);
    else setSaveButtonVisible(true);
  }, [description, exercise]);

  useEffect(() => {
    loadTrainings(Number(id)).then((data) => {
      setTrainings(data);
    });
  }, [id, refreshTrigger2]);

  if (id == undefined) return <div>Not Found.</div>;

  return (
    <main className="bg-background h-screen pt-16 px-7 md:px-60 lg:px-80">
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
          <WorkoutsList
            refreshTrigger={refreshTrigger2}
            setRefreshTrigger={setRefreshTrigger2}
            trainings={trainings}
            exerciseId={id}
          />
          {trainings && trainings.length > 2 && <Chart />}
          <ul className="flex gap-2 flex-wrap mt-8">
            <button
              className="bg-button text-lg text-primary font-bold rounded-lg py-2 px-4 self-end"
              onClick={openModal}
            >
              Add workout
            </button>
            {saveButtonVisible && (
              <button
                className="bg-cta text-lg text-primary font-bold rounded-lg py-2 px-4 self-end"
                onClick={handleUpdate}
              >
                Save
              </button>
            )}
            <button
              className="bg-cta text-lg text-primary font-bold rounded-lg py-2 px-4 self-end"
              onClick={handleDelete}
            >
              Delete exercise
            </button>
          </ul>
          {isModalOpen && (
            <AddWorkOutModal
              setTrainings={setTrainings}
              id={id}
              closeModal={closeModal}
            />
          )}
        </>
      )}
    </main>
  );
}

export default ExercisePage;
