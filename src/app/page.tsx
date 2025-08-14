'use client'

import Alumni from '@/components/custom/Alumni'
import BestClass from '@/components/custom/BestClass'
import EdRem from '@/components/custom/EdRem'
import FAQ from '@/components/custom/FAQ'
import Footer from '@/components/custom/Footer'
import Program from '@/components/custom/Program'
import WhyUs from '@/components/custom/WhyUs'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <React.Fragment>
      <main className='h-fit w-screen flex flex-1 flex-col items-center justify-center overflow-x-hidden px-6 py-4'>

        {/* Hero Section */}

        <section className='relative top-0 left-0 h-screen w-screen flex flex-col items-center'
          style={{
            background: `linear-gradient(222.61deg, rgba(0, 0, 0, 0) 20.82%, rgba(0, 0, 0, 0.4) 45.72%), url('/assets/home.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className=' absolute bottom-[5vh] max-md:bottom-[2.5vh] left-[5vw] max-md:left-0 max-md:px-4 z-20 flex flex-col justify-start gap-[2.5vh] max-md:gap-[2vh]'>
            <p className=' text-[58px] leading-tight max-md:text-[32px] font-medium text-white'>
              The Cyber Security University,
              <br />
              That&apos;s All About You.
            </p>

            {/* Desktop Div */}

            <div
              className='max-md:hidden h-full w-[691px] p-8 bg-[#202740A3] rounded-md bg-clip-padding overflow-hidden z-10'
              style={{
                clipPath: "polygon(90% 0, 100% 37.5%, 100% 100%, 0 100%, 0 0)",
                backdropFilter: 'blur(24px)'
              }}
            >
              {[
                { left: '10vw', top: '10vh' },
                { left: '20vw', top: '20vh' },
                { left: '40vw', top: '-10vh' },
                { left: '60vw', top: '25vh' },
                { left: '80vw', top: '5vh' },
              ].map((pos, index) => (
                <Image
                  key={index}
                  src="/assets/bg-hero.png"
                  alt="bg pattern"
                  width={150}
                  height={150}
                  priority
                  className={`w-fit max-md:w-[75px] absolute opacity-10 z-20`}
                  style={{
                    left: pos.left,
                    top: pos.top,
                  }}
                />
              ))}

              <h2 className=' text-white text-opacity-60 text-base max-md:text-[12px] z-30'>
                Announcement
              </h2>
              <h1 className=' text-[36px] text-white z-30'>
                <span>New Team Starts on</span> <strong>7th July, 2025</strong>
              </h1>
              <div className=' w-full h-fit flex flex-row justify-start items-center gap-5 mt-4 z-30'>
                <Button
                  className=' w-[200px] h-[55px] bg-[#9B1C31] hover:bg-[#621421] text-white cursor-pointer flex items-center justify-center gap-2.5 z-30'
                  onClick={() => { alert("Inquiry Initiated!"); }}
                >
                  Admission Enquiry
                  <MoveRight />
                </Button>
                <Button
                  variant={'outline'}
                  className="group bg-transparent h-[55px] border-white text-white hover:bg-transparent hover:text-white transition duration-500 ease-in cursor-pointer z-30"
                  onClick={() => {
                    alert("Inquiry Initiated!");
                  }}
                >
                  View Catalog <span className="hidden group-hover:inline-block transition-opacity duration-500">|</span>
                  <MoveRight />
                </Button>

              </div>
            </div>

            {/* Mobile Div */}

            <div
              className='md:hidden h-[197px] w-[335px] pl-1.5 pr-1.5 bg-[#202740A3] rounded-md overflow-hidden z-10'
              style={{
                clipPath: "polygon(70% 0, 100% 45%, 100% 100%, 0 100%, 0 0)",
                backdropFilter: 'blur(24px)'
              }}
            >
              {[
                { left: '10vw', top: '10vh' },
                { left: '20vw', top: '20vh' },
                { left: '40vw', top: '-10vh' },
                { left: '60vw', top: '25vh' },
                { left: '80vw', top: '5vh' },
              ].map((pos, index) => (
                <Image
                  key={index}
                  src="/assets/bg-hero.png"
                  alt="bg pattern"
                  width={150}
                  height={150}
                  priority
                  className={`w-[75px] absolute opacity-10 z-20`}
                  style={{
                    left: pos.left,
                    top: pos.top,
                  }}
                />
              ))}

              <div className='w-full h-full flex flex-col justify-center items-start px-1'>

                <h2 className=' text-white text-opacity-60 text-[12px] z-30'>
                  Announcement
                </h2>
                <h1 className='text-[32px] leading-tight text-white z-30'>
                  <span className='text-[19.2px]'>New Team Starts on</span> <br /><strong>7th July, 2025</strong>
                </h1>
                <div className=' w-full h-fit flex flex-row justify-start items-center gap-5 mt-2 z-30'>
                  <Button
                    className=' bg-[#9B1C31] hover:bg-[#621421] text-white py-6 cursor-pointer z-30'
                    onClick={() => { alert("Inquiry Initiated!"); }}
                  >
                    Admission Enquiry
                    <MoveRight />
                  </Button>
                  <Button
                    variant={'outline'}
                    className=' bg-transparent py-6 border-white text-white cursor-pointer z-30'
                    onClick={() => { alert("Inquiry Initiated!"); }}
                  >
                    View Catalog
                    <MoveRight />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Them Section */}

        <section className=' h-fit max-md:h-fit w-screen bg-white overflow-hidden grid md:grid-cols-2 max-md:grid-rows-1 px-16 max-md:px-2 py-24 mb-8 max-md:py-6'>
          <div className=' w-full h-full flex flex-col items-start max-md:items-center justify-center gap-3.5 max-md:gap-2 px-4 max-md:px-3.5 py-4'>
            <h1 className=' text-5xl max-md:text-2xl font-bold'>
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
                className="w-full max-w-[320px] max-md:max-w-[210px] h-auto absolute top-[10%] left-[-2.5vw] object-cover aspect-square border-[7.5px] border-white rounded-3xl z-20 scale-x-[-1]"
              />
              <Image src="/assets/home3.png"
                alt="Join2"
                width={0}
                height={0}
                sizes="(max-width: 768px) 50vw, 320px"
                className='w-full max-w-[320px] max-md:max-w-[210px] h-auto absolute top-[25%] left-[30%] object-cover aspect-square rounded-3xl z-10'
              />
            </div>
            <p className='text-base w-full text-wrap text-justify'>
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
        <BestClass />
        <Program />
        <WhyUs />
        <EdRem />
        <Alumni />
        <FAQ />
        <Footer />
      </main>
    </React.Fragment >
  )
}

export default Page