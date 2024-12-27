import About from "../About/About";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="bg-[#f3f3f3] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Banner />
        <About />
      </div>
    </div>
  );
};

export default Home;