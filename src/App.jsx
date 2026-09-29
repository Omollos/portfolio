import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Articles from './components/Articles'
import Hobbies from './components/Hobbies'
import SocialLinks from './components/SocialLinks'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Articles />
      <Hobbies />
      <Resume />
      <Contact />
      <SocialLinks />
    </div>
  )
}

export default App
