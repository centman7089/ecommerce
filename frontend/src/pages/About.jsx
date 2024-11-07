import React from 'react'
import Title from '../components/Title'
import {assets} from "../frontend_assets/assets"
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 borter-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Frever was vorn out of a a passion for innovation and a desitre to revolutionalize ecommerce website for nation building and geolocational purpose</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor distinctio quas nisi eveniet voluptate fugiat obcaecati, optio tempora blanditiis!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p> Our mission is to make sure we reach out to customer on a timely basis Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod earum quidem id nisi amet, iure ex odit animi explicabo exercitationem porro eaque labore ut harum, cupiditate magnam deleniti officia?</p>

        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col sm:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our strength and values</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>with our user-freidnly interface and hassle free</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer service</b>
          <p className='text-gray-600'>our team of professional is here to assist Saaroduct to ensure it meets our strength and values</p>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default About
