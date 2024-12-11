import styled from 'styled-components'

const Section = styled.section`
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

const Description = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
`

export const About = () => (
  <Section id="about">
    <Container>
      <Title>About ChaskyTunes</Title>
      <Description>
        Experience non-stop music streaming with our carefully curated playlists. 
        24/7 endless beats featuring the best in electronic, lo-fi, and ambient music. 
        Perfect for work, study, or relaxation.
      </Description>
    </Container>
  </Section>
)
