import React from 'react'
import img1 from "../assets/1.png"
import img2 from "../assets/2.png"

const Home = () => {
  return (
    <div className='px-2 flex md:flex-row flex-col items-center justify-center mt-6 w-full mb-12 shrink'>
      <h1 className=' text-center font-serif font-semibold md:hidden'> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>
      <div className='md:block flex items-center justify-center'>
        <img  className='md:w-[80%] w-[50%]' src={img1} alt="" />
      </div>
      <div className='-ml-4 pr-4'>
        <h1 className='font-serif font-semibold mb-3 -ml-12 md:block hidden'> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>
        <ul className='md:text-left text-center md:text-base text-s mb-4 md:ml-0 ml-4 list-disc'>
          <li className='font-serif'>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
          <li className='font-serif'>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
        </ul>
        <div className='mb-2 md:ml-0 ml-4'>
          <img src={img2} alt="" />
        </div>
        <p className='md:text-left text-center font-serif md:text-base text-s md:ml-0 ml-4'>Government of India has awarded the <b>"National Energy Conservation Award 2018".</b> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
      </div>
    </div>
  )
}

export default Home