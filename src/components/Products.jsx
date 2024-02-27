import React from 'react'
import img3 from "../assets/3.png"
import Dash from "./Dash"

const Products = () => {
  return (
    <div className='w-full'>
      <h1 className='font-serif text-center md:text-xl text-lg px-4'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</h1>
      <div className='flex items-center justify-center mt-10'>
        <img className='md:w-[80%] md:px-0 px-8' src={img3} alt="" />
      </div>
      <p className='text-center font-serif mt-4 mb-3'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
      <hr className='border-solid border-[1.5px] border-red-500 mx-3' />
      <h1 className='text-center font-serif font-semibold mt-4 mb-4'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h1>
      <p className='text-center font-serif px-6 mb-4'>
      CHEMICALS & PROCESS <Dash /> POWER <Dash /> WATER & WASTE WATER <Dash /> OILS & GAS <Dash /> PHARMA <Dash /> SUGARS & DISTILLERIES <Dash /> PAPER & PULP <Dash /> MARINE & DEFENCE <Dash /> METAL & MINING <Dash /> FOOD & BEVERAGE <Dash /> PETROCHEMICAL & REFINERIES <Dash /> SOLAR <Dash /> BUILDING <Dash /> HVAC <Dash /> FIRE FIGHTING <Dash /> AGRICULTURE & RESIDENTIAL
      </p>
    </div>
  )
}

export default Products