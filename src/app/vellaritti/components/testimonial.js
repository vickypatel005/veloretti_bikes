'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import cycle1 from '../../../../public/images/cycle1.png'
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
    {
        title: 'City Bikes',
        subtitle: 'Women',
        price: 'From €299',
        image: cycle1
    },
    {
        title: 'Kids\' Bikes',
        subtitle: 'Ages 1 to 8',
        price: 'From €119',
        image: cycle1
    },
    {
        title: 'Accessories',
        subtitle: 'Discover',
        price: 'From €119',
        image: cycle1
    },
    {
        title: 'Mountain Bikes',
        subtitle: 'Adventure',
        price: 'From €499',
        image: cycle1
    },
]
const Testimonial = () => {
    return (
        <section className='bg-white  pb-8 md:pb-10 lg:pb-12.5 xl:pb-18'>
            <div className="container mx-auto  px-3  ">
                <div className='pb-3 flex justify-between '>
                    <h3 className='text-xl text-black '>Explore our bikes</h3>
                    <div className='flex gap-x-2 items-center'>
                        <div className='text-black cursor-pointer prev font-light'><ChevronLeft className='w-6 h-6' /></div>
                        <div className='text-black cursor-pointer next '><ChevronRight className='w-6 h-6' /></div>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation]}
                    navigation={{

                        prevEl: '.prev',
                        nextEl: '.next'
                    }}
                    spaceBetween={20}
                    slidesPerView={3}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="bg-zinc-100 p-3 rounded-md cursor-pointer hover:shadow-md transition-all">
                                <div className='flex justify-between items-center'>
                                    <h3 className="text-lg lg:text-xl  text-black">{product.title}</h3>
                                    {product.price && <p className="text-md text-gray-700 ">{product.price}</p>}
                                </div>
                                <p className="text-sm text-gray-500 lg:text-lg">{product.subtitle}</p>
                                <div className="h-full w-full  rounded  overflow-hidden py-6">
                                    <Image src={product.image} alt={product.title} className="w-full h-full object-cover" />
                                </div>


                                <div className="flex gap-x-4 items-center">
                                    <Link href='\' className='bg-white text-black rounded-full py-2 px-4 md:py-3 md:px-5  text-xs hover:bg-neutral-200 hover:text-neutral-800 transition-all'>Buy Now</Link>
                                    <div className='text-black border-b-1 leading-none pb-0 text-sm hover:text-neutral-400'>Learn More</div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
export default Testimonial;