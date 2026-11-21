import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import defaultVFallback from "@/assets/images/defaultVFallback.png";
import { HugeiconsIcon } from "@hugeicons/react";
import { SidebarTopIcon } from "@hugeicons/core-free-icons";
import FallbackImage from "@/components/common/FallbackImage";
import { useQuery } from "@tanstack/react-query";
import getTopCourses from "@/core/services/apis/courses/GetTopCourses.service";
const NewestCourseCarousel = () => {
  const{data,isLoading}=useQuery({
    queryFn:getTopCourses,
    queryKey:['get_online_courses']
  })
  if (isLoading) return <div>در حال بارگذاری...</div>;
  if (!data || data.length === 0) return <div>دوره‌ای یافت نشد.</div>;
  return (
    <div className="hidden lg:flex">
      <style>
        {`
        .hero-carousel-wrapper .swiper-pagination-bullet{
        width:12px !important;
        height:12px !important;
        background:#B5B5B5 !important;
        opacity:1 !important;
        border:2px solid #B5B5B5 !important;
        transition:0.3s !important;
        
        }
        .hero-carousel-wrapper .swiper-pagination-bullet-active{
          background-color:#0CBDE2 !important;
          border-color:#0CBDE2 !important;
          width:32px !important;
          height:12px !important;
          border-radius:50px !important;
        }
        `}
      </style>
      <Swiper
        dir="rtl"
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="hero-carousel-wrapper w-full max-w-5xl mx-auto my-10"
      >
        {/* اسلاید ها*/}
        {data.map((item)=>(
          <SwiperSlide>
          <div className=" w-full min-h-75 flex items-center justify-between  p-6 rounded-2xl">
            {/* بخش عکس دوره*/}
            <div className="w-88 h-64  rounded-full border-primary-600 border-double border-2">
              <FallbackImage src={item.imageAddress} fallbackSrc={defaultVFallback} className="w-full h-full rounded-full"/>
            </div>
            {/* بخش اطلاعات */}
            <div className="w-145 h-64  flex flex-col gap-4">
              <h2 className="heading-20 text-right ">{item.title} </h2>
              <p className="body-14-bold ">
                {" "}
               {item.miniDescribe}
              </p>
              {/* هولدر قیمت و دکمه شروع یادگیری */}
              <div className="flex flex-col gap-8 ">
                {/* قیمت */}
                <div className=" flex items-center justify-around">
                  <div className="relative ">
                    <div className="heading-16 absolute -bottom-5 right-0 w-40 h-10 bg-Danger-100 text-Danger-500 decoration-Danger-500 line-through text-center leading-10 rounded-3xl">
                      40000تومان
                    </div>
                    <div className="heading-16 absolute -bottom-7  right-31 w-14 h-14 bg-white rounded-full border border-solid border-primary-900 text-Danger-500 text-center leading-14">
                      10%
                    </div>
                  </div>
                  <div className="heading-16 bg-success-100 text-success-700 px-3 h-10 leading-10 rounded-3xl text-center">
                    {" "}
                    {item.cost}تومان{" "}
                  </div>
                </div>
                {/* دکمه شروع یادگیری */}
                <div className="flex justify-end ">
                  <div className="flex items-center gap-2 rounded-full p-3 bg-primary-500 ">
                    <HugeiconsIcon
                      icon={SidebarTopIcon}
                      size={20}
                      color="white"
                    />
                    <h2 className="heading-20 text-white"> شروع یادگیری </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewestCourseCarousel;
