import { Training } from "@prisma/client";

interface Props {
  trainings: Training[];
}

function Chart({ trainings }: Props) {
  return <div className="text-red-600 text-xl">Chart</div>;
}

export default Chart;
