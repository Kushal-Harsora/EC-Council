'use client';

import React from 'react'
import { Button } from '../ui/button';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';

const Join = () => {
    return (
        <React.Fragment>
            <section className=' h-[70vh] max-md:h-fit w-screen bg-white overflow-hidden grid md:grid-cols-2 max-md:grid-rows-1 px-6'>
                <div className=' w-full h-full flex flex-col items-start max-md:items-center justify-center gap-3.5 max-md:gap-2 px-8 max-md:px-3.5 py-4'>
                    <h1 className=' text-4xl max-md:text-2xl font-bold'>
                        EC-Council University
                        Where Your Leadership Journey Begins
                    </h1>

                    <div className=' relative w-full h-[320px] md:hidden z-10 my-2 px-0'>
                        <Image
                            src="/assets/home2.png"
                            alt="Join1"
                            width={0}
                            height={0}
                            sizes="(max-width: 768px) 50vw, 320px"
                            className="w-[80%] max-w-[320px] max-md:max-w-[210px] h-auto absolute top-[10%] left-0 object-cover aspect-square border-[7.5px] border-white rounded-3xl z-20 scale-x-[-1]"
                        />
                        <Image src="/assets/home3.png"
                            alt="Join2"
                            width={0}
                            height={0}
                            sizes="(max-width: 768px) 50vw, 320px"
                            className='w-[80%] max-w-[320px] max-md:max-w-[210px] h-auto absolute top-[25%] left-[40%] object-cover aspect-square rounded-3xl z-10'
                        />
                    </div>
                    <p className=' w-full text-wrap text-justify'>
                        With over 20 years in cyber security education, EC-Council University (ECCU) offers online cyber security programs designed to help you keep pace with industry demands. Whether you&apos;re pursuing a master&apos;s, bachelor&apos;s, or certificate program, you&apos;ll gain practical skills and real-world knowledge to excel. Our curriculum integrates EC-Council&apos;s globally recognized cyber security certifications such as CEH, CPENT, CHFI, and CND, ensuring your journey with ECCU is both relevant and respected. With a flexible online format, you can balance learning with your commitments while preparing to tackle today&apos;s cyber security challenges.
                    </p>
                    <Button
                        className=' w-fit h-fit bg-[#9B1C31] hover:bg-[#621421] text-white py-4 cursor-pointer flex items-center justify-center gap-0.5'
                        onClick={() => { alert("Inquiry Initiated!"); }}
                    >
                        Join Them
                        <MoveRight />
                    </Button>
                </div>
                <div className=' relative max-md:hidden'>
                    <Image
                        src="/assets/home2.png"
                        alt="Join1"
                        width={0}
                        height={0}
                        sizes="(max-width: 768px) 50vw, 320px"
                        className="w-[80%] max-w-[320px] max-md:max-w-[250px] h-auto absolute top-[10%] left-[5%] object-cover aspect-square border-[7.5px] border-white rounded-3xl z-20 scale-x-[-1]"
                    />
                    <Image src="/assets/home3.png"
                        alt="Join2"
                        width={0}
                        height={0}
                        sizes="(max-width: 768px) 50vw, 320px"
                        className='w-[80%] max-w-[320px] max-md:max-w-[250px] h-auto absolute top-[25%] left-[40%] object-cover aspect-square rounded-3xl z-10'
                    />
                </div>
            </section>
        </React.Fragment>
    )
}

export default Join