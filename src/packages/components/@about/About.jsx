import React from "react";

import { motion } from "framer-motion";
import { fadeInUp } from "@/packages/animations/fadeIn";

export default function About() {
  return (
    <section
      id="nosotros"
      className="container grid gap-4 lg:grid-cols-2 items-center pt-[70px]"
    >
      <img
        className="max-lg:order-2"
        src="https://lh3.googleusercontent.com/d/1EjOxJkasLf99MEi1qJw4L2v2nWTgKRiQ=rw"
        alt="About"
      />

      <div className="space-y-4  ">
        <motion.h4 {...fadeInUp} className="text-2xl font-semibold">
          Aimet Solutions
        </motion.h4>
        <motion.h2 {...fadeInUp} className="text-4xl font-bold">
          Sobre Nosotros
        </motion.h2>
        <motion.p {...fadeInUp} className="lg:leading-[32px] text-justify ">
          Somos un equipo de expertos en desarrollo web comprometidos en crear
          soluciones personalizadas y atractivas para nuestros clientes. Nos
          enfocamos en la experiencia del usuario y utilizamos tecnologías de
          última generación para garantizar un sitio web rápido, seguro y
          compatible con todos los dispositivos. <br />
          <br /> Trabajamos estrechamente con nuestros clientes para entender
          sus necesidades y objetivos y ofrecer soluciones que se adapten a su
          presupuesto y plazos. Ofrecemos servicios web de alta calidad y
          atención al cliente excepcional. Contáctenos para saber cómo podemos
          ayudarlo a llevar su negocio al siguiente nivel en línea.
        </motion.p>
      </div>
    </section>
  );
}
