import './ChannelList.scss'

interface Channel {
  id: number
  name: string
  url: string
}

interface ChannelListProps {
  channels: Channel[]
  onSelectChannel: (channel: Channel) => void
  selectedChannel: Channel | null
}

const ChannelList: React.FC<ChannelListProps> = ({ channels, onSelectChannel, selectedChannel }) => {
  return (
    <ul className="channel-list">
      {channels.map((channel) => (
        <li
          key={channel.id}
          className={`channel-item ${selectedChannel?.id === channel.id ? 'selected' : ''}`} // Applique un style différent si sélectionné
          onClick={() => onSelectChannel(channel)} // Gère la sélection au clic
        >
          {channel.name}
        </li>
      ))}
    </ul>
  )
}

export default ChannelList
