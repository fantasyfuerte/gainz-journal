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
    <li className="flex flex-col justify-center border-[1px] border-primary/20 items-center h-12 rounded-md shadow-lg shadow-button/20">
      <p className="font-semibold text-primary/80 leading-none">{day}</p>
      <p className="font-semibold text-primary/80 leading-none">
        {monthName.slice(0, 3)}
      </p>
    </li>
  );
}

export default WorkOutCard;
