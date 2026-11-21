import star from "@/assets/images/star.png";
import { HugeiconsIcon } from "@hugeicons/react";
import { TeachingIcon, StudentCardIcon } from "@hugeicons/core-free-icons";
import RatingStars from "@/components/common/RatingStars";
import defaultVFallback from "@/assets/images/defaultVFallback.png"
import FallbackImage from "@/components/common/FallbackImage";
import getTopCourses from "@/core/services/apis/courses/GetTopCourses.service";
import { useQuery } from "@tanstack/react-query";

const TopCoursesCard = () => {
  const {data,isLoading}=useQuery({
    queryFn:getTopCourses,
    queryKey:["get_top_courses"]
  })
  if (isLoading) return <div>در حال بارگذاری...</div>;
  if (!data || data.length === 0) return <div>دوره‌ای یافت نشد.</div>;
  return (
    <>
    {
      data.map((item)=>(
        <div key={item.courseId} className=" w-107 h-88  relative">
      {/* عکس */}
      <div className="w-95 h-53.5  rounded-lg absolute right-0 top-10">
        <FallbackImage src={item.imageAddress} fallbackSrc={defaultVFallback} className="rounded-lg w-full h-full "/>
      </div>
      {/* اطلاعات */}
      <div className="absolute top-40 right-6 w-83 h-47 rounded-lg bg-header-background flex flex-col items-center justify-around p-5">
        <div className="w-full flex items-center justify-between ">
          <h2 className="heading-20 text-[#272727] "> {item.title} </h2>
          <div className="w-25 h-2 bg-Warning-400 rounded-b-full"> </div>
        </div>
        <div className="w-full h-16 flex items-center justify-between border-b-2 border-b-neutral-100 border-b-solid">
          <RatingStars value={item.courseRate?.avg||0} readOnly={true} />
          <div className="bg-primary-300 px-2 h-8 rounded-lg flex items-center justify-around">
            <HugeiconsIcon icon={TeachingIcon} size={24} />
            <h2 className="caption-bold"> {item.teacherName} </h2>
          </div>
        </div>
        <div className="w-full flex items-center justify-between ">
          <div className="px-3 h-8 bg-neutral-100 rounded-lg flex gap-2 items-center">
            <HugeiconsIcon icon={StudentCardIcon} size={18} color="#3DCAE8" />
            <h4 className="caption-bold text-primary-400"> {item.capacity} </h4>
          </div>
          <div className="flex  gap-2">
            <h3 className="text-Danger-300 caption-bold decoration-Danger-300 line-through">
              {" "}
              تومان{item.cost} {" "}
            </h3>
            <h3 className="text-success-500 caption-bold"> off </h3>
          </div>
        </div>
      </div>
      {/* تخفیف */}
      <div className="w-22 h-22 absolute top-4 right-85">
        <img src={star} />
        <div className="flex flex-col items-center -rotate-20 -translate-y-13 translate-x-3">
          <span className="body-14-black text-white "> 20% </span>
          <span className="body-14-black text-white "> تخفیف </span>
        </div>
      </div>
    </div>
      ))
    }
    </>
    
    
  );
};

export default TopCoursesCard;
