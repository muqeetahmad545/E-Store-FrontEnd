import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import axios from "axios";
import config from "../axios/Config";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.BASE_URL}/user/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Successful login", response.data);
      sessionStorage.setItem("user_Id", response.data.content._id);
      sessionStorage.setItem("access_token", response.data.access_token);
      sessionStorage.setItem("first_Name", response.data.content.firstName);
      navigate("/");
      setData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
            <div className="bg-white p-4 p-md-5 rounded shadow-sm">
              <div className="row">
                <div className="col-12">
                  <div className="mb-5 text-center">
                    <h3>Welcome Back</h3>
                    <h6>Enter Your credentials to login</h6>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row gy-3 gy-md-4 overflow-hidden">
                  <div className="col-12">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="email@gmail.com"
                      required
                      value={data.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="password" className="form-label">
                      Password <span className="text-danger">*</span>
                    </label>
                    <div className="position-relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        name="password"
                        id="password"
                        placeholder="password"
                        required
                        value={data.password}
                        onChange={handleChange}
                      />
                      <span
                        className="position-absolute end-0 top-0 mt-2 me-2"
                        onClick={togglePasswordVisibility}
                        style={{ cursor: "pointer" }}
                      >
                        {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                      </span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-grid">
                      <button
                        className="btn btn-lg btn-primary"
                        type="submit"
                        style={{ backgroundColor: "#4CAF50", color: "white" }}
                      >
                        Log in now
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="row">
                <div className="col-12">
                  <hr className="mt-5 mb-4 border-secondary-subtle" />
                  <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                    <Link
                      to="/signUp"
                      className="link-secondary text-decoration-none"
                    >
                      Create new account
                    </Link>
                    <Link
                      to="/forgetPass"
                      className="link-secondary text-decoration-none"
                    >
                      Forgot password
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
