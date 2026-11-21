import NewestCourseCarousel from "./NewestCourseCarousel";
import NewestOnlineCoursesCard from "./NewestOnlineCoursesCard";
import Titles from "./Titles";

const NewestOnlineCourses = () => {
  return (
    <div className=" lg:w-331 lg:h-104  mx-auto my-5 px-20 py-10 flex flex-col items-center justify-center gap-5">
      <Titles
        title="جدیدترین دوره های انلاین"
        subtitle=" محبوب ترین دوره های آموزشی نویسندگان متخصص ما را بررسی کنید."
        className="right-40 bottom-2"
      />
      {/* اسلایدر */}
        <NewestCourseCarousel />
        {/* کارت */}
        <NewestOnlineCoursesCard/>
    </div>
  );
};

export default NewestOnlineCourses;
