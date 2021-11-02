import {
  List,
  ListItem,
  Text
} from "@chakra-ui/react";
import { useContext } from "react";

import stations from "../data/stations";
import { PlayerContext } from "../context/PlayerContext";

const StationList = ({ station }) => {

  const { currentStation, setCurrentStation } = useContext(PlayerContext);

  return (
    <div bg="gray.800" p={4} spacing={4} >
      <List spacing={3}>
        {stations &&
          stations.map(({ key, icon, name }) => {
            return (
              <ListItem border="1px" borderColor="gray.200" p={4} key={key} bg={key === currentStation.key && "blue.800"}
              onClick={() => setCurrentStation({ key, icon, name })} style={{cursor: "pointer"}} >
                <Text fontSize="xs">{name}</Text>
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};

export default StationList;
