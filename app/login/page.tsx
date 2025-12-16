"use client";  
import Link from "next/link";
import React, {use, useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";




export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
      try {
        setLoading(true);
        const response = await axios.post("/api/users/login", user);
        console.log("Login successful", response.data);
        toast.success("Login successful");
        router.push("/profile");

        
      } catch (error: any) {
        console.log("Login failed", error.message);
        toast.error(error.message);
      } finally {
        setLoading(false); 
      }

    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);



 return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="w-full max-w-md rounded-2xl bg-gray-900/70 p-8 shadow-2xl backdrop-blur">
        <h1 className="mb-2 text-center text-2xl font-semibold">Welcome back</h1>
        <p className="mb-6 text-center text-sm text-gray-300">
          Log in to continue to RecipeChain.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}
          className="space-y-4"
        >
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
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-orange-500 py-2.5 text-sm font-semibold text-black shadow-md transition hover:bg-orange-400 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Log in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-300">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-orange-400 underline-offset-2 hover:text-orange-300 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}