import img2 from "../../../assets/img/About/a.jpg";
import img1 from "../../../assets/img/About/b.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 mt-12 px-3 pb-20">
      {/* image section */}
      <section className="w-full lg:w-1/2">
        <div className="flex relative">
          <div className="w-10/12 h-auto">
            <img className="rounded-md" src={img1} alt="img1" />
          </div>
          <div className="absolute top-1/2 left-1/2 bg-white p-2 rounded-md">
            <img className="rounded" src={img2} alt="img2" />
          </div>
        </div>
      </section>

      {/* text section */}
      <section className="w-full lg:w-1/2 pt-4 text-justify">
        <h3 className="text-lg md:text-xl orange font-semibold">About Us</h3>
        <h1 className="text-2xl md:text-4xl font-bold dark1 cinzel py-6">
          Inspiring Growth Through Learning
        </h1>
        <p className="text-sm md:text-base font-medium dark3 my-2">
          We are passionate about providing top-quality courses across diverse
          fields. With expert instructors and cutting-edge content, we offer an
          engaging learning experience to help you achieve your goals and excel
          in your chosen path.
        </p>
        <p className="text-sm md:text-base font-medium dark2">
          Our platform is your one-stop solution for acquiring new skills and
          advancing your knowledge. From technical to creative skills, our
          curated courses cater to learners of all levels. Let us guide you on
          your educational journey and unlock new growth opportunities.
        </p>

        <Link to="/courses">
          <button className="rounded flex items-center justify-center gap-2 hover:bg-[#ed4321] mt-8 md:mt-10 bg-[#FF3811] text-sm font-bold titleFont px-4 py-2 text-white">
            Explore Courses <FaArrowRightLong />
          </button>
        </Link>
      </section>
    </div>
  );
};

export default About;
