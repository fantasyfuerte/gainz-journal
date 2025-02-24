import { Months} from "@/libs/utils";

interface Props {
  date: {
    day: number;
    month: number;
  };
}

function WorkOutCard({ date }: Props) {
  const { day, month } = date;
  const monthName = month < 12 ? Months[month - 1] : "Invalid month";

  return (
    <li className="flex flex-col border-2 border-primary/80 justify-center items-center h-12 rounded-md shadow-xl shadow-button/50">
      <p className="font-semibold text-primary/80 leading-none">{day}</p>
      <p className="font-semibold text-primary/80 leading-none">
        {monthName.slice(0, 3)}
      </p>
    </li>
  );
}

export default WorkOutCard;
