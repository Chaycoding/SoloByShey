import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./header";
import MainPage from "./main";
import LoginSignup from "./Login/signup";
import { useEffect, useState } from "react";
import Footer from "./footer";

function Allpages() {
  const [isFirstMount, setIsFirstMount] = useState(true);
  const [isAuth, setIsAuth] = useState(null);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") {
      setIsFirstMount(false);
    }
  }, [location.pathname]);

  return (
    <div>
      <Header isAuth={isAuth} />
      <Routes location={location} key={location.key}>
        <Route path="/" element={<MainPage isFirstMount={isFirstMount} />} />
        <Route path="/Login" element={<LoginSignup setIsAuth={setIsAuth} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Allpages;
