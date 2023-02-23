// Write your code here
import './index.css'

const MatchCard = props => {
  const {listItem} = props
  const {competingTeamLogo, result, matchStatus, competingTeam} = listItem
  const isWon = matchStatus === 'Won' ? 'text-green' : 'text-red'
  console.log(isWon)

  return (
    <li className="matchCard-cont">
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="match-card-image"
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={`match-status ${isWon}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
