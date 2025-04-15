import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "./user";

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);

    const { setUser } = useUser();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/login",
                formData
            );
            console.log(response.data)
            setUser(response.data);
            console.log("Login successful:", response.data);
            navigate('/'); // Navigate to the home page
        } catch (error) {
            console.error(
                "Login error:",
                error.response ? error.response.data : "No response"
            );
            alert(
                "Login failed: " +
                (error.response ? error.response.data.message : "No response")
            );
        }
    };

    return (
        <>
            <div className="container mx-auto p-4">
                <form className="max-w-lg" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-loose focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-8">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-loose focus:outline-none focus:shadow-outline pr-10"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700"
                            >
                                {showPassword ? (
                                    <img
                                        src="src/assets/icons8-hide-password-50.png"
                                        alt="Hide Password"
                                        className="h-6 w-6"
                                    />
                                ) : (
                                    <img
                                        src="src/assets/icons8-show-password-50.png"
                                        alt="Show Password"
                                        className="h-6 w-6"
                                    />
                                )}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full max-w-lg"
                    >
                        Login
                    </button>
                </form>

                <p className="px-3 pt-4 text-balance text-center">
                    By clicking through, I agree with the{" "}
                    <Link to="/Terms&Conditions">
                        <span className="underline text-blue-500">Terms & Conditions </span>
                    </Link>
                    and{" "}
                    <Link to="/Privacy_Policy">
                        <span className="underline text-blue-500">Privacy Policy</span>
                    </Link>
                </p>
            </div>
        </>
    );
}

export default Login;
