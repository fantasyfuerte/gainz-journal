"use client";

// import { useState } from "react";
import Select from "react-select";

function NewExerciseForm() {
  const exerciseDescription =
    "Add a description for your exercise and then press the save button.";

  //   const [muscle, setMuscle] = useState("");
  //   const [exercise, setExercise] = useState("");

  const arr = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <form className="flex flex-col gap-5 items-start">
      <Select
        styles={{
          control: (provided) => ({
            ...provided,
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "0.5rem",
            padding: "0.5rem",
            fontSize: "1rem",
            color: "#94a1b2",
            outline: "none",
          }),
          menu: (provided) => ({
            ...provided,
            backgroundColor: "rgba(31, 18, 53,0.5)",
            backdropFilter: "blur(1px)",
            border: "none",
            borderRadius: "0.5rem",
          }),
          option: (provided) => ({
            ...provided,
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "0.5rem",
            color: "#94a1b2",
            fontWeight: "500",
          }),
          singleValue: (provided) => ({
            ...provided,
            color: "#fffffe",
            fontWeight: "600",
            fontSize: "20px",
          }),
          placeholder: (provided) => ({
            ...provided,
            color: "#94a1b2",
            fontWeight: "600",
            opacity: "0.8",
          }),
        }}
        className="w-full"
        isClearable
        options={arr}
      />
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
