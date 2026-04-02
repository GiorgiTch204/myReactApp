"use client";
import React, {useState} from "react";
import { useRouter } from "next/navigation";

export default function Login(){
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [message, setMessage]=useState("");

    const router=useRouter();

    const handleSubmit=(e: React.FormEvent)=>{
        e.preventDefault();

        if(!email || !password){
            setMessage("Please fill in all fields!");
            return;
        }

        console.log("Logging in:", {email, password});
        setMessage(`User with email ${email} logged in successfully!`);

        setEmail("");
        setPassword("");
        
        router.push("/");
    }

    return(
        <>
            <main style={{padding:"20px"}}>
                <h2>Login</h2>

                <form onSubmit={handleSubmit} style={{
                    display:"flex", 
                    flexDirection:"column", 
                    gap:"10px",
                    maxWidth:"300px"
                }}>

                    <input 
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
                    <button type="submit">Login</button>
                </form>

                {message && <p>{message}</p>}
            </main>
        </>
    )
}