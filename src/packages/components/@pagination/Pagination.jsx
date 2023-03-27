import React from "react";

export default function Pagination({ totalPage, setPage, page }) {
  return (
    <ul className="justify-center gap-x-3 flex flex-wrap">
      {Array.from({ length: totalPage }, (_, i) => i + 1).map((item, index) => (
        <li
          key={index}
          className={`font-semibold ${item === page ? "bg-light border text-dark" : "border"} rounded-full`}
        >
          <button className=" h-10 w-10 " onClick={() => setPage(item)}>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}
