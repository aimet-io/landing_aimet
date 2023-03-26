import React from "react";

import { motion } from "framer-motion";

import { AiOutlineCheck } from "react-icons/ai";

export default function Service({ price, title, motionProps }) {
  return (
    <motion.div
      {...motionProps}
      className="lg:h-48 flex justify-between max-lg:flex-col  gap-y-4 items-center border-[2px] rounded-xl p-4"
    >
      <div className="space-y-2">
        <h4 className=" lg:text-2xl">{title ?? "Landing Page"}</h4>
        <p className="text-xl lg:text-3xl font-bold">S/. {price ?? "250.00"}</p>
      </div>

      <div className="text-[16px] italic">
        <p className="flex items-center gap-2">
          <AiOutlineCheck />
          Dominio + SSL 1 Año Gratis.
        </p>
        <p className="flex items-center gap-2">
          <AiOutlineCheck />
          Diseño moderno y adaptativo.
        </p>
        <p className="flex items-center gap-2">
          <AiOutlineCheck />
          Adaptativo a cualquier dispositivo.
        </p>
        <p className="flex items-center gap-2">
          <AiOutlineCheck />
          Contacto y Redes Sociales.
        </p>
        <p className="flex items-center gap-2">
          <AiOutlineCheck />
          Web Rapida y Optimizada.
        </p>
      </div>
    </motion.div>
  );
}
