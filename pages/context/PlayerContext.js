import { createContext, useEffect, useState } from "react";

import stations from "../data/stations";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [stationData, setStationData] = useState([]);
  const [currentStation, setCurrentStation] = useState(null);

  useEffect(() => {
    setStationData(stations);
    setCurrentStation(stations[0]);
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        stationData,
        setStationData,
        currentStation,
        setCurrentStation
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};