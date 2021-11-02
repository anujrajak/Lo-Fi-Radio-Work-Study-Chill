import { HStack, Box } from "@chakra-ui/react";
import { FiInstagram, FiGithub, FiMail } from "react-icons/fi";
import { GiAstronautHelmet } from "react-icons/gi";
import { IconButton } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

const SocialList = () => {
  return (
    <HStack spacing="24px" bg="gray.800" style={{ justifyContent: "center" }}>
      <Box w="40px" h="40px">
        <Link href="https://anujrajak.github.io/" isExternal>
          <IconButton icon={<GiAstronautHelmet />} colorScheme="blackAlpha" />
        </Link>
      </Box>
      <Box w="40px" h="40px">
        <Link href="https://www.instagram.com/lofiradioapp/" isExternal>
          <IconButton icon={<FiInstagram />} colorScheme="blackAlpha" />
        </Link>
      </Box>
      <Box w="40px" h="40px">
        <Link href="https://github.com/anujrajak" isExternal>
          <IconButton icon={<FiGithub />} colorScheme="blackAlpha" />
        </Link>
      </Box>
      <Box w="40px" h="40px">
        <Link href="mailto:mr.anujrajak@gmail.com" isExternal>
          <IconButton icon={<FiMail />} colorScheme="blackAlpha" />
        </Link>
      </Box>
    </HStack>
  );
};

export default SocialList;
