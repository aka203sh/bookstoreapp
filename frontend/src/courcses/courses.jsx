import React from 'react';
import Navber from '../component/Navber';
import Course from '../component/Course';
import Footer from '../component/Footer';


function courses() {
  return (
    <>
    <Navber/>
    <div className='min-h-screen'>
      <Course/>
      
    </div>
    <Footer/>
    </>
  )
}

export default courses
