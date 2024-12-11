import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AboutUs } from './components/AboutUs'
import { Hosts } from './components/Hosts'
import { Footer } from './components/Footer'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <AboutUs />
      <Hosts />
      <Footer />
    </>
  )
}

export default App
