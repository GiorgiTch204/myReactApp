"use client";
import React,{useState} from "react";
import {useRouter} from "next/navigation";
import "./Register.module.css";
import Input from "@/components/Input/Input";

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

    console.log("Registering:",{username,email,password});
    setMessage(`User ${username} Registered Successfully!`);

    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    router.push("/login");
  };

  const inputs=[
    {
      type:"text", 
      placeholder:"Username", 
      value:username, 
      set:setUsername
    },
    {
      type:"email", 
      placeholder:"Email", 
      value:email, 
      set:setEmail
    },
    {
      type:"password", 
      placeholder:"Enter Password", 
      value:password, 
      set:setPassword
    },
    {
      type:"password", 
      placeholder:"Confirm Password", 
      value:confirmPassword, 
      set:setConfirmPassword
    },
  ]

  return(
    <main className="registerContainer">
      <h2>Register</h2>

      <form onSubmit={handleSubmit} className="registerForm">

        {inputs.map((input, i) =>(
          <Input 
            key={i}
            type={input.type}
            placeholder={input.placeholder}
            value={input.value}
            onChange={(e) => input.set(e.target.value)}
          />
        ))}

        <button type="submit">Register</button>
      </form>

      {message&&<p className="message success">{message}</p>}
    </main>
  );
}