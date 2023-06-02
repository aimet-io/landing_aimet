import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import useSWR from "swr";

import { FiGithub } from "react-icons/fi";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const CardTeam = ({ team }) => {
  const { attributes } = team;

  const { name, rol, perfil, github, linkedin, facebook } = attributes;

  return (
    <div className="flex relative shadow-[0_1px_1px_2px_hsla(0,0%,100%,.05)] flex-col  items-center   m-4 rounded-lg p-10 px-16">
      <div className="flex flex-col items-center justify-center relative  w-52 ">
        <img
          src={perfil.data.attributes.url}
          alt="Circulo de perfil"
          className="p-2 rounded-full   h-40 w-40 object-cover  bg-[linear-gradient(#c59b37,#f4e078)]"
        />
        <h2 className="text-2xl pt-2">{name}</h2>

        <h3 className="pt-8 pb-4 text-xl ">{rol}</h3>

        <div className="flex gap-10  border-t pt-4 border-gray-800 mt-6 text-4xl">
          <a href={github ?? "#"} target="_blank" rel="noreferrer">
            <span>
              <FiGithub />
            </span>
          </a>
          <a href={linkedin ?? "#"} target="_blank" rel="noreferrer">
            <span>
              <FaLinkedinIn />
            </span>
          </a>
          <a href={facebook ?? "#"} target="_blank" rel="noreferrer">
            <span>
              <FaFacebookF />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Team() {
  const { data: teams } = useSWR(`${API_URL}/teams?populate=*`, fetcher);

  return (
    <div id="equipo" className="pt-[70px] space-y-10">
      <p className="text-4xl text-center ">Nuestro Equipo</p>
      <div className="container  flex flex-wrap justify-center">
        {teams?.data?.map((team, index) => (
          <CardTeam key={index} team={team} />
        ))}
      </div>
    </div>
  );
}
