import React from "react";
import { Link } from "react-router-dom";
import Favorites from "../favorites/Favorites";
import Cart from "../cart/Cart";

export default function Header() {
    // function toggleDarkTheme() {
    //     document.documentElement.classList.toggle("dark")
    //     document.querySelectorAll(".dark:").classList.remove()
    // }

    return (
        <div className="p-2 bg-slate-200 dark:bg-slate-900">
            <div className="container m-auto flex flex-nowrap justify-center">
                <nav className="">
                    <ul className="flex">
                        <li>
                            <button className="rounded-lg p-2"> <Link to="/" className="dark:text-white">Início</Link> </button>
                        </li>
                        <li>
                            <button className="rounded-lg p-2"> <Link to="/repositorio" className="dark:text-white">Detalhes</Link> </button>
                        </li>
                    </ul>
                </nav>

                <div className="flex">
                    <Cart />
                    <Favorites />

                    {/* <button className="mx-2" onClick={(() => toggleDarkTheme())}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="dark:text-white w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>
                    </button> */}
                </div>
            </div>
        </div>
    )
}

