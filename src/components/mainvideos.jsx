import { projectStorage } from "./firebase/config";

import { ref, listAll, getDownloadURL } from "firebase/storage";

import { useState } from "react";
import { useEffect } from "react";

const storage = projectStorage;

const listRef = ref(storage, "videos/");

function Mainvideos() {
  const [content, setContent] = useState([]);
  const [content2, setContent2] = useState([]);

  useEffect(() => {
    listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          let fileName = itemRef.name;

          let newFileName = fileName.replace(/\.\w+$/, ".png");

          getDownloadURL(ref(storage, `videoimages/${newFileName}`))
            .then((url) => {
              setContent((stuff) => [...stuff, url]);
            })
            .catch((error) => {
              console.log(error);
              // Handle any errors
            });
          getDownloadURL(itemRef).then((url) => {
            setContent2((stuff) => [...stuff, url]);
          });
        });
      })
      .catch((error) => {
        console.log(error);
        // Uh-oh, an error occurred!
      });
  }, []);
  return (
    <div className="">
      <h1 className="text-4xl text-center font-semibold">Art process </h1>
      <div className=" mt-8 columns-2 gap-8 mx-10 ">
        {content.map((x, i) => {
          return (
            <video
              className="rounded-2xl"
              width="750"
              height="500"
              controls
              poster={x}
              key={i}
              src={content2[i]}
              preload="none"
            ></video>
          );
        })}
      </div>
    </div>
  );
}

export default Mainvideos;
