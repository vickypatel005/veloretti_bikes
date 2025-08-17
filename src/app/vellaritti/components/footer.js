'use client';

import Link from 'next/link';
import {
    Facebook,
    Instagram,
    Youtube,
    Linkedin,
    Music2
} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#121412] text-white px-3 py-6 md:py-14 md:px-6 lg:pb-26 lg:pt-16 lg:px-10">
            <div className="container mx-auto grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-5 gap-4">
                <div>
                    <h4 className="font-semibold mb-4">Explorer</h4>
                    <ul className="space-y-2 text-sm text-neutral-400 transition-all">
                        <li><Link href="#" className='hover:text-neutral-50' >Electric bikes</Link></li>
                        <li><Link href="#" className='hover:text-neutral-50' >City bikes</Link></li>
                        <li><Link href="#" className='hover:text-neutral-50' >Kids bikes</Link></li>
                        <li><Link href="#" className='hover:text-neutral-50' >Accessories</Link></li>
                        <li><Link href="#" className='hover:text-neutral-50' >Outlet</Link></li>
                        <li><Link href="#" className='hover:text-neutral-50' >Business</Link></li>
                        <li><Link href="#" className='hover:text-neutral-50' >Insurance Electric</Link></li>
                        <li><Link href="#" className='hover:text-neutral-50' >Size guide</Link></li>
                    </ul>
                </div>


                <div>
                    <h4 className="font-semibold mb-4 ">About</h4>

                    <ul className="space-y-2 text-sm text-neutral-400 transition-all">
                        <li><Link href="#" className='hover:text-neutral-50' >About us</Link></li>
                        <li><Link href="#" className='hover:text-neutral-50' >Journal</Link></li>
                        <li><Link href="#" className='hover:text-neutral-50' >Reviews</Link></li>
                        <li><Link href="#" className='hover:text-neutral-50' >Press</Link></li>
                        <li><Link href="#" className='hover:text-neutral-50' >Jobs</Link></li>
                    </ul>
                </div>


                <div>
                    <h4 className="font-semibold mb-4">Help</h4>
                    <ul className="space-y-2 text-sm text-neutral-400 transition-all">
                        <li><Link href="#" className='hover:text-neutral-50' >Contact</Link></li>
                        <li><Link href="#" className='hover:text-neutral-50' >FAQ</Link></li>
                        <li><Link href="#" className='hover:text-neutral-50' >Delivery</Link></li>
                        <li><Link href="#" className='hover:text-neutral-50' >Assembly & manuals</Link></li>
                        <li><Link href="#" className='hover:text-neutral-50' >Payment options</Link></li>
                        <li><Link href="#" className='hover:text-neutral-50' >Privacy policy</Link></li>
                        <li><Link href="#" className='hover:text-neutral-50' >Terms & conditions</Link></li>
                    </ul>
                </div>

                <div className="col-span-2 md:col-span-2 sm:col-span-3">
                    <h4 className="font-semibold text-xl mb-4">Join the ride.</h4>
                    <p className="text-md text-white mb-6 sm:mb-4">Sign up for our newsletter.</p>

                    <div className="flex items-center sm:flex-row flex-col sm:border sm:border-white rounded-full sm:overflow-hidden mb-6">
                        <input
                            type="email"
                            placeholder="Enter your email address here"
                            className="flex-1 w-full bg-transparent px-5 py-3 text-md sm:text-[18px] outline-none border rounded-xl
                             border-white sm:border-hidden sm:mb-0  placeholder-gray-200  mb-5"
                        />
                        <Link href='/' className="bg-white text-black text-md hover:bg-neutral-400
                         px-32 sm:px-15 text-center py-3.5 sm:py-3.5 md:py-3.5 md:px-14 lg:px-9 lg:py-3.2 lg:text-md rounded-full">
                            Subscribe
                        </Link>
                    </div>

                    <div className="text-md text-white mb-8">
                        <label className="flex items-center space-x-4">
                            <input type="checkbox"
                                className=" w-4 h-4 bg-transparent  accent-white border border-gray-400 rounded-"
                            />
                            <span className='text-sm' >
                                By signing up, I agree to the
                                  <Link href="#" className="border-white border-b-1"> privacy policy</Link> of Veloretti.
                            </span>
                        </label>
                    </div>

                    <div className="flex space-x-4 text-white text-sm  transition-all">
                        <Link href="#" className='hover:text-neutral-400' ><Facebook size={22} /></Link>
                        <Link href="#" className='hover:text-neutral-400' ><Instagram size={22} /></Link>
                        <Link href="#" className='hover:text-neutral-400' ><Youtube size={22} /></Link>
                        <Link href="#" className='hover:text-neutral-400' ><Linkedin size={22} /></Link>
                        <Link href="#" className='hover:text-neutral-400' ><Music2 size={22} /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
