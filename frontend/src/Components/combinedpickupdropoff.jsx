import Calendar from "./Date";
import TimePicker from "./Time";
import { useState } from "react";

function combinedpickupdropoff() {
  const [showPickupOverlay, setShowPickupOverlay] = useState(false);
  const [showDropoffOverlay, setShowDropoffOverlay] = useState(false);

  const handlePickupClick = () => {
    setShowPickupOverlay(true);
  };

  const handleDropoffClick = () => {
    setShowDropoffOverlay(true);
  };

  return (
    <div className="flex justify-between w-[700px] ">
      <div
        className="flex flex-col items-center justify-center w-1/2 h-24 border-r border-gray-300 cursor-pointer"
        onClick={handlePickupClick}
      >
        <p className="font-semibold">Pickup</p>
        <p>Date: {showPickupOverlay ? "Selected" : "Not selected"}</p>
        <p>Time: {showPickupOverlay ? "Selected" : "Not selected"}</p>
      </div>
      <div
        className="flex flex-col items-center justify-center w-1/2 h-24 cursor-pointer"
        onClick={handleDropoffClick}
      >
        <p className="font-semibold">Dropoff</p>
        <p>Date: {showDropoffOverlay ? "Selected" : "Not selected"}</p>
        <p>Time: {showDropoffOverlay ? "Selected" : "Not selected"}</p>
      </div>
      {showPickupOverlay && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-md">
            <p className="font-semibold">Select Pickup Date and Time</p>
            <div className="mt-2">
              <Calendar />
              <TimePicker />
            </div>
            <button
              className="bg-red-700 text-white px-4 py-2 mt-4"
              onClick={() => setShowPickupOverlay(false)}
            >
              Confirm Pickup
            </button>
          </div>
        </div>
      )}
      {showDropoffOverlay && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-md">
            <p className="font-semibold">Select Dropoff Date and Time</p>
            <div className="mt-2">
              <Calendar />
              <TimePicker />
            </div>
            <button
              className="bg-red-700 text-white px-4 py-2 mt-4"
              onClick={() => setShowDropoffOverlay(false)}
            >
              Confirm Dropoff
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default combinedpickupdropoff;
