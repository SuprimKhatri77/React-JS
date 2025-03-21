import React from "react";
import {Outlet,Link} from "react-router-dom"


function About(){
    return(
        <>
        <h1 className="h-full flex justify-center items-center text-center text-3xl">This is about page.</h1>
        <Link
        to='nested'
        className=" flex items-center justify-center text-center my-3 text-xl"
        >
            Nested route page
        </Link>
        </>

    )
}

export default About