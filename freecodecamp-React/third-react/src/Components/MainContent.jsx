import React from "react";

function MainContent() {
  return (
    <main className="mt-[50px]  mx-5 md:min-w-3/4 md:mx-auto flex flex-col gap-4">
      <h2 className="text-3xl font-bold text-white">Fun facts about React</h2>
      <ul className="flex relative flex-col gap-3 ml-10 text-gray-300 text-xl">
        <li className="relative flex items-center">
          <p className="before:content-[''] before:absolute before:h-[8px] 
          disc-color before:w-[8px] before:bottom-[10px] before:-left-5 before:rounded-full">
            was released in 2013
          </p>
        </li>
        <li className="relative">
          <p className="before:content-[''] before:absolute before:h-[8px] disc-color before:w-[8px] before:bottom-[10px] before:-left-5 before:rounded-full">
            was developed by Suprim khatri
          </p>
        </li>
        <li className="relative">
          <p className="before:content-[''] before:absolute before:h-[8px] disc-color before:w-[8px] before:bottom-[10px] before:-left-5 before:rounded-full">
            Has well over 200k stars on Github
          </p>
        </li>
        <li className="relative">
          <p className="before:content-[''] before:absolute before:h-[10px] disc-color before:w-[10px] before:bottom-[10px] before:-left-5 before:rounded-full">
            Is maintianed by Meta
          </p>
        </li>
        <li className="relative">
          <p className="before:content-[''] before:absolute before:h-[8px] disc-color before:w-[8px] before:bottom-[10px] before:-left-5 before:rounded-full">
            Powers thousand of enterprise apps, including mobile apps
          </p>
        </li>
      </ul>
    </main>
  );
}

export default MainContent;
