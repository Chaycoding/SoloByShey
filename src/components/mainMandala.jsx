import { useState } from "react";

function MandalaImages({ image }) {
  const [loading, setloading] = useState(false);
  console.log(loading);
  return (
    <div>
      {loading ? null : (
        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
          <div className="h-60 bg-gray-200 rounded-2xl dark:bg-gray-700 w-full"></div>

          <span className="sr-only">Loading...</span>
        </div>
      )}
      <img
        src={image}
        onLoad={() => {
          setloading(true);
        }}
        className=" rounded-2xl z-50 w-full hover:cursor-pointer
         mb-6 sm:hover:scale-125 transition-all"
        loading="lazy"
      ></img>
    </div>
  );
}

export default MandalaImages;
