import { useForm } from "react-hook-form";
import bgImg from "../../../assets/img/Authenticate/authentication.png";
import featureImg from "../../../assets/img/Authenticate/login.png";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    axiosPublic.post('/login', data)
    .then(res => {
      console.log(res.data.data.token);
      if(res.data.data.token){
        localStorage.setItem("access-token", res.data.data.token)
        Swal.fire("Successfully LogIn!");
        reset();
      }
    })
  };

  return (
    <div className="max-w-6xl mx-auto px-3">
      <div
        style={{ backgroundImage: `url("${bgImg}")` }}
        className="flex px-4 md:px-16 gap-4 md:gap-12 py-8 md:min-h-screen my-12 rounded shadow-2xl flex-col lg:flex-row-reverse justify-between items-center"
      >
        <div className="w-full lg:w-1/2">
          <img className="p-5" src={featureImg} alt="loginImg" />
        </div>
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center my-6 font-bold neue text-5xl">
              LogIn Now !
            </h1>
            
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="dark3 font-medium">Your Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Enter your Email"
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-500">Email is required</p>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="dark3 font-medium">Password</span>
              </label>
              <div className="flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: true
                  })}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="-ml-8 text-xl"
                >
                  {showPassword ? (
                    <IoIosEyeOff></IoIosEyeOff>
                  ) : (
                    <IoIosEye></IoIosEye>
                  )}
                </span>
              </div>
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-primary border-0 bg-[#daae6d] hover:bg-[#d6a04f] text-white"
                type="submit"
                value="LogIn"
              />
            </div>
          </form>
          <p className="text-[#d6a04f] text-center mt-8 font-semibold">
            New Here? Please{" "}
            <Link className="font-bold text-sky-500" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
