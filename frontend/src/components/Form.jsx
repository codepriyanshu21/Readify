import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';

const Login = () => {
  const [authUser,setAuthUser]=useAuth()
  const [isLogin, setIsLogin] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (isLogin) {
      //LOGIN
      const userInfo = {
        email: data.email,
        password: data.password,
      };
  
      try {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/login`, userInfo);
        toast.success('Login successful');
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setAuthUser(res.data.user)
        reset()
        document.getElementById('auth_modal').close();
      } catch (err) {
        console.log(err);
        toast.error("Login failed. Please check your credentials.");
        document.getElementById('auth_modal').showModal();
      }
    } else {
      // SIGNUP
      const userInfo = {
        fullname: data.fullName,
        email: data.email,
        password: data.password,
      };
  
      try {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/signup`, userInfo);
        toast.success('Signup successful');
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setAuthUser(res.data.user)
        reset()
        setIsLogin(true); // After signup, go to login tab
      } catch (err) {
        console.log(err);
        toast.error("Signup failed. Email might already be in use.");
      }
    }
  };
  

  return (
    <div>
      <dialog id="auth_modal" className="modal">
        <div className="modal-box w-full max-w-sm bg-[#1e1e1e] text-white rounded-xl shadow-xl p-6">
          {/* Close Button */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white hover:bg-gray-700">
              ✕
            </button>
          </form>

          {/* Tab Switch */}
          <div className="flex justify-center mb-6">
            <h2
              onClick={() => setIsLogin(true)}
              className={`text-lg font-semibold px-4 py-2 cursor-pointer ${
                isLogin ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-400'
              }`}
            >
              Login
            </h2>
            <h2
              onClick={() => setIsLogin(false)}
              className={`text-lg font-semibold px-4 py-2 cursor-pointer ${
                !isLogin ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-400'
              }`}
            >
              Sign Up
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {isLogin ? (
              <div>
                <h3 className="text-xl font-bold text-center mb-4">Welcome Back 👋</h3>
                <input
                  type="email"
                  placeholder="Email"
                  className="input w-full mb-3 bg-[#2c2c2c] border border-gray-600 text-white"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                <input
                  type="password"
                  placeholder="Password"
                  className="input w-full mb-3 bg-[#2c2c2c] border border-gray-600 text-white"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                <button type="submit" className="btn bg-orange-500 w-full text-white hover:bg-orange-600">
                  Login
                </button>
                <p className="text-center mt-4 text-sm text-gray-400">
                  Not registered?{' '}
                  <span
                    className="text-orange-500 cursor-pointer hover:underline"
                    onClick={() => setIsLogin(false)}
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-center mb-4">Create Account ✨</h3>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input w-full mb-3 bg-[#2c2c2c] border border-gray-600 text-white"
                  {...register("fullName", { required: "Full Name is required" })}
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}

                <input
                  type="email"
                  placeholder="Email"
                  className="input w-full mb-3 bg-[#2c2c2c] border border-gray-600 text-white"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                <input
                  type="password"
                  placeholder="Password"
                  className="input w-full mb-3 bg-[#2c2c2c] border border-gray-600 text-white"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                <button type="submit" className="btn bg-green-500 w-full text-white hover:bg-green-600">
                  Sign Up
                </button>
                <p className="text-center mt-4 text-sm text-gray-400">
                  Already have an account?{' '}
                  <span
                    className="text-orange-500 cursor-pointer hover:underline"
                    onClick={() => setIsLogin(true)}
                  >
                    Login
                  </span>
                </p>
              </div>
            )}
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
