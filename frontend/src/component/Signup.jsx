import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';
function Signup() {
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
    <>
    <div className="flex mt-40 item-center justify-center ">
        <div  className="w-[600px]">
            <div className="modal-box">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                
                <h3 className="font-bold text-lg">Signup</h3>
                {/* Name */}
                <div className="mt-4 space-y-2">
                    <span>Name</span><br/>
                    <input type="text" placeholder="Enter your Fullname" className="w-80 px-3 border rounded-md outline-none"
                    {...register("Name", { required: true })}
                    />
                    {errors.Name && <span className="text-red-500">Name is required</span>}
                </div>
                {/* email */}
                <div className="mt-4 space-y-2">
                    <span>Email</span><br/>
                    <input type="email" placeholder="Enter your email" className="w-80 px-3 border rounded-md outline-none"
                    {...register("email", { required: true })}
                    />
                    {errors.email && <span className="text-red-500">Email is required</span>}
                </div>
                {/* password */}
                <div className="mt-4 space-y-2">
                    <span>Password</span><br/>
                    <input type="text" placeholder="Enter your password" className="w-80 px-3 border rounded-md outline-none"
                    {...register("password", { required: true })}
                    />
                    {errors.password && <span className="text-red-500">Password is required</span>}
                </div>
                {/* button */}
                <div className="flex justify-around mt-4">
                    <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"> Signup</button>
                    <p>Have account?{""} 
                        <button className="underline text-blue-500 cursor-pointer"
                            onClick={()=> document.getElementById("my_modal_3").showModal()}>
                            login
                        </button>{""}
                        <Login/>
                    </p>
                </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup
