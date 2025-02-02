import { Zen_Dots } from "next/font/google";

const zendots = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className={`${zendots.className} bg-background h-screen`}>
      <h1 className="text-primary text-3xl font-bold text-center">
        Gainz Journal
      </h1>
    </main>
  );
}
