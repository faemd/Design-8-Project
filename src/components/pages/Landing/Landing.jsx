
import HeroSection from "./componenets/HeroSection"
import NewestOnlineCourses from "./componenets/NewestOnlineCourses"
import TopCourses from "./componenets/TopCourses"
import BestTeachers from "./componenets/BestTeachers"
import LatestNews from "./componenets/LatestNews"

const Landing = () => {
  return (
    <div>
      <HeroSection/>
      <NewestOnlineCourses/>
      <BestTeachers/>
      <TopCourses/>
      <LatestNews/>
    </div>
  )
}

export default Landing