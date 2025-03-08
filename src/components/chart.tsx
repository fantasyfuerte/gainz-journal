import { VictoryArea } from "victory";

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
    <div className="z-0">
      <VictoryArea
        data={chartData}
        interpolation={"natural"}
        labels={({ datum }) => datum.y}
        style={{
          parent: {
            zIndex: 0,
          },
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
    </div>
  );
}

export default Chart;
