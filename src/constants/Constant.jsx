import {
  Apple,
  Box,
  Github,
  GoalIcon,
  Instagram,
  Linkedin,
  Microscope,
  TrainTrack,
} from "lucide-react";

export const NavrbarItems = {
  brand: {
    logo: <Box size={28}></Box>,
    name: "Prep-Pro",
  },
  navlinks: [
    { label: "Platform", link: "#platform" },
    { label: "Resources", link: "#resources" },
    { label: "Solutions", link: "#solutions" },
    { label: "Pricing", link: "#pricing" },
  ],
};

export const HeroItems = {
  heading: {
    text1: "The ",
    text2: "HR",
    text3: "Platform",
  },
  desc: "",
  ratings: [
    {
      platform: "LinkedIn",
      text: "4.2 on LinkedIn",
      icon: <Linkedin size={16}></Linkedin>,
    },
    {
      platform: "Github",
      text: "4.5 on Github",
      icon: <Github size={16}></Github>,
    },
  ],
  images: [
    {
      position: "left",
      url: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      position: "center",
      url: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      position: "right",
      url: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  ],
};

export const ClientsItems = {
  title: "powering the worlds best compnaines",
  clients: [
    { name: "Google", icon: <GoalIcon size={30}></GoalIcon> },
    { name: "Instagram", icon: <Instagram size={30}></Instagram> },
    { name: "Github", icon: <Github size={30}></Github> },
    { name: "Mircosoft", icon: <Microscope size={30}></Microscope> },
    { name: "Apple", icon: <Apple size={30}></Apple> },
    { name: "Tata", icon: <TrainTrack size={30}></TrainTrack> },
  ],
};
