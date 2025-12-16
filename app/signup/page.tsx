"use client";  
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import axios from "axios";




export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });

    const onSignup = async () => {

    }



    return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="w-full max-w-md rounded-2xl bg-gray-900/70 p-8 shadow-2xl backdrop-blur">
        <h1 className="mb-2 text-center text-2xl font-semibold">Create an account</h1>
        <p className="mb-6 text-center text-sm text-gray-300">
          Join RecipeChain to save and share your favorite recipes.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSignup();
          }}
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="username"
              className="mb-1 block text-sm font-medium text-gray-200"
            >
              Username
            </label>
            <input
              className="w-full rounded-lg border border-gray-600 bg-gray-950/70 p-2.5 text-sm text-white placeholder-gray-500 shadow-sm focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400"
              id="username"
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Choose a username"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-200"
            >
              Email
            </label>
            <input
              className="w-full rounded-lg border border-gray-600 bg-gray-950/70 p-2.5 text-sm text-white placeholder-gray-500 shadow-sm focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400"
              id="email"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-gray-200"
            >
              Password
            </label>
            <input
              className="w-full rounded-lg border border-gray-600 bg-gray-950/70 p-2.5 text-sm text-white placeholder-gray-500 shadow-sm focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400"
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Create a strong password"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-orange-500 py-2.5 text-sm font-semibold text-black shadow-md transition hover:bg-orange-400 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Sign up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-300">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-orange-400 hover:text-orange-300 underline-offset-2 hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}