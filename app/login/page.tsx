"use client";
import React, {useState} from "react";
import { useRouter } from "next/navigation";
import "./Login.module.css";
import Input from "@/components/Input/Input";

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

    const inputs=[
        {
            type:"email", 
            placeholder:"email", 
            value:email, 
            set:setEmail
        },
        {
            type:"password",
            placeholder:"Password",
            value:password,
            set:setPassword 
        }
    ]

    return(
        <>
            <main style={{padding:"20px"}} className="loginContainer">
                <h2>Login</h2>

                <form onSubmit={handleSubmit} className="loginForm" style={{
                    display:"flex", 
                    flexDirection:"column", 
                    gap:"10px",
                    maxWidth:"300px"
                }}>

                    {inputs.map((input, i) =>(
                        <Input 
                            key={i}
                            type={input.type}
                            placeholder={input.placeholder}
                            value={input.value}
                            onChange={(e) => input.set(e.target.value)}
                        />
                    ))}
                    
                    <button type="submit">Login</button>
                </form>

                {message && <p className="message">{message}</p>}
            </main>
        </>
    )
}