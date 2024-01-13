import EntranceAni from "./transitionAnimation/entranceAni";
import PageSwitchAni from "./transitionAnimation/pageAni";

import React from "react";
import { projectStorage } from "./firebase/config";

import { ref, listAll, getDownloadURL } from "firebase/storage";

import { useState } from "react";
import { useEffect } from "react";
import MandalaImages from "./mainMandala";
import Newsletter from "./newsletter";

const storage = projectStorage;

const listRef = ref(storage, "images/");

function MainPage({ isFirstMount }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then((url) => {
            setContent((stuff) => [...stuff, url]);
          });
        });
      })
      .catch((error) => {
        console.log(error);
        // Uh-oh, an error occurred!
      });
  }, []);

  return (
    <div className="h-screen mt-5 ">
      <Newsletter />
      <div className="sm:columns-4 mt-8 columns-2 gap-8 mx-10">
        {content.map((x, i) => {
          return <MandalaImages key={i} image={x} />;
        })}
      </div>
      {window.innerWidth > 640 ? (
        isFirstMount ? (
          <EntranceAni />
        ) : (
          <PageSwitchAni />
        )
      ) : null}
    </div>
  );
}

export default MainPage;
