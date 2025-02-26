import { useContext } from "react";

import { CounterContext } from "../contexts/CounterContext";

export default function useCounter() {
  const { count, setCount } = useContext(CounterContext);

  const increment = () => setCount(count + 1);

  return { count, increment };
}
