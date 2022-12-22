import React from "react"
export function Logo({ Logo }) {
    return (
        <div className="flex items-center my-2">
            <img src={Logo} alt="logo" />
            <p className="text-2xl">Untitled UI</p>
        </div>
    )
}
