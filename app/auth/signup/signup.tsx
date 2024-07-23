"use client";

import Button from "@/components/my-button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { signUpWithEmailAndPassword } from "../actions";

export default function SignUp() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="flex min-h-screen flex-col gap-6 p-5 md:mx-auto md:max-w-2xl md:items-center">
      <div className="flex w-full flex-col gap-3">
        <p className="text-xl">Welcome!</p>

        <p className="text-muted">Please create your account</p>
      </div>
      <form
        ref={formRef}
        className="flex w-full flex-col gap-6"
        action={async (form) => {
            await signUpWithEmailAndPassword(form);
          /* @ts-ignore */
          console.log(form);
          formRef?.current?.reset();
        }}
      >
        <div className="flex w-full flex-col gap-2 md:flex-row">
          <div className="flex w-full flex-col gap-2">
            <div className="flex items-center justify-between">
              <label htmlFor="username">Username</label>
            </div>

            <Input
              id="username"
              name="username"
              placeholder="Enter your username"
              className="text-xs"
              required
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              name="email"
              placeholder="Enter your email"
              className="text-xs"
              required
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 md:flex-row">
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="password">Password</label>
            <Input
              name="password"
              id="password"
              placeholder="Enter your password"
              className="text-xs"
              required
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="passwordconfirm">Password Confirm</label>
            <Input
              name="passwordconfirm"
              id="passwordconfirm"
              placeholder="Confirm your password"
              className="text-xs"
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-end">
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
            <a href="/auth/signin" className="text-xs">
              Already have an account?
            </a>
          </div>
        </div>
        <div className="flex justify-end">
          <Button text="Sign Up" classes="w-full md:w-fit" type="submit" />
        </div>
      </form>
    </div>
  );
}
