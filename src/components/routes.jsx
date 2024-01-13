import { HashRouter } from "react-router-dom";
import ScrollToTop from "../scrollToTop";
import { AnimatePresence } from "framer-motion";
import Locationprovider from "./locationProvider";
import Allpages from "./allPages";

function Main() {
  return (
    <HashRouter>
      <AnimatePresence>
        <ScrollToTop />
        <Locationprovider>
          <Allpages />
        </Locationprovider>
      </AnimatePresence>
    </HashRouter>
  );
}

export default Main;
