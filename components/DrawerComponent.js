import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import SocialList from "./SocialList";
import StationList from "./StationList";

const DrawerComponent = ({ onClose, isOpen }) => {

  return (
    <>
      <Drawer placement="right" color="#f00" onClose={onClose} isOpen={isOpen} size={"md"}>
        <DrawerOverlay />
        <DrawerContent textColor="white">
          <DrawerHeader bg="gray.800">
          <DrawerCloseButton />
            <h4 className={styles.title}>Lo-Fi Radio</h4>
            <SocialList />
          </DrawerHeader>
          <DrawerBody bg="gray.800" sx={{
          "&::-webkit-scrollbar": {
            width: "16px",
            backgroundColor: "gray.800",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "blue.800",
          },
        }}>
            <StationList />
          </DrawerBody>
          <DrawerFooter textAlign="center" bg="gray.800" >
            <p style={{ fontSize: "10px" }}>
              Made for those persons who uses this application © Copyright{" "}
              {new Date().getFullYear()}
            </p>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
