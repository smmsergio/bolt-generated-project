import styled from 'styled-components'

const Nav = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.h1`
  font-size: 1.5rem;
  background: linear-gradient(45deg, #FF0099, #00FFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #FF0099;
    }
  }
`

export const Header = () => (
  <Nav>
    <Logo>AI Stream</Logo>
    <NavLinks>
      <a href="#about">Historia</a>
      <a href="#hosts">AI Hosts</a>
      <a href="#live">En Vivo</a>
    </NavLinks>
  </Nav>
)
