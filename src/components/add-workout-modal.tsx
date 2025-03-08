import { API_BASE_URL, loadTrainings } from "@/libs/fetchs";
import { Training } from "@prisma/client";
import { useState } from "react";
import { CgClose, CgMathPlus } from "react-icons/cg";

interface Props {
  closeModal: () => void;
  id: string | string[];
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
    if (sets.length === 0) return;

    const getReq = await loadTrainings(Number(id));
    if (getReq !== null) {
      const trainingsInSameDay = getReq.filter(
        (training: Training) =>
          new Date(training.date).toDateString() === new Date().toDateString()
      );
      if (trainingsInSameDay.length !== 0) {
        closeModal();
        return alert("You can't add more than one workout per day");
      }
    }
    const reqPost = await fetch(
      `${API_BASE_URL}/api/exercises/${id}/trainings`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sets: sets,
        }),
      }
    );
    if (reqPost.ok) {
      loadTrainings(Number(id)).then((data) => {
        setTrainings(data);
      });
    }
    closeModal();
  }

  const addSet = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { weight, reps } = e.currentTarget;
    if (Number(weight.value) === 0 || Number(reps.value) === 0) {
      setFormOpen(false);
      return;
    }
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
      <div className="bg-secondary/80 h-52 w-80 rounded-lg p-2 overflow-y-scroll">
        {!formOpen ? (
          <button
            onClick={() => setFormOpen(true)}
            className="text-primary/80 text-lg font-bold rounded-lg py-2 px-4 bg-button w-full"
          >
            Add Set
          </button>
        ) : (
          <form
            onSubmit={addSet}
            className="flex justify-center gap-2 flex-wrap"
          >
            <input
              type="number"
              className="text-primary/80 text-lg font-bold bg-transparent outline-none inline-block basis-1/2 grow text-center"
              placeholder="Weight"
              name="weight"
            />
            <input
              type="number"
              className="text-primary/80 text-lg font-bold bg-transparent outline-none inline-block basis-1/2 grow text-center"
              placeholder="Reps"
              name="reps"
            />
            <button className="text-primary/80 text-lg font-bold rounded-lg m-1 p-2 bg-button">
              <CgMathPlus size={30} />
            </button>
          </form>
        )}
        {sets.map((set) => (
          <div
            key={set.id}
            className="flex justify-between p-3 border-b-[1px] border-primary"
          >
            <p className="text-primary/80">
              <span className="font-bold">{set.reps}</span> reps with{" "}
              <span className="font-bold">{set.weight}</span> lbs
            </p>
            <button
              onClick={() => setSets(sets.filter((s) => s.id !== set.id))}
            >
              <CgClose size={20} className="text-red-500 drop-shadow-lg" />
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
