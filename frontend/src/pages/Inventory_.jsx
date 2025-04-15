import InventorySection_ from "../Components/InventorySection_";
import combinedpickupdropoff from "../Components/combinedpickupdropoff";

const Inventory_ = () => {
  return (
    <>
      <div className="">
        <div className="relative ">
          <img
            className="object-cover opacity-95 "
            src="./src/assets/inventory.png"
          ></img>
          <div className="absolute top-16 right-12 text-white p-2">
            <p className="text-left uppercase text-8xl font-bold">INVENTORY</p>
          </div>
        </div>
      </div>
      <div className="border-b border-black m-5 "></div>

      <div className="my-4 py-2 pt-0 bg-slate-100">
        {/* <div className="max-w-full grid grid-cols-[500px,1fr]"> */}
          <div className="max-w-full flex">
          {/* main */}
          {/* <div className="">
            <p>filter</p>
            <img src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f8fa48cd-bd8c-42a9-8217-59a557034a3a_457x540.png"></img>
          </div> */}
          <div className="">
            {/* main inventory */}
            {/* <div className="grid grid-cols-[700px,1fr] pb-4 text-white ">
              <div className= " bg-slate-800 rounded-md ">
                <combinedpickupdropoff />
              </div>

              <div className="flex items-center pl-6">
                <button
                  type="button"
                  className="inline-block bg-red-800 text-center text-xl px-10 py-3 text-white hover:bg-red-300 hover:text-black"
                >
                  Explore
                </button>
              </div>
            </div> */}
            <div>
              {/* inventory */}
              <InventorySection_ />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory_;
