import React from "react";

function Card({username,description,btnText}){
  // console.log("props: ",props);

    return(
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <img 
        className="w-full h-48 object-cover" 
        src="https://picsum.photos/400/300"
        alt="Random from Unsplash"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{username}</h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          {description}
        </p>
        <button className="mt-4 cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          {btnText?  btnText : "learn more"}
        </button>
      </div>
    </div>
    )
}

export default Card