import WorkOutCard from "@/components/workout-card";
import { loadSets } from "@/libs/fetchs";
import { Set } from "@prisma/client";
import { useState } from "react";

export type Training = {
  id: number;
  date: string;
  exerciseId: number;
};

interface Props {
  trainings: null | Training[];
  exerciseId: string | string[];
}

function WorkoutsList({ exerciseId, trainings }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sets, setSets] = useState<null | Set[]>(null);

  function openModal(id: number) {
    setIsModalOpen(true);
    loadSets(Number(exerciseId), id).then((data) => {
      setSets(data);
    });
  }

  return (
    <article className="min-h-28">
      <h2 className="text-primary/90 text-lg font-semibold mt-8">Workouts</h2>
      {isModalOpen ? (
        <div>
          <button
            className="text-red-500"
            onClick={() => setIsModalOpen(false)}
          >
            Close modal
          </button>

          {sets == null ? (
            <p className="text-primary/80 text-center mt-4">No sets found</p>
          ) : (
            <ul className="">
              {sets?.map((set) => (
                <div key={set.id} className="">
                  <p className="text-primary/80 text-sm">
                    {set.reps} reps with {set.weight} lbs
                  </p>
                </div>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <>
          {trainings == null ? (
            <p className="text-primary/80 text-center mt-4">
              No trainings found
            </p>
          ) : (
            <ul className="p-2 grid grid-cols-5 gap-2">
              {trainings?.map((training) => (
                <WorkOutCard
                  openModal={openModal}
                  key={training.id}
                  training={training}
                />
              ))}
            </ul>
          )}
        </>
      )}
    </article>
  );
}

export default WorkoutsList;
