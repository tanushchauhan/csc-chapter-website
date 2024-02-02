import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import ScrollToTop from "./helpers/ScrollToTop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./components/Error";
import { AnimatePresence } from "framer-motion";
import { MainContextProvider } from "./contexts/MainContextProvider";

function App() {
  const location = useLocation();
  return (
    <MainContextProvider>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
        <ScrollToTop />
      </AnimatePresence>
    </MainContextProvider>
  );
}

export default App;
