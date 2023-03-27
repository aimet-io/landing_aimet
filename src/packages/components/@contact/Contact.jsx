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
              contacto conmigo. O si lo prefiere, puede enviarme un correo
              electrónico a &nbsp;
            </span>
            <span className="font-semibold hover:select-all">josephvtxx@gmail.com</span>
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

              <div className="text-white">
                <h5 className="md:text-[30px] text-[25px]">Dirección</h5>
                <p>Perú, Lima</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="center-flex h-[88px] w-[88px] border rounded-full  text-2xl">
                <MdEmail />
              </div>

              <div className="text-white">
                <h5 className="md:text-[30px] text-[25px]">Email</h5>
                <p className="hover:select-all">josephvtxx@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="center-flex h-[88px] w-[88px] border rounded-full  text-2xl">
                <FaPhoneAlt />
              </div>

              <div className="text-white">
                <h5 className="md:text-[30px] text-[25px]">Teléfono</h5>
                <p>Coming Soong</p>
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
                {...register("name", {required: true})}
                placeholder="Nombre"
                type="text"
                className={`py-4 px-3 rounded-lg bg-transparent border outline-none ${errors.name ? ' outline-red-400 -outline-offset-2' : ''}`}
              />
              <input
                {...register("email")}
                placeholder="Correo"
                type="email"
                className="py-4 px-3 rounded-lg bg-transparent border outline-none"
              />
              <input
                {...register("phone")}
                placeholder="Teléfono (Opcional)"
                type="text"
                className="py-4 px-3 rounded-lg bg-transparent border outline-none"
              />
              <input
                {...register("subject")}
                placeholder="Asunto"
                type="text"
                className="py-4 px-3 rounded-lg bg-transparent border outline-none"
              />
              <textarea
                {...register("message", {
                  required: true,
                })}
                placeholder="Deje un mensaje..."
                maxLength={800}
                rows="7"
                type="text"
                className={`py-4 px-3 rounded-lg bg-transparent outline-none lg:col-span-2 border ${errors.message ? ' outline-red-400 -outline-offset-2' : ''}`}
              />

              <div>
                <button className="rounded-full p-[14px_48px] border">
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
