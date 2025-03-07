import { Training } from "@prisma/client";
import { VictoryArea, VictoryChart, VictoryTheme } from "victory";

interface Props {
  trainings: Training[];
}

function Chart({ trainings }: Props) {
  if (trainings.length < 2)
    return <div className="text-red-600 text-xl">No enough data</div>;

  return (
    <div className="">
      <VictoryChart theme={VictoryTheme.clean}>
        <VictoryArea
          data={[
            {
              x: 1,
              y: 1,
            },
            {
              x: 2,
              y: 3,
            },
            {
              x: 3,
              y: 1,
            },
            {
              x: 4,
              y: 2,
            },
          ]}
        />
      </VictoryChart>
    </div>
  );
}

export default Chart;
