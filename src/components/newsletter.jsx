import { getDatabase, ref, set } from "firebase/database";
import { useState } from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

function Newsletter() {
  const [submitState, setSubmitState] = useState(false);

  function writeUserData(name, email) {
    const db = getDatabase();
    set(ref(db, "users/" + name), {
      username: name,
      email: email,
    });
  }

  const submitbutton = (x) => {
    x.preventDefault();
    if (x.target.name.value || x.target.email.value != "") {
      writeUserData(x.target.name.value, x.target.email.value);
      setSubmitState(true);
    }
  };

  return (
    <div className="w-full flex flex-col items-center h-40 bg-[#FAEED1] rounded-3xl">
      <h1 className="text-center text-2xl font-semibold pt-5">
        Sign up for some gorgeous designs!
      </h1>
      {submitState ? (
        <div className="mt-5 text-green-400 text-2xl">
          <IoCheckmarkDoneCircleSharp className="ml-24" />
          <h1> We'll keep in touch!</h1>
        </div>
      ) : (
        <form
          action=""
          className="mt-5 grid-cols-3 grid gap-x-3"
          onSubmit={(x) => submitbutton(x)}
        >
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="rounded-full pl-3"
          />

          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className="rounded-full pl-3 "
          />
          <input
            type="submit"
            value="Submit"
            className="bg-black border-black border-2 hover:bg-white hover:text-black w-28 ml-5 hover:cursor-pointer text-white font-bold py-2 px-4 rounded-full"
          ></input>
        </form>
      )}
    </div>
  );
}

export default Newsletter;
