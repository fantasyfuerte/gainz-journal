import { API_BASE_URL, loadTrainings } from "@/libs/fetchs";
import { useState } from "react";
import { CgTrash } from "react-icons/cg";
import { type Training } from "./workouts-list";

interface Props {
  closeModal: () => void;
  id: string | string[] | undefined;
  setTrainings: (trainings: Training[]) => void;
}

type Sets = {
  weight: number;
  reps: number;
  id: number;
};

function AddWorkOutModal({ closeModal, id, setTrainings }: Props) {
  const [formOpen, setFormOpen] = useState<boolean>(false);
  const [sets, setSets] = useState<Sets[]>([]);

  async function handleAddWorkout() {
    const req = await fetch(`${API_BASE_URL}/api/exercises/${id}/trainings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sets: sets,
      }),
    });
    if (req.ok) {
      loadTrainings(Number(id)).then((data) => {
        setTrainings(data);
      });
    }
    closeModal();
  }

  const addSet = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { weight, reps } = e.currentTarget;
    if (weight === 0 || reps === 0) return;
    setSets([
      ...sets,
      {
        reps: Number(reps.value),
        weight: Number(weight.value),
        id: Math.round(Math.random() * 1000),
      },
    ]);
    weight.value = "";
    reps.value = "";
    setFormOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-black/20 backdrop-blur-[2px] z-50 gap-4">
      <div className="bg-secondary/80 h-52 w-80 rounded-lg p-5">
        {!formOpen ? (
          <button
            onClick={() => setFormOpen(true)}
            className="text-primary/80 text-lg font-bold rounded-lg py-2 px-4 bg-button"
          >
            Add Set
          </button>
        ) : (
          <form onSubmit={addSet}>
            <input
              type="number"
              className="text-primary/80 text-lg font-bold bg-transparent outline-none inline-block w-16"
              placeholder="Weight"
              name="weight"
            />
            <input
              type="number"
              className="text-primary/80 text-lg font-bold bg-transparent outline-none inline-block w-16"
              placeholder="Reps"
              name="reps"
            />
            <button className="text-primary/80 text-lg font-bold rounded-lg py-2 px-4 bg-button">
              Add Set
            </button>
          </form>
        )}
        {sets.map((set) => (
          <div key={set.id} className="flex items-center">
            <p>
              {set.reps} reps with {set.weight} lbs
            </p>
            <button
              onClick={() => setSets(sets.filter((s) => s.id !== set.id))}
            >
              <CgTrash size={30} />
            </button>
          </div>
        ))}
      </div>
      <ul className="flex gap-2">
        <button
          className="bg-cta text-lg text-primary font-bold rounded-lg py-2 px-4"
          onClick={handleAddWorkout}
        >
          Add Workout
        </button>
        <button
          className="bg-button text-lg text-primary font-bold rounded-lg py-2 px-4"
          onClick={closeModal}
        >
          Cancel
        </button>
      </ul>
    </div>
  );
}

export default AddWorkOutModal;
