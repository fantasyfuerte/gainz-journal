import WorkOutCard from "@/components/workout-card";
import { deleteWorkout, loadSets } from "@/libs/fetchs";
import { Set } from "@prisma/client";
import { useState } from "react";
import { CgChevronLeft, CgTrashEmpty } from "react-icons/cg";

export type Training = {
  id: number;
  date: string;
  exerciseId: number;
};

interface Props {
  trainings: null | Training[];
  exerciseId: string | string[];
  setRefreshTrigger: (val: boolean) => void;
  refreshTrigger: boolean;
}

function WorkoutsList({
  exerciseId,
  trainings,
  setRefreshTrigger,
  refreshTrigger,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sets, setSets] = useState<null | Set[]>(null);
  const [trainingId, setTrainingId] = useState<number>(0);

  function openModal(id: number) {
    setTrainingId(id);
    try {
      loadSets(Number(exerciseId), id).then((data) => {
        setSets(data);
      });
    } catch (e: unknown) {
      console.log(e);
      return;
    }
    setIsModalOpen(true);
  }

  function HandleDelete(id: number) {
    if (!confirm("Are you sure you want to delete this workout?")) return;
    setIsModalOpen(false);
    deleteWorkout(Number(exerciseId), id);
    setRefreshTrigger(!refreshTrigger);
  }

  return (
    <article className="min-h-28">
      <h2 className="text-primary/90 text-lg font-semibold mt-8">Workouts</h2>
      {isModalOpen ? (
        <div className="">
          <ul className="flex justify-between pt-2">
            <button
              className="text-red-500"
              onClick={() => setIsModalOpen(false)}
            >
              <CgChevronLeft className="text-primary/80" size={25} />
            </button>
            <button
              className="text-red-600"
              onClick={() => HandleDelete(trainingId)}
            >
              <CgTrashEmpty className="text-primary/80" size={25} />
            </button>
          </ul>
          {sets == null ? (
            <p className="text-primary/80 text-center mt-4">No sets found</p>
          ) : (
            <table className="w-full text-primary/80">
              <tr>
                <th className="text-primary/80 text-sm">Reps</th>
                <th className="text-primary/80 text-sm">Weight</th>
              </tr>
              {sets?.map((set) => (
                <tr key={set.id} className="">
                  <td className="text-primary/80 text-sm border-[1px] border-secondary px-2 text-center">
                    {set.reps}
                  </td>
                  <td className="text-primary/80 text-sm border-[1px] border-secondary px-2 text-center">
                    {set.weight}
                  </td>
                </tr>
              ))}
            </table>
          )}
        </div>
      ) : (
        <>
          {trainings == null ? (
            <div className="grid place-items-center h-[84px]">
              <p className="text-secondary/80">No trainings found</p>
            </div>
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
