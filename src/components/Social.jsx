import styled from 'styled-components'
import { FaYoutube, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa'

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

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`

const SocialLink = styled.a`
  color: var(--text-primary);
  font-size: 2rem;
  transition: color 0.3s;

  &:hover {
    color: var(--primary-blue);
  }
`

export const Social = () => (
  <Section id="social">
    <Container>
      <Title>Connect With Us</Title>
      <SocialLinks>
        <SocialLink href="https://youtube.com/chaskytunes" target="_blank">
          <FaYoutube />
        </SocialLink>
        <SocialLink href="https://twitter.com/chaskytunes" target="_blank">
          <FaTwitter />
        </SocialLink>
        <SocialLink href="https://instagram.com/chaskytunes" target="_blank">
          <FaInstagram />
        </SocialLink>
        <SocialLink href="https://discord.gg/chaskytunes" target="_blank">
          <FaDiscord />
        </SocialLink>
      </SocialLinks>
    </Container>
  </Section>
)
