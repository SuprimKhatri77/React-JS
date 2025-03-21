import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userId} = useParams()
    return(
        <h1 className="bg-gray-700 text-center text-3xl py-3 px-2 text-white">user: {userId} </h1>
    )
}

export default User