"use client";

import Link from "next/link";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  HomeIcon,
  BookOpenIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

export default function DefaultSidebar() {
  return (
    <Card className="h-screen w-full max-w-[18rem] p-4 shadow-lg bg-white border-r rounded-none">
      <div className="mb-6">
        <Typography className="text-black text-2xl font-bold tracking-wide">
          U3 Optimización
        </Typography>
      </div>

      <List className="space-y-1">
        {/* Inicio */}
        <Link href="/">
          <ListItem className="text-black hover:bg-gray-100 cursor-pointer transition-all duration-200 rounded-lg">
            <ListItemPrefix>
              <HomeIcon className="h-5 w-5 text-gray-700 m-1" />
            </ListItemPrefix>
            Inicio
          </ListItem>
        </Link>

        {/* Gramática */}
        <Link href="/gramatica">
          <ListItem className="text-black hover:bg-gray-100 cursor-pointer transition-all duration-200 rounded-lg">
            <ListItemPrefix>
              <BookOpenIcon className="h-5 w-5 text-gray-700 m-1" />
            </ListItemPrefix>
            Gramática y Compilador
          </ListItem>
        </Link>

        <Typography className="mt-4 mb-2 px-4 text-xs text-gray-500 uppercase tracking-wide">
          Prompts
        </Typography>

        {/* Prompt 1 */}
        <Link href="/prompt1">
          <ListItem className="text-black hover:bg-gray-100 cursor-pointer transition-all duration-200 rounded-lg">
            <ListItemPrefix>
              <SparklesIcon className="h-5 w-5 text-gray-700 m-1" />
            </ListItemPrefix>
            Prompt 1
          </ListItem>
        </Link>

        {/* Prompt 2 */}
        <Link href="/prompt2">
          <ListItem className="text-black hover:bg-gray-100 cursor-pointer transition-all duration-200 rounded-lg">
            <ListItemPrefix>
              <SparklesIcon className="h-5 w-5 text-gray-700 m-1" />
            </ListItemPrefix>
            Prompt 2
          </ListItem>
        </Link>

        {/* Prompt 3 */}
        <Link href="/prompt3">
          <ListItem className="text-black hover:bg-gray-100 cursor-pointer transition-all duration-200 rounded-lg">
            <ListItemPrefix>
              <SparklesIcon className="h-5 w-5 text-gray-700 m-1" />
            </ListItemPrefix>
            Prompt 3
          </ListItem>
        </Link>

        {/* Prompt 4 */}
        <Link href="/prompt4">
          <ListItem className="text-black hover:bg-gray-100 cursor-pointer transition-all duration-200 rounded-lg">
            <ListItemPrefix>
              <SparklesIcon className="h-5 w-5 text-gray-700 m-1" />
            </ListItemPrefix>
            Prompt 4
          </ListItem>
        </Link>

        {/* Prompt 5 */}
        <Link href="/prompt5">
          <ListItem className="text-black hover:bg-gray-100 cursor-pointer transition-all duration-200 rounded-lg">
            <ListItemPrefix>
              <SparklesIcon className="h-5 w-5 text-gray-700 m-1" />
            </ListItemPrefix>
            Prompt 5
          </ListItem>
        </Link>
      </List>
    </Card>
  );
}
