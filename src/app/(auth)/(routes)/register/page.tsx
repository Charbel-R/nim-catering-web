// import Link from "next/link";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// export default function RegisterPage() {
//   return (
//     <div className="shadow-input mx-auto mt-10 max-w-md rounded-none border border-[#121212] bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
//       <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
//         Welcome to Nim
//       </h2>

//       <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:bg-neutral-300">
//         Please provide all the necessary information
//       </p>

//       <form className="my-8">
//         <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
//           <div className="flex flex-col">
//             <Label htmlFor="firstname" className="mb-2">
//               First Name
//             </Label>
//             <Input
//               id="firstname"
//               placeholder="John"
//               type="text"
//               name="firstname"
//             />
//           </div>
//           <div className="flex flex-col">
//             <Label htmlFor="lastname" className="mb-2">
//               Last Name
//             </Label>
//             <Input
//               id="lastname"
//               placeholder="John"
//               type="text"
//               name="lastname"
//             />
//           </div>
//         </div>

//         <Label htmlFor="email">Email</Label>
//         <Input
//           id="email"
//           placeholder="john@gmail.com"
//           type="email"
//           name="email"
//           className="mb-4 mt-2"
//         />
//         <Label htmlFor="password">Password</Label>
//         <Input
//           id="password"
//           placeholder="********"
//           type="password"
//           name="password"
//           className="mb-4 mt-2"
//         />

//         <button className="group/btn to relative block h-10 w-full rounded-md bg-neutral-600 bg-gradient-to-br from-black font-medium text-white shadow-[0px_1px_opx_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
//           Sign up &rarr;
//         </button>
//         <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
//           Already have an account?{" "}
//           <Link
//             href="/login"
//             className="text-neutral-700 dark:text-neutral-300"
//           >
//             Login
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }
