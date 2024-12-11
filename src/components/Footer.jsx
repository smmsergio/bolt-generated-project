import styled from 'styled-components'
import { FaYoutube, FaTwitter, FaInstagram, FaDiscord, FaHeart } from 'react-icons/fa'

const FooterContainer = styled.footer`
  background: #0a0a0a;
  padding: 4rem 2rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Logo = styled.h3`
  font-size: 1.5rem;
  background: linear-gradient(45deg, #FF0099, #00FFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`

const Description = styled.p`
  color: #b3b3b3;
  line-height: 1.6;
  margin-bottom: 1rem;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`

const SocialLink = styled.a`
  color: #b3b3b3;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.hoverColor};
    transform: translateY(-3px);
  }

  &:focus {
    outline: 2px solid #FF0099;
    outline-offset: 2px;
  }
`

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`

const LinkItem = styled.li`
  margin-bottom: 0.8rem;
`

const Link = styled.a`
  color: #b3b3b3;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #FF0099;
  }

  &:focus {
    outline: 2px solid #FF0099;
    outline-offset: 2px;
  }
`

const SectionTitle = styled.h4`
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`

const Copyright = styled.div`
  text-align: center;
  color: #b3b3b3;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    color: #FF0099;
  }
`

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo>AI Stream</Logo>
          <Description>
            Transformando la música a través de la inteligencia artificial. 
            Únete a nuestra comunidad y descubre una nueva forma de experimentar la música.
          </Description>
          <SocialLinks>
            <SocialLink 
              href="https://youtube.com/@aistream" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en YouTube"
              hoverColor="#FF0000"
            >
              <FaYoutube />
            </SocialLink>
            <SocialLink 
              href="https://twitter.com/aistream" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en Twitter"
              hoverColor="#1DA1F2"
            >
              <FaTwitter />
            </SocialLink>
            <SocialLink 
              href="https://instagram.com/aistream" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en Instagram"
              hoverColor="#E1306C"
            >
              <FaInstagram />
            </SocialLink>
            <SocialLink 
              href="https://discord.gg/aistream" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Únete a nuestro Discord"
              hoverColor="#5865F2"
            >
              <FaDiscord />
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Enlaces Rápidos</SectionTitle>
          <LinkList>
            <LinkItem>
              <Link href="#about">Nuestra Historia</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#hosts">AI Hosts</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#live">En Vivo</Link>
            </LinkItem>
          </LinkList>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Comunidad</SectionTitle>
          <LinkList>
            <LinkItem>
              <Link href="/discord">Únete al Discord</Link>
            </LinkItem>
            <LinkItem>
              <Link href="/feedback">Enviar Feedback</Link>
            </LinkItem>
            <LinkItem>
              <Link href="/faq">Preguntas Frecuentes</Link>
            </LinkItem>
          </LinkList>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <span>© {currentYear} AI Stream. Hecho con</span>
        <FaHeart />
        <span>en España</span>
      </Copyright>
    </FooterContainer>
  )
}
