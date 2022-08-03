import React from 'react';

import '../App.css';

function AppCard({ image, title, description, link }) {

    const onClick = (e) => {
        e.preventDefault();
        console.log("clicked");
        window.location.href=link;
      };

    return (
    <div className="flex borders">

        <img src={image} className="w-[64px] h-[64px] rounded-xl mx-3 my-3" alt={title} />
        <div className='flex align-middle flex-col place-items-start my-3'>
            <h3 className='font-bold'>{title}</h3>
            <p className='text-sm text-gray-200'>in-app purchases</p>
            
        </div>
        <div className="flex-1"></div>
        <div className='my-5'>
            <a href={link} rel="noopener noreferrer" target="_blank" onClick={onClick} className='bg-gray-300 curs text-blue-500 font-bold p-1 rounded-3xl px-4 mx-5 text-sm'>GET</a>
        </div>
        
    </div>
  )
}

export default AppCard