import useCounter from "@/hooks/useCounter";
import { toaster } from "@/components/ui/toaster";
import Button from "./Button";

export default function Counter() {
  const { count, increment } = useCounter();

  const onButtonClick = () => {
    increment();
    toaster.create({
      title: "Incremented",
      description: `The count is now ${count + 1}`,
      // display the updated value optimistically
      // // (though there may be a better synchronization solution)
      duration: 5000,
      type: "success",
    });
  };

  return (
    <>
      <div className="card">
        Count is <span className="counter-value">{count}</span>
      </div>
      <Button onClick={onButtonClick}>+1</Button>
    </>
  );
}
