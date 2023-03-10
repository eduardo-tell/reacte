import React from "react";
import { Link } from "react-router-dom";
import Favorites from "../favorites/Favorites";

export default function Header() {
    return (
        <div className="mb-2 p-2 bg-slate-200">
            <div className="container m-auto flex flex-nowrap justify-between">
                <nav className="">
                    <ul>
                        <li>
                            <button className="rounded-lg p-2"> <Link to="/">Home</Link> </button>
                        </li>
                    </ul>
                </nav>

                <Favorites />
            </div>
        </div>
    )
}

