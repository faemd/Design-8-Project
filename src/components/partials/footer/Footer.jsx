import { FooterSign } from "@/core/icons/icons";
import LogoImg from "@/assets/images/logo.png";
import namadImg from "@/assets/images/namad.png";
import { FootersItems } from "@/core/constants/FooterLinks";
import { FooterSocialMedia } from "@/core/constants/FooterSocialMedia";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUp02Icon } from "@hugeicons/core-free-icons";

const Footer = () => {
  return (
    <>
      <div className="w-full h-117 bg-[url('@/assets/images/footer.png')] bg-cover bg-center flex flex-col gap-4 items-center justify-around px-10 py-8 mt-10 relative">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-primary-300 w-22 h-21 rounded-2xl absolute bottom-102 left-29 flex justify-center items-center"
        >
          <HugeiconsIcon icon={ArrowUp02Icon} size={45} color="white" />
        </button>
        <div className="flex flex-col items-center mt-10 lg:w-full lg:flex lg:flex-row lg:justify-around lg:items-center ">
          <div className="w-71">
            <img src={LogoImg} />
            <p className="text-right text-neutral-600 caption">
              {" "}
              گروه بازرگانی آهن یک با بیش از یک دهه سابقه ، با نگاهی متفاوت
              پاسخگوی نیاز تمامی مشتریان در زمینه تامین و توزیع انواع مقاطع و
              ورق فولادی ، اتصالات ، شیرآلات صنعتی و سایر تجهیزات در صنایع نفت و
              گاز و پتروشیمی ، ساختمانی و آبرسانی با دو شعبه فعال در بازار آهن
              شاد آباد و پونک ، به دو صورت آنلاین و حضوری ، امکان تامین کالاهای
              مورد نیاز صنایع مطابق با استاندارد های روز دنیا را فراهم نموده
              است.{" "}
            </p>
          </div>
          <div className="hidden lg:w-161 lg:flex lg:flex-row lg:items-start lg:justify-around">
            {FootersItems.map((item, index) => (
              <div key={index}>
                {" "}
                <h3 className="heading-22 text-right text-black border-b-3 border-b-solid border-b-primary-500">
                  {" "}
                  {item.title}{" "}
                </h3>{" "}
                <div className="flex flex-col body-16 text-neutral-600 ">
                  {FootersItems[index].links.map((item) => (
                    <span key={item}> {item} </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="w-28 h-28">
            <img src={namadImg} />
          </div>
        </div>
        <div className=" w-full h-14 rounded-xl bg-footer-background flex items-center justify-center lg:justify-between px-2 caption ">
          <div className="hidden lg:flex lg:justify-between lg:gap-2">
            <div className="hidden lg:w-5 lg:h-5 lg:rounded-full lg:bg-transparent lg:border lg:border-white lg:border-solid lg:flex lg:items-center lg:justify-center">
              <FooterSign />
            </div>
            <p className="hidden lg:block lg:text-center lg:text-white">
              {" "}
              تمام حقوق مادی و معنوی این طراحی متعلق به امیر محمد خیرابادی
              میباشد{" "}
            </p>
          </div>
          <div className="flex justify-between gap-2">
            {FooterSocialMedia.map((item) => (
              <div
                key={item.id}
                className="rounded-full w-8 h-8 bg-[#263238] flex items-center justify-center  hover:text-primary-500"
              >
                {" "}
                {item.icon}{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
