import "./App.css";
import { toaster, Toaster } from "@/components/ui/toaster";
import useCounter from "./hooks/useCounter";
import Button from "./components/Button";

function App() {
  const { count, increment } = useCounter();

  const onButtonClick = () => {
    increment();
    toaster.create({
      title: "Incremented",
      description: `The count is now ${count + 1}`,
      // display the updated value optimistically
      // // (though there may be a better synchronization solution)
      duration: 50000,
      type: "success",
    });
  };

  return (
    <>
      <div className="card">
        Count is <span className="counter-value">{count}</span>
      </div>
      <Button onClick={onButtonClick}>+1</Button>
      <Toaster
        toastIndicatorProps={{ className: "toast-icon" }}
        toastRootProps={{ className: "toast-container" }}
      />
    </>
  );
}

export default App;
