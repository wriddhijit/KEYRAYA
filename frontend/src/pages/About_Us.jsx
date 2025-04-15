const About_Us = () => {
  return (
    <>
      <div className=" flex flex-col ">
        <div className="relative bg-black ">
          <img
            className=" h-[350px] w-[1850px] opacity-30"
            src="src/assets/aboutus.jpg"
          ></img>
          <div className=" absolute top-16 left-0 right-0  text-white text-center p-2 ">
            <div className="flex items-center justify-center ">
              <div className=" border-4 border-t border-white w-36 rounded-2xl"></div>
              <div className="mx-4 ">
                <p className="font-bold text-6xl">About us</p>{" "}
              </div>
              <div className=" border-4 border-t border-white w-36 rounded-2xl"></div>
            </div>
            <p className=" mt-10 text-2xl text-center leading-relaxed tracking-wide font-semibold">
              At Keyraya, we believe in "Cruise without commitment: Ride when
              you want, return when you're done."
            </p>
          </div>
        </div>

        <div className="px-12">
          <p className=" px-24 mt-8 mb-8 text-2xl text-center font-normal leading-relaxed tracking-wide ">
            Keyraya embodies a vibrant team driven by a unified purpose: to
            revolutionize mobility solutions in India.
            <br></br>Our relentless focus has propelled us to create a
            cutting-edge platform offering <br></br>rentals across Bengaluru
            recognizing the vast potential in the largely unexplored and
            disorganized transportation sector,<br></br> we are driven to
            establish a trusted system that transcends barriers for all.
          </p>
          <p className="text-xl px-10 font-normal text-center leading-relaxed tracking-wide">
            At Keyraya, we pride ourselves on our unrestricted approach to
            two-wheelers, catering to every need from everyday scooters to
            exhilarating superbikes.<br></br> Our services are easily accessible
            through both our website and mobile application, ensuring seamless
            rental experiences for our customers.
          </p>
          <p className="mt-10 mb-6 font-normal text-xl text-center  tracking-wide">
            Central to our ethos is the belief in the power of renting over
            buying. We believe in the idea of
            <br></br>
            <span className="font-bold">
              {" "}
              "Cruise without commitment: Ride when you want, return when you're
              done."{" "}
            </span>{" "}
            <br></br>
            offering unparalleled convenience and flexibility to our users.
          </p>
          <p className="mt-6 mb-14 text-center text-2xl font-medium tracking-wide">
            Join us on our journey as we redefine mobility solutions and pave
            the way for a future where renting is not just a choice but a
            lifestyle.
          </p>
        </div>
      </div>
    </>
  );
};

export default About_Us;
