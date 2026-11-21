import FallbackImage from "@/components/common/FallbackImage";
import defaultHFallback from "@/assets/images/defaultHFallback.png";
import { HugeiconsIcon } from "@hugeicons/react";
import { TeachingIcon, StudentCardIcon } from "@hugeicons/core-free-icons";
import RatingStars from "@/components/common/RatingStars";
import { useQuery } from "@tanstack/react-query";
import getTopCourses from "@/core/services/apis/courses/GetTopCourses.service";

const NewestOnlineCoursesCard = () => {
  const { data, isLoading } = useQuery({
    queryFn: getTopCourses,
    queryKey: ["get_online_courses"],
  });
  if (isLoading) return <div>در حال بارگذاری...</div>;
  if (!data || data.length === 0) return <div>دوره‌ای یافت نشد.</div>;
  return (
    <div className="lg:hidden flex flex-col items-center gap-6">
      {data.map((item) => (
        <>
          {/* عکس */}
          <div key={item.courseId} className="h-65 w-75 rounded-xl">
            <FallbackImage
              src={item.imageAddress}
              fallbackSrc={defaultHFallback}
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          {/* اطلاعات */}
          <div className=" w-75 rounded-xl flex flex-col py-4 px-2 bg-header-background -mt-20 shadow-2xl  gap-3">
            <h2 className="heading-16"> {item.title}</h2>
            <p className="body-14"> {item.miniDescribe} </p>
            <div className="w-full  flex items-center justify-between">
              <RatingStars value={item.courseRate?.avg || 0} readOnly={true} />
              <div className="bg-primary-300 px-2 h-8 rounded-lg flex items-center justify-around">
                <HugeiconsIcon icon={TeachingIcon} size={24} />
                <h2 className="caption-bold"> {item.teacherName}</h2>
              </div>
            </div>
            <div className="w-full flex items-center justify-between ">
              <div className="px-3 h-8 bg-neutral-100 rounded-lg flex gap-2 items-center">
                <HugeiconsIcon
                  icon={StudentCardIcon}
                  size={18}
                  color="#3DCAE8"
                />
                <h4 className="caption-bold text-primary-400">
                  {" "}
                  {item.capacity}{" "}
                </h4>
              </div>
              <div className="flex  gap-2">
                <h3 className="text-success-500 caption-bold">
                  {" "}
                  {item.cost}تومان{" "}
                </h3>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default NewestOnlineCoursesCard;
