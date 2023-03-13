import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Line, Scatter, Bubble } from "react-chartjs-2";
import { NextPage } from "next";

ChartJs.register(
  CategoryScale,
  LinearScale,
  Filler,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

interface Props {
  height: string | number | undefined;
  width: string | number | undefined;
}

const Charted: NextPage<Props> = ({ height, width }) => {
  const data = {
    labels: [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
      "Week 9",
      "Week 10",
    ],
    datasets: [
      {
        label: "User Sentiment",
        data: [40, 45, 50, 45, 60, 55, 50, 55, 65, 55],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.3,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="bg-gray-50 shadow-xl border-gray-200 border p-5 rounded-xl">
      <Line data={data} width={width} options={options} height={height} />
    </div>
  );
};

export default Charted;
