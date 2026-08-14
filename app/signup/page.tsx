"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";

const text = {
  en: {
    title: "Create Account",
    name: "Name",
    email: "Email",
    password: "Password",
    button: "Sign Up",
    login: "Already have an account?",
    loginBtn: "Login",
    error: "An account with this email already exists.",
  },

  fa: {
    title: "ایجاد حساب",
    name: "نام",
    email: "ایمیل",
    password: "رمز عبور",
    button: "ثبت نام",
    login: "قبلاً حساب دارید؟",
    loginBtn: "ورود",
    error: "این ایمیل قبلاً ثبت شده است.",
  },
};

export default function SignupPage() {
  const router = useRouter();

  const { signup } = useAuth();
  const { language } = useLanguage();

  const t = text[language];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  setError("");

  const success = await signup(
    name.trim(),
    email.trim(),
    password.trim()
  );

  if (success) {
    router.push("/dashboard");
  } else {
    setError(t.error);
  }
}

  return (
    <main
      dir={language === "fa" ? "rtl" : "ltr"}
      className="flex min-h-screen items-center justify-center px-6"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-700 dark:bg-slate-800"
      >
        <h1 className="text-center text-3xl font-bold dark:text-white">
          {t.title}
        </h1>

        {error && (
          <p className="rounded-lg bg-red-100 p-3 text-center text-red-600 dark:bg-red-900/30 dark:text-red-300">
            {error}
          </p>
        )}

        <input
          type="text"
          placeholder={t.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-lg border p-3 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        <input
          type="email"
          placeholder={t.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-lg border p-3 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        <input
          type="password"
          placeholder={t.password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded-lg border p-3 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          {t.button}
        </button>

        <p className="text-center text-slate-600 dark:text-slate-300">
          {t.login}
          <a
            href="/login"
            className="ml-2 font-semibold text-blue-600 hover:underline"
          >
            {t.loginBtn}
          </a>
        </p>
      </form>
    </main>
  );
}