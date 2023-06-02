import React from "react";
import Link from "next/link";
import { useScrollPosition } from "@/packages/hooks/useScrollPosition";

import { HiMenuAlt2 } from "react-icons/hi";

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

    name: "Equipo",

    id: "equipo",

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

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header
      className={`fixed right-0 top-0 left-0 transition-colors duration-500 z-10 ${
        scrollPosition > 0 && "bg-dark/95"
      }`}
    >
      <nav className="container flex justify-between items-center h-[50px] lg:h-[70px] ">
        <Link href="/" className="text-2xl">
          AIMET
        </Link>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          <HiMenuAlt2 fontSize={25} />
        </button>
        <div
          className={`max-lg:absolute lg:block ${
            isOpen ? "block" : "hidden"
          } lg:w-max left-0 top-full w-full transition-colors duration-500  ${
            scrollPosition > 0 && "max-lg:bg-dark/95"
          }`}
        >
          <ul className="container  lg:flex gap-x-2 items-center">
            {nav.map(({ id, name }) => (
              <li key={id}>
                <Link
                  className="p-[8px_8px_8px_0] lg:p-2 block"
                  href={`#${id}`}
                >
                  {name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="#contacto"
                className="p-[8px_8px_8px_0] block lg:px-4 lg:py-2 lg:border-2  lg:rounded-full"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
