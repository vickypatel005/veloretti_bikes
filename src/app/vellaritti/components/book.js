import Link from 'next/link'
import React from 'react'

const Book = () => {
    return (
        <section className='bg-neutral-600'>
            <div className='container m-auto px-3 py-6 xl:py-12'>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='text-md text-white pb-8 col-span-2 md:pb-0 xl:max-w-[800]'>
                        Ready to take the Electric Ivy or Ace for a spin? Electric test rides are now available in
                        Amsterdam, Amstelveen, Abcoude, Bussum, Den Haag, Nijmegen, Weesp, Wormerveer,
                        Berlin, Hamburg and Munich. Schedule your test ride now and we&apos;ll see you there.
                    </div>
                    <div className='grid place-items-center'>
                        <Link href='/' className="bg-white text-black py-3 rounded-full px-10  xl:py-4 xl:px-18 hover:bg-neutral-400 inline-block">Book Now</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Book