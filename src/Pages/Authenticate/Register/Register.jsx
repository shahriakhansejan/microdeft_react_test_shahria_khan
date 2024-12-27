import { useForm } from "react-hook-form";
import bgImg from "../../../assets/img/Authenticate/authentication.png";
import featureImg from "../../../assets/img/Authenticate/register.png";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const axiosPublic = useAxiosPublic();
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axiosPublic.post("/register", data).then((res) => {
      console.log(res.data);
      if (res.data.data.user && res.data.data.token) {
        localStorage.setItem("access-token", res.data.data.token);
        localStorage.setItem("currentUser", JSON.stringify(res.data.data.user));
        setUser(res.data.data.user);
        Swal.fire("Successfully Registered!");
        reset();
        navigate('/')
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-3">
      <div
        style={{ backgroundImage: `url("${bgImg}")` }}
        className="flex px-4 md:px-16 gap-4 md:gap-12 py-8 md:min-h-screen my-12 rounded shadow-2xl flex-col-reverse lg:flex-row-reverse justify-between items-center"
      >
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center my-6 font-bold neue text-5xl">
              Register Here !
            </h1>

            {/* Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="Enter your Name"
                className="input input-bordered"
              />
              {errors.name && <p className="text-red-500">Name is required</p>}
            </div>

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
                    required: true,
                    maxLength: 20,
                    minLength: 6,
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
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">
                  Password must be at least 6 characters
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-500">
                  Password must not exceed 20 characters
                </p>
              )}
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-primary border-0 hover:bg-[#ed4321] mt-10 bg-[#FF3811] text-white"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <p className="orange text-center mt-8 font-semibold">
            Already Registered? Go to{" "}
            <Link className="font-bold text-green-600" to="/login">
              Log In
            </Link>
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img className="p-5" src={featureImg} alt="loginImg" />
        </div>
      </div>
    </div>
  );
};

export default Register;
