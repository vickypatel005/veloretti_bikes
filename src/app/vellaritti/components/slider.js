'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import cycle1 from '../../../../public/images/cycle1.png'
import Link from 'next/link';
import { useState } from 'react';


const Slider = () => {
    const colors = ['#000000', '#555555', '#EAC8A6', '#393E46'];
    const [selected, setSelected] = useState(0);
    return (
        <div className='bg-zinc-100 py-3 lg:py-5 rounded-lg'>
            <h3 className='text-xl  text-black pb-1 px-3  font-medium sm:text-2xl sm:px-5 lg:px-4'>Electric Ace</h3>
            <p className='text-base text-black px-3 font-normal sm:px-5 lg:px-4'>Rider height : 173-200cm</p>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={false}
                modules={[Pagination, Navigation]}
                navigation={true}
                className="mySwiper"
            >
                {
                    [...Array(5)].map((_, i) => (
                        <SwiperSlide key={i} className="!flex justify-center items-center ">
                            <div className="w-75 h-full sm:w-80 sm:py-3 py-5 md:py-8 md:w-75 lg:w-100 lg:py-10 ">
                                <Image src={cycle1} alt='...' className='w-full h-full object-cover' fetchPriority='low' title='...' />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className='flex justify-between px-3 sm:px-5  md:px-2 lg:px-4'>
                <div className="flex gap-x-2 sm:gap-x-4 items-center md:gap-x-3">
                    <Link href='\' className='bg-white text-black rounded-full py-2 px-4 text-xs sm:text-[15px] sm:py-3 sm:px-6 md:py-3 md:px-5 md:text:[12px]
                     hover:bg-neutral-200 hover:text-neutral-800 transition-all lg:px-7 lg:py-3'>Buy Now</Link>
                    <div className='text-black border-b-1 leading-none pb-0 text-xs hover:text-neutral-400 sm:text-lg md:text-base '>Learn More</div>
                </div>
                <div className="flex gap-x-4 items-center">
                    {colors.map((color, index) => (
                        <div
                            key={index}
                            onClick={() => setSelected(index)}
                            className="cursor-pointer relative flex items-center justify-center transition-all md:w-4 md:h-4 w-4 h-4 rounded-full
                             sm:w-6 sm:h-6    lg:w-6 lg:h-6
                            " style={{ backgroundColor: color }}
                        >
                            {selected === index && (
                                <span className="absolute sm:w-9 sm:h-9 w-7 h-7 md:w-7 md:h-7 rounded-full border-1 lg:w-9 lg:h-9 border-black" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
