import React, { useEffect } from "react";
import { motion } from "framer-motion";

import useSWR from "swr";
import Link from "next/link";
import Pagination from "../@pagination/Pagination";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Portfolio() {
  const [page, setPage] = React.useState(1);

  const [projects, setProjects] = React.useState(null);

  useEffect(() => {
    fetch(
      `${API_URL}/projects?sort=updatedAt:desc&populate=*&pagination[pageSize]=12&pagination[page]=${page}`
    )
      .then((res) => res.json())

      .then(setProjects);
  }, [page]);

  return (
    <section id="portafolio" className="container pt-[70px]">
      <div className="container space-y-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-center mb-4">Portfolio</h2>

          <p className="text-muted dark:text-darkmuted text-lg leading-[30px]">
            Nuestros Proyectos
          </p>
        </div>

        <Pagination
          totalPage={projects?.meta?.pagination.pageCount}
          setPage={setPage}
          page={page}
        />
        {projects?.data && (
          <motion.div
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0 },

              animate: {
                opacity: 1,
                transition: { staggerChildren: 0.18 },
              },
            }}
          >
            {projects?.data.map((project, index) => (
              <motion.div
                key={index}
                className="group/item overflow-hidden  relative rounded-xl before:content-[''] before:absolute before:h-full before:bottom-0 before:left-0 before:w-full before:transition-opacity hover:before:opacity-100 before:bg-dark/70 before:opacity-0  before:duration-300"
                variants={{
                  initial: { opacity: 0, y: "50%" },
                  animate: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <img
                  className="w-full object-cover"
                  src={project?.attributes.image.data.attributes.url}
                  alt="Project"
                />

                <Link
                  className="text-[18px] px-6 py-2 border rounded-md transition-opacity duration-300  absolute opacity-0 group-hover/item:opacity-100 group-hover/item:visible invisible left-1/2 top-1/2  -translate-y-1/2  -translate-x-1/2 text-white"
                  target="_blank"
                  href={project?.attributes.preview ?? "#"}
                >
                  Abrir Demo
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
