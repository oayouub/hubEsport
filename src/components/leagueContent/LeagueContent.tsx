import React, { useState, useEffect } from 'react'
import './LeagueContent.scss'
import ChannelList from '../channelList/ChannelList'
import ChannelContent from '../channelContent/ChannelContent'

interface League {
  id: number
  name: string
  channels: { id: number; name: string; url: string }[]
}

interface LeagueContentProps {
  league: League
}

const LeagueContent: React.FC<LeagueContentProps> = ({ league }) => {
  const [selectedChannel, setSelectedChannel] = useState<{
    id: number
    name: string
    url: string
  } | null>(null)

  useEffect(() => {
    if (league.channels.length > 0) {
      setSelectedChannel(league.channels[0]) 
    }
  }, [league.channels])

  return (
    <div className="league-content">
      <ChannelList
        channels={league.channels}
        onSelectChannel={(channel) => setSelectedChannel(channel)}
        selectedChannel={selectedChannel} 
      />
      {selectedChannel && <ChannelContent channel={selectedChannel} />}
    </div>
  )
}

export default LeagueContent
