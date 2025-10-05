import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navMenuItems = [
    {
        name: 'Shop',
        href: '/shop',
    },
    {
        name: 'For Kindergarten',
        href: '/kindergarten',
    },
    {
        name: 'For High School',
        href: '/high-school',
    },
    {
        name: 'For College',
        href: '/college',
    },
    {
        name: 'Courses',
        href: '/courses',
    },
    {
        name: 'Blog',
        href: '/blog',
    },
]
const Navbar = () => {
    return (
        <div className='px-4 sticky top-0 bg-[#f8feff] z-50'>
            <div className='flex justify-between items-center text-sm '>
                <Link href={"/"}>
                    <Image src="/svg/langvora-title.svg" alt="logo" width={130} height={10} className='h-[70px]' />
                </Link>
                <div>
                    {/* navigation menu with submenus */}
                    <ul className='flex gap-8'>
                        {navMenuItems.map((item, index) => (
                            <li key={index} className='font-medium hover:text-primary transition-all duration-300 tracking-wide hover:underline underline-offset-8 decoration-2 decoration-primary'>
                                <Link href={item.href}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>

                </div>
                <div className='flex gap-4 items-center'>
                    <span>My Account</span>
                    <Image src="/svg/icons/profile.svg" alt="user icon" width={25} height={25} />
                </div>
            </div>
        </div>
    )
}

export default Navbar