import { useState } from "react";

function MandalaImages({ image }) {
  const [loading, setloading] = useState(false);
  const [imagestat, setImagestat] = useState(false);
  const [imagestyle, setImagestyle] = useState(false);

  return (
    <div>
      {loading ? null : (
        <div role="status" className=" space-y-2.5 animate-pulse max-w-lg">
          <div className="h-60 bg-gray-200 rounded-2xl dark:bg-gray-700 w-full"></div>

          <span className="sr-only">Loading...</span>
        </div>
      )}
      {imagestat ? (
        <div
          className="left-0  w-full h-screen z-10 bg-opacity-40 transition-all bg-black absolute justify-center flex items-center"
          onClick={() => {
            document.body.style.overflow = "auto";
            setImagestat(false);
          }}
          style={imagestyle}
        >
          <img
            src={image}
            alt=""
            className=" h-auto max-w-3xl  z-20 rounded-3xl "
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
      <img
        src={image}
        onLoad={() => {
          setloading(true);
        }}
        className=" rounded-2xl z-50 w-full hover:cursor-pointer
         mb-6 sm:hover:scale-125 transition-all"
        loading="lazy"
        onContextMenu={(e) => {
          e.preventDefault();
        }}
        onDragStart={(e) => {
          e.preventDefault();
        }}
        onClick={() => {
          setImagestat(true);
          setImagestyle({ top: window.pageYOffset });
          console.log(window.pageYOffset);
          document.body.style.overflow = "hidden";
        }}
      ></img>
    </div>
  );
}

export default MandalaImages;
