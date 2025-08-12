import Alumni from '@/components/custom/Alumni'
import BestClass from '@/components/custom/BestClass'
import EdRem from '@/components/custom/EdRem'
import Footer from '@/components/custom/Footer'
import Join from '@/components/custom/Join'
import Main from '@/components/custom/Main'
import Program from '@/components/custom/Program'
import WhyUs from '@/components/custom/WhyUs'
import React from 'react'

const Page = () => {
  return (
    <React.Fragment>
      <main className='h-full w-screen flex flex-1 flex-col items-center justify-center overflow-hidden'>
        <Main />
        <Join />
        <BestClass />
        <Program />
        <WhyUs />
        <EdRem />
        <Alumni />
        <Footer/>
      </main>
    </React.Fragment>
  )
}

export default Page