"use client";

import Button from "@/components/my-button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { signInWithEmailAndPassword } from "../actions";

export default function SignIn() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <div className="flex min-h-screen flex-col gap-6 p-5 md:max-w-2xl md:mx-auto md:items-center">
      <div className="flex flex-col gap-3 w-full">
        <p className="text-xl">Welcome Back</p>
        <p className="text-muted">Please enter your credentials</p>
      </div>
      <form
        ref={formRef}
        className="flex flex-col gap-6 w-full"
        action={async (form) => {
            await signInWithEmailAndPassword(form);
          /* @ts-ignore */
          console.log(form);
          formRef?.current?.reset();
        }}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            name="email"
            placeholder="Enter your email"
            className="text-xs"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <Input
            name="password"
            id="password"
            placeholder="Enter your password"
            className="text-xs"
          />
        </div>
        <div className="flex items-center justify-between">
          {/* <div className="flex flex-row items-center gap-2">
            <Checkbox id="remember" className="rounded-md" />
            <label
              htmlFor="remember"
              className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember Me
            </label>
          </div> */}
          <div>
            <a href="/auth/signup" className="text-xs">
              Don't have an account yet?
            </a>
          </div>
          <div>
            <a href="#" className="text-xs">
              Forgot Password?
            </a>
          </div>
        </div>
        <div>
          <Button text="Sign In" classes="w-full" type="submit" />
        </div>
      </form>
    </div>
  );
}
