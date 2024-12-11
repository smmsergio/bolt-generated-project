import styled from 'styled-components'

const Section = styled.section`
  padding: 5rem 2rem;
  background: #0d0d0d;
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

const StreamButton = styled.a`
  display: inline-block;
  background: var(--primary-blue);
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-weight: bold;
  margin: 1rem;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`

export const Stream = () => (
  <Section id="stream">
    <Container>
      <Title>Start Streaming</Title>
      <StreamButton href="https://youtube.com/chaskytunes" target="_blank">
        Join Live Stream
      </StreamButton>
    </Container>
  </Section>
)
