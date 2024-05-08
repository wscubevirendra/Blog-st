import React from 'react';

const Loading = () => (
  <div className='flex justify-center my-20 text-2xl items-center'>
    <span>Loading...</span>
    <span
      className='inline-block w-6 h-6 border-4 border-red-500 rounded-full animate-spin'
      style={{
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
      }}
    ></span>
  </div>
);

export default Loading;
