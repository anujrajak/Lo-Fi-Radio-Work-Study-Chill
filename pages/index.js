import styles from "../styles/Home.module.css";
import { useState, useEffect, useContext } from "react";

import { Avatar, Box, useDisclosure, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { PlayerContext } from "./context/PlayerContext";
import bgData from "./data/gifs";

import PrevButton from "./components/svgButtons/PrevButton";
import NextButton from "./components/svgButtons/NextButton";
import PlayButton from "./components/svgButtons/PlayButton";
import PauseButton from "./components/svgButtons/PauseButton";
import Player from "./components/Player";
import DrawerComponent from "./components/DrawerComponent";

import { fetchQuote, suffleList, useInterval } from "./helperFunctions";

export default function Home() {
  const [isPlaying, setPlaying] = useState(false);

  const { stationData, currentStation, setCurrentStation } =
    useContext(PlayerContext);

  const [quote, setQuote] = useState(null);

  // Theme related states
  const [theme, setTheme] = useState(bgData);
  const [currentTheme, setCurrentTheme] = useState("cruising_through_time.gif");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Drawer related state
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setTheme(suffleList(bgData));

    fetchQuote().then((data) => {
      setQuote(data.text);
    });
  }, []);

  useInterval(() => {
    if (!theme[currentIndex]) {
      setCurrentIndex(0);
      setCurrentTheme(theme[0]);
      return;
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    setCurrentTheme(theme[currentIndex]);
  }, 10000);

  const playNext = function () {
    let stationIndex = stationData.findIndex(
      (st) => currentStation.name === st.name
    );
    ++stationIndex;
    if (stationData.length <= stationIndex) {
      stationIndex = 0;
    }
    setCurrentStation(stationData[stationIndex]);
  };

  const playPrev = function () {
    let stationIndex = stationData.findIndex(
      (st) => currentStation.name === st.name
    );
    --stationIndex;
    if (stationIndex < 0) {
      stationIndex = stationData.length - 1;
    }
    setCurrentStation(stationData[stationIndex]);
  };

  return (
    <>
      {currentStation && isPlaying && (
        <Player station={currentStation} style={{ position: "absolute" }} />
      )}
      <div
        style={{
          backgroundImage: `url(assets/${currentTheme})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <IconButton
          aria-label="Search database"
          icon={<HamburgerIcon />}
          colorScheme="blackAlpha"
          onClick={onOpen}
          style={{
            position: "absolute",
            margin: "10px 0px 0px 10px",
          }}
        />
        <div className={styles.container}>
          <main className={styles.main}>
            <>
              <h1 className={styles.title}>Lo-Fi Radio</h1>
              <p className={styles.description}>{quote}</p>
            </>

            <Box
              display="flex"
              alignItems="center"
              // bg="gray.900"
              borderRadius="lg"
              p={4}
              style={{ maxWidth: "325px", backgroundColor: "#00000057" }}
            >
              <Avatar
                size="md"
                name={currentStation && currentStation.name}
                src={currentStation && currentStation.icon}
              />
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
                color="white"
              >
                <marquee
                  style={{
                    color: "rgb(245, 245, 245)",
                    textShadow: "rgb(2 4 6) 2px 2px 0px",
                  }}
                >
                  {currentStation && currentStation.name}
                </marquee>
                <br />
                {/* Media controls */}
                <div className={styles.mediaContainer}>
                  <PrevButton handler={playPrev} />

                  {isPlaying && <PauseButton setPlaying={setPlaying} />}

                  {!isPlaying && <PlayButton setPlaying={setPlaying} />}

                  <NextButton handler={playNext} />
                </div>
              </Box>
            </Box>
          </main>
        </div>
      </div>
      <DrawerComponent isOpen={isOpen} onClose={onClose} />
    </>
  );
}
