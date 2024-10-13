import React, { useState, useEffect } from "react"
import GameContent from "../../components/gameContent/GameContent"
import GameList from "../../components/gameList/GameList"
import "./Content.scss"

interface ContentProps {
  selectedItem: any
}

const Content: React.FC<ContentProps> = ({ selectedItem }) => {
  const [selectedGame, setSelectedGame] = useState<any>(null)

  const handleGameSelect = (game: any) => {
    setSelectedGame(game)
  }

  useEffect(() => {
    if (selectedItem && selectedItem.games.length > 0) {
      setSelectedGame(selectedItem.games[0])
    }
  }, [selectedItem])

  return (
    <div className="content">
      {selectedItem ? (
        <div>
          <div className="content-header">
            <h1>{selectedItem.name}</h1>
            <GameList
              games={selectedItem.games}
              onGameSelect={handleGameSelect}
              selectedGame={selectedGame}
            />
          </div>
          <div className="content-body">
            <GameContent game={selectedGame} />
          </div>
        </div>
      ) : (
        <h1>Please select an item</h1>
      )}
    </div>
  )
}

export default Content
