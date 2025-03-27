import React from "react"
import avatar from "../assets/user.png"

export default function Header({userName}) {

    return (
        <header>
            <img src={avatar} />
            <p>{userName}</p>
        </header>
    )
}