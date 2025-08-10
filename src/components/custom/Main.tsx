'use client';

import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { MoveRight } from 'lucide-react'

const Main = () => {
    return (
        <React.Fragment>
            <section className=' h-screen w-screen flex items-center justify-center'>
                <Image
                    src={'/assets/home.jpg'}
                    alt='Main Section'
                    width={2000}
                    height={2000}
                    className='absoulte top-[12.5vh] w-screen h-screen left-0 object-cover z-10'
                    priority
                />

                <div className=' absolute bottom-[5vh] max-md:bottom-[2.5vh] left-[2.5vw] max-md:left-[1vw] z-20 flex flex-col justify-start gap-[7.5vh] max-md:gap-[2vh]'>
                    <p className=' text-5xl max-md:text-4xl font-bold text-white'>
                        The Cyber Security University,
                        <br />
                        That&apos;s All About You.
                    </p>
                    <div
                        className=' h-full w-fit pr-32 max-md:pr-8 pl-6 max-md:pl-3 py-8 max-md:py-4 bg-[rgba(30,64,175,0.25)] rounded-md bg-clip-padding backdrop-blur-lg'
                        style={{
                            clipPath: "polygon(90% 0, 100% 35%, 100% 100%, 0 100%, 0 0)",

                        }}
                    >
                        <h2 className=' text-base text-white'>
                            Announcement
                        </h2>
                        <h1 className=' text-5xl max-md:text-xl text-white'>
                            New Team Starts on <br className='md:hidden' /><strong>7th July, 2025</strong>
                        </h1>
                        <div className=' w-full h-fit flex flex-row justify-start items-center gap-5 mt-4'>
                            <Button
                                className=' w-fit h-full bg-[#9B1C31] hover:bg-[#621421] text-white py-4 cursor-pointer flex items-center justify-center gap-0.5'
                                onClick={() => { alert("Inquiry Initiated!"); }}
                            >
                                Admission Enquiry
                                <MoveRight />
                            </Button>
                            <Button
                                variant={'outline'}
                                className=' bg-transparent py-6 border-white text-white cursor-pointer'
                                onClick={() => { alert("Inquiry Initiated!"); }}
                            >
                                View Catalog
                                <MoveRight />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Main