import React,{useContext,useState} from "react";
import UserContext from "../context/UserContext";

function Profile(){
    const {user} = useContext(UserContext)

    if(!user){
        return (
            <div>Please login</div>
        )
    } else{
        return (
            <>
            <div>Welcome! {user.userName} </div>
            <div>Your password is,  {user.password} </div>
            </>
        )
    }
}
export default Profile