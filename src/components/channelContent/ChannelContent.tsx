import './ChannelContent.scss'

interface Channel {
  id: number
  name: string
  url: string
}

interface ChannelContentProps {
  channel: Channel
}

const ChannelContent: React.FC<ChannelContentProps> = ({ channel }) => {
  return (
    <div className="channel-content">
      <h1>{channel.name}</h1>
      <p>Watch the stream here: <a href={channel.url} target="_blank" rel="noopener noreferrer">{channel.url}</a></p>
    </div>
  )
}

export default ChannelContent
