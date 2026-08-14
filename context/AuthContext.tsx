"use client";

import {
  createContext,
  useContext,
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
  loading: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<boolean>;
  signup: (
    name: string,
    email: string,
    password: string
  ) => Promise<boolean>;
  logout: () => void;
};

const AuthContext =
  createContext<AuthContextType | null>(null);

async function hashPassword(
  password: string
) {
  const encoder = new TextEncoder();

  const data = encoder.encode(password);

  const hash = await crypto.subtle.digest(
    "SHA-256",
    data
  );

  return Array.from(new Uint8Array(hash))
    .map((b) =>
      b.toString(16).padStart(2, "0")
    )
    .join("");
}

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] =
    useState<User | null>(() => {
      if (typeof window === "undefined") {
        return null;
      }

      const savedUser =
        localStorage.getItem("currentUser");

      return savedUser
        ? JSON.parse(savedUser)
        : null;
    });

  const loading = false;

  async function signup(
    name: string,
    email: string,
    password: string
  ) {
    const users: StoredUser[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const exists = users.find(
      (u) => u.email === email
    );

    if (exists) {
      return false;
    }

    const hashedPassword =
      await hashPassword(password);

    const newUser: StoredUser = {
      name,
      email,
      password: hashedPassword,
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    const publicUser: User = {
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

  async function login(
    email: string,
    password: string
  ) {
    const users: StoredUser[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const hashedPassword =
      await hashPassword(password);

    const found = users.find(
      (u) =>
        u.email === email &&
        u.password === hashedPassword
    );

    if (!found) {
      return false;
    }

    const publicUser: User = {
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
    function logout() {
    localStorage.removeItem(
      "currentUser"
    );

    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be inside AuthProvider"
    );
  }

  return context;
}