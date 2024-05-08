import React, { useContext, useState } from 'react'
import { MainContext } from '../context/Context'
import { formatDistanceToNow } from 'date-fns';
import Loading from  '../components/Loading'


export default function Blogs() {
  const { blogs,load } = useContext(MainContext)
  //state for visible blog 
  const [visibleBlogs, setVisibleBlogs] = useState(6)

  //create function for loadmore button
  const handleLoadMore = () => {
    setVisibleBlogs(prev => prev + 3)
  }


  return (
    <>
    <div className='w-full my-16   mx-auto  md:max-w-[1400px]'>
      {
        load == true ?
        <Loading/>
:
<div className='grid py-10 sm:ml-14 px-4 md:grid-cols-2 lg:grid-cols-3'>
{
 blogs.sort((a, b) => new Date(b.date_of_post) - new Date(a.date_of_post))
 .slice(0, visibleBlogs).map((data, i) => {
    return (
   <Box  key={i} data={data}/>
    )
  })
}
</div>
      }
     {visibleBlogs < blogs.length ?
          <div className='flex justify-center items-center'>
            <button onClick={handleLoadMore} className="transform btn-color px-10 font-extrabold rounded-lg text-white py-2">Load more</button>
          </div>
          :
          ""
        }
    </div>
</>
  )
}


 function Box({data}) {
  return (
    <div style={{ boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px' }} className='md:max-w-[330px] text-sm  text-wrap rounded-lg text-justify min-h-[300px] mb-10 flex flex-col gap-4 p-4 shadow-xl'>
    <h1 >{formatDistanceToNow(new Date(data.date_of_post))} ago</h1>
    <h1 className='text-xl capitalize font-bold'>{data.heading}</h1>
    <p>{data.desciption}</p>
    <hr />
    
  </div>
  )
}
