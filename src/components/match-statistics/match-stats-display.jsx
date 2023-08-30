import { useState, useEffect } from "react";
import PercentageBar from "../percentageBar/percentage-bar";
import "./match-stats-display.css";

function StatsDisplay({ stats }) {
  const [possessionPercentage, setPossessionPercentage] = useState("");
  const [totalShots, setTotalShots] = useState("0");
  const [shotsOnTarget, setShotsOnTarget] = useState("0");
  const [cornersWon, setCornersWon] = useState("");
  const [yellowCards, setYellowCards] = useState("0");
  const [redCards, setRedCards] = useState("0");

  useEffect(() => {
    stats.forEach((stat) => {
      if (stat.type === "possessionPercentage")
        setPossessionPercentage(stat.value);
      if (stat.type === "totalScoringAtt") setTotalShots(stat.value);
      if (stat.type === "ontargetScoringAtt") setShotsOnTarget(stat.value);
      if (stat.type === "wonCorners") setCornersWon(stat.value);
      if (stat.type === "totalYellowCard") setYellowCards(stat.value);
      if (stat.type === "totalRedCard") setRedCards(stat.value);
    });
  }, [stats]);

  return (
    <div>
      <p>Possession</p>
      {possessionPercentage && <p>{possessionPercentage}%</p>}
      {possessionPercentage && (
        <PercentageBar percentage={possessionPercentage} />
      )}
      <p>Shots</p>
      {totalShots && <p>{totalShots}</p>}
      <p>Shots On Target</p>
      {shotsOnTarget && <p>{shotsOnTarget}</p>}
      <p>Corners</p>
      {cornersWon && <p>{cornersWon}</p>}
      <div className="yellow-card" />
      {yellowCards && <p className="card-number">{yellowCards}</p>}
      <div className="red-card" />
      {redCards && <p className="card-number">{redCards}</p>}
    </div>
  );
}

export default StatsDisplay;
