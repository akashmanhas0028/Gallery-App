import React from "react";

const Card = ({ elem }) => {
  return (
    <a href={elem.download_url} target="_blank" rel="noreferrer">
      <div className="cursor-pointer">
        
        {/* Smaller Image */}
        <div className="w-full aspect-square overflow-hidden rounded-lg">
          <img
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            src={elem.download_url}
            alt={elem.author}
          />
        </div>

        {/* Smaller Text */}
        <h2 className="mt-1 text-xs font-semibold truncate">
          {elem.author}
        </h2>
      </div>
    </a>
  );
};

export default Card;