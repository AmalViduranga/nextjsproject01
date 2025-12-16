"use client";  
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";




export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup successful", response.data);
            router.push("/login");
            
        } catch (error: any) {
            console.log("Signup failed", error.message);

            toast.error(error.message);
        }finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);



    return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="w-full max-w-md rounded-2xl bg-gray-900/70 p-8 shadow-2xl backdrop-blur">
        <h1 className="mb-2 text-center text-2xl font-semibold">{loading ? "Creating Account" : "Create an Account" }</h1>
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
            {buttonDisabled ? "Fill all fields" : "Sign up"
            }
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

