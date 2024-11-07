import React from 'react'
import Title from '../components/Title'
import {assets} from "../frontend_assets/assets"
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <section>
        <div className='text-2xl text-center pt-10 border-t'>
      <Title text1={'CONTACT'} text2={'US'} />
      </div>
      
      <div className='my-10 flex fle-col justify-center md:flex-row gap-10 mb-20'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold'>Our Store</p>
          <p className='text-gray-500'>54709 Williams Station <br />Suite 350, Our store</p>
          <p className='text-gray-500'>Tel: (090)- (45678)- (34256) <br />Email: oghale@immocemt.com</p>
          <p className='text-xl font-semibold text-gray-600'>Careers at Forever</p>
          <p className='text-gray-600'>learn more about our teams and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore jobs</button>
        </div>
      </div>
<NewsletterBox />

     </section>

  )
}

export default Contact
