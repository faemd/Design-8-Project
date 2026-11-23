import Container from "@/components/common/Container";
import Titles from "./Titles";
import Button from "@/components/common/Button";
import teachercard from "@/assets/images/teachercard.png"
import { useQuery } from "@tanstack/react-query";
import GetTeachers from "@/core/services/apis/teachers/GetTeachers.service";
import FallbackImage from "@/components/common/FallbackImage";
const BestTeachers = () => {
  const {data,isLoading}=useQuery({
    queryFn:GetTeachers,
    queryKey:["get_teachers"],
  })
  // console.log(data);
  if (isLoading) return <div>در حال بارگذاری...</div>;
  if (!data || data.length === 0) return <div>دوره‌ای یافت نشد.</div>;
  return (
    <Container>
      <div className="h-207 my-10">
        {/* عنوان */}
        <div className="w-141 h-12 mx-auto">
          <Titles
            title="اساتید برتر "
            className="right-50 bottom-3"
            subtitle="کلاس های مسترلایف توسط رهبران صنعت آموزش داده می شود که  هیجان زده هستند ابزارها، تکنیک ها و سفرهای حرفه ای خود را با شما به  اشتراک بگذارند."
          />
        </div>
        {/* کارت ها */}
        {
          data.map((item)=>(
            <div key={item.teacherId} className="h-156 flex flex-col items-center justify-center gap-4 my-5">
            <div className="w-74 h-97 rounded-5">
              <FallbackImage src={item.pictureAddress} fallbackSrc={teachercard}/>
                
            </div>
            <h2 className="heading-30 text-[#272727] text-right dark:text-white">    {item.fullName}   </h2>
            {/* <h4 className="body-24 text-[#272727] text-right">   webDesign    </h4> */}
            <h4 className="body-24 text-[#272727] text-right dark:text-white">   تعداد دوره ها:{item.courseCounts} دوره  </h4>
        </div>
          ))
        }
        
        {/* دکمه بیشتر */}
        <Button content="دوست داری بیشتر ببینی" className="w-69 h-17 mx-auto" />
      </div>
    </Container>
  );
};

export default BestTeachers;
