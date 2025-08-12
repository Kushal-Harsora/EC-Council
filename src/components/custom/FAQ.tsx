'use client'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '../ui/button'

const FAQ = () => {
  return (
    <React.Fragment>
      <section className=' w-screen h-fit px-4 py-6 flex flex-col items-center justify-center'>
        <div className=' w-full h-fit py-2 flex items-center justify-center'>
          <h1 className=' text-4xl max-md:text-2xl font-bold'>
            Frequently Asked Questionsnpm 
          </h1>
        </div>
        <div className=' w-full h-fit py-4 px-8 max-md:px-4 flex max-md:flex-col items-center justify-center gap-3'>
          <div className='max-md:w-full w-1/4 h-full flex md:flex-col justify-center items-start overflow-hidden'>
            <Button variant={'link'} className=' font-bold text-xl max-md:text-lg'>
              About ECCU
            </Button>
            <Button variant={'link'} className=' text-xl max-md:text-lg'>
              Learning online at ECCU
            </Button>
            <Button variant={'link'} className=' text-xl max-md:text-lg'>
              Accreditations & Recognitions
            </Button>
            <Button variant={'link'} className=' text-xl max-md:text-lg'>
              Faculty
            </Button>
          </div>
          <div className=' w-3/4 max-md:w-full h-full shadow p-3 rounded-xl'>
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
                ECCU is a globally recognized, accredited university specializing in cyber security education, offering career-focused programs designed to transform you to a cyber security leader. With an emphasis on practical learning, hands-on labs, and alignment with industry certifications, thousands of students choose ECCU to advance their cyber security careers. We encourage you to evaluate your options and make an informed decision based on your goals and priorities. If you have any questions about ECCU or need assistance, please fill out the enquiry form to connect with our training consultant for guidance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default FAQ