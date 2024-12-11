import styled from 'styled-components'

const PlayerSection = styled.section`
  padding: 5rem 2rem;
  background: #1a1a1a;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--primary-blue);
`

const PlayerWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const IframePlayer = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
`

export const Player = () => (
  <PlayerSection>
    <Container>
      <Title>Live Stream</Title>
      <PlayerWrapper>
        <IframePlayer
          src="https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </PlayerWrapper>
    </Container>
  </PlayerSection>
)
