import BestClass from '@/components/custom/BestClass'
import Join from '@/components/custom/Join'
import Main from '@/components/custom/Main'
import React from 'react'

const Page = () => {
  return (
    <React.Fragment>
      <main className='h-full w-screen flex flex-1 flex-col items-center justify-center'>
        <Main />
        {/* EC-Council */}
        <Join />
        <BestClass />
      </main>
    </React.Fragment>
  )
}

export default Page