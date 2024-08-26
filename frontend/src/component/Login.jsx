import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Define the onSubmit function
  const onSubmit = (data) => {
    // Handle the form submission
    console.log(data); // Log the form data to the console

    // You can perform additional actions here, such as sending the data to a server
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close button for the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span><br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span><br />
              <input
                type="password" // Corrected to password type
                placeholder="Enter your password"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("password", { required: true })} // Corrected to lowercase "password"
              />
              {errors.password && <span className="text-red-500">Password is required</span>}
            </div>

            {/* Submit button */}
            <div className="flex justify-around mt-4">
              <button
                type="submit" // Added type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link to="/Signup" className="underline text-blue-500 cursor-pointer">
                  Signup
                </Link>
                {" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;

