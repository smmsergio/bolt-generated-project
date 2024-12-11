import styled from 'styled-components'
import { FaHeadphones, FaClock, FaMusic, FaHeart } from 'react-icons/fa'

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
  margin-bottom: 3rem;
  color: var(--primary-blue);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
`

const Feature = styled.div`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`

const Icon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-blue);
  margin-bottom: 1rem;
`

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
`

const Description = styled.p`
  color: var(--text-secondary);
`

export const Features = () => (
  <Section>
    <Container>
      <Title>Why Choose ChaskyTunes</Title>
      <Grid>
        <Feature>
          <Icon><FaHeadphones /></Icon>
          <FeatureTitle>High Quality Audio</FeatureTitle>
          <Description>Experience crystal clear sound quality in every stream</Description>
        </Feature>
        <Feature>
          <Icon><FaClock /></Icon>
          <FeatureTitle>24/7 Streaming</FeatureTitle>
          <Description>Non-stop music available whenever you need it</Description>
        </Feature>
        <Feature>
          <Icon><FaMusic /></Icon>
          <FeatureTitle>Curated Playlists</FeatureTitle>
          <Description>Carefully selected tracks for the perfect atmosphere</Description>
        </Feature>
        <Feature>
          <Icon><FaHeart /></Icon>
          <FeatureTitle>Growing Community</FeatureTitle>
          <Description>Join thousands of music lovers in our community</Description>
        </Feature>
      </Grid>
    </Container>
  </Section>
)
