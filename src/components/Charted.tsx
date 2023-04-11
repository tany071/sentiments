import React, { useEffect, useState } from "react";
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
  const [chartData, setChartData] = useState([]);
  const chartValues = async () => {
    let res = await localStorage.getItem("analyzedData");
    res = res?.split(",");

    setChartData(res);
  };

  const data = {
    labels: [
      "Day 0",
      "Day 1",
      "Day 2",
      "Day 3",
      "Day 4",
      "Day 5",
      "Day 6",
      "Day 7",
      "Day 8",
      "Day 9",
      "Day 10",
    ],
    datasets: [
      {
        label: "User Sentiment",
        data: chartData,
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
  useEffect(() => {
    chartValues();
  }, []);
  return (
    <div className="bg-gray-50 shadow-xl border-gray-200 border p-5 rounded-xl">
      <Line data={data} width={width} options={options} height={height} />
    </div>
  );
};

export default Charted;
