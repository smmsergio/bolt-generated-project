import styled from 'styled-components'
import { FaYoutube } from 'react-icons/fa'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #000000, #1a1a1a);
  padding: 2rem;
  text-align: center;
`

const Content = styled.div`
  max-width: 800px;
  animation: fadeIn 0.8s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #FF0099, #00FFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 2rem;
`

const MainCTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 30px;
  background: #FF0000;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
  }

  svg {
    font-size: 1.4rem;
  }
`

export const Hero = () => (
  <HeroSection>
    <Content>
      <Title>AI-Powered Music Experience</Title>
      <Subtitle>
        Where artificial intelligence meets musical artistry.
        Each stream curated by unique AI personalities.
      </Subtitle>
      <MainCTA 
        href="https://youtube.com/@ai_stream" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube /> Subscribe to AI Stream
      </MainCTA>
    </Content>
  </HeroSection>
)
