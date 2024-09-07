import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the route where the timePeriod can be part of the URL */}
        <Route path="/:timePeriod" element={<Dashboard />} />

        {/* Redirect to a default timePeriod (e.g., 1Day) if no timePeriod is specified */}
        <Route path="/" element={<Navigate to="/1Day" />} />
      </Routes>
    </Router>
  );
}

export default App;

// npx json-server --watch db.json --port 5000
