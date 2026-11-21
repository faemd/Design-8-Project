const TopCoursesSkeleton = () => {
  return (
    <div className=" w-107 h-88  relative animate-pulse">
      <div className="w-95 h-53.5  rounded-lg absolute right-0 top-10 bg-gray-300"></div>
      <div className="absolute top-40 right-6 w-83 h-47 rounded-lg bg-header-background flex flex-col items-center justify-around p-5">
        <div className="w-full  bg-gray-300"></div>
        <div className="w-full  bg-gray-300"></div>
        <div className="w-full  bg-gray-300"></div>
      </div>
    </div>
  );
};

export default TopCoursesSkeleton;
