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

export const WhyusItems = {
  heading: {
    title: `why\nChoose Us`,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit hjhg fbhewfyuewg fewc dcfhgu efge. Fuga Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga",
  },
  feats: [
    { value: "700+", label: "Students Cracked Interview", color:"from-primary/40 to-primary/30" },
    { value: "50+", label: "Organizational Trust Us", color:"from-white/10 to-black/20" },
    { value: "5000+", label: "Hrs of practise", color:"from-primary/30 to-primary/20" },
    { value: "40+", label: "Proffesinals personal", color:"from-white/10 to-black/20" },
  ],
};
