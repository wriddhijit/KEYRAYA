import AnimatedText from "../Components/animatedtext";
import Pickupdropoff from "../Components/pickupdropoff";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className=" relative">
        <img
          className=" object-fill w-[1920px] h-[800px]  "
          src="/src/assets/photoshop/home.jpg"
          alt="Cover Picture"
        ></img>

        <div className="absolute top-[80px] left-12">
          <p className="text-[50px] text-red-600 font-extrabold mix-blend-color-dodge">
            Welcome to KEYRAYA
          </p>
        </div>

        <div className="absolute bottom-[50px] left-12">
        <div className=" pb-[70px] ">
            <p className=" mix-blend-darkentext-left uppercase text-[52px]">
              <AnimatedText />
            </p>
          </div>
          {/* <div className=" mix-blend-multiply text-black">
            <p className="text-left uppercase text-[44px] font-bold tracking-tight ">
              Rental Made Easy
            </p>
            <p className="text-left text-[22px] font-medium  pb-5 leading-relaxed tracking-tighter">
              With keyraya you can have the ride in its truest sense <br></br>
              of the world at your fingertips <br></br><span className=" tracking-tighter">With more than 50 bikes
              to choose from our inventory</span>
            </p>
          </div> */}

          {/* <div className= "">
            <Link
              to="/Inventory"
              className="inline-block bg-red-600 text-xl px-10 py-3 text-white hover:bg-red-800 tracking-wider"
            >
              <button type="button" className="">
                Explore
              </button>
            </Link>
          </div> */}
        </div>
      </div>

      <div className="absolute right-[420px] top-[35%] ">
        <Pickupdropoff />
        {/* login box */}
      </div>

      {/* viewport */}
      {/* figma react genrator */}

        {/* ✅ New Section with Clickable Image */}
        <div className="w-full mt-[100px] flex justify-center items-center">
        <Link to="/about"> {/* <-- Change this path to your target route */}
          <img
            src="/src/assets/photoshop/home page picture.png"
            alt="Navigate"
            className="w-[1800px] h-[800px] rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition duration-300"
          />
        </Link>
      </div>
    </>
  );
};
export default Home;
