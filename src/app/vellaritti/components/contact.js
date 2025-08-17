import Image from 'next/image'
import React from 'react'
import banner from '../../../../public/images/banner1.png';


const Contact = () => {
    return (
        <section className='bg-white pb-7 md:pb-10 lg:pb-12.5  xl:pb-18'>
            <div className="xl:h-4/5 lg:h-4/5 h-2/4 w-full ">
                <Image className="h-full object-cover w-full"  src={banner} alt="..." fetchPriority='low' />
            </div>
        </section >
    )
}

export default Contact