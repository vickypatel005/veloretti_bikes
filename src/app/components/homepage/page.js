
import { Heart, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import shoeLogo from '../../../../public/images/shoeLogo.png'

const Homepage = () => {
    return (
        <>
            <section className='bg-black  shadow-lg shadow-cyan-50/100'>
                <div className='container mx-auto px-3  '>
                    <div className='flex justify-between  px-15 py-6 items-center'>
                        <div className='text-2xl text-white basis-1/3 flex gap-x-1 items-center'>
                            <Image className="h-12  w-12" src={shoeLogo} alt="..." fetchPriority='low' />
                            <h4>StepSence</h4>
                        </div>
                        <div className='basis-2/3'>
                            <ul className=' flex  gap-x-5 text-white items-center justify-center'>
                                <li className=" hover:bg-white transition-all hover:text-black px-5 py-2 rounded-full"><Link href='javascript:;'></Link>Home</li>
                                <li className=" hover:bg-white transition-all hover:text-black px-5 py-2 rounded-full"><Link href='javascript:;'></Link>About</li>
                                <li className=" hover:bg-white transition-all hover:text-black px-5 py-2 rounded-full"><Link href='javascript:;'></Link>Contact Us</li>
                                <li className=" hover:bg-white transition-all hover:text-black px-5 py-2 rounded-full"><Link href='javascript:;'></Link>Blog</li>
                                <li className=" hover:bg-white transition-all hover:text-black px-5 py-2 rounded-full"><Link href='javascript:;'></Link>Product</li>
                            </ul>
                        </div>
                        <div className='basis-1/3 flex justify-end gap-x-3 items-center'>
                            <div className='border-2 rounded-full text-white border-white w-10 h-10 flex items-center justify-center transition-all hover:text-red-500'>
                                <Heart width={24} height={24} />
                            </div>
                            <div className='border-2 rounded-full text-white border-white w-10 h-10 flex items-center justify-center transition-all hover:text-red-500'>
                                <ShoppingCart width={24} height={24} />
                            </div>
                            <div className='bg-white rounded-md text-black px-10 py-3 flex font-semibold items-center justify-center transition-all hover:text-red-500  shadow-lg shadow-cyan-100/50 '>
                                Login
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homepage