import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const StatisticsPage = () => {
  const [stats, setStats] = useState(null);
  const { timePeriod } = useParams(); // Get time period from URL
  const navigate = useNavigate(); // To update URL

  const timePeriods = ["1Day", "1Week", "1Month"]; // Available time periods

  useEffect(() => {
    // Fetch data whenever the URL timePeriod changes
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/${timePeriod}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (timePeriod) {
      fetchData();
    }
  }, [timePeriod]);

  // Handle button click to update time period and URL
  const handleTimePeriodChange = (newPeriod) => {
    navigate(`/${newPeriod}`); // Update the URL
  };

  return (
    <div>
      <div className="time-selector">
        {timePeriods.map((period) => (
          <button
            key={period}
            onClick={() => handleTimePeriodChange(period)}
            className={timePeriod === period ? "active" : ""}
          >
            {period}
          </button>
        ))}
      </div>

      <div className="statistics-data">
        {stats ? (
          <div>
            {/* Display stats data here */}
            <p>Total Sales: {stats.totalSales}</p>
            <p>New Leads: {stats.newLeads}</p>
            {/* Add charts, graphs, etc. */}
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default StatisticsPage;
