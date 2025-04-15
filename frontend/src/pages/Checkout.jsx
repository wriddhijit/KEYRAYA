import { usePickupDate } from "../Components/PickupDate";
import { useDropoffDate } from "../Components/DropoffDate";
import { usePickupTime } from "../Components/PickupTime";
import { useDropoffTime } from "../Components/DropoffTime";
import { usePrice } from "../Components/price";
import { useState, useEffect } from "react";
import axios from "axios";
import { useBike } from "../Components/bikeInfo";
import  DisplayRazorpay  from "../Components/razorpay";

function Checkout() {
  const { pickedValue } = usePickupDate();
  const { pickedValue1 } = useDropoffDate();
  const { pickedTime } = usePickupTime();
  const { pickedTime1 } = useDropoffTime();  

  const { checkoutPrice } = usePrice();
  const { bikeID } = useBike();

  const [motorcycle, setMotorcycle] = useState(null);

  useEffect(() => {
    console.log(`http://localhost:5000/api/inventory/${bikeID}`);
    axios
      .get(`http://localhost:5000/api/inventory/${bikeID}`)
      .then((response) => {
        console.log("Fetched motorcycles:", response.data);
        setMotorcycle(response.data);
      })
      .catch((error) => {
        console.error("Error fetching motorcycles:", error);
      });
  }, [bikeID]);

  return (
    <>
      <div className="flex justify-center my-16">
        <div className=" w-[1200px] h-[600px] border-2 border-gray-300 shadow-xl rounded-xl">
          <div>
            <p className=" text-4xl text-balance pl-[160px] pt-10">Checkout</p>
          </div>
          <div className="grid grid-cols-[500px,700px]">
            <div className="flex flex-col items-center pl-2">
              <img src={motorcycle?.image}></img>
              <p className="pt-4 text-2xl">
                {" "}
                {motorcycle?.title} {/* Bike Name */}
              </p>
            </div>
            <div className=" flex flex-col pl-2 pr-8 justify-evenly">
              <div className="flex felx-row justify-evenly">
                <div>
                  {/* FromTIme */}
                  <p className=" tracking-wider leading-relaxed text-2xl font-medium">
                    {pickedValue ? pickedValue.toLocaleDateString() : ""}
                  </p>
                  <p className=" pt-4 text-center text-xl font-mono">{pickedTime}</p>
                </div>
                <div className="flex items-center p-2 w-10 h-10 rounded-full border-2 border-gray-200 shadow-lg bg-white">
                  {/* TO */}
                  <img src="https://th.bing.com/th/id/R.0673093bbfcecc10fc43a2e61243415c?rik=qmA2sEFmCjuKWQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ftransparent-arrow-image%2ftransparent-arrow-image-3.png&ehk=q1%2b6xULlNSs6PGgvTMuuC9MdpzUXg186xJS2kWhEoj8%3d&risl=&pid=ImgRaw&r=0"></img>
                </div>
                <div>
                  {/* ToTIme */}
                  <p className=" tracking-wider leading-relaxed text-2xl font-medium">
                    {pickedValue1 ? pickedValue1.toLocaleDateString() : ""}
                  </p>
                  <p className=" pt-4 text-center text-xl font-mono">{pickedTime1}</p>
                </div>
              </div>
              <div className="border-b my-6 border-black"></div>
              <div>
                <div className="flex flex-row justify-between mt-10">
                  <div>
                    <p className="text-2xl font-medium tracking-wider">
                      {" "}
                      Base Fare:  <span  className="pl-6 font-medium text-lg"> ₹{checkoutPrice}</span>
                      {/* Time Duration */}{" "}
                    </p>
                  </div>
                  <div>{/* Base price */}</div>
                </div>
                <div>
                  <p className=" font-normal"> Excess KM Charges: <span  className=" pl-2 font-medium text-lg"> ₹20/km {/* Extra KM */}</span></p>
                </div>
              </div>

              <div className="flex flex-row pt-[60px] justify-between">
                <div className="">
                  <p className="text-4xl font-medium">Total: </p>
                </div>
                <div className="text-4xl font-medium tracking-tight">{/* Total price */} ₹{checkoutPrice}</div>
              </div>
              <div className="flex justify-center mt-[50px]">
                {/* <button
                  <displayRazorpay />
                  className="bg-red-600 w-[600px] text-white text-xl tracking-wider px-4 py-2 rounded-lg hover:bg-red-800"
                >
                  Make Payment
                </button> */}
                <DisplayRazorpay price = {checkoutPrice}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Checkout;
