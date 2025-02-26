import { createContext, useState } from "react";

export const CounterContext = createContext<{
  count: number;
  setCount: (count: number) => void;
}>({
  count: 0,
  setCount: () => {},
});

export const CounterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};
