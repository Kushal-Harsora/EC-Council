'use client'

import React from 'react'
import { Button } from '../ui/button';
import { MoveRight } from 'lucide-react';

const Alumni = () => {
    return (
        <React.Fragment>
            <section className=' w-screen h-fit flex flex-col items-center justify-center px-8 max-md:px-2 gap-6 py-4 overflow-hidden'>
                <div className=' grid md:grid-cols-2 max-md:grid-rows-2 py-8'>
                    <div className=' w-full h-full flex items-center justify-center md:rounded-3xl overflow-hidden'>
                        <video
                            src="/assets/alumni.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-auto object-contain aspect-video md:rounded-3xl z-10"
                        />
                    </div>
                    <div className=' h-full w-full flex flex-col items-center justify-center gap-6 px-12'>
                        <h1 className='text-5xl font-bold text-center max-md:text-3xl'>
                            Voices of Success:
                            Hear from Our Alumni
                        </h1>
                        <p className=' text-lg max-md:text-sm text-center w-full h-fit'>
                            Discover the stories of growth, success, and transformation from our alumni&apos;s journeys with us.
                        </p>
                        <Button
                            className=' w-fit h-fit bg-[#9B1C31] hover:bg-[#621421] text-white py-4 cursor-pointer flex items-center justify-center gap-0.5'
                            onClick={() => { alert("Join Initiated!"); }}
                        >
                            Join Them
                            <MoveRight />
                        </Button>
                    </div>

                    <div className=' w-screen h-fit flex flex-col items-center justify-center gap-8 py-12 max-md:py-6 px-6'>
                        <h1 className='w-full text-5xl max-md:text-3xl text-center font-bold'>
                            Our Commitment to Quality and Excellence
                        </h1>
                        <p className='w-full h-fit text-base max-md:text-sm px-80 max-md:px-12 text-center'>
                            ECCU&apos;s online cyber security programs are crafted to empower driven professionals to turn their aspirations into reality and achieve their ultimate career dreams.
                        </p>
                        <div className='w-full h-fit grid md:grid-cols-3 max-md:grid-rows-3'>
                            <div className='flex flex-col items-center justify-center gap-4  max-md:gap-6'>
                                <h1 className=' text-8xl max-md:text-7xl'>
                                    <span className='font-medium'>1</span> <span className='text-4xl'>in</span> <span className=' font-medium'>2</span>
                                </h1>
                                <p className='text-xl max-md:text-base w-full text-center'>
                                    Secured
                                    <br />
                                    $100K+ Salaries
                                </p>
                                <p className='text-base max-md:text-sm w-full text-left max-md:text-center px-12'>
                                    Better Earning Capacity: Half of our
                                    graduates achieved six-figure salaries reflecting the exceptional value of our
                                    program.
                                </p>
                            </div>
                            <div className='flex flex-col items-center justify-center gap-4'>
                                <h1 className=' text-8xl max-md:text-7xl'>
                                    <span className=' font-medium'>93%</span>
                                </h1>
                                <p className='text-xl max-md:text-base w-full text-center'>
                                    Achieved Their
                                    Employment Goals
                                </p>
                                <p className='text-base w-full max-md:text-sm text-left max-md:text-center px-12'>
                                    Job-Ready Skills: Nearly all our students achieved their employment goals demonstrating the transformative impact of an ECCU education.
                                </p>
                            </div>
                            <div className='flex flex-col items-center justify-center gap-4'>
                                <h1 className=' text-8xl max-md:text-7xl'>
                                    <span className=' font-medium'>2</span> <span className='text-4xl'>out of</span> <span className=' font-medium'>3</span>
                                </h1>
                                <p className='text-xl max-md:text-base w-full text-center'>
                                    Experienced
                                    <br />
                                    Significant Growth
                                </p>
                                <p className='text-base w-full max-md:text-sm text-left max-md:text-center px-12'>
                                    Career Advancement: From promotions and pay raises to meaningful role transitions, two-thirds of our graduates advanced significantly in their careers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative w-full h-fit px-12 max-md:px-4 flex items-center justify-center">
                    <div className="relative w-full max-md:w-[353px] h-fit max-md:h-[366px] py-12 bg-gradient-to-r from-[#202A40] to-[#0B132B] text-white flex flex-col items-center justify-center gap-6 rounded-xl overflow-hidden">
                        <div className="absolute inset-0 z-0 pointer-events-none">
                            <div
                                className=" max-md:hidden absolute w-[200px] max-md:w-[250px] aspect-square left-[-120px] max-md:left-0 max-md:translate-x-1/2 top-1/2 -translate-y-1/2 rotate-90 rounded-full"
                                style={{ background: 'linear-gradient(102.35deg,#11244B -3.05%,#4999C2 100%)' }}
                            />
                            <div
                                className=" max-md:hidden absolute w-[200px] max-md:w-[250px] aspect-square left-[-60px] max-md:left-0 top-1/2 max-md:top-0 -translate-y-1/2 rotate-90 rounded-full"
                                style={{ background: 'linear-gradient(102.35deg,#142865 -3.05%,#202A40 100%)' }}
                            />

                            <div className="md:hidden absolute left-[-12.5px] top-[225.25px] w-[353px] h-[366px] rounded-full bg-[linear-gradient(102.35deg,_#142865_-3.05%,_#202A40_100%)] z-20"></div>

                            <div
                                className=" max-md:hidden absolute w-[200px] max-md:w-[250px] aspect-square left-[20px] max-md:left-0 top-1/2 max-md:top-0 -translate-y-1/2 rotate-90 rounded-full"
                                style={{ background: 'linear-gradient(102.35deg,#00081A -3.05%,#15539C 100%)' }}
                            />

                            <div className="md:hidden absolute left-[-12.5px] top-[-165px] w-[353px] h-[366px] rounded-full rotate-[-90deg] bg-[linear-gradient(58.82deg,_#192540_17.05%,_rgba(49,66,142,0)_79.25%)] z-20"></div>

                            <div
                                className=" max-md:hidden absolute w-[200px] max-md:w-[250px] aspect-square left-[100px] top-1/2 -translate-y-1/2 rounded-full"
                                style={{ background: 'linear-gradient(58.82deg,#192540 17.05%,rgba(49,66,142,0) 79.25%)' }}
                            />

                            <div className="md:hidden absolute left-[-12.5px] top-0 w-[353px] h-[366px] rounded-full bg-[linear-gradient(102.35deg,_#00081A_-3.05%,_#15539C_100%)] z-10"></div>

                        </div>

                        {/* Foreground Content */}
                        <h1 className="text-3xl max-md:text-xl font-bold text-center z-10">
                            Your Success is our priority
                        </h1>
                        <Button
                            className="bg-[#9B1C31] hover:bg-[#621421] text-white py-4 px-6 rounded-md flex items-center justify-center gap-2 z-10"
                            onClick={() => alert("Inquiry Initiated!")}
                        >
                            Inquire Now
                            <MoveRight />
                        </Button>
                    </div>
                </div>

            </section>
        </React.Fragment>
    )
}

export default Alumni