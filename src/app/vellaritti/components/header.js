'use client'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../../public/images/Logo.png';
import { AlignJustify, Heart, ShoppingBag, UserRound, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Header = () => {
    const tabs = ["electric", "city", "kids", "accessries", "stories", "Product"]
    const iconList = [
        { component: Heart },
        { component: ShoppingBag },
        { component: UserRound }
    ];
    const [menuOpen, setOpenmenu] = useState(false)
    const handleChange = () => {
        setOpenmenu(prev => !prev)
    }

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    }, [menuOpen])

    return (
        <section className='bg-white'>
            <div className='container mx-auto'>
                <div className='flex justify-between  py-2 items-center'>
                    <div className='text-md text-white flex  items-center'>
                        <div className="h-8 w-37 md:h-12 md:w-45 xl:w-75 2xl:w-65 ">
                            <Image className="h-full w-full object-cover" src={Logo} alt="..." fetchPriority='low' />
                        </div>

                        <ul className=' lg:flex hidden  gap-x-9 text-black items-center justify-center ml-10'>
                            {tabs && tabs.length > 0 && tabs.map((item, i) => (
                                <li className="uppercase" key={i}><Link href='/' className='after:underline relative hover:after:hover-underline hover:text-neutral-500 '>{item}</Link></li>
                            ) || 'No Data')}
                        </ul>
                    </div>
                    <div className='flex justify-end gap-x-2   sm:gap-x-3  items-center'>
                        <div className='flex justify-end gap-x-2 sm:gap-x-3  items-center'>
                            {iconList.length > 0 ? iconList.map(({ component: Icon }, i) => (
                                <div key={i} className="text-black transition-all hover:text-neutral-600">
                                    <Icon className='h-5 w-5 md:h-6 md:w-6' />
                                </div>
                            )) : 'No Data'}
                        </div>
                        <div className="text-black transition-all hover:text-neutral-600 lg:hidden block" onClick={handleChange}>
                            {menuOpen ? <X className='h-6 w-6 md:h-7 md:w-7' /> : <AlignJustify className='h-5 w-5 md:h-6 md:w-6' />}
                        </div>
                    </div>
                </div>
                <div
                    className={`fixed top-0 left-0 w-full h-screen bg-white transition-transform duration-500 ease-in-out z-50 py-2 ${menuOpen ? 'translate-y-0 md:top-15 sm:top-12 top-10 ' : '-translate-y-full'
                        }`}
                >
                    <ul className="text-black ml-3">
                        {tabs && tabs.length > 0
                            ? tabs.map((item, i) => (
                                <li className="uppercase pb-2 md:text-lg sm:text-md text-sm" key={i} onClick={() => setOpenmenu(false)}>
                                    <Link
                                        href="/"
                                        className="after:underline relative hover:after:hover-underline hover:text-neutral-500"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))
                            : 'No Data'}
                    </ul>
                </div>

            </div>

        </section>

    )
}

export default Header;

