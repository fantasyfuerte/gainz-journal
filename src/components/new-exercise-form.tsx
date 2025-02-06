import { muscles } from "@/../data";

function NewExerciseForm() {
  const exerciseName = "Exercise Name";
  const exerciseDescription =
    "Add a description for your exercise and then press the save button.";

  return (
    <form className="flex flex-col gap-5 items-start">
      <input
        type="text"
        placeholder={exerciseName}
        className="bg-transparent text-secondary text-xl font-semibold outline-none placeholder:text-secondary"
      />
      <select className="bg-transparent text-secondary/90 outline-none placeholder:text-secondary/90 w-full">
        <option>Select muscle</option>
        {muscles.map((muscle) => (
          <option key={muscle.name}>{muscle.name}</option>
        ))}
      </select>
      <textarea
        placeholder={exerciseDescription}
        aria-multiline="true"
        className="bg-transparent text-secondary/90 outline-none placeholder:text-secondary/90 first-line:ml-5 w-full"
      />
      <button className="bg-button text-lg text-primary font-bold rounded-lg py-2 px-4 mt-12 self-end">
        Save
      </button>
    </form>
  );
}

export default NewExerciseForm;
