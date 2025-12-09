"use client";

import Link from "next/link";
import { HomeIcon, BookOpenIcon, SparklesIcon } from "@heroicons/react/24/solid";

export default function DefaultSidebar() {
  return (
    <div className="h-screen w-full max-w-[18rem] p-4 shadow-lg bg-white border-r rounded-none">
      
      {/* Título */}
      <div className="mb-6">
        <h2 className="text-black text-2xl font-bold tracking-wide">
          U3 Optimización
        </h2>
      </div>

      {/* Lista */}
      <ul className="space-y-1">

        {/* Inicio */}
        <li>
          <Link
            href="/"
            className="flex items-center gap-2 text-black hover:bg-gray-100 p-2 rounded-lg transition"
          >
            <HomeIcon className="h-5 w-5 text-gray-700" />
            Inicio
          </Link>
        </li>

        {/* Gramática */}
        <li>
          <Link
            href="/gramatica"
            className="flex items-center gap-2 text-black hover:bg-gray-100 p-2 rounded-lg transition"
          >
            <BookOpenIcon className="h-5 w-5 text-gray-700" />
            Gramática y Compilador
          </Link>
        </li>

        {/* Subtítulo */}
        <p className="mt-4 mb-2 px-2 text-xs text-gray-500 uppercase tracking-wide">
          Prompts
        </p>

        {/* Prompt 1 */}
        <li>
          <Link
            href="/prompt1"
            className="flex items-center gap-2 text-black hover:bg-gray-100 p-2 rounded-lg transition"
          >
            <SparklesIcon className="h-5 w-5 text-gray-700" />
            Prompt 1
          </Link>
        </li>

        {/* Prompt 2 */}
        <li>
          <Link
            href="/prompt2"
            className="flex items-center gap-2 text-black hover:bg-gray-100 p-2 rounded-lg transition"
          >
            <SparklesIcon className="h-5 w-5 text-gray-700" />
            Prompt 2
          </Link>
        </li>

        {/* Prompt 3 */}
        <li>
          <Link
            href="/prompt3"
            className="flex items-center gap-2 text-black hover:bg-gray-100 p-2 rounded-lg transition"
          >
            <SparklesIcon className="h-5 w-5 text-gray-700" />
            Prompt 3
          </Link>
        </li>

        {/* Prompt 4 */}
        <li>
          <Link
            href="/prompt4"
            className="flex items-center gap-2 text-black hover:bg-gray-100 p-2 rounded-lg transition"
          >
            <SparklesIcon className="h-5 w-5 text-gray-700" />
            Prompt 4
          </Link>
        </li>

        {/* Prompt 5 */}
        <li>
          <Link
            href="/prompt5"
            className="flex items-center gap-2 text-black hover:bg-gray-100 p-2 rounded-lg transition"
          >
            <SparklesIcon className="h-5 w-5 text-gray-700" />
            Prompt 5
          </Link>
        </li>

      </ul>
    </div>
  );
}
