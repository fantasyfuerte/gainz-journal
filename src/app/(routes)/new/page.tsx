function NewExercisePage() {
  const exerciseName = "Exercise Name";
  const exerciseDescription =
    "Add a description for your exercise and then press the save button.";

  return (
    <main className="h-screen bg-background flex flex-col items-start pt-20 px-8">
      <input
        type="text"
        placeholder={exerciseName}
        className="bg-transparent text-secondary text-xl font-semibold outline-none placeholder:text-secondary"
      />
      <textarea
        placeholder={exerciseDescription}
        aria-multiline="true"
        className="bg-transparent text-secondary/90 outline-none placeholder:text-secondary/90 mt-5 first-line:ml-5 w-full"
      />
    </main>
  );
}

export default NewExercisePage;
