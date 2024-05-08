import React,{useContext} from'react'
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { MainContext } from '../context/Context';





export default function TypeAnim() {
const {scrollToTop}= useContext(MainContext)

  return (
    <div className='w-full setbg'>
         <div className=' w-full md:max-w-[1400px] flex text-wrap  justify-center flex-col items-center mx-auto py-6 text-white '>
            <div className='flex flex-col pt-8 mb-2 items-center gap-10'>
            <h1 className='md:text-4xl text-xl font-extrabold'>Publish your passions, your way</h1>
             <p className='md:text-lg text-sm'>Create a unique and beautiful blog easily.</p>
            <Link to="/create">
            <button onClick={scrollToTop} className='bg-[#ff8000] rounded-sm uppercase font-bold text-xs md:text-sm p-2'>Create Your Blog</button>
            </Link>
            </div>
            <div className='md:text-xs text-[10px]	 leading-10  my-4 text-center	'>
              <i>
              <TypeAnimation
      preRenderFirstString={true}
      sequence={[
        500,
        'Discover storytelling through our captivating ', // initially rendered starting point
        1000,
        'Discover storytelling through our captivating blog .',
        1000,
        'Discover storytelling through our captivating posts',
        1000,
        'Discover storytelling through our captivating story',
        500,
      ]}
      speed={50}
      style={{ fontSize: '2em' }}
      repeat={Infinity}
    />
              </i>
      
            </div>
  </div>
    </div>
   
  )
}
