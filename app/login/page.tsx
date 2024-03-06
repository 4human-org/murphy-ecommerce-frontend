"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { SECRET_ROUTE } from "lib/routes";
import { signIn, useUser } from "lib/auth";
import LoginSeparator from "../../components/LoginPage/LoginSeparator";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const user = useUser();

  const continueTo = searchParams?.get("continueTo") ?? SECRET_ROUTE;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    const rememberMe = form.rememberMe.checked;

    try {
      await signIn(email, password, rememberMe);
      router.replace(continueTo);
    } catch (error) {
      window.alert(error);
    }
  }

  if (user) {
    router.replace(continueTo);
    return null;
  }

  return (
    <main className="flex">
      <section className="flex flex-row px-16 py-12">
        <div className="mx-5 mt-5 flex flex-col">
          <p className="mb-10 text-xl tracking-wide">Sign In</p>
          <form onSubmit={handleSubmit}>
            <div className="relative mt-6">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                autoComplete="email"
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute left-0 top-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Email Address
              </label>
            </div>
            <div className="relative mt-6">
              <input
                type="password"
                name="password"
                id="password"
                required
                autoComplete="current-password"
                placeholder="Password"
                className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
              />
              <label
                htmlFor="password"
                className="pointer-events-none absolute left-0 top-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Password
              </label>
            </div>
            <div className="my-12 text-sm font-semibold text-gray-700 underline hover:text-black">
              <a href="/#">Forgot password?</a>
            </div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="remember_me"
                className="block text-sm text-gray-900"
              >
                Remember me
              </label>
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>
            <div className="my-12 flex justify-center">
              <button
                type="submit"
                className="w-11/12 rounded-full bg-blue-800 p-1.5 text-white hover:bg-blue-900"
              >
                Sign in
              </button>
            </div>
            <div className="flex text-center text-sm text-gray-500">
              <p>Don't have an account yet?</p>
              <a
                href="/signup"
                className="ml-1 font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
              >
                Create Account
              </a>
              .
            </div>
          </form>
        </div>
        <LoginSeparator />
      </section>
    </main>
  );
}