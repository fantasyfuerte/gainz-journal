import ExerciseCard from "@/components/exercise-card";
import { Zen_Dots } from "next/font/google";

const zendots = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main
      className={`${zendots.className} bg-background h-screen flex flex-col items-center justify-center gap-3`}
    >
      <h1 className="text-primary text-3xl font-bold text-center leading-none">
        Gainz<span className="block text-primary">Journal</span>
      </h1>
      <div className="text-secondary">
        <h4 className="mb-2">Last added:</h4>
        {/* Mapping over the array of exercises */}
        <ul className="flex flex-col gap-3">
          <ExerciseCard />
          <ExerciseCard />
          <ExerciseCard />
        </ul>
      </div>
    </main>
  );
}
