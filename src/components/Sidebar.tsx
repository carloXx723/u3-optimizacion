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
    <Card
      className="h-screen w-full max-w-[18rem] p-4 shadow-lg bg-white border-r rounded-none"
      placeholder=""
    >
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

        {/* Prompts */}
        {["1", "2", "3", "4", "5"].map((n) => (
          <Link key={n} href={`/prompt${n}`}>
            <ListItem className="text-black hover:bg-gray-100 cursor-pointer transition-all duration-200 rounded-lg">
              <ListItemPrefix>
                <SparklesIcon className="h-5 w-5 text-gray-700 m-1" />
              </ListItemPrefix>
              {`Prompt ${n}`}
            </ListItem>
          </Link>
        ))}
      </List>
    </Card>
  );
}
