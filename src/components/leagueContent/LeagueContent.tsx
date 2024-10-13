import React from 'react'
import './LeagueContent.scss'

interface League {
  id: number
  name: string
  channels: { id: number; name: string; url: string }[]
}

interface LeagueContentProps {
  league: League
}

const LeagueContent: React.FC<LeagueContentProps> = ({ league }) => {
  return (
      <ul className="league-content">
        {league.channels.map((channel) => (
          <li className='league-item' key={channel.id}>
            <a href={channel.url} target="_blank" rel="noopener noreferrer">
              {channel.name}
            </a>
          </li>
        ))}
      </ul>
  )
}

export default LeagueContent
