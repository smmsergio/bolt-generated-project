import styled from 'styled-components'
import { FaYoutube, FaTwitch, FaSpotify, FaSoundcloud } from 'react-icons/fa'

const HostCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.02);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, ${props => props.color}, ${props => props.accent});
  }
`

const HostName = styled.h3`
  font-size: 2rem;
  color: ${props => props.color};
  margin-bottom: 0.5rem;
`

const Role = styled.p`
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`

const Description = styled.p`
  color: #b3b3b3;
  margin-bottom: 1rem;
`

const Style = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  color: ${props => props.accent};
  margin-bottom: 1.5rem;
`

const Schedule = styled.p`
  color: #b3b3b3;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`

const PlatformButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`

const PlatformButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  color: ${props => props.platformColor};
  transition: all 0.2s ease;
  font-size: 0.9rem;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.2rem;
  }
`

const SubscribeButton = styled.a`
  display: block;
  width: 100%;
  padding: 0.8rem;
  border-radius: 20px;
  background: linear-gradient(90deg, ${props => props.color}, ${props => props.accent});
  color: white;
  text-align: center;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
  }
`

const platformColors = {
  youtube: '#FF0000',
  twitch: '#6441A5',
  spotify: '#1DB954',
  soundcloud: '#FF3300'
}

const platformIcons = {
  youtube: FaYoutube,
  twitch: FaTwitch,
  spotify: FaSpotify,
  soundcloud: FaSoundcloud
}

export const AIHost = ({ host }) => {
  const getPlatformUrl = (platform, username) => {
    const urls = {
      youtube: `https://youtube.com/@${username}`,
      twitch: `https://twitch.tv/${username}`,
      spotify: `https://open.spotify.com/user/${username}`,
      soundcloud: `https://soundcloud.com/${username}`
    }
    return urls[platform]
  }

  return (
    <HostCard color={host.color} accent={host.accent}>
      <HostName color={host.color}>{host.name}</HostName>
      <Role>{host.role}</Role>
      <Description>{host.description}</Description>
      <Style accent={host.accent}>{host.style}</Style>
      <Schedule>🎵 {host.schedule}</Schedule>
      
      <PlatformButtons>
        {Object.entries(host.platforms).map(([platform, username]) => {
          const Icon = platformIcons[platform]
          return (
            <PlatformButton 
              key={platform}
              href={getPlatformUrl(platform, username)}
              target="_blank"
              rel="noopener noreferrer"
              platformColor={platformColors[platform]}
            >
              <Icon /> Watch
            </PlatformButton>
          )
        })}
      </PlatformButtons>

      <SubscribeButton 
        href={getPlatformUrl('youtube', host.platforms.youtube)}
        target="_blank"
        rel="noopener noreferrer"
        color={host.color}
        accent={host.accent}
      >
        Subscribe
      </SubscribeButton>
    </HostCard>
  )
}
