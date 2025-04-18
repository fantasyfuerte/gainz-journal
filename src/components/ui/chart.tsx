import { VictoryArea, VictoryChart, VictoryAxis } from "victory";

interface Props {
  data: { maxweight: number; date: Date }[];
}

function Chart({ data }: Props) {
  const chartData = data.map((data) => ({
    x: new Date(data.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    y: data.maxweight,
  }));

  return (
    <div className="max-w-96 mx-auto">
      <VictoryChart
        style={{
          parent: {
            zIndex: 0,
          },
        }}
      >
        <VictoryAxis
          crossAxis
          style={{
            tickLabels: {
              fontSize: 15,
              fill: "#7f5af0",
              fontWeight: 500,
            },
          }}
        />
        <VictoryArea
          data={chartData}
          interpolation={"natural"}
          labels={({ datum }) => datum.y}
          style={{
            data: {
              fill: "#7f5af0",
              fillOpacity: 0.4,
              stroke: "#7f5af0",
              strokeWidth: 4,
              zIndex: 1,
            },
            labels: {
              fontSize: 15,
              fill: "#7f5af0",
              zIndex: 1,
              fontWeight: 500,
            },
          }}
        />
      </VictoryChart>
    </div>
  );
}

export default Chart;
