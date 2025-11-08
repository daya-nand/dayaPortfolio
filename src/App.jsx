
import Background from './comonents/Background'
import FeaturedProjects from './sections/FeaturedProjects'
import Home from './sections/home'
import MySkills from './sections/MySkills'

const App = () => {
  return (
    <div>
      <Background />
      <Home></Home>
      <MySkills></MySkills>
      <FeaturedProjects></FeaturedProjects>
      {/* <AboutMe></AboutMe> */}
    </div>
  )
}

export default App