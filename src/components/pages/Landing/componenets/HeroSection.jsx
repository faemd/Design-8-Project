import heroImageOne from "@/assets/images/1.png";
import heroImageTwo from "@/assets/images/3.png";
import heroImageThree from "@/assets/images/2.png";
import Container from "@/components/common/Container";
const HeroSection = () => {
  return (
    <Container>
      <div className=" flex justify-center items-center ">
        <h2 className="heading-48 text-[#272727] text-center"> آموزش </h2>
        <div className="heading-48 text-white text-center rounded-4xl bg-primary-300 p-3">
          {" "}
          برنامه نویسی{" "}
        </div>
        <h2 className="heading-48 text-[#272727] text-center"> آنلاین آسان </h2>
      </div>
      <div className="mx-auto my-7">
        <h3 className="heading-48-normal text-[#272727] text-center">
          {" "}
          سریع و همیشه همراه شما{" "}
        </h3>
      </div>
      <div className="w-90 h-24 lg:w-177 lg:h-14 mx-auto my-6">
        <p className="body-18 text-center text-neutral-800">
          {" "}
          در وب‌سایت ما می‌توانید دوره‌ها و کلاس‌هایی را پیدا کنید که به شما کمک
          می‌کنند مهارت بیاموزید پیشرفت کنید و در مسیر رشد شخصی و حرفه‌ای سرزنده
          بمانید.{" "}
        </p>
      </div>
      <div className="w-62 heading-20 text-white bg-primary-500 rounded-full text-center p-4 mx-auto my-6">
        {" "}
        آموزش رو شروع کنیم
      </div>
      <div className="flex flex-col items-center gap-10 lg:gap-0 justify-around my-6 lg:flex-row">
        <div className="hidden lg:block">
          <img src={heroImageOne} />
        </div>
        <div className="w-57 h-65 bg-primary-200 rounded-3xl heading-18 text-black text-center flex flex-col  items-center justify-center gap-5 ">
          <h4> +1000 </h4>
          <h4> دانشجوی فعال و شاغل در سرتاسر جهان </h4>
        </div>
        <div className="hidden lg:block">
          <img src={heroImageTwo} />
        </div>
        <div   className="w-57 h-65 bg-neutral-100 rounded-3xl heading-18 text-black text-center flex flex-col  items-center justify-center gap-5 "> 
           <h4 > +20 </h4>
          <h4> سال سابقه آموزش در برنامه نویسی </h4> 
        </div>
        <div className="hidden lg:block">
          <img src={heroImageThree} />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
