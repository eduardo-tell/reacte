import React from "react";
import Favorites from "../favorites/Favorites";

export default function Header() {
    return (
        <nav className="mb-6 flex flex-nowrap justify-between">
            <p> Header aqui! </p>

            <Favorites />
        </nav>
    )
}

