import React from "react";

import { motion } from "framer-motion";

import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";

const API_EMAIL = process.env.NEXT_PUBLIC_API_EMAIL;
export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    toast
      .promise(
        axios.post(API_EMAIL, data),

        {
          loading: "Enviando Correo...",

          success: "Gracias por contactarnos",

          error: "Ups! Algo salió mal",
        }
      )
      .then(() => reset());
  };

  return (
    <section id="contacto" className="container pt-[70px]">
      <div className="overflow-hidden">
        <div className="text-center max-w-[680px] mx-auto space-y-4 ">
          <p className="text-4xl font-bold ">Contacto</p>

          <p className="text-muted dark:text-darkmuted text-lg leading-[30px] ">
            <span className="select-none">
              Por favor, rellene el formulario de esta sección para ponerse en
              contacto con nosotros. O si lo prefiere, puede enviar un correo a &nbsp;
            </span>
            <span className="font-semibold select-all">
              official.aimet@gmail.com
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 max-lg:gap-y-10 mt-20">
          <motion.section
            initial={{
              x: "-60%",
            }}
            viewport={{ once: true }}
            whileInView={{
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.15,
            }}
            className="flex flex-col max-lg:gap-y-5 lg:justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="center-flex h-[88px] w-[88px] border rounded-full  text-2xl">
                <FaMapMarkerAlt />
              </div>

              <div className="select-none">
                <h5 className="md:text-[30px] text-[25px]">Home Office</h5>
                <p>Argentina, Buenos Aires</p>
                <p>Perú, Lima</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="mailto: official.aimet@gmail.com"
                className="center-flex h-[88px] w-[88px] border rounded-full  text-2xl"
              >
                <MdEmail />
              </a>

              <div>
                <h5 className="md:text-[30px] text-[25px] select-none">Email</h5>
                <p className="select-all">official.aimet@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="tel: +51 904 492 115"
                className="center-flex h-[88px] w-[88px] border rounded-full  text-2xl"
              >
                <FaPhoneAlt />
              </a>

              <div >
                <h5 className="md:text-[30px] text-[25px] select-none ">Teléfono</h5>
                <p className="select-all">+51 904 492 115</p>
                <p className="select-all">+54 11 3194 2498 </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{
              x: "60%",
            }}
            viewport={{ once: true }}
            whileInView={{
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.15,
            }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid  lg:grid-cols-2 gap-4 "
              action=""
            >
              <input
                {...register("name", { required: true })}
                placeholder="Nombre"
                type="text"
                className={`py-4 px-3 rounded-lg bg-transparent border border-light outline-none ${
                  errors.name ? " outline-red-400 -outline-offset-2" : ""
                }`}
              />
              <input
                {...register("email")}
                placeholder="Correo"
                type="email"
                className="py-4 px-3 rounded-lg bg-transparent border border-light outline-none"
              />
              <input
                {...register("phone")}
                placeholder="Teléfono (Opcional)"
                type="text"
                className="py-4 px-3 rounded-lg bg-transparent border border-light outline-none"
              />
              <input
                {...register("subject")}
                placeholder="Asunto"
                type="text"
                className="py-4 px-3 rounded-lg bg-transparent border border-light outline-none"
              />
              <textarea
                {...register("message", {
                  required: true,
                })}
                placeholder="Deje un mensaje..."
                maxLength={800}
                rows="7"
                type="text"
                className={`py-4 px-3 rounded-lg bg-transparent outline-none lg:col-span-2 border border-light ${
                  errors.message ? " outline-red-400 -outline-offset-2" : ""
                }`}
              />

              <div>
                <button className="rounded-full p-[14px_48px] border border-light">
                  Enviar Ahora
                </button>
              </div>
            </form>
          </motion.section>
        </div>
      </div>
    </section>
  );
}
