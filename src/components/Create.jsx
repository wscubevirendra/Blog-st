import React, { useContext ,useEffect} from 'react'
import { MainContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';



export default function Create() {
  const navigate=useNavigate()
 const { blogs, User,load ,createBlog} = useContext(MainContext);


  const NavigateUser = () => {
    if (User == null) {
      navigate("/user");
    }
  };

  useEffect(() => {
    NavigateUser();
  }, []);
 
    const submitHandler = (event) => {
        event.preventDefault();
      
        const data = {
            desciption: event.target.desciption.value,
            heading: event.target.heading.value,
            date_of_post: new Date().toString()
           
        }
        createBlog(data)
        event.target.reset();
    }


  return (
    <>
    <div  className='w-full  	 text-2xl mx-auto px-2  md:max-w-[1400px] '>
      <div className='lg:mx-auto rounded-lg p-4 px-2  my-8' style={{boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px'}}>
      <form  onSubmit={submitHandler}>
        <label htmlFor="heading" className="block my-4 md:text-lg text-sm font-medium text-gray-900">Heading</label>
<input type='text' name="heading" rows="4" className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."/>
        <label htmlFor="desciption" className="block my-4 text-sm md:text-lg font-medium text-gray-900">Desciption</label>
<textarea name="desciption"  className="block min-h-[300px] mt-4 p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

<div className='text-center'>
<button type='submit'
          className="transform  w-[40%] rounded-md mt-10  bg-[black] text-white py-2 font-bold duration-300 hover:bg-[#4B0082] " >
          Add Blog
        </button>
</div>
        </form>
      </div>  
<div>
</div>
    </div>
</>
  )
}
