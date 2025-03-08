import { VictoryArea, VictoryChart, VictoryTheme } from "victory";

interface Props {
  data: { maxweight: number; date: Date }[];
}

function Chart({ data }: Props) {
  const chartData = data.map((data) => ({
    x: new Date(data.date).toLocaleDateString(),
    y: data.maxweight,
  }));

  console.log(data);
  return (
    <div className="">
      <VictoryChart theme={VictoryTheme.clean}>
        <VictoryArea data={chartData} interpolation={"natural"} />
      </VictoryChart>
    </div>
  );
}

export default Chart;
