import { FooterSign } from "@/core/icons/icons";
import LogoImg from "@/assets/images/logo.png";
import namadImg from "@/assets/images/namad.png";
import { FootersItems } from "@/core/constants/FooterLinks";
import { FooterSocialMedia } from "@/core/constants/FooterSocialMedia";
import { HugeiconsIcon } from '@hugeicons/react';
import{ArrowUp02Icon} from '@hugeicons/core-free-icons';

const Footer = () => {
  return (
    <>
      <div className="w-full h-117 bg-[url('@/assets/images/footer.png')] bg-cover bg-center flex flex-col gap-4 items-center justify-around px-10 py-8 mt-10 relative">
        <div className="bg-primary-300 w-22 h-21 rounded-2xl absolute bottom-102 left-29"> <HugeiconsIcon icon={ArrowUp02Icon} size={50} color="white"/> </div>
        <div className=" w-full flex justify-around items-center ">
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
          <div className="  w-161 flex flex-row items-center justify-around">
            {FootersItems.map((item, index) => (
              <div className="flex-start">
                {" "}
                <h3 className="heading-22 text-right text-black border-b-3 border-b-solid border-b-primary-500">
                  {" "}
                  {item.title}{" "}
                </h3>{" "}
                <div className="flex flex-col text-base text-neutral-600 font-medium">
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
        <div className=" w-full h-14 rounded-xl bg-neutral-dark-300 flex items-center justify-between px-2 caption ">
          <div className="flex justify-between gap-2">
            <div className="w-5 h-5 rounded-full bg-transparent border border-white border-solid flex items-center justify-center">
              <FooterSign />
            </div>
            <p className="text-center text-white">
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
