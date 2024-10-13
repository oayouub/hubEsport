import React from 'react'
import './LeagueList.scss'

interface League {
  id: number
  name: string
  channels: { id: number; name: string; url: string }[]
}

interface LeagueListProps {
  leagues: League[]
  selectedLeague: League | null
  onLeagueSelect: (league: League) => void
}

const LeagueList: React.FC<LeagueListProps> = ({ leagues, selectedLeague, onLeagueSelect }) => {
  return (
    <ul className="league-list">
      {leagues.map((league) => (
        <li
          key={league.id}
          className={`league-item ${selectedLeague && selectedLeague.id === league.id ? 'selected' : ''}`}
          onClick={() => onLeagueSelect(league)}
        >
          {league.name}
        </li>
      ))}
    </ul>
  )
}

export default LeagueList
