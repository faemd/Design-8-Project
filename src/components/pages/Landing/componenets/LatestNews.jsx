import Container from "@/components/common/Container";
import Titles from "./Titles";
import Button from "@/components/common/Button";
import { HugeiconsIcon } from "@hugeicons/react";
import { User02Icon, BookBookmark02Icon } from "@hugeicons/core-free-icons";
import defaultFallback from "@/assets/images/defaultHFallback.png";
import FallbackImage from "@/components/common/FallbackImage";
import { useQuery } from "@tanstack/react-query";
import getLatestNews from "@/core/services/apis/news/GetLatestNews.service";
const LatestNews = () => {
  const { data, isLoading } = useQuery({
    queryFn: getLatestNews,
    queryKey: ["get_latest_news"],
  });
  if (isLoading) return <div>در حال بارگذاری...</div>;
  const newsList = data?.news || [];
  if (newsList.length === 0) return <div>خبری یافت نشد.</div>;
  
  return (
    <Container>
      {/* عنوان */}
      <Titles
        title="جدیترین اخبار"
        subtitle="محبوب ترین دوره های آموزشی نویسندگان متخصص ما را بررسی کنید."
      />
      {/* کارت ها */}
      <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-center lg:items-center lg:gap-4">
        {newsList.map((item) => (
          <div key={item.id} className=" w-79 h-123 relative rounded-2xl my-10 shadow-2xl">
            <div className="rounded-b-2xl absolute bottom-0 right-0  w-full h-[40%] bg-[linear-gradient(to_top,#202020_0%,#414141_60%,transparent_100%)]"></div>
            <FallbackImage
              src={item.currentImageAddress}
              fallbackSrc={defaultFallback}
              className="rounded-2xl w-full h-full"
            />
            <div className=" w-full absolute bottom-0 left-0 p-5 flex flex-col  justify-around">
              <h4 className="heading-24 text-white"> {item.title} </h4>
              <p className="body-16 text-white"> {item.googleDescribe}</p>
              <div className="flex items-center justify-between ">
                <div className=" flex items-center  gap-1">
                  <HugeiconsIcon icon={User02Icon} size={20} color="#FFFFFF" />
                  <h4 className="body-14 text-white">
                    {" "}
                    {item.currentView}بازدید{" "}
                  </h4>
                </div>
                <div className=" flex items-center justify-start gap-1">
                  <HugeiconsIcon
                    icon={BookBookmark02Icon}
                    size={20}
                    color="#FFFFFF"
                  />

                  <h4 className="body-14 text-white">
                    {" "}
                    {item.addUserFullName}{" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* دکمه بیشتر */}
      <Button
        content="دوست داری بیشتر ببینی"
        className="w-56 h-15 body-18 mx-auto py-3 leading-4 "
      />
    </Container>
  );
};

export default LatestNews;
