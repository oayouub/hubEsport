import './GameList.scss'

export interface GameListProps {
  games: {
    id: number
    name: string
    logo: string
    leagues: { id: number; name: string }[]
  }[]
  onGameSelect: (game: any) => void
  selectedGame: any
}

const GameList: React.FC<GameListProps> = ({ games, onGameSelect, selectedGame }) => {
  return (
    <ul className="game-list">
      {games.map((game) => (
        <li
          className={`item ${selectedGame && selectedGame.id === game.id ? 'selected' : ''}`}
          key={game.id}
          onClick={() => onGameSelect(game)} 
        >
          <img src={game.logo} alt={game.name} />
        </li>
      ))}
    </ul>
  )
}

export default GameList
