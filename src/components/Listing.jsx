import React, { useState, useContext, useEffect } from 'react';
import { MainContext } from '../context/Context';
import { Link, useNavigate } from 'react-router-dom';
import Loading from './Loading';

export default function Listing() {
  const navigate = useNavigate();
  const { blogs,User, load } = useContext(MainContext);

  const NavigateUser = () => {
    if (User == null) {
      navigate("/user");
    }
  };

  useEffect(() => {
    NavigateUser();
  }, []);

  return (
    <>
      <div className="overflow-x-auto my-14 mx-auto w-full px-4 md:max-w-[1400px]">
        {load ? (
          <Loading />
        ) : (
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((data, i) => (
               <Listing_Data key={i} i={i} data={data}/>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <img className="w-full h-[30vh]" src="img/16.jpg" alt="" />
    </>
  );
}





function Listing_Data({data,i}) {
  return (
    <tr  className={i % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
    <td className="border px-4 py-2">{data.heading}</td>
    <td className="border px-4 py-2">{data.desciption}</td>
    <td className="border px-4 py-2 text-center">
     
        <button className="py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700">
          Edit
        </button>
     
    </td>
  </tr>
  )
}
