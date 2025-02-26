import { ChakraProvider } from "@chakra-ui/react";
import { CounterProvider } from "./contexts/CounterContext";
import { ThemeProvider } from "next-themes";
import { system } from "./theme";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ChakraProvider value={system}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <CounterProvider>{children}</CounterProvider>
        </ThemeProvider>
      </ChakraProvider>
    </>
  );
}
