"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header(){
    const [darkMode, setDarkMode]=useState(false);
    const [isLoggedIn, setIsLoggedIn]=useState(false);

    useEffect(() => {
        const loggedIn=localStorage.getItem("isLoggedIn");
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsLoggedIn(loggedIn === "true");
    }, []);

    const handleLogout=()=>{
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
        setIsLoggedIn(false);
    }

    useEffect(() => {
        const root=document.documentElement;

        if(darkMode){
            root.classList.add("dark");
        }else{
            root.classList.remove("dark");
        }
    }, [darkMode]);

    return(
        <>
            <header className={styles.headerContainer}>
                <h1>My Website</h1>

                <div style={{ display:"flex",gap:"10px", alignItems:"center"}}>
                    <button  onClick={() => setDarkMode(!darkMode)} style={{cursor:"pointer"}}>
                        {darkMode ? "☀️" : "🌙"}
                    </button>

                    {isLoggedIn ? (
                        <button onClick={handleLogout}>Logout</button>
                    ) : (
                        <>
                            <Link href="/register">Register</Link>
                            <Link href="/login">Login</Link>
                        </>
                    )}
                </div>
            </header>
        </>
    );
};