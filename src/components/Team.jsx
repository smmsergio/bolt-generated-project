import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaSpotify } from 'react-icons/fa'

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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  padding: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const MemberCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const MemberImage = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  background: linear-gradient(45deg, #FF0099, #00FFFF);
  padding: 3px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    background: #0a0a0a;
  }
`

const MemberName = styled.h3`
  font-size: 1.8rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
`

const Role = styled.p`
  color: var(--primary-blue);
  font-size: 1.1rem;
  margin-bottom: 1rem;
`

const Bio = styled.p`
  color: #b3b3b3;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1.5rem;
`

const Skill = styled.span`
  background: rgba(255, 255, 255, 0.1);
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  color: #ffffff;
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
`

const SocialLink = styled.a`
  color: #b3b3b3;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-blue);
  }
`

export const Team = () => {
  const teamMembers = [
    {
      name: "Javi",
      role: "Desarrollador Full Stack & Músico",
      bio: "Ingeniero de software especializado en desarrollo web y apasionado por la música electrónica. Con más de 5 años de experiencia en desarrollo full stack y producción musical.",
      skills: [
        "JavaScript/TypeScript",
        "React",
        "Node.js",
        "Producción Musical",
        "Síntesis",
        "Sound Design"
      ],
      social: {
        github: "https://github.com/javi",
        linkedin: "https://linkedin.com/in/javi",
        spotify: "https://open.spotify.com/artist/javi"
      }
    },
    {
      name: "Sergio",
      role: "Ingeniero de Software & Compositor",
      bio: "Desarrollador backend con experiencia en sistemas distribuidos y músico clásico formado. Combina la precisión de la programación con la creatividad musical.",
      skills: [
        "Python",
        "Sistemas Distribuidos",
        "AWS",
        "Composición",
        "Piano",
        "Teoría Musical"
      ],
      social: {
        github: "https://github.com/sergio",
        linkedin: "https://linkedin.com/in/sergio",
        spotify: "https://open.spotify.com/artist/sergio"
      }
    }
  ]

  return (
    <Section id="team">
      <Container>
        <Title>Sobre Nosotros</Title>
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <MemberCard key={index}>
              <MemberImage>
                <img src={`/placeholder-${index + 1}.jpg`} alt={member.name} />
              </MemberImage>
              <MemberName>{member.name}</MemberName>
              <Role>{member.role}</Role>
              <Bio>{member.bio}</Bio>
              <Skills>
                {member.skills.map((skill, idx) => (
                  <Skill key={idx}>{skill}</Skill>
                ))}
              </Skills>
              <SocialLinks>
                <SocialLink href={member.social.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </SocialLink>
                <SocialLink href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </SocialLink>
                <SocialLink href={member.social.spotify} target="_blank" rel="noopener noreferrer">
                  <FaSpotify />
                </SocialLink>
              </SocialLinks>
            </MemberCard>
          ))}
        </TeamGrid>
      </Container>
    </Section>
  )
}
