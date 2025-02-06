"use client";

import SelectComponent from "./select-component";
import { muscles } from "@/../data";
// import { useState } from "react";

function NewExerciseForm() {
  const exerciseDescription =
    "Add a description for your exercise and then press the save button.";

  //   const [muscle, setMuscle] = useState("");
  //   const [exercise, setExercise] = useState("");

  const allMuscles = muscles.map((muscle) => ({
    value: muscle.name.toLowerCase(),
    label: muscle.name,
  }));

  return (
    <form className="flex flex-col gap-5 items-start">
      <SelectComponent placeholder="Select a muscle" options={allMuscles} />
      <textarea
        className="bg-transparent text-secondary/90 outline-none placeholder:text-secondary/90 first-line:ml-5 w-full"
        placeholder={exerciseDescription}
        aria-multiline="true"
      />
      <button className="bg-button text-lg text-primary font-bold rounded-lg py-2 px-4 mt-12 self-end">
        Save
      </button>
    </form>
  );
}

export default NewExerciseForm;
