"use client";
import React,{useState} from "react";
import {useRouter} from "next/navigation";
import styles from "./Register.module.css";
import Input from "@/components/Input/Input";
import { saveUser } from "@/lib/auth";
import Link from "next/link";

export default function Register(){
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const [message,setMessage]=useState("");

  const router=useRouter();

  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();

    if(!username||!email||!password||!confirmPassword){
      setMessage("Please fill in all fields!");
      return;
    }

    if(password!==confirmPassword){
      setMessage("Passwords do not match!");
      return;
    }

    const newUser={
      username,
      email,
      password
    };

    saveUser(newUser);
    
    setMessage(`User ${username} Registered Successfully!`);

    setTimeout(() => {
      router.push("/login");
    }, 1000);

    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const inputs=[
    {
      type:"text", 
      placeholder:"Username", 
      value:username, 
      onChange:setUsername
    },
    {
      type:"email", 
      placeholder:"Email", 
      value:email, 
      onChange:setEmail
    },
    {
      type:"password", 
      placeholder:"Enter Password", 
      value:password, 
      onChange:setPassword
    },
    {
      type:"password", 
      placeholder:"Confirm Password", 
      value:confirmPassword, 
      onChange:setConfirmPassword
    },
  ]

  return(
    <main className={styles.registerContainer}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit} className={styles.registerForm}>

        {inputs.map((input) =>(
          <Input 
            key={input.placeholder}
            type={input.type}
            placeholder={input.placeholder}
            value={input.value}
            onChange={(e) => input.onChange(e.target.value)}
          />
        ))}

        <p>
          Already have an account?{" "}
          <Link href="/login">Login</Link>
        </p>

        <button type="submit">Register</button>
      </form>

      {message&&<p className={styles.message}>{message}</p>}
    </main>
  );
}