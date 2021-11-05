import { HStack, Box } from "@chakra-ui/react";
import { FiInstagram, FiGithub, FiMail } from "react-icons/fi";
import { GiAstronautHelmet } from "react-icons/gi";
import { IconButton } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

const SocialList = () => {
  const data = [
    {
      link: "https://anujrajak.github.io/",
      icon: <GiAstronautHelmet />,
    },
    {
      link: "https://www.instagram.com/lofiradioapp/",
      icon: <FiInstagram />,
    },
    {
      link: "https://github.com/anujrajak",
      icon: <FiGithub />,
    },
    {
      link: "mailto:mr.anujrajak@gmail.com",
      icon: <FiMail />,
    },
  ];

  return (
    <HStack spacing="24px" bg="gray.800" style={{ justifyContent: "center" }}>
      {data &&
        data.map(({ link, icon }, index) => {
          return (
            <Box w="40px" h="40px" key={index}>
              <Link href={link} isExternal>
                <IconButton icon={icon} colorScheme="blackAlpha" />
              </Link>
            </Box>
          );
        })}
    </HStack>
  );
};

export default SocialList;
