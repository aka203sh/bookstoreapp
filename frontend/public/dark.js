<label className="swap swap-rotate">
{/* this hidden checkbox controls the state */}
<input type="checkbox" className="theme-controller" value="synthwave" />

{/* sun icon */}
<svg
  className="swap-off h-7 w-7 fill-current"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  onClick={()=>settheme(theme==="light"?"dark":"light")}
  >
  <path
    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
</svg>

{/* moon icon */}
<svg
  className="swap-on h-7 w-7 fill-current"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  onClick={()=>settheme(theme==="dark"?"light":"dark")}
  >
  <path
    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
</svg>
</label>
// import React from 'react'
// import { Link } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// function Login() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//       } = useForm();
    
//       // Define the onSubmit function
//   const onSubmit = (data) => {
//     // Handle the form submission
//     console.log(data); // Log the form data to the console

//     // You can perform additional actions here, such as sending the data to a server
//   };
//   return (
//     <div>
//         <dialog id="my_modal_3" className="modal">
//             <div className="modal-box">
//                 <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//                 {/* if there is a button in form, it will close the modal */}
//                 <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//                 onClick={()=> document.getElementById("my_modal_3").closest()}
//                 >
//                     ✕
//                     </Link>
//                 </form>
//                 <h3 className="font-bold text-lg">Login</h3>
//                 {/* email */}
//                 <div className="mt-4 space-y-2">
//                     <span>Email</span><br/>
//                     <input type="email" placeholder="Enter your email" className="w-80 px-3 border rounded-md outline-none"
//                     {...register("email", { required: true })}
                    
//                     />
//                 </div>
//                 {/* password */}
//                 <div className="mt-4 space-y-2">
//                     <span>Password</span><br/>
//                     <input type="text" placeholder="Enter your password" className="w-80 px-3 border rounded-md outline-none"
//                     {...register("Password", { required: true })}
                    
//                     />
//                 </div>
//                 {/* button */}
//                 <div className="flex justify-around mt-4">
//                     <button  type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Login</button>
//                     <p>Not registered?{""} 
//                         <Link 
//                             to="/Signup"
//                              className="underline text-blue-500 cursor-pointer">
//                             Signup
//                         </Link>{""}
//                     </p>
//                 </div>
//             </div>
//         </dialog>
//     </div>
//   )
// }

// export default Login