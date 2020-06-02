import React from "react";
import Storie from "../Storie";

export default function Stories({ stories = [] }) {
  return (
    <div className="main">
      <div className="main__header">
        <ul className="main__list">
          {stories.map((story, key) => (
            <Storie key={key} story={story} />
          ))}
        </ul>
      </div>
    </div>
  );
}
