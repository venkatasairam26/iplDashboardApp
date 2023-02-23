// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  return (
    <div className="latest-match-cont">
      <div>
        <p>{latestMatchDetails.competingTeam}</p>
        <p>{latestMatchDetails.date}</p>
        <p>{latestMatchDetails.venue}</p>
        <p>{latestMatchDetails.result}</p>
      </div>
      <img
        src={latestMatchDetails.competingTeamLogo}
        alt=""
        className="latest-match-image"
      />
      <div>
        <p>
          first Innings <br />
          {latestMatchDetails.firstInnings}
        </p>
        <p>
          second Innings <br />
          {latestMatchDetails.secondInnings}
        </p>
        <p>
          Man Of The Match <br />
          {latestMatchDetails.manOfTheMatch}
        </p>
        <p>
          Umpires <br />
          {latestMatchDetails.umpires}
        </p>
      </div>
    </div>
  )
}
export default LatestMatch
