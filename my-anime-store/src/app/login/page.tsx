"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-lg bg-white rounded-2xl relative">
        <CardContent>
          <button className="absolute top-4 left-4 text-gray-600 hover:text-gray-800">
            <FaArrowLeft size={24} />
          </button>
          <Link
            href="/"
            className="absolute Sprite_Graffiti   top-4 right-4 text-primary  text-lg hover:underline"
          >
            A&apos;space
          </Link>
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Welcome Back
          </h2>
          <form className="space-y-4">
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg"
            />
            <Button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900">
              Sign In
            </Button>
          </form>
          <div className="text-center my-4 text-gray-600">OR</div>
          <Button className="w-full flex items-center text-white justify-center gap-2 border py-3 rounded-lg hover:bg-gray-200">
            <FcGoogle size={20} /> Sign in with Google
          </Button>
          <Button className="w-full flex items-center text-white justify-center gap-2 border py-3 rounded-lg mt-2 hover:bg-gray-200">
            <FaApple size={20} /> Sign in with Apple
          </Button>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
