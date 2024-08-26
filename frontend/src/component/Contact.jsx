import React from 'react';
import Navber from './Navber';
import Footer from './Footer';
// import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function contact() {
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
      <Navber/>
      <div className="min-h-screen  ml-80 mt-10 item-center justify-center  ">
        <h1 className='font-bold text-2xl mt-28  '>Contact</h1>
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          <div className="mt-4 space-y-2">
                    <span>Name</span><br/>
                    <input type="text" placeholder="Enter your Fullname" className="w-80 px-3 border rounded-md outline-none"
                     {...register("Name", { required: true })}
                    />
                     {errors.Name && <span className="text-red-500">Name is required</span>} 
                </div>
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
            <div className="mt-4 space-y-2  ">
              <span>Message</span><br />
              <input
                type="text" // Corrected to password type
                placeholder="Type your Message"
                className="w-80 h-24  px-3 border rounded-md outline-none"
                 {...register("Message", { required: true })} // Corrected to lowercase "password"
              />
                {errors.email && <span className="text-red-500">Email is required</span>} 
            </div>
            <div className='mt-10'>
              <button
                  type="submit" // Added type="submit"
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                >
                  Submit
              </button>
            </div>
        </form>

      </div>
      <Footer/>
    
    </>
  )
}
// 2.19 m
export default contact
