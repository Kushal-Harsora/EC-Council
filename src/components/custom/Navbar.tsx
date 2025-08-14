'use client';

import { AlignJustify, ChevronDown, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '../ui/button';
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
    DrawerFooter,
    DrawerClose
} from "@/components/ui/drawer"

const HoverDropdown = ({ label, children }: { label: string, children: React.ReactNode }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <li
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href="#" className="flex flex-row gap-1 items-center">
                {label}
                <ChevronDown className=' font-[100]' />
            </Link>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="absolute top-full left-0 mt-2 w-[150px] bg-white text-black flex flex-col items-start justify-start p-4 z-20 rounded-xl shadow-lg backdrop-blur-md"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </li>
    );
};

const Navbar = () => {
    return (
        <section className="fixed top-0 left-0 h-[12.5vh] w-screen flex items-center justify-between px-16 max-md:px-8 py-2.5 bg-white z-50">

            {/* Logo */}
            <div className="w-[160px] max-md:w-[120px] h-full flex items-center">
                <div className="w-full aspect-square relative">
                    <Image
                        src="/assets/logo.png"
                        alt="EC-Council Logo"
                        layout="fill"
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            <div className="flex-1 h-full flex items-center justify-center max-w-[70vw] max-md:hidden">
                <ul className="flex flex-row items-center justify-center gap-6">
                    <li>
                        <Link href="#">About Us</Link>
                    </li>

                    <HoverDropdown label="Courses">
                        <Link href="#" className="text-center w-full hover:underline">Course 1</Link>
                        <Link href="#" className="text-center w-full hover:underline mt-1">Course 2</Link>
                    </HoverDropdown>

                    <HoverDropdown label="Services">
                        <Link href="#" className="text-center w-full hover:underline">Service 1</Link>
                        <Link href="#" className="text-center w-full hover:underline mt-1">Service 2</Link>
                        <Link href="#" className="text-center w-full hover:underline mt-1">Service 3</Link>
                    </HoverDropdown>

                    <li>
                        <Link href="#">Financial Assistance</Link>
                    </li>
                    <li>
                        <Link href="#">Veterans</Link>
                    </li>
                    <li>
                        <Link href="#">Careers</Link>
                    </li>
                    <li>
                        <Link href="#">News</Link>
                    </li>
                </ul>
            </div>

                <Button
                    className=' w-[180px] max-md:w-[140px] h-[55px] max-md:h-[40px] bg-[#9B1C31] hover:bg-[#621421] text-white cursor-pointer py-2.5 px-32 flex items-center justify-center gap-2.5'
                    onClick={() => { alert("Inquiry Initiated!"); }}
                >
                    Inquire Now
                    <MoveRight />
                </Button>
            

            <div className='flex items-center justify-center'>
                <Drawer>
                    <DrawerTrigger className=' cursor-pointer' asChild>
                        <Button
                            className='hidden w-fit h-full text-[#9B1C31] hover:bg-white border-[1px] border-[#621421] bg-white py-2.5 px-4 cursor-pointer max-md:flex items-center justify-center gap-0.5'
                        >
                            <AlignJustify />
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className=' w-full py-2 px-6 flex flex-col justify-center items-center gap-7'>
                            <div className=' w-full h-full'>
                                <DrawerHeader>
                                    <DrawerTitle className=' text-base font-bold text-center text-blue-400'>
                                        EC-Council
                                    </DrawerTitle>
                                </DrawerHeader>
                                <div className=' h-fit w-full flex flex-col gap-2'>
                                    <Link href={'/'} className=' w-full text-center border border-blue-400 p-2 rounded-md text-sm font-medium'>
                                        Courses
                                    </Link>
                                    <Link href={'/'} className=' w-full text-center border border-blue-400 p-2 rounded-md text-sm font-medium'>
                                        Services
                                    </Link>
                                    <Link href={'/'} className=' w-full text-center border border-blue-400 p-2 rounded-md text-sm font-medium'>
                                        Financial Assistance
                                    </Link>
                                    <Link href={'/'} className=' w-full text-center border border-blue-400 p-2 rounded-md text-sm font-medium'>
                                        Veterans
                                    </Link>
                                    <Link href={'/'} className=' w-full text-center border border-blue-400 p-2 rounded-md text-sm font-medium'>
                                        News
                                    </Link>
                                    <Link href={'/'} className=' w-full text-center border border-blue-400 p-2 rounded-md text-sm font-medium'>
                                        Careers
                                    </Link>
                                    <Link href={'/'} className=' w-full text-center border border-blue-400 p-2 rounded-md text-sm font-medium'>
                                        About Us
                                    </Link>
                                </div>
                                <DrawerFooter>
                                    <DrawerClose asChild>
                                        <Button variant="default" className=' w-full cursor-pointer p-3 bg-blue-400 text-white'>Close</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </div>
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>
        </section>
    );
};

export default Navbar;
