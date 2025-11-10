
import Background from './comonents/Background'
import AboutMe from './sections/AboutMe'
import FeaturedProjects from './sections/FeaturedProjects'
import GetInTouch from './sections/GetInTouch'
import Home from './sections/home'
import MySkills from './sections/MySkills'

const App = () => {
  return (
    <div>
      <Background />
      <Home></Home>
      <MySkills></MySkills>
      <FeaturedProjects></FeaturedProjects>
      <AboutMe></AboutMe>
      <GetInTouch></GetInTouch>
    </div>
  )
}

export default App