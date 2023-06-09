import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mx-4 my-8">
      <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-2xl tracking-widest"
          >
            AIMET
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 &nbsp;
          <Link href="/" target='_blank' className="hover:underline">
            Aimet
          </Link>
          . Todos Los Derechos Reservados.
        </span>
      </div>
    </footer>
  );
}
