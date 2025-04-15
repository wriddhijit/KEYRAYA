import { useState } from "react";
import axios from "axios";
// import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [formData, setFormData] = useState({
      name: '',
      phoneNumber: '',
      aadharNumber: '',
      drivingLicenseNumber: '',
      email: '',
      password: '',
      confirmPassword: ''
  });
  const navigate = useNavigate(); // Hook for navigation
  const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
      });
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      if (formData.password !== formData.confirmPassword) {
          alert("Passwords do not match");
          return; // Prevent submission if passwords don't match
      }

      try {
          const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
          console.log('Signup successful:', response.data);
          alert("Signup successful!"); // Optionally handle redirect here
          navigate('/');
      } catch (error) {
          console.error('Signup error:', error.response ? error.response.data : 'No response');
          alert("Signup failed: " + (error.response ? error.response.data.error : 'No response'));
      }
  };

  return (
      <div className="container mx-auto p-4">
          <form className="max-w-lg" onSubmit={handleSubmit}>
              {/* Input for Name */}
              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                      Name
                  </label>
                  <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-loose focus:outline-none focus:shadow-outline"
                      placeholder="Enter your name as per your Aadhar"
                      required
                  />
              </div>

              {/* Input for Phone Number */}
              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                      Phone Number
                  </label>
                  <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-loose focus:outline-none focus:shadow-outline"
                      placeholder="Enter your phone number"
                      required
                  />
              </div>

              {/* Input for Aadhar Number */}
              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                      Aadhar Number
                  </label>
                  <input
                      type="text"
                      name="aadharNumber"
                      value={formData.aadharNumber}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-loose focus:outline-none focus:shadow-outline"
                      placeholder="Enter your Aadhar number"
                      required
                  />
              </div>

              {/* Input for Driving License Number */}
              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                      Driving License Number
                  </label>
                  <input
                      type="text"
                      name="drivingLicenseNumber"
                      value={formData.drivingLicenseNumber}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-loose focus:outline-none focus:shadow-outline"
                      placeholder="Enter your driving license number"
                      required
                  />
              </div>

              {/* Input for Email */}
              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                      Email
                  </label>
                  <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-loose focus:outline-none focus:shadow-outline"
                      placeholder="Enter your email"
                      required
                  />
              </div>

              {/* Input for Password */}
              <div className="mb-8">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                      Password
                  </label>
                  <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py"
                      placeholder="Enter your password"
                      required
                  />
              </div>

              {/* Input for Confirm Password */}
              <div className="mb-8">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                      Confirm Password
                  </label>
                  <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-loose focus:outline-none focus:shadow-outline"
                      placeholder="Confirm your password"
                      required
                  />
              </div>

              {/* Submission Button */}
              <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                  Sign Up
              </button>
          </form>
      </div>
  );
}

export default Signup;



