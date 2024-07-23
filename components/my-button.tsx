"use client";

import { twMerge } from "tailwind-merge";

export default function Button({
  text = "Update",
  classes = "",
  type = "button",
}: any) {
  return (
    <button
      className={twMerge(
        "inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-white px-4 py-2 text-[13px] font-medium shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 dark:text-zinc-800",
        classes,
      )}
      type={type}
    >
      {text}
    </button>
  );
}
