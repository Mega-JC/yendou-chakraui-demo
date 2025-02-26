import "./App.css";
import Counter from "./components/Counter";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <Counter />
      <Toaster
        toastIndicatorProps={{ className: "toast-icon" }}
        toastRootProps={{ className: "toast-container" }}
      />
    </>
  );
}

export default App;
