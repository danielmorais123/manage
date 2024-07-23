"use server";

import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
export async function signUpWithEmailAndPassword(e: FormData) {
  const email = String(e.get("email"));
  const password = String(e.get("password"));
  const passwordConfirm = String(e.get("passwordconfirm"));
  const username = String(e.get("username"));

  if (password !== passwordConfirm) {
    return Response.json({ error: "Passwords don't match" });
  }

  const supabase = createClient();
  const signUp = supabase.auth.signUp({
    email,
    password,
  });
  const registerUserData = supabase.from("user").insert({
    email: email,
    username: username,
  });
  const res = await Promise.all([signUp, registerUserData]);

  console.log(res);

  // if (res) {
  //   return Response.json({ error: result.error.message });
  // }
  // redirect("/");
}

export async function signInWithEmailAndPassword(e: FormData) {
  "use server";
  console.log(e);
  const email = String(e.get("email"));
  const password = String(e.get("password"));

  const supabase = createClient();

  const result = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log(result);
  if (result.error) {
    return Response.json({ error: result.error.message });
  }
  redirect("/");
}

export async function signOut() {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect("/auth/signin");
}
