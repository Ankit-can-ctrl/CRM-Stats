import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary elements
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

const LineBarChart = ({ data, labels }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Sales Over Time",
        data: data,
        fill: false,
        backgroundColor: "#36A2EB",
        borderColor: "#36A2EB",
      },
    ],
  };

  return (
    <div className="flex justify-center items-center h-full w-full">
      {/* Ensure the chart container takes full height */}
      <div className="h-full w-full" style={{ position: "relative" }}>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default LineBarChart;
