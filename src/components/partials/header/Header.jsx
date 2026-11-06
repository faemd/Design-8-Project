import LogoImg from "@/assets/images/logo.png";
import { menuItems } from "@/core/constants/HeaderLinks";
import Container from "@/components/common/container";
import { NavLink } from "react-router-dom";
import miniLogo from "@/assets/images/miniLogo.png";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  TextAlignLeftIcon,
  Moon02Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Container>
      <div className="flex flex-row  h-22 lg:h-24 rounded-xl shadow-[0_3px_8px_rgba(0,0,0,0.04),0_14px_14px_rgba(0,0,0,0.04)]  justify-between px-4 py-4 relative lg:py-6">
        <img src={LogoImg} className="hidden lg:block w-58 h-11" />
        <img src={miniLogo} className="w-10 h-10 block lg:hidden" />
        <div className="hidden lg:w-95 lg:h-10 lg:flex lg:justify-between ">
          {menuItems.map((item) => (
            <NavLink
              to={item.path}
              key={item.id}
              className={({ isActive }) =>
                isActive
                  ? "heading-16 text-primary-600 decoration-solid decoration-primary-600"
                  : "heading-16 text-black"
              }
            >
              {" "}
              {item.title}{" "}
            </NavLink>
          ))}
        </div>
        <div className=" w-58 h-12 flex justify-center gap-2">
          <div className="hidden lg:w-10 lg:h-10  lg:flex lg:items-center lg:justify-center lg:border lg:border-solid lg:border-neutral-300 lg:rounded-full lg:text-center">
            <HugeiconsIcon icon={Moon02Icon} size={22} />
          </div>
          <div className="heading-20 w-36 h-10 lg:w-45 lg:h-12 heading-20  bg-blue-500 text-center text-white rounded-3xl leading-10 lg:leading-12">
            {" "}
            ورود یا ثبت نام{" "}
          </div>
          <div
            onClick={toggleMenu}
            className="lg:hidden w-10 h-10 rounded-full border border-solid border-neutral-300 flex items-center justify-center"
          >
            <HugeiconsIcon
              icon={isMenuOpen ? Cancel01Icon : TextAlignLeftIcon}
              size={16}
            />
          </div>
          {/* منوی همبرگری */}
          {isMenuOpen && (
            <div className="absolute top-full mt-2 right-0 w-full rounded-2xl bg-white px-4 py-6 flex flex-col justify-between shadow-lg lg:hidden z-50">
              <div className="flex flex-col w-full pb-6 border-b border-neutral-300">
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    className="h-12 w-full flex items-center justify-between"
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? "body-18 text-primary-600 font-bold"
                          : "body-18 text-[#272727]"
                      }
                    >
                      {item.title}
                    </NavLink>
                    <h3 className="body-18 text-neutral-500">
                      {item.subtitle}
                    </h3>
                  </div>
                ))}
              </div>

              <div className="w-full flex justify-center mt-6">
                <img src={LogoImg} className="w-40 h-auto object-contain" />
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Header;
