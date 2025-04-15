const Contact_Us = () => {
  return (
    <>
      <div className="  border-2 border-gray-300 shadow-lg mx-16 my-12 rounded-xl ">
        <p className=" my-12 text-5xl text-center tracking-wide font-semibold">
          Reach Us
        </p>
        <div className=" flex mb-10 justify-around ">
          <div className=" max-w-[800px] mt-8 grid grid-cols-[200px,1fr]">
            <div className="mb-10">
              <img src="src/assets/Account/icons8-email-48.png"></img>
            </div>
            <div className=" flex items-center mb-10">
              <p className=" font-medium text-xl text-blue-500">
                keyraya.info@gmail.com
              </p>
            </div>
            <div className="mb-10">
              <img src="src/assets/Account/icons8-phone-52.png"></img>
            </div>
            <div className=" flex items-center mb-10">
              <p className=" font-medium text-xl text-blue-500">
                +91-7969760909/+91-9163672088
              </p>
            </div>
            <div className="mb-10">
              <img src="src/assets/icons8-location-64.png"></img>
            </div>
            <div className=" flex items-center mb-10">
              <p className=" font-medium text-xl">
                Keyraya Nagasandra,<br></br> near Tumkur Road,<br></br>{" "}
                Bengaluru, Karnataka 560073
              </p>
            </div>
          </div>
          <iframe
            className="w-[600px] h-450 border-4 allowfullscreen loading-lazy referrerpolicy-no-referrer-when-downgrade "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7773.981776037986!2d77.50460927285023!3d13.036251814787398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d0a40ad5761%3A0xe5a58bef32d6e1b7!2sChrist%20University%20Yeshwanthpur%20Campus!5e0!3m2!1sen!2sin!4v1713065041300!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact_Us;
