import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { MainContext } from '../context/Context';
import { FaRegArrowAltCircleUp } from "react-icons/fa";




export default function Header() {
  const { user } = useContext(MainContext)
  const [toggle, settoggle] = useState(true)


  function changehandle() {
    settoggle(!toggle)
  }
  const menu = [
    {
      name: "blog",
      link: "/"
    }, {
      name: "create",
      link: "/create"
    }, {
      name: "listing",
      link: "/listing"
    }
  ]
  return (
    <div className='setbg'>
      <div className='w-full  md:max-w-[1400px] mx-auto py-4  relative px-4  sm:sticky top-0 text-xl justify-between flex text-[white] '>
        <h1 className='text-[#45ce55] text-2xl ml-2 sm:ml-0 font-extrabold'>Blog-<span className='text-[#ff4d00]'>st</span></h1>
        <div className='hidden sm:block'>
          <ul className='flex text-lg  gap-16 cursor-pointer'>
            {
              menu.map((d, i) => {
                return <Link key={i} to={d.link}> <li className=' capitalize' >{d.name}</li></Link>
              })
            }
            <li>
              <Link to="/user">
                {
                  user == null ?
                    <button onClick={() => {
                      localStorage.clear();

                    }} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow">
                      Login
                    </button>
                    :
                    <button onClick={() => {
                      localStorage.clear();

                    }} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow">
                      Logout
                    </button>
                }
              </Link>

            </li>
          </ul>
        </div>
        {
          toggle == true ?
            <FaBarsStaggered onClick={changehandle} className='sm:hidden cursor-pointer text-2xl block' />
            :
            <ImCross onClick={changehandle} className='sm:hidden cursor-pointer text-2xl block' />

        }
        {/* mobile navbar */}
        <div style={{ zIndex: 1000 }} className={`sm:hidden myshadow font-bold  top-[66px] duration-75  w-[40%] bg-white text-black h-[100vh] absolute block
        ${toggle == false ? 'left-[0%]' : 'left-[-100%]'}
        `}>
          <ul className='flex flex-col text-lg gap-20 pt-10 items-center cursor-pointer'>
            {
              menu.map((d, i) => {
                return <Link key={i} to={d.link}> <li onClick={changehandle} className=' capitalize' >{d.name}</li></Link>
              })
            }
            <li>
              <Link to="/user">
                {
                  user == null ?
                    <button onClick={() => {
                      localStorage.clear();

                    }} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow">
                      Login
                    </button>
                    :
                    <button onClick={() => {
                      localStorage.clear();

                    }} className="bg-white border-t-neutral-400 hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow">
                      Logout
                    </button>
                }
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
