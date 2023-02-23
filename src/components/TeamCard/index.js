// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamItems} = props
  const {id, name, teamImageUrl} = teamItems
  return (
    <Link className="team-link" to={`/blogs/${id}`}>
      <li className="team-card-cont">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
