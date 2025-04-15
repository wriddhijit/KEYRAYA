import { useState } from "react";
import Signup from "../Components/signup";
import Login from "../Components/login";

function Signuplogin() {
  const [SignupisOpen, setSignupIsOpen] = useState(false);
  const [LoginisOpen, setLoginIsOpen] = useState(true);

  const toggleSignup = () => {
    if (!SignupisOpen) {
      console.log(toggleSignup);
      setSignupIsOpen(!SignupisOpen);
      setLoginIsOpen(false);
    }
  };

  const toggleLogin = () => {
    if (!LoginisOpen) {
      console.log(toggleLogin);
      setLoginIsOpen(!LoginisOpen);
      setSignupIsOpen(false);
    }
  };

  return (
    <>
      <div className=""></div>

      <div className="flex justify-center mt-16 mb-10">
        <div className=" flex flex-col w-[600px] border-2 border-gray-300 shadow-lg px-5 py-3 rounded-xl ">
          <p className="text-center text-5xl font-bold pb-6 pt-5">Keyraya</p>
          <div className=" grid grid-cols-[250px,320px]">
            <div
              className="flex justify-center cursor-pointer hover:scale-110 items-center h-[50px]"
              onClick={toggleLogin}
            >
              <p className="text-center text-2xl font-semibold tracking-tight uppercase">
                {" "}
                Log in
              </p>
            </div>
            <div
              className="flex justify-center cursor-pointer hover:scale-110 items-center h-[50px]"
              onClick={toggleSignup}
            >
              <p className="text-2xl font-semibold tracking-tight uppercase">
                Sign up
              </p>
            </div>
          </div>
          {SignupisOpen ? <Signup /> : ""}
          {LoginisOpen ? <Login /> : ""}
        </div>
      </div>
    </>
  );
}

export default Signuplogin;
