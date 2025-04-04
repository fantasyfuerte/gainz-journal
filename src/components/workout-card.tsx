import { Months } from "@/libs/utils";
import { Training } from "@/types";

interface Props {
  training: Training;
  openModal: (id: number) => void;
}

function WorkOutCard({ training, openModal }: Props) {
  const day = training.date.toString().split("-")[2].split("T")[0];
  const month = training.date.toString().split("-")[1];
  const monthName = Months[Number(month) - 1];

  return (
    <li
      className="flex flex-col justify-center border-[1px] border-primary/20 items-center h-12 rounded-md shadow-lg shadow-button/20 max-w-20"
      onClick={() => openModal(training.id)}
    >
      <p className="font-semibold text-primary/80 leading-none">{day}</p>
      <p className="font-semibold text-primary/80 leading-none">
        {monthName.slice(0, 3)}
      </p>
    </li>
  );
}

export default WorkOutCard;
