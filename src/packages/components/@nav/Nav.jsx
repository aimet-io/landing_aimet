import React from "react";
import Link from "next/link";
import { useScrollPosition } from "@/packages/hooks/useScrollPosition";

const nav = [
  {
    name: "Inicio",
    id: "inicio",
  },

  {
    name: "Nosotros",

    id: "nosotros",
  },

  {
    name: "Servicios",

    id: "servicios",
  },

  {
    name: "Portafolio",

    id: "portafolio",
  },
];

export default function Nav() {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={`fixed right-0 top-0 left-0 transition-colors duration-500 z-10 ${
        scrollPosition > 0 ? "bg-dark/95" : ""
      }`}
    >
      <nav className="container flex justify-between items-center h-[70px] ">
        <Link href='/' className="text-2xl">AIMET</Link>
        <ul className="flex gap-x-2 items-center ">
          {nav.map((item) => {
            return (
              <li key={item.id}>
                <Link className="p-2 block" href={`#${item.id}`}>
                  {item.name}
                </Link>
              </li>
            );
          })}

          <li>
            <Link href="#contacto" className="px-4 py-2 border-2  rounded-full">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
