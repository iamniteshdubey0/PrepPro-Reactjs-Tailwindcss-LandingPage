import {
  Apple,
  BarChart2,
  Box,
  BoxIcon,
  Clock,
  Github,
  GoalIcon,
  GroupIcon,
  Instagram,
  Linkedin,
  Lock,
  Microscope,
  Presentation,
  ShieldCheck,
  Square,
  Superscript,
  Telescope,
  TrainTrack,
  TrendingUp,
  Videotape,
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
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,accusantium ipsam rerum assumenda magnam autem ipsa saepe evenietfugit hic quos. Deleniti provident quos distinctio?",
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
    {
      value: "700+",
      label: "Students Cracked Interview",
      color: "from-primary/40 to-primary/30",
    },
    {
      value: "50+",
      label: "Organizational Trust Us",
      color: "from-white/10 to-black/20",
    },
    {
      value: "5000+",
      label: "Hrs of practise",
      color: "from-primary/30 to-primary/20",
    },
    {
      value: "40+",
      label: "Proffesinals personal",
      color: "from-white/10 to-black/20",
    },
  ],
};

export const ProductivityItems = {
  heading: {
    subTitle: "Productivity Task",
    title: `Empowererd Managers,\nHigher Performing Teams`,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,accusantium ipsam rerum assumenda magnam autem ipsa saepe evenietfugit hic quos. Deleniti provident quos distinctio?",
  },
  cards: {
    left: {
      title: "OKRs & Golas",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis earum atque, accusantium doloribus officia perferendis!",
      imgUrl: "",
    },
    topRight: {
      title: "Analytics",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis earum atque, accusantium doloribus officia perferendis!",
      imgUrl: "",
    },
    bottomRight1: {
      title: "OKRs & Golas",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis earum atque, accusantium doloribus officia perferendis!",
      imgUrl: "",
    },
    bottomRight2: {
      title: "Reduced Turnover 28%",
      icon: <BoxIcon size={66}></BoxIcon>,
    },
  },
};

export const FeaturesItems = {
  heading: {
    subTitle: "Features",
    title: `Build An Operationally\nExcellent Company`,
  },
  featuresIcons: [
    {
      label: "telegram",
      icon: <Superscript />,
      position: { top: "80%", left: "10%" },
    },
    {
      label: "telegram",
      icon: <Presentation />,
      position: { top: "55%", left: "25%" },
    },
    {
      label: "telegram",
      icon: <Videotape />,
      position: { top: "40%", left: "42%" },
    },
    {
      label: "telegram",
      icon: <GroupIcon />,
      position: { top: "40%", left: "58%" },
    },
    {
      label: "telegram",
      icon: <Square />,
      position: { top: "55%", left: "75%" },
    },
    {
      label: "telegram",
      icon: <Telescope />,
      position: { top: "80%", left: "90%" },
    },
  ],
};

export const TestimonialsItems = {
  heading: {
    subTitle: "Prep-Pro People Platform",
    title: `Built to Power Your Entire\nWorkspace`,
  },
  reviews: [
    {
      name: "Nitesh Dubey",
      degisnation: "Founder, HireSphere",
      note: "Great! Easy to use and manage all hiring processes. The interface is intuitive and makes tracking candidates seamless.",
      imgUrl: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Ayesha Khan",
      degisnation: "HR Manager, TechNova",
      note: "A reliable tool that streamlined our recruitment process. Loved the dashboard and analytics features.",
      imgUrl: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Ravi Verma",
      degisnation: "Talent Acquisition Lead, FinEdge",
      note: "The simplicity and speed of the platform have helped us reduce time-to-hire significantly.",
      imgUrl: "https://randomuser.me/api/portraits/men/51.jpg",
    },
    {
      name: "Sneha Iyer",
      degisnation: "Operations Head, DevVerse",
      note: "Everything from candidate tracking to offer management works like a charm. Highly recommended.",
      imgUrl: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
      name: "Manish Patel",
      degisnation: "CEO, CloudMetric",
      note: "Impressed with the smooth onboarding process and customer support. A game-changer for startups!",
      imgUrl: "https://randomuser.me/api/portraits/men/29.jpg",
    },
  ],
};

export const IntegrationItems = {
  heading: {
    subTitle: "Vast Options",
    title: `Seamless Integrations\nWith Your Entire Tech Stack`,
  },
  icons: [
    Apple,
    Box,
    BoxIcon,
    Github,
    GoalIcon,
    GroupIcon,
    Instagram,
    Linkedin,
    Microscope,
  ],
};

export const ToolsItems = {
  heading: {
    subTitle: "Better Together",
    title: `Every Tool you need to\nPower Strategic HR`,
  },
  sidebarItems: [
    {
      label: "Performance",
      icon: ShieldCheck,
      desc: "Run performance reviews to align employees on where they meet, exceed, or fall short of their roles’ expectations.",
      content: "Performance details content shown here.",
    },
    {
      label: "Time Tracking",
      icon: Clock,
      desc: "Monitor and log working hours effectively.",
      content: "Time tracking content here.",
    },
    {
      label: "Analytics",
      icon: BarChart2,
      desc: "View HR performance metrics and insights.",
      content: "Analytics content goes here.",
    },
    {
      label: "Grow",
      icon: TrendingUp,
      desc: "Help employees develop skills and careers.",
      content: "Growth tools and learning content.",
    },
    {
      label: "Security",
      icon: Lock,
      desc: "Manage access, permissions, and data protection.",
      content: "Security management section.",
    },
  ],
  Rating: {
    title: "Communication and Collaboration",
    desc: "This person drives initiatives that enhance the productivity of our team and company",
  },
};

export const SummaryItems = {
  heading: {
    subTitle: "HireSphere People Platform",
    title: `One Platform for your all\nHR needs`,
  },
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
};

export const FooterItems = {
  footerLinks: [
    {
      title: "Company",
      link: [
        { title: "About Us", href: "#about" },
        { title: "Careers", href: "#careers" },
        { title: "Blog", href: "#blog" },
        { title: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      link: [
        { title: "Help Center", href: "#help" },
        { title: "Community", href: "#community" },
        { title: "Events", href: "#events" },
        { title: "Webinars", href: "#webinars" },
      ],
    },
    {
      title: "Solutions",
      link: [
        { title: "Recruitment", href: "#recruitment" },
        { title: "Employee Engagement", href: "#engagement" },
        { title: "Performance Management", href: "#performance" },
        { title: "Learning & Development", href: "#learning" },
      ],
    },
    {
      title: "Platform",
      link: [
        { title: "Dashboard", href: "#dashboard" },
        { title: "Integrations", href: "#integrations" },
        { title: "Security", href: "#security" },
        { title: "API Docs", href: "#api" },
      ],
    },
    {
      title: "Pricing",
      link: [
        { title: "Plans & Pricing", href: "#pricing" },
        { title: "Enterprise", href: "#enterprise" },
        { title: "Request a Demo", href: "#demo" },
      ],
    },
  ],

  rights: {
    label:"© All Rights Reserved",
    link: [
      { title: "Privacy Policy", href: "#privacy" },
      { title: "Terms of Service", href: "#terms" },
    ],
  },
};
