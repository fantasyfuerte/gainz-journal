import WorkOutCard from "@/components/workout-card";
import { Training } from "@prisma/client";

interface Props {
  trainings: null | Training[]
}

function WorkoutsList({trainings}: Props) {

  return (
    <article>
            <h2 className="text-primary/90 text-lg font-semibold mt-8">
              Workouts
            </h2>
            <ul className="p-2 grid grid-cols-5 gap-2">
              {trainings?.map((training) => (
                <WorkOutCard key={training.id} training={training} />
              ))}
            </ul>
          </article>
  )
}

export default WorkoutsList