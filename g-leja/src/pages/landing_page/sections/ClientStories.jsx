import React from 'react'
import clientStories from '../../../utils/clientStories';
import betty_logo from "../../../assets/images/landing_page/betty_logo.png";
import dorheeys_logo from "../../../assets/images/landing_page/dorheeys_logo.png";
import hj_logo from "../../../assets/images/landing_page/hj_logo.png";
import wellfx_logo from "../../../assets/images/landing_page/wellfx_logo.jpg";

function ClientStories() {
  return (
    
    <div className="mt-40 bg-orange-500 w-full flex flex-col items-center justify-center p-10">
    <h2 className="text-4xl font-bold font-poppins text-center text-white ">
      G-Leja endorsed by trusted brands
    </h2>
    <div className="flex gap-20 mt-5">
      <div className="size-20 bg-white flex items-center justify-center rounded-xl">
        <img src={betty_logo} />
      </div>
      <div className="size-20 bg-white flex items-center justify-center rounded-xl">
        <img src={dorheeys_logo} />
      </div>
      <div className="size-20 bg-white flex items-center justify-center rounded-xl">
        <img src={hj_logo} />
      </div>
      <div className="size-20 bg-white flex items-center justify-center rounded-xl">
        <img src={wellfx_logo} />
      </div>
    </div>
    <h2 className="text-3xl font-bold font-poppins text-center text-white mt-20">
      Featured client stories
    </h2>
    <div className="flex gap-10 overflow-x-scroll w-[90%] mx-auto rounded-xl mt-5 p-5">
        
      {clientStories.map((story) => {
        return (
          <div
            key={story.name}
            className="relative z-10 min-w-80 p-5 pb-20 rounded-xl bg-orange-500 raise"
          >
            <div className="absolute -z-10 bottom-0 rounded-b-xl left-0 w-full h-10 bg-orange-500"></div>
            <div className="text-orange-100">
              <p className="text-[6rem] h-10 font-black -ml-2">"</p>
              <br />
              {story.story}"
            </div>
            <div className="absolute bottom-5 flex gap-2 items-center justify-start mt-2">
              <div className="size-10 rounded-full p-[1px] bg-orange-900">
                <img
                  src={story.avatar}
                  className="size-full object-cover rounded-full"
                />
              </div>
              <div>
                <p className="text-xs font-bold font-poppins text-orange-900">
                  {story.name}
                </p>
                <p className="text-xs font-poppins text-orange-200">
                  {story.title}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default ClientStories