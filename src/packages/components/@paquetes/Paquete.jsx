import React from "react";

import { motion } from "framer-motion";

import { AiOutlineCheck } from "react-icons/ai";

export default function Paquete({ price, title, items = [], motionProps, isMajor }) {
  return (
    <motion.div
      {...motionProps}
      className={`flex flex-col justify-between gap-4 items-center  rounded-3xl p-14 h-max w-[320px]   m-4 ${isMajor ? "lg:py-[70px]  border-[2px] border-light/70" : "border-white/30 border-[1px]"}`}
    >
      <div className="space-y-2">
        <h4 className="text-xl lg:text-2xl uppercase">{title ?? "Landing Page"}</h4>
      </div>

      <div className="space-y-2 mb-4">
        <p className="text-3xl lg:text-4xl font-bold">{price ?? "250.00"}</p>
      </div>

      <ul className="text-[16px] italic space-y-3">
        {items.map((item, index) => (
          <p className="flex items-center gap-2" key={index}>
            <AiOutlineCheck />
            {item}
          </p>
        ))}
      </ul>
    </motion.div>
  );
}
