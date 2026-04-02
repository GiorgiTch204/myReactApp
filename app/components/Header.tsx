import React from "react";
import "./Header.css";
import Link from "next/link";

export default function Header(){
    return(
        <>
            <header className="headerContainer">
                <h1>My Website</h1>

                <div>
                    <Link href="/register">Register</Link>
                    <Link href="/login">Login</Link>
                </div>
            </header>
        </>
    );
};