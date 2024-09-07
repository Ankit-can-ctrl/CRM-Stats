import { useState, useEffect } from "react";
import TimeSelector from "../components/TimeSelector";
import StatsCard from "../components/StatsCard";
import PieChart from "../components/PieChart";
import LineBarChart from "../components/LineBarChart";

const Dashboard = () => {
  const defaultTime = "1Day";

  // Initialize state with default time
  const [selectedTime, setSelectedTime] = useState(defaultTime);

  const [stats, setStats] = useState({
    totalSales: 0,
    newLeads: 0,
    activeUsers: 0,
    pieData: [],
    lineData: [],
    labels: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/${selectedTime}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedTime]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">CRM Statistics</h1>

      {/* Time Selector */}
      <TimeSelector
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatsCard title="Total Sales" value={`$${stats.totalSales}`} />
        <StatsCard title="New Leads" value={stats.newLeads} />
        <StatsCard title="Active Users" value={stats.activeUsers} />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Sales Distribution</h2>
          <PieChart data={stats.pieData} />
        </div>

        {/* Line/Bar Chart */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Sales Over Time</h2>
          <LineBarChart data={stats.lineData} labels={stats.labels} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
