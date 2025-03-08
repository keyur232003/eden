import React from 'react'
import { news_letter } from '../json/news_letter'


const News_letter = () => {
  return (
    <section className='bg-white'>
        {news_letter.map((iteam)=>{
            return(

        <div key={iteam.id} className='text-center    max-w-[380px] lg:max-w-[888px] mx-auto my-0  pb-[55px]'>
            <h4 className='font-medium italic text-2xl leading-[32px] text-black noto__serif-font '>{iteam.label}</h4>
            <div className='text-[24px] leading-[32px] lg:text-[40px] font-medium lg:leading-[54px] tracking-[0.56em] noto__serif-font uppercase	pt-[35px] lg:pt-[16px] '>{iteam.title}</div>
            <p className='  pt-[24px] lg:pt-[32px] rund__text-font leading-[24px] text-base lg:text-lg font-light text-black undefined'>{iteam.des}</p>
            <div className='p-2'>
                <button className='cursor-pointer subscribe_btn mt-[40px] w-full  lg:w-[30%]'>{iteam.btn_text}</button>
            </div>
        </div>

            )
        })}
    </section>
  )
}

export default News_letter
