'use client'

// System Components import
import Image from 'next/image'
import React from 'react'

// UI Components import
import Footer from '@/components/custom/Footer'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from '@/components/ui/separator'
import { easeInOut, motion } from 'motion/react'
import { Marquee } from '@/components/magicui/marquee'

// Icons and styles import
import { CircleChevronUp, MoveRight } from 'lucide-react'

// Motion Variants
const programCardVariants = {
  initial: { y: '75%' },
  hover: {
    y: 0,
    transition: {
      duration: 0.35,
      ease: easeInOut,
    }
  }
};

// JSX Components
const Card = ({ title, description, image }: { title: string, description: string, image: string }) => {
  return (
    <div className="flex justify-center w-full">
      <div
        className="relative bg-cover bg-center w-full max-w-[475px] h-[400px] max-md:h-[375px] aspect-video group rounded-xl shadow overflow-hidden"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div
          className="absolute bottom-0 w-full h-[35%] backdrop-blur-lg bg-[#1C253C99] rounded-t-xl z-10 flex items-center justify-center"
        >
          <div className="px-8 w-full text-white">
            <h3 className="text-xl max-md:text-base font-medium mb-3 max-md:mb-2">{title}</h3>
            <p className="text-base max-md:text-sm font-normal text-wrap text-left overflow-hidden text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgramCard = ({ title, description, image }: { title: string, description: string, image: string }) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  const handleMobileToggle = () => {
    if (window.innerWidth <= 768) {
      setIsHovered(prev => !prev);
    }
  };

  return (
    <motion.div
      className="relative bg-cover bg-center w-[325px] h-[375px] max-md:w-full aspect-square group rounded-xl shadow overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
      initial="initial"
      animate={isHovered ? "hover" : "initial"}
      whileHover="hover"
    >
      <motion.div
        variants={programCardVariants}
        className="absolute bottom-0 w-full h-full backdrop-blur-lg bg-black/20 z-10"
      >
        <div className="p-4 w-full h-[25%] text-white mb-4 max-md:mb-0">
          <h3 className="text-2xl flex flex-row justify-between items-center font-normal">
            {title}
            <CircleChevronUp
              className={`md:hidden w-[32px] aspect-square cursor-pointer transform transition-transform duration-300 ${isHovered ? 'rotate-180' : ''
                }`}
              onClick={handleMobileToggle}
            />
          </h3>
        </div>
        <p className="text-base text-wrap text-left max-h-[225px] overflow-hidden text-white px-4">
          {description}
        </p>
        <div className="w-full max-w-[325px] max-h-[75px] h-full flex items-center justify-start px-4">
          <Button
            className="w-fit h-fit text-[#9B1C31] hover:text-white bg-white hover:bg-[#9B1C31] py-4 cursor-pointer flex items-center justify-center gap-0.5"
            onClick={() => {
              alert('Inquiry Initiated!');
            }}
          >
            Inquire Now
            <MoveRight />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Sample Data
const programData1 = [
  {
    title: 'Master of Science in Cyber Security',
    description: 'Ranked among Fortune®’s ‘Top 10 Best Online Master’s in Cyber Security,’ this program offers five career-focused specializations, preparing you for leadership roles in the rapidly evolving cyber security industry.',
    image: '/assets/p1.png',
  },
  {
    title: 'Master of Science in Computer Science',
    description: 'Designed for aspiring cyber security leaders, this master’s program bridges technical expertise and executive strategy, empowering you to safeguard critical infrastructures, mitigate risks, and shape cyber security policy on a global scale.',
    image: '/assets/p2.png',
  },
];

const programData2 = [
  {
    title: 'Bachelor of Science in Cyber Security',
    description: 'Ranked among Fortune®’s ‘Top 10 Best Online Master’s in Cyber Security,’ this program offers five career-focused specializations, preparing you for leadership roles in the rapidly evolving cyber security industry.',
    image: '/assets/p3.png',
  },
  {
    title: 'Graduate Certificate Program',
    description: 'Building the competencies cyber security professionals need to advance into managerial, directorial, and CIO roles, the Graduate Certificate Program equips you with specialized IT security training and strategic insight into organizational structures.',
    image: '/assets/p4.png',
  },
  {
    title: 'Non-Degree Certificates & Courses',
    description: 'Bridging structured learning with professional growth, ECCU’s Non-Degree courses help Develop hands on expertise through you gain specialized cyber security expertise without having to commit to a full-fledged degree, course credits toward a degree program and a certification along with the course.',
    image: '/assets/p5.png',
  },
  {
    title: 'Center of Professional Education',
    description: 'Combining academic rigor with hands-on application, ECCU’s Center of Professional Education offers online non-degree non-credit continuing education courses that equip IT and cyber security professionals with specialized expertise to address evolving threats.',
    image: '/assets/p6.png',
  },
];

const whyUsData = [
  {
    title: 'Flexible Online Learning',
    description: 'Graduate with a degree, whether on sabbatical or working full-time.',
    image: '/assets/b1.png',
  },
  {
    title: 'Hands-on Experience',
    description: 'Develop hands-on expertise with virtual labs and capstone projects.',
    image: '/assets/b2.png',
  },
  {
    title: 'Industry Aligned Curriculum',
    description: 'Get industry-ready with programs built for today’s market needs.',
    image: '/assets/b3.jpg',
  },
  {
    title: 'Certifications Embedded',
    description: 'Kickstart your career with a degree along with EC-Council certifications.',
    image: '/assets/b4.png',
  },
  {
    title: 'Credit Transfers',
    description: 'Transfer up to 90 credits from prior learning and certifications.',
    image: '/assets/b5.png',
  },
  {
    title: 'Learning with Ease',
    description: 'Experience an all-in-one learning platform designed for seamless navigation.',
    image: '/assets/b6.png',
  },
];

const images = [
  '/assets/img1.png',
  '/assets/img2.png',
  '/assets/img3.png',
  '/assets/img4.png'
];


const Page = () => {
  return (
    <React.Fragment>
      <main className='h-fit w-screen flex flex-1 flex-col items-center justify-center overflow-x-hidden px-6 pt-4'>

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

        <section className=' h-fit max-md:h-fit w-screen bg-white overflow-hidden grid md:grid-cols-2 max-md:grid-rows-1 px-16 max-md:px-6 py-24 mb-8 max-md:py-6'>
          <div className=' w-full h-full flex flex-col items-start max-md:items-center justify-center gap-6 max-md:gap-2 py-4'>
            <h1 className='w-4/5 max-md:hidden md:text-[42px] max-md:text-2xl font-bold md:leading-tight'>
              EC-Council University
              Where Your Leadership Journey Begins
            </h1>

            <h1 className='md:hidden max-md:w-full md:text-[42px] max-md:text-2xl font-bold md:leading-tight'>
              <span className=' text-sm'>EC-Council University</span>
              <br className='md:hidden' />
              Where Your Leadership Journey Begins
            </h1>

            <div className=' relative w-full h-[320px] md:hidden z-10 my-2 px-0'>
              <Image
                src="/assets/home2.png"
                alt="Join1"
                width={0}
                height={0}
                sizes="(max-width: 768px) 50vw, 320px"
                className="w-full max-w-[320px] max-md:max-w-[210px] h-auto absolute top-[10%] left-0 object-cover aspect-square border-[7.5px] border-white rounded-3xl z-20 scale-x-[-1]"
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
              sizes="(max-width: 768px) 50vw, 350px"
              className="w-[80%] max-w-[350px] max-md:max-w-[250px] h-auto absolute top-0 left-[15%] object-cover aspect-square border-[7.5px] border-white rounded-3xl z-20 scale-x-[-1]"
            />
            <Image src="/assets/home3.png"
              alt="Join2"
              width={0}
              height={0}
              sizes="(max-width: 768px) 50vw, 350px"
              className='w-[80%] max-w-[350px] max-md:max-w-[250px] h-auto absolute top-[25%] left-[45%] object-cover aspect-square rounded-3xl z-10'
            />
          </div>
        </section>

        {/* BestClass Section */}

        <section className=' h-fit w-screen bg-gray-50 overflow-hidden grid md:grid-cols-2 max-md:grid-rows-1 py-12 px-16 max-md:px-6'>
          <div className=' w-full h-full flex flex-col items-start max-md:items-center justify-center gap-3.5 max-md:gap-8 py-4'>
            <h1 className=' text-[42px] md:leading-tight max-md:text-2xl font-bold'>
              The Top 10 Best Online Master&apos;s in Cybersecurity by Fortune®
            </h1>

            {/* Mobile Section */}

            <div className=' relative w-full h-fit flex flex-col items-center justify-center md:hidden z-10 py-6'>
              <Image
                src="/assets/badge.png"
                alt="badge"
                width={0}
                height={0}
                sizes="(max-width: 768px) 50vw, 320px"
                className="w-[90%] max-w-[320px] max-md:max-w-[300px] h-auto object-cover aspect-square rounded-3xl z-20"
              />

              <div className=' w-full h-fit flex flex-row justify-evenly items-center max-md:items-start py-6'>

                <div className=' w-fit'>
                  <h1 className='text-3xl text-center font-medium'>
                    20+
                  </h1>
                  <p className='text-xs text-center'>
                    Years of Legacy
                  </p>
                </div>

                <div className=' w-fit'>
                  <h1 className=' text-4xl max-md:text-3xl text-center font-medium'>
                    140+
                  </h1>
                  <p className=' text-sm max-md:text-xs text-center'>
                    Countries with ECCU
                    <br className='md:hidden' />
                    Students
                  </p>
                </div>

              </div>
            </div>
            <p className=' w-full text-wrap text-justify'>
              EC-Council University has been ranked among “The Top 10 Best Online Master&apos;s in Cybersecurity” by Fortune®, underscoring our commitment to excellence, innovation, and ethical practices in cybersecurity education.
            </p>
            <Button
              className=' w-fit h-fit bg-[#9B1C31] hover:bg-[#621421] text-white py-4 cursor-pointer flex items-center justify-center gap-0.5'
              onClick={() => { alert("Inquiry Initiated!"); }}
            >
              Inquire Now
              <MoveRight />
            </Button>
          </div>

          {/* Desktop Section */}

          <div className=' relative w-full flex flex-row justify-evenly items-center max-md:hidden px-6'>
            <Image
              src="/assets/badge.png"
              alt="badge"
              width={0}
              height={0}
              sizes="(max-width: 768px) 50vw, 300px"
              className="w-[80%] max-w-[300px] max-md:hidden h-auto object-cover aspect-square rounded-3xl z-20"
            />

            <div className='w-full flex items-start justify-around'>

              <div className=' w-fit h-fit'>
                <Separator className=' w-full h-[0.5px]' orientation={'horizontal'} />
                <h1 className=' text-5xl font-light'>
                  20+
                </h1>
                <p className=' text-base'>
                  Years of Legacy
                </p>
              </div>

              <div className=' w-fit h-fit'>
                <Separator className=' w-full h-[0.5px]' orientation={'horizontal'} />
                <h1 className=' text-5xl font-light'>
                  140+
                </h1>
                <p className=' text-base text-left'>
                  Countries with ECCU
                  <br />
                  Students
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Program Section */}

        <div className="w-screen h-fit bg-white max-md:px-6 px-16 py-12 mt-6 flex flex-col items-center justify-center gap-6">
          <div className='h-full max-md:h-fit grid md:grid-cols-2 gap-3 max-md:gap-4'>
            <div className=' w-[95%] max-md:w-full h-full flex flex-col items-start justify-start gap-4 max-md:py-4'>
              <h1 className="w-full text-[42px] md:leading-tight max-md:text-2xl font-bold text-left">
                Choose the Program that matches your ambitions
              </h1>
              <p className=" text-base text-wrap text-left">
                Whether advancing a career, transitioning to a new path, or entering the cyber security field for the first time, these accredited online cyber security programs are crafted to align with your current journey and propel you toward your ultimate goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 max-md:grid-rows-2 max-md:gap-4 items-center justify-center w-full h-full">
              {programData1.map((card, index) => (
                <ProgramCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-4 max-md:grid-rows-4 max-md:gap-4 items-center justify-center w-full h-full md:pl-4 md:pr-2">
            {programData2.map((card, index) => (
              <ProgramCard
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>
        </div>

        {/* Why-Us Section */}

        <section className=' w-screen h-fit flex flex-col items-center justify-around gap-4 px-16 mt-6 max-md:px-6'>
          <div className=' w-full h-fit py-6 flex flex-col items-center justify-center gap-8 max-md:gap-4'>
            <h1 className=' text-[42px] md:leading-tight max-md:text-2xl text-center font-bold'>
              Why EC-Council University is Right for You
            </h1>
            <p className=' max-md:text-center w-full h-fit px-44 max-md:px-2 py-2 text-lg max-md:text-sm'>
              With ECCU, you&apos;re not just earning a degree - you&apos;re becoming a future-ready cyber security leader. We take your long-term career success just as seriously as delivering an immediate return on your investment.
              Once you enter the ECCU ecosystem, you&apos;ll have unrestricted access to everything you need to accomplish your cyber security learning goals - a state-of-the-art learning management system (LMS), internationally-renowned faculty, engaging and interactive learning resources, a 24x7 online library housing a vast collection of learning materials, exclusive networking opportunities with like-minded peers and cyber security experts, readily-available academic advisory and career counselling support, and so much more!
            </p>
            <Button
              className=' w-fit h-full bg-[#9B1C31] hover:bg-[#621421] text-white py-4 cursor-pointer flex items-center justify-center gap-2'
              onClick={() => { alert("Inquiry Initiated!"); }}
            >
              Discover the ECCU Advantage
              <MoveRight />
            </Button>
          </div>
          <div className="w-full flex justify-center py-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {whyUsData.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}

        <section className=' w-screen h-fit flex flex-col items-center justify-center px-16 max-md:px-6 overflow-hidden my-16 max-md:mt-8'>
          <div className=' w-screen h-fit py-6 flex flex-col items-center justify-center gap-8 mb-16 max-md:gap-4'>
            <h1 className=' text-[42px] md:leading-tight max-md:text-2xl text-center font-bold'>
              Cyber Security Education Reimagined
            </h1>
            <p className=' w-full h-fit px-48 max-md:px-6 py-2 text-lg max-md:text-sm text-center'>
              We are revolutionising cyber security education. Beyond earning credentials, we offer a transformative learning experience designed to prepare you for leadership in the ever-evolving digital landscape.
            </p>
            <Image
              src={'/assets/ed.png'}
              alt='Education'
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 1140px"
              className='w-full max-w-[1140px] max-md:max-w-[320px] h-auto object-cover aspect-video rounded-3xl z-10 px-3 py-2'
            />
          </div>

          <div className=' h-fit w-screen flex flex-col items-center justify-center bg-[#202A40] pt-12 max-md:pt-6 pb-24 max-md:pb-12'>
            <h1 className=' text-[42px] md:leading-tight max-md:text-3xl font-bold text-white text-center w-full h-fit py-12'>
              Accreditations and Recognitions
            </h1>
            <Marquee pauseOnHover className="[--duration:20s]">
              {images.map((image, index) => (
                <div className='w-full h-full flex items-center justify-center' key={index}>
                  <Image
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    width={0}
                    height={0}
                    sizes="(max-width: 640px) 150px, (max-width: 1024px) 250px"
                    className="w-full h-[80px] object-contain rounded-xl z-10 p-2 mx-12 filter brightness-0 invert"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </section>

        {/* Alumni */}

        <section className=' w-screen h-fit flex flex-col items-center justify-center px-8 max-md:px-2 gap-6 py-4 max-md:py-2 overflow-hidden'>
          <div className=' grid md:grid-cols-2 max-md:grid-rows-2 py-8 max-md:py-0'>
            <div className=' md:pl-8 w-full h-full flex items-center justify-center md:rounded-3xl overflow-hidden'>
              <video
                src="/assets/alumni.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-contain aspect-video md:rounded-3xl z-10"
              />
            </div>
            <div className=' h-full w-full flex flex-col items-start max-md:items-center justify-center gap-6 max-md:gap-3 max-md:mt-4 md:px-20 max-md:px-6'>
              <h1 className='w-full text-[42px] md:leading-tight font-bold text-left max-md:text-center max-md:text-2xl'>
                Voices of Success:
                Hear from Our Alumni
              </h1>
              <p className=' text-lg max-md:text-sm text-left max-md:text-center w-full h-fit'>
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

            <div className=' w-screen h-fit flex flex-col items-center justify-center gap-8 max-md:gap-6 py-12 mt-12 max-md:py-10 px-6'>
              <h1 className='w-full text-[42px] md:leading-tight max-md:text-2xl text-center font-bold'>
                Our Commitment to Quality and Excellence
              </h1>
              <p className='w-full h-fit text-base max-md:text-sm px-80 max-md:px-0 text-center mb-6'>
                ECCU&apos;s online cyber security programs are crafted to empower driven professionals to turn their aspirations into reality and achieve their ultimate career dreams.
              </p>
              <div className='w-full h-fit grid md:grid-cols-3 max-md:grid-rows-3 max-md:gap-1.5 md:pr-44 md:px-24'>
                <div className='flex flex-col items-center justify-center gap-4 max-md:gap-3'>
                  <h1 className=' text-8xl max-md:text-6xl'>
                    <span className='font-medium'>1</span> <span className='max-md:text-lg md:text-6xl font-medium'>in</span> <span className=' font-medium'>2</span>
                  </h1>
                  <p className='text-xl max-md:text-lg font-medium w-full text-center'>
                    Secured &nbsp;
                    <br className='max-md:hidden' />
                    $100K+ Salaries
                  </p>
                  <p className='text-base max-md:text-sm w-full text-left max-md:text-center px-12 max-md:px-0'>
                    Better Earning Capacity: Half of our
                    graduates achieved six-figure salaries reflecting the exceptional value of our
                    program.
                  </p>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 max-md:gap-3'>
                  <h1 className=' text-8xl max-md:text-6xl'>
                    <span className=' font-medium'>93<span className='max-md:text-lg md:text-6xl font-medium'>%</span></span>
                  </h1>
                  <p className='text-xl max-md:text-lg font-medium w-full text-center'>
                    Achieved Their
                    <br />
                    Employment Goals
                  </p>
                  <p className='text-base w-full max-md:text-sm text-left max-md:text-center px-12 max-md:px-0'>
                    Job-Ready Skills: Nearly all our students achieved their employment goals demonstrating the transformative impact of an ECCU education.
                  </p>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 max-md:gap-3'>
                  <h1 className=' text-8xl max-md:text-6xl'>
                    <span className=' font-medium'>2</span> <span className='max-md:text-lg md:text-6xl font-medium'>Out of</span> <span className=' font-medium'>3</span>
                  </h1>
                  <p className='text-xl max-md:text-lg font-medium w-full text-center'>
                    Experienced &nbsp;
                    <br className='max-md:hidden' />
                    Significant Growth
                  </p>
                  <p className='text-base w-full max-md:text-sm text-left max-md:text-center px-12 max-md:px-0'>
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

        {/* <FAQ /> */}

        <section className=' w-screen h-fit px-16 max-md:px-6 py-12 flex flex-col items-center justify-center md:gap-8 overflow-hidden'>
          <div className=' w-full h-fit py-2 flex items-center justify-center'>
            <h1 className=' text-[42px] md:leading-tight max-md:text-3xl max-md:text-center font-bold'>
              Frequently Asked Questions
            </h1>
          </div>
          <div className=' w-full h-fit py-4 flex max-md:flex-col items-center max-md:items-start justify-center max-md:justify-start gap-3'>
            <div className='max-md:w-full w-1/3 h-full flex md:flex-col justify-center max-md:justify-start items-start md:gap-4 overflow-x-hidden max-md:px-[-10px]'>
              <Button variant={'link'} className=' font-bold text-2xl max-md:text-lg max-md:pl-0'>
                About ECCU
              </Button>
              <Button variant={'link'} className=' text-2xl max-md:text-lg text-[#969696]'>
                Learning online at ECCU
              </Button>
              <Button variant={'link'} className=' text-2xl max-md:text-lg text-[#969696]'>
                Accreditations & Recognitions
              </Button>
              <Button variant={'link'} className=' text-2xl max-md:text-lg text-[#969696]'>
                Faculty
              </Button>
            </div>
            <div className=' w-2/3 max-md:w-full h-full shadow p-5'>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is EC Council University?</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sunt soluta minus culpa animi corporis nobis exercitationem, facilis, dolores, est in? Quae, animi labore. Itaque aspernatur possimus ducimus iure modi!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Does ECCU online as well as offline programs?</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis sint pariatur reiciendis consectetur temporibus similique, sapiente minus officiis eveniet labore qui quidem fugiat totam unde!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is ECCU the best cyber security university?</AccordionTrigger>
                  <AccordionContent>
                    At EC-Council University (ECCU), we believe that the “best” cyber security university depends on what matters most to each student. When considering the right cyber security program for you, it&apos;s important to evaluate factors such as industry-aligned curriculum, flexible learning options, certification pathways, expert faculty, learning platform, and support. The best university should be the one that prepares you to take lead in the cyber security industry while also fitting your busy schedule and professional goals.
                    <br />
                    <br />
                    ECCU is a globally recognized, accredited university specializing in cyber security education, offering career-focused programs designed to transform you to a cyber security leader. With an emphasis on practical learning, hands-on labs, and alignment with industry certifications, thousands of students choose ECCU to advance their cyber security careers. We encourage you to evaluate your options and make an informed decision based on your goals and priorities. If you have any questions about ECCU or need assistance, please fill out the enquiry form to connect with our training consultant for guidance.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <Button
            className="w-[150px] bg-[#9B1C31] hover:bg-[#621421] text-white py-6 px-12 rounded-md flex items-center justify-center gap-2 z-10"
          >
            View More
            <MoveRight />
          </Button>
        </section>
        
        <Footer />

      </main>
    </React.Fragment >
  )
}

export default Page