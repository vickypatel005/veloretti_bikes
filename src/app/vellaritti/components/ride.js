import React from 'react'
import banner from '../../../../public/images/ride.png'
import Image from 'next/image'

const Ride = () => {
    return (
        <section className='bg-white pb-7 md:pb-10 lg:pb-12.5  xl:pb-18'>
            <div className='container m-auto px-3 md:grid md:grid-cols-2 gap-x-3'>
                <div className='md:grid  md:place-self-center lg:w-90 xl:w-110'>
                    <h3 className='text-2xl pb-4 text-black lg:text-3xl'>Ride carefree</h3>
                    <p className='text-md text-neutral-600 pb-3'>
                        Our Qover x Veloretti insurance plan has got you covered. It offers
                        comprehensive coverage against theft, provides assistance in case
                        of any issues, and covers any damages to your bike.
                    </p>
                    <p className='text-lg  text-neutral-800 pb-4 md:pb-0'>
                        Learn More
                    </p>
                </div>
                <div className=" xl:h-[550px] lg:h-[450px] h-[250px] sm:h-[300px] md:h-[350] w-full pb-6 md:pb-0 sm:pb-4">
                    <Image className="h-full object-cover w-full" src={banner} alt="..." fetchPriority='low' />
                </div>
            </div>
        </section>
    )
}

export default Ride