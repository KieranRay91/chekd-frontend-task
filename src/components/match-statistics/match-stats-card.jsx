import React, { useState, useEffect } from "react";

import StatsDisplay from "./match-stats-display";
import "./match-stats-card.css";

function MatchStatsCard({ matchStatsData }) {
  const [homeStats, setHomeStats] = useState([])
  const [awayStats, setAwayStats] = useState([])

  useEffect(() => {
  setHomeStats(matchStatsData.home.stats)
  setAwayStats(matchStatsData.away.stats)}, [])

  return (
    <>
      <div className="match-stats">
        <div className="home-data">
          <StatsDisplay stats={homeStats}/>
        </div>
        <div className="away-data">
         <StatsDisplay stats={awayStats} />
      </div>
      </div>
    </>
  );
}

export default MatchStatsCard;
