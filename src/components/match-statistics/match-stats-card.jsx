import React, { useState, useEffect } from "react";
import PercentageBar from "../percentageBar/percentage-bar";
import "./match-stats-card.css";

function MatchStatsCard({ matchStatsData }) {
  const homeTeamStats = matchStatsData.home.stats;
  const awayTeamStats = matchStatsData.away.stats;

  const [homePossessionData, setHomePossessionData] = useState([]);
  const [awayPossessionData, setAwayPossessionData] = useState([]);
  const [homeTotalShots, setHomeTotalShots] = useState([]);
  const [awayTotalShots, setAwayTotalShots] = useState([]);
  const [homeShotsOnTarget, setHomeShotsOnTarget] = useState([]);
  const [awayShotsOnTarget, setAwayShotsOnTarget] = useState([]);
  const [homeCorners, setHomeCorners] = useState([]);
  const [awayCorners, setAwayCorners] = useState([]);
  const [homeYellowCards, setHomeYellowCards] = useState([]);
  const [homeRedCards, setHomeRedCards] = useState([]);
  const [awayYellowCards, setAwayYellowCards] = useState([]);
  const [awayRedCards, setAwayRedCards] = useState([]);

  useEffect(() => {
    setHomePossessionData(
      homeTeamStats.filter((stat) => stat.type === "possessionPercentage")
    );
    setAwayPossessionData(
      awayTeamStats.filter((stat) => stat.type === "possessionPercentage")
    );
    setHomeTotalShots(
      homeTeamStats.filter((stat) => stat.type === "totalScoringAtt")
    );
    setAwayTotalShots(
      awayTeamStats.filter((stat) => stat.type === "totalScoringAtt")
    );
    setHomeShotsOnTarget(
      homeTeamStats.filter((stat) => stat.type === "ontargetScoringAtt")
    );
    setAwayShotsOnTarget(
      awayTeamStats.filter((stat) => stat.type === "ontargetScoringAtt")
    );
    setHomeCorners(homeTeamStats.filter((stat) => stat.type === "wonCorners"));
    setAwayCorners(awayTeamStats.filter((stat) => stat.type === "wonCorners"));
    setHomeYellowCards(
      homeTeamStats.filter((stat) => stat.type === "totalYellowCard")
    );
    setHomeRedCards(
      homeTeamStats.filter((stat) => stat.type === "totalRedCard")
    );
    setAwayYellowCards(
      awayTeamStats.filter((stat) => stat.type === "totalYellowCard")
    );
    setAwayRedCards(
      awayTeamStats.filter((stat) => stat.type === "totalRedCard")
    );
  }, [homeTeamStats, awayTeamStats]);

  return (
    <>
      <div className="match-stats">
        <div className="home-data">
          <p>Possession</p>
          <p>{homePossessionData[0]?.value}%</p>
          <PercentageBar percentage={homePossessionData[0]?.value} />
          <p>Shots</p>
          <p>{homeTotalShots[0]?.value}</p>
          <p>Shots On target</p>
          <p>{homeShotsOnTarget[0]?.value}</p>
          <p>Corners</p>
          <p>{homeCorners[0]?.value}</p>
          <p>Cards</p>
          <p>Yellow:{homeYellowCards[0]?.value}</p>
          <p>Red:{homeRedCards[0]?.value}</p>
        </div>
        <div className="away-data">
          <p>Possession</p>
          <p>{awayPossessionData[0]?.value}%</p>
          <PercentageBar percentage={awayPossessionData[0]?.value} />
          <p>Shots</p>
          <p>{awayTotalShots[0]?.value}</p>
          <p>Shots On target</p>
          <p>{awayShotsOnTarget[0]?.value}</p>
          <p>Corners</p>
          <p>{awayCorners[0]?.value}</p>
          <p>Cards</p>
          <p>Yellow:{awayYellowCards[0]?.value}</p>
          <p>Red:{awayRedCards[0]?.value}</p>
        </div>
      </div>
    </>
  );
}

export default MatchStatsCard;
