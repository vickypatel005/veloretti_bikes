'use client';
import Image from 'next/image';
import React from 'react';
import brand from '../../../../public/images/b1.png';
import brand2 from '../../../../public/images/b2.png';
import brand3 from '../../../../public/images/b3.png';

const testimonials = [
    {
        text: `"One of the best e-bikes available at any price and far and away my favourite ride of the year."`,
        image: brand,
    },
    {
        text: `“This second-generation Ace is a superhero amongst urban e-bikes… 9/10.”`,
        image: brand2,
    },
    {
        text: `"The timeless, chic design and stunning craftsmanship make them the perfect way to get around the city."`,
        image: brand3,
    },
];

const Detail = () => {
    return (
        <section className="bg-white">
            <div className="container m-auto px-3 pb-7 md:pb-10 lg:pb-12.5  xl:pb-18">
                <h3 className="text-2xl text-black pb-3 lg:pb-5 lg:text-3xl xl:text-5xl xl:pb-7">They talked about us</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-4 ">
                    {testimonials.map((item, index) => (
                        <div key={index} className="p-4 lg:p-6 border border-neutral-300 xl:p-10">
                            <p className="text-md pb-3 text-black lg:text-lg lg:pb-5 xl:text-[22px]">{item.text}</p>
                            <div className="w-22 h-10 lg:w-30 lg:h-12 xl:w-34 xl:h-14">
                                <Image src={item.image} alt="..." fetchPriority="low" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Detail;
