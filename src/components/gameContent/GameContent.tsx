import React, { useState, useEffect } from 'react'
import LeagueList from '../leagueList/LeagueList'
import LeagueContent from '../leagueContent/LeagueContent'
import './GameContent.scss'

interface League {
  id: number
  name: string
  channels: { id: number; name: string; url: string }[]
}

interface GameContentProps {
  game: {
    id: number
    name: string
    leagues: League[]
  } | null
}

const GameContent: React.FC<GameContentProps> = ({ game }) => {
  const [selectedLeague, setSelectedLeague] = useState<League | null>(null)

  useEffect(() => {
    if (game && game.leagues.length > 0) {
      setSelectedLeague(game.leagues[0])
    }
  }, [game])

  const handleLeagueSelect = (league: League) => {
    setSelectedLeague(league)
  }

  return (
    <div className="game-content">
      {game ? (
        <div>
          <LeagueList
            leagues={game.leagues}
            selectedLeague={selectedLeague}
            onLeagueSelect={handleLeagueSelect}
          />
          {selectedLeague && <LeagueContent league={selectedLeague} />}
        </div>
      ) : (
        <h1>Game Title</h1>
      )}
    </div>
  )
}

export default GameContent
