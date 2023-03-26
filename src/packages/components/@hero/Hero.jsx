import React from "react";

import { motion } from "framer-motion";
import { fadeInUp } from "@/packages/animations/fadeIn";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      id="inicio"
      className="after:bg-[url(/img/hero.webp)] after:opacity-20 after:brightness-[.6]  after:-z-10  after:bg-cover after:bg-center after:bg-no-repeat after:content-[''] after:w-full after:h-full  after:top-0 after:left-0  after:absolute  h-screen  w-full center-grid text-white "
    >
      <motion.div {...fadeInUp} className="text-center space-y-3">
        <h1 className="text-4xl lg:text-6xl font-bold">AIMET SOLUTIONS</h1>
        <p className="text-[20px]  lg:text-[26px]">
          Nuestra Especialidad en Servicios Web
        </p>
        <section className="flex flex-col gap-4 items-center lg:flex-row  justify-center">
        <Link
          href="#contacto"
          className="w-[160px] lg:w-[128px] py-3 border-2  rounded-full text-xl"
        >
          Cotizar
        </Link>
        <Link
          href="#servicios"
          className="w-[160px] lg:w-[128px] py-3 border-2  rounded-full text-xl"
        >
          Servicios
        </Link>
        </section>
      </motion.div>
    </div>
  );
}
