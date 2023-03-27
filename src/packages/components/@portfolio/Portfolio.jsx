import React, { useEffect } from "react";

import useSWR from "swr";
import Link from "next/link";
import Pagination from "../@pagination/Pagination";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Portfolio() {
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(null);
  const { data: projects } = useSWR(
    `${API_URL}/projects?sort=updatedAt:desc&populate=*&pagination[pageSize]=9&pagination[page]=${page}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      onSuccess: (data) => {
        const currentPage = data.meta.pagination.page;

        if (currentPage == 1)
          return setTotalPage(data.meta.pagination.pageCount);
      },
    }
  );

  return (
    <section id="portafolio" className="container pt-[70px]">
      <div className="container space-y-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-center mb-4">Portfolio</h2>

          <p className="text-muted dark:text-darkmuted text-lg leading-[30px]">
            Nuestros Proyectos
          </p>
        </div>

        <Pagination totalPage={totalPage} setPage={setPage} page={page} />

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {projects?.data.map((project, index) => (
            <div
              key={project.id}
              className="group/item overflow-hidden  relative rounded-xl before:content-[''] before:absolute before:h-full before:bottom-0 before:left-0 before:w-full before:transition-opacity hover:before:opacity-100 before:bg-dark/70 before:opacity-0  before:duration-300"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
