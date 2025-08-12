import BestClass from '@/components/custom/BestClass'
import Footer from '@/components/custom/Footer'
import Join from '@/components/custom/Join'
import Main from '@/components/custom/Main'
import Page5 from '@/components/custom/Page5'
import React from 'react'

const Page = () => {
  return (
    <React.Fragment>
      <main className='h-full w-screen flex flex-1 flex-col items-center justify-center'>
        <Main />
        {/* EC-Council */}
        <Join />
        <BestClass />
        <Page5/>
        <Footer/>
      </main>
    </React.Fragment>
  )
}

export default Page