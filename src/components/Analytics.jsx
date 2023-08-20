import React from 'react'
import Laptop from '../assets/Laptop.jpeg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-6 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="" />
            <div className='flex flex-col justify-center'>
                <p className='text-green-600 font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2  '>Manage Data Analytics Centrally</h1>
                <p>
                Welcome to our Data Analytics Dashboard! Gain valuable insights at a glance with our interactive visualizations, 
                showcasing trends, patterns, and anomalies in real-time. 
                Dive deep into your data with customizable filters and drill-down capabilities, 
                empowering you to make informed decisions. 
                Stay ahead of the curve by harnessing the power of data to drive your business forward. 
                </p>
                <button className='text-green-500 w-[200px] rounded-md my-6 mx-auto md:mx-0 font-medium py-3 bg-black'>Get Started</button>
            </div>

        </div>
    
      
    </div>
  )
}

export default Analytics
