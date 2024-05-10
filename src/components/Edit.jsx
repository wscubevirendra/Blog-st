import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MainContext } from '../context/Context'


//NO used 

export default function Edit() {
  const params = useParams()
  const { blogs } = useContext(MainContext)
  const [blogdata, setblogdata] = useState({ heading: '', description: '' });


  const Checkimg = () => {
    const blog = blogs.find((d) => d.id === params.id);
    if (blog) {
      const { heading, desciption } = blog;
      setblogdata({ heading, desciption });
    } else {
      console.log(false);
    }
  };

console.log(blogdata)




  const editHandler = () => {
    // Add your edit logic here
  }

  useEffect(() => {
    Checkimg()
  }, [params.id])

  return (
    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px' }} className='mx-6 text-2xl p-4 h-[600px] my-8'>
      <form onSubmit={editHandler}>
        <label htmlHtmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Heading</label>
        <input value={blogdata.heading} type='text' name="heading" rows="4" className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..." />
        <label htmlHtmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
        <textarea value={blogdata.desciption} name="description" rows="4" className="block h-[350px] mt-4 p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

        <div className='text-center'>
        <button type='submit'
          className="transform  w-[40%] rounded-md mt-10  bg-[black] text-white py-2 font-bold duration-300 hover:bg-[#4B0082] " >
          Add Blog
        </button>
        </div>
      </form>
    </div>
  )
}
