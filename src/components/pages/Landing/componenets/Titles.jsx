import { TitleLine } from "@/core/icons/icons";

const Titles = ({ title, subtitle, className }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="heading-30 text-center relative z-10"> {title}</h1>
        <TitleLine className={className} />
        <h4 className="body-14-semibold text-center text-neutral-400">
          {" "}
          {subtitle}{" "}
        </h4>
      </div>
    </>
  );
};

export default Titles;
