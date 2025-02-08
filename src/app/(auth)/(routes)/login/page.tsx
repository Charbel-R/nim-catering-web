import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  return (
    <div className="mx-auto mt-10 max-w-md rounded-none border border-[#121212] bg-white p-4 shadow-input dark:bg-black md:rounded-2xl md:p-8">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome to Nim
      </h2>

      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:bg-neutral-300">
        Please provide all the necessary information
      </p>

      <form className="my-8">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="john@gmail.com "
          type="email"
          name="email"
          className="mb-2 mt-2"
        />
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="********"
          type="password"
          name="password"
          className="mb-6 mt-2"
        />

        <button className="group/btn to relative block h-10 w-full rounded-md bg-neutral-600 bg-gradient-to-br from-black font-medium text-white shadow-[0px_1px_opx_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
          Login &rarr;
        </button>
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
          Dont have an account?{" "}
          <Link
            href="/register"
            className="text-neutral-700 dark:text-neutral-300"
          >
            Register
          </Link>
        </p>
        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </div>
  );
}
