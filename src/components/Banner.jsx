import { Link } from "react-router-dom";
import bannerImg from "../../src/assets/images/more/3.png";

const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[600px] relative"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
        
      >
        <div className="hero-content text-neutral-content absolute right-28">
          <div className="">
            <h1 className="mb-5 text-3xl font-bold">
              {" "}
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="mb-5 text-sm">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of <br /> every moment!!! Enjoy
              the beautiful moments and make them memorable.
            </p>
            <button className="p-2  bg-[#E3B577] text-black">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
