import { VictoryArea, VictoryChart, VictoryTheme } from "victory";

interface Props {
  data: { maxweight: number; date: Date };
}

function Chart({ data }: Props) {
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
