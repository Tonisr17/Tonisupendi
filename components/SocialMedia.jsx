import { Box, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function SocialMediaItem({ data }) {
  return (
    <chakra.a
      title={data[0]}
      href={"https://" + data[1]}
      target="_blank"
      m=".8rem"
      display="inline-block"
      as={motion.a}
      whileHover={{ color: "#2CFF34", rotate: [0, 20, 0] }}
    >
      {data[2]}
    </chakra.a>
  );
}

export default function SocialMedia() {
  const items = [
    ["Github", "github.com/tonisr13", <FaGithub />],
    ["Instagram", "instagram.com/aldiwisyah23", <FaInstagram />],
    ["Twitter", "twitter.com/", <FaTwitter />],
    ["Linkedin", "linkedin.com/in/toni-supendi-ramdhon-b481b42b4", <FaLinkedinIn />],
    ["Discord", "#", <FaDiscord />],
  ];

  return (
    <Box textAlign="center" fontSize={25}>
      {items.map((item, i) => (
        <SocialMediaItem key={i} data={item} />
      ))}
    </Box>
  );
}
