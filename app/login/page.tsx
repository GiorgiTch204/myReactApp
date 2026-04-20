"use client";
import React, {useState} from "react";
import { useRouter } from "next/navigation";
import styles from "./Login.module.css";
import Input from "@/components/Input/Input";
import Link from "next/link";

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

        const storedUser=localStorage.getItem("user");

        if(!storedUser){
            setMessage("No user found! Please register first.");
            return;
        }

        const parsedUser=JSON.parse(storedUser);

        if(email===parsedUser.email && password===parsedUser.password){
            setMessage("Login successful!");

            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("currentUser", JSON.stringify(parsedUser));
            
            setEmail("");
            setPassword("");
        
            router.push("/");
        }else{
            setMessage("Invalid email or password!");
        } 
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
            <main style={{padding:"20px"}} className={styles.loginContainer}>
                <h2>Login</h2>

                <form onSubmit={handleSubmit} className={styles.loginForm} style={{
                    display:"flex", 
                    flexDirection:"column", 
                    gap:"10px",
                    maxWidth:"300px"
                }}>

                    {inputs.map((input) =>(
                        <Input 
                            key={input.placeholder}
                            type={input.type}
                            placeholder={input.placeholder}
                            value={input.value}
                            onChange={(e) => input.set(e.target.value)}
                        />
                    ))}
                    
                    <button type="submit">Login</button>

                    <p>
                        Don&apos;t have an account? 
                        <Link href="/register" className={styles.regBtn}>Register</Link>
                    </p>
                </form>

                {message && <p className="message">{message}</p>}
            </main>
        </>
    )
}