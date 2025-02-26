import { ChakraProvider } from "@chakra-ui/react";
import { CounterContextProvider } from "./contexts/CounterContext";
import { ThemeProvider } from "next-themes";
import { system } from "./theme";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ChakraProvider value={system}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <CounterContextProvider>{children}</CounterContextProvider>
        </ThemeProvider>
      </ChakraProvider>
    </>
  );
}
