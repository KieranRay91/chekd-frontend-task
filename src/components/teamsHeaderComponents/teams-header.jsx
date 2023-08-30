
import "./teams-header.css"


function TeamsHeader({ matchData }) {

    const homeTeam = matchData.match.contestant.filter(team => team.position === "home");
    const awayTeam = matchData.match.contestant.filter(team => team.position === "away");
    const finalScore = matchData.match.liveData.matchDetails.scores.total

return (

    <div className="teams-header-container">
        <h2>{matchData.match.meta.competition.name}</h2>
        <div className="team-data">
        <img src="https://cdn.fantasyiteam.com/bethub/teams/150x150/4dsgumo7d4zupm2ugsvm4zm4d.png" />
        <h2>{homeTeam[0].name}</h2>
        <div className="score">
        <p>{finalScore.home}</p>
        </div>
        </div>
        <div className="team-data">
        <img src="https://cdn.fantasyiteam.com/bethub/teams/150x150/hzqh7z0mdl3v7gwete66syxp.png" />
        <h2>{awayTeam[0].name}</h2>
        <div className="score">
        <p>{finalScore.away}</p>
        </div>
     </div>
    
    </div>
  );
  
}
export default TeamsHeader;