
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import shoe from '../../../../public/images/shoe.png'
import Image from 'next/image';

const Hero = () => {
    return (
        <section className='bg-black'>
            <div className='container mx-auto pt-15'>
                <div className='flex justify-between'>
                    <div className='basis-1/3'>
                        <h3 className='uppercase text-9xl font-bold pb-50'>
                            Step
                            Into
                        </h3>
                        <Link href='javascript:;'>
                            <div className='border-2 w-fit flex items-center gap-x-2 px-15 text-2xl py-4 bg-stone-800 border-stone-300 '>
                                View Collection <ArrowUpRight width={30} height={30} />
                            </div>
                        </Link>
                    </div>
                    <div className='basis-2/3 relative'>
                        <Image className="h-160  w-180 absolute top-0 left-5" src={shoe} alt="..." fetchPriority='low' />
                    </div>
                    <div className='basis-1/3'>
                        <p className='text-2xl text-stone-400 pb-70'>Step a Journey of Creativity and Self-expression, where Endless possibilities await</p>
                        <h3 className='uppercase text-9xl font-bold'>
                            Your
                        </h3>
                    </div>
                </div>
                <h3 className='uppercase text-9xl font-bold text-end'>
                    UNIQUENESS
                </h3>
            </div>
        </section>
    )
}

export default Hero