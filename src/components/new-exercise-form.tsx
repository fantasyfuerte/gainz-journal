"use client";

import SelectComponent from "./select-component";
import { muscles } from "@/../data";
import { useEffect, useState } from "react";
import { Option } from "./select-component";



function NewExerciseForm() {
  const exerciseDescription =
    "Add a description for your exercise and then press the save button.";

  const [muscle, setMuscle] = useState<string | undefined>(undefined);
  const [exercises, setExercises] = useState<Option[]>([]);
  const [exercise, setExercise] = useState<string | undefined>(undefined);

  const HandleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/api/exercises", {
      method: "POST",
      body: JSON.stringify({
        muscle: muscle,
        exercise: exercise,
      }),
    });
    console.log("Form submitted");
  };

  const allMuscles = muscles.map((muscle) => ({
    value: muscle.name.toLowerCase(),
    label: muscle.name,
  }));

  function getExercises(muscleName: string) {
    const muscle = muscles.find(
      (muscle) => muscle.name.toLowerCase() === muscleName
    );
    if (muscle === undefined) return [];
    return muscle.exercises.map((exercise) => ({
      value: exercise.name.toLowerCase(),
      label: exercise.name,
    }));
  }

  useEffect(() => {
    if (muscle === undefined) return;
    const ex = getExercises(muscle);
    setExercises(ex);
  }, [muscle]);

  return (
    <form onSubmit={HandleForm} className="flex flex-col gap-5 items-start">
      <SelectComponent
        setValue={setMuscle}
        placeholder="Select a muscle"
        options={allMuscles}
      />
      {muscle !== undefined && (
        <SelectComponent
          setValue={setExercise}
          placeholder="Select an exercise"
          options={exercises}
        />
      )}
      <textarea
        className="bg-transparent text-secondary/90 outline-none placeholder:text-secondary/90 first-line:ml-5 w-full"
        placeholder={exerciseDescription}
        aria-multiline="true"
      />
      <button
        type="submit"
        className="bg-button text-lg text-primary font-bold rounded-lg py-2 px-4 mt-12 self-end"
      >
        Save
      </button>
    </form>
  );
}

export default NewExerciseForm;
