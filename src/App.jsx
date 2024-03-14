import RoutePath from "./routing/RoutePath";
import { Toaster } from "./components/ui/toaster";

function App() {
  window.document.documentElement.classList.add("dark");

  return (
    <>
      <RoutePath />
      <Toaster />
    </>
  );
}

export default App;
