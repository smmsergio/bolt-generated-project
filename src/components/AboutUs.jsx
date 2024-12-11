import styled from 'styled-components'
import { FaHeart, FaComments, FaHeadphones, FaLightbulb } from 'react-icons/fa'

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
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #FF0099, #00FFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Subtitle = styled.p`
  text-align: center;
  color: #b3b3b3;
  font-size: 1.2rem;
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`

const StorySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const StoryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StoryTitle = styled.h3`
  font-size: 1.8rem;
  color: #ffffff;
  margin-bottom: 1rem;
`

const StoryText = styled.p`
  color: #b3b3b3;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`

const ImageContainer = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 0, 153, 0.2), rgba(0, 255, 255, 0.2));
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`

const Values = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`

const Value = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const ValueIcon = styled.div`
  font-size: 2rem;
  color: var(--primary-blue);
  margin-bottom: 1rem;
`

const ValueTitle = styled.h4`
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`

const ValueText = styled.p`
  color: #b3b3b3;
  font-size: 0.9rem;
`

export const AboutUs = () => {
  return (
    <Section id="about">
      <Container>
        <Title>Nuestra Historia</Title>
        <Subtitle>
          Somos más que una plataforma de streaming - somos un espacio donde la tecnología 
          y la música se unen para crear algo extraordinario.
        </Subtitle>

        <StorySection>
          <StoryContent>
            <StoryTitle>¿Cómo Empezó Todo?</StoryTitle>
            <StoryText>
              Todo comenzó con una simple idea: ¿qué pasaría si combináramos la inteligencia 
              artificial con la pasión por la música? Después de meses de experimentación, 
              desarrollo y ajuste de algoritmos, nació AI Stream.
            </StoryText>
            <StoryText>
              Queríamos crear algo más que una simple plataforma de streaming - queríamos 
              construir un espacio donde cada oyente pudiera experimentar la música de una 
              manera completamente nueva y personal.
            </StoryText>
          </StoryContent>
          <ImageContainer>
            <img src="/studio-setup.jpg" alt="Nuestro espacio creativo" />
          </ImageContainer>
        </StorySection>

        <StorySection>
          <ImageContainer>
            <img src="/community-event.jpg" alt="Nuestra comunidad" />
          </ImageContainer>
          <StoryContent>
            <StoryTitle>Nuestra Comunidad</StoryTitle>
            <StoryText>
              Lo que hace especial a AI Stream es nuestra increíble comunidad. Cada 
              sugerencia, cada comentario, cada momento compartido nos ayuda a mejorar 
              y crecer. Vuestro feedback ha sido fundamental en la evolución de nuestros 
              AI hosts.
            </StoryText>
            <StoryText>
              Desde ajustar los algoritmos de selección musical hasta crear nuevas 
              experiencias interactivas, cada mejora está inspirada en nuestra comunidad 
              y su amor por la música.
            </StoryText>
          </StoryContent>
        </StorySection>

        <Values>
          <Value>
            <ValueIcon>
              <FaHeart />
            </ValueIcon>
            <ValueTitle>Pasión por la Innovación</ValueTitle>
            <ValueText>
              Combinamos creatividad musical con tecnología de vanguardia para crear 
              experiencias únicas.
            </ValueText>
          </Value>

          <Value>
            <ValueIcon>
              <FaComments />
            </ValueIcon>
            <ValueTitle>Comunidad Activa</ValueTitle>
            <ValueText>
              Escuchamos y colaboramos constantemente con nuestra comunidad para mejorar.
            </ValueText>
          </Value>

          <Value>
            <ValueIcon>
              <FaHeadphones />
            </ValueIcon>
            <ValueTitle>Calidad Musical</ValueTitle>
            <ValueText>
              Curamos cuidadosamente cada playlist para garantizar la mejor experiencia.
            </ValueText>
          </Value>

          <Value>
            <ValueIcon>
              <FaLightbulb />
            </ValueIcon>
            <ValueTitle>Mejora Continua</ValueTitle>
            <ValueText>
              Constantemente exploramos nuevas formas de hacer la música más accesible y personal.
            </ValueText>
          </Value>
        </Values>
      </Container>
    </Section>
  )
}
