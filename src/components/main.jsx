import EntranceAni from "./transitionAnimation/entranceAni";
import PageSwitchAni from "./transitionAnimation/pageAni";

import React from "react";
import { projectStorage } from "./firebase/config";

import { ref, listAll, getDownloadURL } from "firebase/storage";

import { useState } from "react";
import { useEffect } from "react";
import MandalaImages from "./mainMandala";

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
    <div className="h-screen">
      <div className="columns-4 gap-8 mx-10">
        {content.map((x, i) => {
          return <MandalaImages key={i} image={x} />;
        })}
      </div>
      {isFirstMount ? <EntranceAni /> : <PageSwitchAni />}
    </div>
  );
}

export default MainPage;
