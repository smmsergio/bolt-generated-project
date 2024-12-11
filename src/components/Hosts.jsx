import styled from 'styled-components'
import { aiHosts } from '../data/aiHosts'
import { AIHost } from './AIHost'

const Section = styled.section`
  padding: 5rem 2rem;
  background: #0a0a0a;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #FF0099, #00FFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  animation: fadeIn 1s ease-out;

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

export const Hosts = () => (
  <Section id="hosts">
    <Container>
      <Title>Meet Our AI Hosts</Title>
      <Grid>
        {aiHosts.map(host => (
          <AIHost key={host.id} host={host} />
        ))}
      </Grid>
    </Container>
  </Section>
)
