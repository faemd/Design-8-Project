import Button from "@/components/common/Button";
import Titles from "./Titles";
import TopCoursesCard from "./TopCoursesCard";
import bgImg from "@/assets/images/background1.png";
import Container from "@/components/common/Container";

const TopCourses = () => {
  return (
    <div
      className="hidden lg:w-full lg:h-350 lg:bg-cover lg:my-10  lg:flex lg:flex-col lg:items-center lg:justify-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Container>
        <Titles title="برترین دوره ها"/>
        <div className=" w-full flex flex-wrap justify-center items-center gap-3 p-10">
          <TopCoursesCard />
        </div>
        <Button content="دوست داری بیشتر ببینی" className="w-69 h-17 relative top-10 right-30" />
      </Container>
    </div>
  );
};

export default TopCourses;
