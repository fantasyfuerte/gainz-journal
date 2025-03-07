import WorkOutCard from "@/components/workout-card";
import { deleteWorkout, loadManySets } from "@/libs/fetchs";
import { Set, Training } from "@prisma/client";
import { useEffect, useState } from "react";
import { CgChevronLeft, CgTrashEmpty } from "react-icons/cg";
import Chart from "./chart";

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
  // states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sets, setSets] = useState<null | Set[]>(null);
  const [setsToShow, setSetsToShow] = useState<null | Set[]>(null);
  const [trainingId, setTrainingId] = useState<number>(0);
  const [chartData, setChartData] = useState<
    null | { maxweight: number; date: Date }[]
  >(null);

  // functions
  function openModal(id: number) {
    if (sets === null) return;
    setTrainingId(id);
    setSetsToShow(sets.filter((set) => set.trainingId === id));
    setIsModalOpen(true);
  }

  function HandleDelete(id: number) {
    if (!confirm("Are you sure you want to delete this workout?")) return;
    setIsModalOpen(false);
    deleteWorkout(Number(exerciseId), id);
    setRefreshTrigger(!refreshTrigger);
  }

  function calculateRM(sets: Set[]) {
    if (sets.length === 0) return 0;

    const estimaciones = sets.map((set) => set.weight * (1 + set.reps / 30));
    const promedio1RM =
      estimaciones.reduce((acc, val) => acc + val, 0) / sets.length;

    return Math.round(promedio1RM);
  }

  // effects
  useEffect(() => {
    const Arr: { maxweight: number; date: Date }[] = [];
    const trainingsIds = trainings?.map((training) => training.id);
    if (trainingsIds === undefined) return;
    loadManySets(Number(exerciseId), trainingsIds).then((data) =>
      setSets(data)
    );
    setChartData(Arr);
  }, [trainings, exerciseId]);

  return (
    <>
      <article className="min-h-28">
        <h2 className="text-primary/90 text-lg font-semibold mt-8">Workouts</h2>
        {isModalOpen ? (
          <div className="">
            <ul className="flex justify-between pt-2">
              <button onClick={() => setIsModalOpen(false)}>
                <CgChevronLeft className="text-primary/80" size={25} />
              </button>
              <button onClick={() => HandleDelete(trainingId)}>
                <CgTrashEmpty className="text-primary/80" size={25} />
              </button>
            </ul>
            {setsToShow == null ? (
              <p className="text-primary/80 text-center mt-4">No sets found</p>
            ) : (
              <table className="w-full text-primary/80">
                <thead>
                  <tr>
                    <th className="text-primary/80 text-sm">Reps</th>
                    <th className="text-primary/80 text-sm">Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {setsToShow?.map((set) => (
                    <tr key={set.id} className="">
                      <td className="text-primary/80 text-sm border-[1px] border-secondary px-2 text-center">
                        {set.reps}
                      </td>
                      <td className="text-primary/80 text-sm border-[1px] border-secondary px-2 text-center">
                        {set.weight}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th>1RM</th>
                    <th>{calculateRM(setsToShow)}</th>
                  </tr>
                </tfoot>
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
      {trainings && trainings.length >= 2 && chartData !== null && (
        <Chart data={chartData} />
      )}
    </>
  );
}

export default WorkoutsList;
