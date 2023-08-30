import { useState, useEffect } from "react";
import TeamsHeader from "./components/teamsHeaderComponents/teams-header";
import CategoriesBar from "./components/categoriesBar/categories-bar";
import MatchStatsCard from "./components/match-statistics/match-stats-card";
import { fetchAllMatchData } from "../utils";
import "./App.css";

function App() {
  const [matchData, setMatchData] = useState({});
  const [matchStatsData, setMatchStatsData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetchAllMatchData();
      setMatchData(response);
      setMatchStatsData(response.match.liveData.lineups);
      setIsLoading(false);
      

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div className="widget-wrapper">
      <TeamsHeader matchData={matchData} />
      <CategoriesBar  />
      <MatchStatsCard matchStatsData={matchStatsData} />
    </div>
  );
}

export default App;
