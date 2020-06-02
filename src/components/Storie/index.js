import React from "react";

export default function Storie({ story = {} }) {
  const { thumb, name, active } = story;
  return (
    <li className={`${active ? "main__item active" : "main__item"}`}>
      <a href={`/${name}`}>
        <img src={thumb} alt={`/${name}`} />
      </a>
    </li>
  );
}
