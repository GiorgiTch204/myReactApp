"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register(){
    const [username, setUsername]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [confirmPassword, setConfirmPassword]=useState("");
    const [message, setMessage]=useState("");

    const router=useRouter();

    const handleSubmit=(e: React.FormEvent) =>{
        e.preventDefault();

        if(!username || !email || !password){
            setMessage("Please fill in all fields!");
            return;
        }

        console.log("Registering:", {username, email, password});
        setMessage(`User ${username} Registered Successfully!`);

        setUsername("");
        setEmail("");
        setPassword("");

        router.push("/login");
    };

    return(
        <>
            <main style={{ padding:"20px" }}>
                <h2>Register</h2>

                <form onSubmit={handleSubmit} style={{
                    display:"flex", 
                    flexDirection:"column", 
                    gap:"10px",
                    maxWidth:"300px"
                }}>
                    
                    <input 
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input 
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />

                    <input 
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                    <input 
                        type="password" 
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <button type="submit">Register</button>
                </form>
            
                {message && <p style={{marginTop:"10px", color:"green"}}>{message}</p>}
            </main>
        </>
    );
};