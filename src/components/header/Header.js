import React from "react";

import { navLinks } from "../constants";

export default function Header() {
    return (
        <nav className="mb-6">
            <p> Header aqui! </p>

            {navLinks?.map((item, index) => (
                <div key={index}>
                    { item.title }
                </div>
            ))}

            
        </nav>
    )
}