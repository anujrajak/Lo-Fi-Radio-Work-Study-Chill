import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { PlayerProvider } from "../context/PlayerContext";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <PlayerProvider>
        <Component {...pageProps} />
      </PlayerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
