import { useFetchHero } from "./FetchData";
import Navbar from "./NavBar";
import "animate.css";

const Hero = () => {
  const { heroContent } = useFetchHero();

  return (
    <div
      id="home"
      className="hero h-80 hero-h relative"
      style={{
        backgroundImage: `url(${heroContent.img})`,
      }}
    >
      <Navbar />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 mt-8 text-5xl font-bold text-white animate__animated animate__bounceInLeft">
            {heroContent.heroTitle}
          </h1>
          {/* <p className="mb-5">Enter your slogan here...</p> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
