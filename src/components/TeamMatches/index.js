// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch/index'

import MatchCard from '../MatchCard/index'

import './index.css'

class TeamMatches extends Component {
  state = {matchItem: [], isLoading: true}

  componentDidMount() {
    this.getMatchItems()
  }

  getMatchItems = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        result: data.latest_match_details.result,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(each => ({
        umpires: each.umpires,
        manOfTheMatch: each.man_of_the_match,
        result: each.result,
        id: each.id,
        date: each.date,
        venue: each.venue,
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        firstInnings: each.first_innings,
        secondInnings: each.second_innings,
        matchStatus: each.match_status,
      })),
    }

    this.setState({matchItem: updatedData, isLoading: false})
  }

  render() {
    const {matchItem, isLoading} = this.state
    const {teamBannerUrl, recentMatches, latestMatchDetails} = matchItem

    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="team-match-cont">
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="banner-image-url"
        />
        <p>Latest Match</p>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="ul-list-cont">
          {recentMatches.map(eachItem => (
            <MatchCard key={eachItem.id} listItem={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}
export default TeamMatches
