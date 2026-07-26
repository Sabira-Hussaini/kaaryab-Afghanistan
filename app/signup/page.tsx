"use client";

import {
useState
} from "react";

import {
useRouter
} from "next/navigation";

import {
useAuth
} from "@/context/AuthContext";


export default function SignupPage(){


const router=useRouter();

const {signup}=useAuth();


const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");



function handleSubmit(
e:React.FormEvent
){

e.preventDefault();


signup(
name,
email,
password
);


router.push("/dashboard");

}



return (

<main className="mx-auto max-w-md px-6 py-20">


<h1 className="mb-8 text-4xl font-bold">
Create Account
</h1>


<form
onSubmit={handleSubmit}
className="space-y-5 rounded-xl border p-8"
>


<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full rounded-lg border p-3"
/>



<input
placeholder="Email"
type="email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full rounded-lg border p-3"
/>



<input
placeholder="Password"
type="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full rounded-lg border p-3"
/>



<button
className="w-full rounded-lg bg-blue-600 py-3 text-white"
>
Sign Up
</button>


</form>


</main>

);

}