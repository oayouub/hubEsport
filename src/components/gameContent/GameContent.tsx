import './GameContent.scss'

interface GameContentProps {
  game: any
}

const GameContent: React.FC<GameContentProps> = ({ game }) => {
  return (
    <div className="game-content">
      {game ? (
        <div>
          <h1>{game.name}</h1> 
        </div>
      ) : (
        <h1>Game Title</h1>
      )}
    </div>
  )
}

export default GameContent
