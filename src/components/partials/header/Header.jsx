import LogoImg from "../../../assets/images/logo.png";
import { DarkModeNight } from "../../../core/icons/icons";
import {menuItems} from "@/core/constants/HeaderLinks"
import Container from "@/components/common/container";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Container>
      <div className="flex flex-row  h-24 rounded-xl shadow-[0_3px_8px_rgba(0,0,0,0.04),0_14px_14px_rgba(0,0,0,0.04)]  justify-between px-4 py-6">
        <img src={LogoImg} className="w-58 h-11" />
        <div className="w-95 h-10 flex justify-between ">
          {menuItems.map((item) => (
            <NavLink to={item.path} key={item.id}  className={({isActive})=>isActive? "heading-16 text-primary-600 decoration-solid decoration-primary-600"  :"heading-16 text-black"}> {item.title} </NavLink>
          ))}
        </div>
        <div className="w-58 h-12 flex justify-between">
          <div className="w-10 h-10  flex items-center justify-center border border-solid border-neutral-300 rounded-full text-center">
            <DarkModeNight />
          </div>
          <div className="w-45 h-12 heading-20  bg-blue-500 text-center text-white rounded-3xl leading-12">
            {" "}
            ورود یا ثبت نام{" "}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Header;
