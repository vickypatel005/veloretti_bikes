import Image from 'next/image'
import React from 'react'
import read from '../../../../public/images/read.png'

const About = () => {
    return (
        <section className='bg-white'>
            <div className='container mx-auto px-3 sm:px-0 md:px-3  pb-8 md:pb-10 lg:pb-12.5 xl:pb-18'>
                <h4 className='text-xl md:text-4xl md:max-w-100 font-medium md:pb-15 text-black w-full max-w-55 pb-5.5 lg:text-6xl lg:max-w-150 lg:pb-22 xl:pb-26 xl:text-7xl xl:max-w-190'>
                    Make the commute best part of your day.
                </h4>
                <div className='flex justify-between gap-x-10 sm:gap-x-15  md:gap-x-55 lg:gap-x-65 xl:gap-x-120'>
                    <p className='text-sm text-neutral-600 md:text-lg lg:text-xl xl:text-2xl'>
                        Clean and timeless designs that make every ride a thrill.
                        Wherever you&apos; heading, our bikes are made to make your daily
                        commute a joy.
                    </p>
                    <div className='w-15 h-7.5 md:w-20 md:h-full sm:w-8 '>
                        <Image src={read} alt='...' fetchPriority='low' className='w-full h-full object-cover'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About