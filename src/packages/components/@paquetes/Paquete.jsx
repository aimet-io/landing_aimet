import React from "react";

import { motion } from "framer-motion";

import { AiOutlineCheck } from "react-icons/ai";

export default function Paquete({ price, title, items=[], motionProps }) {
  return (
    <motion.div
      {...motionProps}
      className="flex flex-col justify-between gap-4 items-center border-[2px] rounded-xl p-4 m-4"
    >
      <div className="space-y-2">
        <h4 className="text-2xl">{title ?? "Landing Page"}</h4>
      </div>

      <div className="text-[16px] italic">
        {items.map((item) => (
          <p className="flex items-center gap-2" key={item}>
            <AiOutlineCheck />
            {item}
          </p>
        ))}
      </div>

      <div className="space-y-2">
        <p className="text-xl lg:text-3xl font-bold">{price ?? "250.00"}</p>
      </div>
    </motion.div>
  );
}
