"use client";

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header(){
    const [darkMode, setDarkMode]=useState(false);

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

                <div style={{
                    display:"flex",
                    gap:"10px",
                    alignItems:"center"
                }}>

                    <button 
                        onClick={() => setDarkMode(!darkMode)}
                        style={{cursor:"pointer"}}
                    >
                        {darkMode ? "☀️" : "🌙"}
                    </button>

                    <Link href="/register">Register</Link>
                    <Link href="/login">Login</Link>
                </div>
            </header>
        </>
    );
};