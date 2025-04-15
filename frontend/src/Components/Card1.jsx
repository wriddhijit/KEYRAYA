import { Link } from "react-router-dom";
import { usePickupDate } from "./PickupDate";
import { useDropoffDate } from "./DropoffDate";
import { usePickupTime } from "./PickupTime";
import { useDropoffTime } from "./DropoffTime";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { usePrice } from "./price";
import { useNavigate } from "react-router-dom";
import { useBike } from "./bikeInfo";

Card1.propTypes = {
  motorcycle: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inStock: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

function timeStringToDate(timeString) {
  let timeParts = timeString.split(/:| /);
  let hours = parseInt(timeParts[0], 10);
  let minutes = parseInt(timeParts[1], 10);
  if (timeParts[2].toUpperCase() === "PM" && hours !== 12) {
    hours += 12;
  }
  let date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(0);
  return date;
}

function Card1({ motorcycle }) {
  const { pickedValue } = usePickupDate();
  const { pickedValue1 } = useDropoffDate();
  const { pickedTime } = usePickupTime();
  const { pickedTime1 } = useDropoffTime();

  const [price, setPrice] = useState(0);

  const navigate = useNavigate();
  const {setCheckoutPrice} = usePrice(); 
  const {setbikeID} = useBike();
  
  function handleClick(){
    setCheckoutPrice(price) 
    setbikeID(motorcycle._id)
    console.log(typeof motorcycle._id)
    console.log(motorcycle._id)
    navigate("/Checkout")      
  }

  useEffect(() => {
    if (pickedValue && pickedValue1 && pickedTime && pickedTime1) {
      const time = timeStringToDate(pickedTime);
      const time1 = timeStringToDate(pickedTime1);
      const hours =
        (pickedValue1 - pickedValue) / (1000 * 60 * 60) +
        (time1 - time) / (1000 * 60 * 60);
      setPrice(motorcycle.price * hours);
      console.log(hours);
    }
  }, [pickedValue, pickedValue1, pickedTime, pickedTime1, motorcycle.price]);

  return (
    <>
      <div className="p-3 border-2 border-gray-200 shadow-lg rounded-xl ">
        <div className="flex justify-center items-center p-4 text-2xl font-semibold tracking-wide">
          {motorcycle.title}
        </div>
        <div className=" flex justify-center items-center px-4">
          {/* picture */}
          <img
            className=" w-[474px] h-[338px]"
            src={motorcycle.image}
            alt={motorcycle.model}
          ></img>
        </div>

        {/* <div>
          <p className="text-center text-xs">Available at</p>
        </div>
        <div></div> */}

        {/* <div className="flex items-center justify-around py-6">
          
          <div>
           
            <p className=" tracking-wider leading-relaxed text-lg font-medium">
              {pickedValue ? pickedValue.toLocaleDateString() : ""}
            </p>
            <p className="text-center text-lg font-mono">{pickedTime}</p>
          </div>
          <div className=" p-2 w-8 h-8 flex rounded-full border-2 border-gray-200 shadow-lg bg-white">
            
            <img src="https://th.bing.com/th/id/R.0673093bbfcecc10fc43a2e61243415c?rik=qmA2sEFmCjuKWQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ftransparent-arrow-image%2ftransparent-arrow-image-3.png&ehk=q1%2b6xULlNSs6PGgvTMuuC9MdpzUXg186xJS2kWhEoj8%3d&risl=&pid=ImgRaw&r=0"></img>
          </div>
          <div>
            
            <p className=" tracking-wider leading-relaxed text-lg font-medium">
              {pickedValue1 ? pickedValue1.toLocaleDateString() : ""}
            </p>
            <p className="text-center text-lg font-mono">{pickedTime1}</p>
          </div>
        </div> */}

        <div className="border-b border-gray-400"></div>
        <div className="flex items-center justify-around py-4">
          <div className="px-8 text-center text-[22px] font-semibold tracking-normal ">
            {/* price */}
            ₹{motorcycle.price}<span className=" text-lg font-normal"> /hour</span>
          </div>
          <div className="border-l border-gray-300 h-12"></div>
          <div className="">
            {/* button */}

            <Link to="/Home">
            
              <button 
              // onClick={handleClick}
              className="bg-red-600 text-center text-white px-4 py-2 rounded-lg hover:bg-red-800 tracking-wider">
                Book Now
              </button>
              </Link>
          </div>
        </div>
        <div className=" py-1">
          {/* <p className=" text-center text-xs">Excess km charges: ₹/km</p>
          <p className=" text-center text-xs">Refundable security deposit: ₹</p> */}
          {/* <p className="text-center text-lg font-mono">
              {motorcycle.inStock ? 'In Stock' : 'Out of Stock'}
            </p>  */}
        </div>
      </div>
    </>
  );
}

export default Card1;

// import React from 'react';
// import { Link } from "react-router-dom";

// function Card({ motorcycle }) {
//   return (
//     <>
//       <div className="p-3 border-2 border-gray-200 shadow-lg rounded-xl">
//         <div className="flex justify-center items-center p-4">
//           {motorcycle.title}  {/* Display the motorcycle title */}
//         </div>
//         <div className="flex justify-center items-center px-4">
//           <img
//             src={motorcycle.image}
//             alt={motorcycle.model}
//             style={{ width: '100%', height: 'auto' }}
//           />
//         </div>
//         <div className="flex items-center justify-around py-6">
//           {/* Assuming pickedValue and pickedTime are to be handled outside this component */}
//           <div>
//             <p className="tracking-wider leading-relaxed text-lg font-medium">
//               Price: ${motorcycle.price}
//             </p>
//             <p className="text-center text-lg font-mono">
//               {motorcycle.inStock ? 'In Stock' : 'Out of Stock'}
//             </p>
//           </div>
//           <Link to="/checkout">
//             <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-800">
//               Book Now
//             </button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Card;
