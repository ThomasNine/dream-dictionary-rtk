import RoutePath from "./routing/RoutePath";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
function App() {
  window.document.documentElement.classList.add("dark");

  const { pathname } = useLocation();
  return (
    <AnimatePresence>
      <RoutePath key={pathname} />
    </AnimatePresence>
  );
}

export default App;
