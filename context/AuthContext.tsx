"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


type User = {
  name: string;
  email: string;
};


type StoredUser = User & {
  password: string;
};


type AuthContextType = {
  user: User | null;

  login: (
    email: string,
    password: string
  ) => boolean;

  signup: (
    name: string,
    email: string,
    password: string
  ) => boolean;

  logout: () => void;
};



const AuthContext =
createContext<AuthContextType | null>(null);



export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {


  const [user, setUser] =
  useState<User | null>(null);



  useEffect(() => {

    const savedUser =
    localStorage.getItem("currentUser");


    if(savedUser){

      setUser(
        JSON.parse(savedUser)
      );

    }

  }, []);





  function signup(
    name: string,
    email: string,
    password: string
  ){


    const users: StoredUser[] =
    JSON.parse(
      localStorage.getItem("users") || "[]"
    );



    const exists =
    users.find(
      (u)=>u.email===email
    );



    if(exists){

      return false;

    }



    const newUser = {
      name,
      email,
      password,
    };



    users.push(newUser);



    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );



    const publicUser = {
      name,
      email,
    };



    localStorage.setItem(
      "currentUser",
      JSON.stringify(publicUser)
    );



    setUser(publicUser);



    return true;

  }







  function login(
    email:string,
    password:string
  ){


    const users: StoredUser[] =
    JSON.parse(
      localStorage.getItem("users") || "[]"
    );



    const found =
    users.find(
      (u)=>
      u.email===email &&
      u.password===password
    );



    if(!found){

      return false;

    }




    const publicUser = {
      name: found.name,
      email: found.email,
    };



    localStorage.setItem(
      "currentUser",
      JSON.stringify(publicUser)
    );



    setUser(publicUser);



    return true;

  }








  function logout(){

    localStorage.removeItem(
      "currentUser"
    );


    setUser(null);

  }






  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}







export function useAuth(){

  const context =
  useContext(AuthContext);



  if(!context){

    throw new Error(
      "useAuth must be inside AuthProvider"
    );

  }


  return context;

}