import Dropoff from "./Dropoff";
import Pickup from "./pickup";
import { useNavigate } from "react-router-dom";

function Pickupdropoff() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/Inventory");
  };
  
  return (
    <>
      <div className="w-[200%] h-[120%] flex justify-center shadow-slate-950 rounded-md font-bold text-black">
        <div className="p-5 pr-2 grid gap-3 border-2 border-gray-300 shadow-xl shadow-black bg-white rounded-xl  ">
          <div className="flex items:center">
            {/* find your ride */}
            <p className="text-left py-2 w-[400px] text-4xl border-b-2 border-black">
              Find your Ride
            </p>
          </div>
          <form className="pr-8" onSubmit={handleSubmit}>
          <div className="pb-2">
              <p className="pb-2 text-2xl">Pickup </p>
              
              <Pickup />
              {/* pickup date and time */}
            </div>
            <div className="pb-2">
              <p className="pb-2 text-2xl">Dropoff </p>
              <Dropoff />
              {/* drop date and time */}
            </div>
            <div className="pt-2">
              {/* search button */}
              <button
                type="submit"
                className=" w-36 bg-red-600 text-center text-white text-2xl px-4 py-2 hover:bg-red-800 tracking-wider"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Pickupdropoff;
