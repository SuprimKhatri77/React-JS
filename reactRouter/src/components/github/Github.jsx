import React, {useEffect,useState} from "react";
import { useLoaderData } from "react-router-dom";


function Github(){
    // const [data,setData] = useState(0)
    // const followers = useEffect(() =>{
    //     const url = 'https://api.github.com/users/SuprimKhatri77'
    //     fetch(url)
    //     .then((response)=>{
    //         const data = response.json()
    //         return data
    //     })
    //     .then((data)=>{
    //         setData(data)
    //     })
    //     .catch((error)=>{
    //         console.log('e', error);
            
    //     })
    // },[])

    const data = useLoaderData()

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4  text-3xl">
            Github followers: {data.followers}
            <img className="rounded-full" src={data.avatar_url ? data.avatar_url : "no photo"} alt="Git picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/SuprimKhatri77')
    const data = await response.json()
    return data
}