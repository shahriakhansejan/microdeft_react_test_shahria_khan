import { Link } from "react-router-dom";

const BannerText = () => {
  return (
    <div className="bg-gradient-to-r from-black/95 to-black/5 h-auto py-36">
      <div className="w-full md:w-2/3 lg:w-1/2 pr-6 md:pr-0 pl-6 md:pl-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Empower Your Journey with Learning
        </h1>
        <p className="text-justify text-white py-8 font-medium">
          Access a world of courses and elevate your expertise. Unlock unlimited
          opportunities with diverse courses and take your expertise to the next
          level.
        </p>
      </div>
      <div className="pr-6 md:pr-0 pl-6 md:pl-16 flex gap-4">
        <Link to='/courses'>
          <button className="border rounded hover:bg-[#FF3811] hover:border-[#FF3811] text-sm font-bold border-white px-3 py-2 text-white">
            All Courses
          </button>
        </Link>
        <Link to="/add-courses">
          <button className="border rounded hover:bg-[#FF3811] hover:border-[#FF3811] text-sm font-bold border-white px-3 py-2 text-white">
            Add Course
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BannerText;
