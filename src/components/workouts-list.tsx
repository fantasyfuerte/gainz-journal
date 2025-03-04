import WorkOutCard from "@/components/workout-card";
import { useState } from "react";

export type Training = {
  id: number;
  date: string;
  exerciseId: number;
};

interface Props {
  trainings: null | Training[];
}

function WorkoutsList({ trainings }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal(id: number) {
    setIsModalOpen(true);
  }

  return (
    <article className="min-h-28">
      <h2 className="text-primary/90 text-lg font-semibold mt-8">Workouts</h2>
      {isModalOpen ? (
        <div></div>
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
