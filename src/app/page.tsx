import ExerciseList from "@/components/exercise-list";
import { Zen_Dots } from "next/font/google";
import Image from "next/image";

const zendots = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main
      className={`${zendots.className} bg-background h-screen flex flex-col items-center justify-center gap-3`}
    >
      <div className="flex items-center justify-center">
        <h1
          translate="no"
          className="text-primary text-3xl font-bold leading-none"
        >
          <span className="ml-3">Gainz</span>
          <span className="block text-primary">Journal</span>
        </h1>
        <Image
          src="/logo.png"
          className="rotate-45"
          alt="logo"
          width={55}
          height={55}
        />
      </div>
      <div className="text-secondary">
        <h4 className="mb-2">Last added:</h4>
        <div className="w-64">
          <ExerciseList shorter />
        </div>
      </div>
    </main>
  );
}
