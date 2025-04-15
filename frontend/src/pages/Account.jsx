import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";

function Account() {
  const [selectedDP, setSelectedDP] = useState(null);
  const [selectedAadhar, setSelectedAadhar] = useState(null);
  const [selectedDL, setSelectedDL] = useState(null);

  const handleDPChange = (event) => {
    setSelectedDP(event.target.files[0]);
  };

  const handleAadharChange = (event) => {
    setSelectedAadhar(event.target.files[0]);
  };

  const handleDLChange = (event) => {
    setSelectedDL(event.target.files[0]);
  };
  // commit how
  return (
    <>
      <div className="flex justify-center  mt-10 mb-10">
        <div className="w-[1400px] h-[800px] border-2 border-gray-200 shadow-xl shadow-slate-400 py-2 rounded-xl">
          <div className=" grid grid-cols-[500px,1fr] ">
            <div className=" w-[500px]">
              <div className=" flex justify-center mt-20 pl-12">
                <label
                  htmlFor="DP"
                  className="cursor-pointer bg-gray-200 rounded-full w-52 h-52 flex items-center justify-center"
                >
                  {selectedDP ? (
                    <img
                      src={URL.createObjectURL(selectedDP)}
                      alt="Uploaded"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <>
                      <input
                        id="DP"
                        type="file"
                        className="hidden"
                        onChange={handleDPChange}
                      />
                      <p>
                        <FaCamera className="text-6xl text-gray-500" />
                      </p>
                      <p className="text-sm text-gray-700">Choose File</p>
                    </>
                  )}
                </label>
              </div>
              <div className="mt-6 pl-12 flex justify-center">
                <p className="text-2xl font-semibold"> Wriddhijit Roy </p>
              </div>

              <div className="mt-24 pl-20">
                <p className=" text-3xl text-left"> Account Details </p>
              </div>
              <div className="flex flex-row pl-20 ">
                <div className=" felx flex-col mt-8 text-gray-700 text-lg w-[300px]">
                  <div className="flex items-center ">
                    <p className="pr-1">
                      <img
                        className="w-5"
                        src="src/assets/Account/icons8-name-30.png"
                      ></img>
                    </p>
                    <p> Wriddhijit Roy </p>
                  </div>
                  <div className="border-b border-gray-300 my-1"></div>
                  <div className="flex items-center">
                    <p className="pr-1">
                      <img
                        className="w-5"
                        src="src/assets/Account/icons8-email-48.png"
                      ></img>
                    </p>
                    <p> wridhhijitroy@gmail.com </p>
                  </div>
                  <div className="border-b border-gray-300 my-1"></div>
                  <div className="flex items-center">
                    <p className="pr-1">
                      <img
                        className="w-5"
                        src="src/assets/Account/icons8-phone-52.png"
                      ></img>
                    </p>
                    <p> 9162672088</p>
                  </div>
                  <div className="border-b border-gray-300 my-1"></div>
                  <div className="flex items-center">
                    <p className="pr-1">
                      <img
                        className="w-5"
                        src="src/assets/Account/icons8-worker-id-card-48.png"
                      ></img>
                    </p>
                    <p> Aadhar Number</p>
                  </div>
                  <div className="border-b border-gray-300 my-1"></div>
                  <div className="flex items-center">
                    <p className="pr-1">
                      <img
                        className="w-5"
                        src="src/assets/Account/icons8-card-50.png"
                      ></img>
                    </p>
                    <p>Driving License Number</p>
                  </div>
                  <div className="border-b border-gray-300 my-1"></div>
                </div>

                <div className=" flex flex-col mt-8 justify-around">
                  <p className=" cursor-pointer my-1">
                    <img
                      className="w-5"
                      src="src/assets/Account/icons8-edit-52.png"
                    ></img>
                  </p>
                  <p className=" cursor-pointer my-1">
                    <img
                      className="w-5"
                      src="src/assets/Account/icons8-edit-52.png"
                    ></img>
                  </p>
                  <p className=" cursor-pointer my-1">
                    <img
                      className="w-5"
                      src="src/assets/Account/icons8-edit-52.png"
                    ></img>
                  </p>
                  <p className=" cursor-pointer my-1">
                    <img
                      className="w-5"
                      src="src/assets/Account/icons8-edit-52.png"
                    ></img>
                  </p>
                  <p className=" cursor-pointer my-1">
                    <img
                      className="w-5"
                      src="src/assets/Account/icons8-edit-52.png"
                    ></img>
                  </p>
                </div>
              </div>
              <div className="absolute left-[750px] top-[220px] border border-gray-500 h-[660px]"></div>
            </div>

            <div className="">
              <div className="mt-6 pl-36">
                <p className="text-2xl text-left font-semibold">
                  Upload Aadhar Card
                </p>
              </div>
              <div className=" flex justify-center mt-6 ">
                <label
                  htmlFor="Aadhar"
                  className="cursor-pointer bg-gray-200 rounded-xl w-[600px] h-60 flex items-center justify-center"
                >
                  {selectedAadhar ? (
                    <img
                      src={URL.createObjectURL(selectedAadhar)}
                      alt="Uploaded"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <>
                      <input
                        id="Aadhar"
                        type="file"
                        className="hidden"
                        onChange={handleDPChange}
                      />
                      <p>
                        <FaCamera className="text-6xl text-gray-500" />
                      </p>
                      <p className="text-sm text-gray-700">Choose File</p>
                    </>
                  )}
                </label>
              </div>
              <div className="flex justify-center pt-2">
                <p className=" text-md">
                  *Please upload your Original Aadhar Card*{" "}
                </p>
              </div>

              <div className="mt-8 pl-36 ">
                <p className="text-2xl text-left font-semibold">
                  Upload Driving License
                </p>
              </div>
              <div>
                <div className=" flex justify-center mt-6 ">
                  <label
                    htmlFor="DL"
                    className="cursor-pointer bg-gray-200 rounded-xl w-[600px] h-60 flex items-center justify-center"
                  >
                    {selectedDL ? (
                      <img
                        src={URL.createObjectURL(selectedDL)}
                        alt="Uploaded"
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <>
                        <input
                          id="DL"
                          type="file"
                          className="hidden"
                          onChange={handleDPChange}
                        />
                        <p>
                          <FaCamera className="text-6xl text-gray-500" />
                        </p>
                        <p className="text-sm text-gray-700">Choose File</p>
                      </>
                    )}
                  </label>
                </div>
                <div className="flex justify-center pt-2">
                  <p className=" text-md">
                    *Please upload your Original Driving License*
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <p className="text-xl font-medium">
              Please read our{" "}
              <Link to="/About_Us">
                <span className=" text-blue-500 underline">Privacy Policy</span>
              </Link>{" "}
              section before doing ay further action.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
