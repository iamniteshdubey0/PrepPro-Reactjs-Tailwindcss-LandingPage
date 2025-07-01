import {
  Apple,
  BarChart2,
  BarChart3,
  Bell,
  BookOpen,
  Box,
  BoxIcon,
  Briefcase,
  Building,
  Building2,
  Calendar,
  Clock,
  Code2,
  FileText,
  Gem,
  Github,
  GoalIcon,
  GroupIcon,
  HardDriveDownload,
  Instagram,
  LifeBuoy,
  Linkedin,
  Lock,
  Microscope,
  Newspaper,
  NotebookIcon,
  Presentation,
  Rocket,
  Shield,
  ShieldCheck,
  Slack,
  Square,
  Superscript,
  Telescope,
  TrainTrack,
  Trello,
  TrendingUp,
  Users,
  Videotape,
  ZoomIn,
} from "lucide-react";

export const NavrbarItems = {
  brand: {
    logo: <BookOpen size={28} />, // Best icon for learning/training
    name: "PrepPro",
  },
  navlinks: [
    {
      label: "Platform",
      link: "#platform",
      sublinks: [
        {
          icon: <Bell className="text-orange-500" size={18} />,
          title: "Notifications",
          desc: "Real-time updates on your training sessions.",
          badge: "New",
          link: "#notifications",
        },
        {
          icon: <BarChart3 className="text-green-600" size={18} />,
          title: "Analytics",
          desc: "Track your performance with insights.",
          link: "#analytics",
        },
        {
          icon: <Code2 className="text-purple-500" size={18} />,
          title: "Fields & Domains",
          desc: "Explore training options across various fields.",
          link: "#fields",
        },
        {
          icon: <Shield className="text-blue-500" size={18} />,
          title: "Secure Learning",
          desc: "Privacy-first, secure training sessions.",
          link: "#security",
        },
        {
          icon: <LifeBuoy className="text-red-500" size={18} />,
          title: "24/7 Support",
          desc: "Get help whenever you need it.",
          link: "#support",
        },
        {
          icon: <FileText className="text-sky-500" size={18} />,
          title: "Documentation",
          desc: "Guides to get started quickly.",
          link: "#docs",
        },
      ],
    },
    {
      label: "Resources",
      link: "#resources",
      sublinks: [
        {
          icon: <BookOpen className="text-indigo-500" size={18} />,
          title: "Interview Guides",
          desc: "Master interview formats and questions.",
          link: "#guides",
        },
        {
          icon: <Newspaper className="text-rose-500" size={18} />,
          title: "Blog",
          desc: "Insights from HR and domain experts.",
          link: "#blog",
        },
        {
          icon: <Users className="text-amber-500" size={18} />,
          title: "Success Stories",
          desc: "See how PrepPro helped others succeed.",
          link: "#stories",
        },
        {
          icon: <LifeBuoy className="text-teal-500" size={18} />,
          title: "Events & Webinars",
          desc: "Live workshops and learning events.",
          link: "#events",
        },
      ],
    },
    {
      label: "Solutions",
      link: "#solutions",
      sublinks: [
        {
          icon: <Briefcase className="text-cyan-600" size={18} />,
          title: "Corporate Training",
          desc: "Upskill your team with mock HR sessions.",
          link: "#corporate",
        },
        {
          icon: <Building2 className="text-fuchsia-600" size={18} />,
          title: "University Programs",
          desc: "Enable students to get job-ready.",
          link: "#campus",
        },
        {
          icon: <Users className="text-emerald-600" size={18} />,
          title: "Freelancers & Creators",
          desc: "Practice domain-specific interview skills.",
          link: "#freelancers",
        },
      ],
    },
    {
      label: "Pricing",
      link: "#pricing",
    },
  ],
};

export const HeroItems = {
  heading: {
    text1: "The ",
    text2: "Interview",
    text3: "Training Platform",
  },
  desc: "PrepPro helps students, professionals, and companies train and prepare for interviews and upskill their workforce with AI-driven or real HR expert sessions.",
  ratings: [
    {
      platform: "LinkedIn",
      text: "4.8 on LinkedIn",
      icon: <Linkedin size={16} />,
    },
    {
      platform: "Github",
      text: "4.7 on GitHub",
      icon: <Github size={16} />,
    },
  ],
  images: [
    {
      position: "left",
      url: "https://randomuser.me/api/portraits/men/20.jpg",
    },
    {
      position: "center",
      url: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      position: "right",
      url: "https://randomuser.me/api/portraits/men/44.jpg",
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
    title: `Why\nChoose Us`,
    desc: "PrepPro is trusted by professionals and organizations to enhance interview skills and team capabilities using real scenarios and expert guidance.",
  },
  feats: [
    {
      value: "700+",
      label: "Interviews Cracked by Users",
      color: "from-primary/40 to-primary/30",
    },
    {
      value: "100+",
      label: "Organizations Trust Us",
      color: "from-white/10 to-black/20",
    },
    {
      value: "5000+",
      label: "Hours of Practical Sessions",
      color: "from-primary/30 to-primary/20",
    },
    {
      value: "60+",
      label: "Professional Interviewers",
      color: "from-white/10 to-black/20",
    },
  ],
};

export const ProductivityItems = {
  heading: {
    subTitle: "Productivity Tools",
    title: `Empowered Managers,\nHigher Performing Teams`,
    desc: "PrepPro helps managers stay aligned on goals, track outcomes, and reduce attrition by enabling structured performance practices.",
  },
  cards: {
    left: {
      title: "OKRs & Goals",
      desc: "Set clear objectives and measure outcomes to align teams toward success.",
      imgUrl: "",
    },
    topRight: {
      title: "Smart Analytics",
      desc: "Visualize hiring funnels, practice outcomes, and learning curves with real-time dashboards.",
      imgUrl: "",
    },
    bottomRight1: {
      title: "AI Feedback Loops",
      desc: "Receive actionable feedback after every interview simulation from PrepPro’s AI or real experts.",
      imgUrl: "",
    },
    bottomRight2: {
      title: "Reduced Turnover by 28%",
      icon: <BoxIcon size={66} />,
    },
  },
};

export const FeaturesItems = {
  heading: {
    subTitle: "Key Features",
    title: `Build An Operationally\nExcellent Company`,
  },
  featuresIcons: [
    {
      label: "AI Interviewer",
      icon: <Superscript />, // Replace with real icon
      position: { top: "80%", left: "10%" },
    },
    {
      label: "HR Experts",
      icon: <Presentation />,
      position: { top: "55%", left: "25%" },
    },
    {
      label: "Video Interviews",
      icon: <Videotape />,
      position: { top: "40%", left: "42%" },
    },
    {
      label: "Team Collaboration",
      icon: <GroupIcon />,
      position: { top: "40%", left: "58%" },
    },
    {
      label: "Structured Q&A",
      icon: <Square />,
      position: { top: "55%", left: "75%" },
    },
    {
      label: "Future-Ready Skills",
      icon: <Telescope />,
      position: { top: "80%", left: "90%" },
    },
  ],
};

export const PricingItems = {
  heading: {
    subTitle: "No Contracts, No Hidden Fees",
    title: `Simple, Affordable\nTransparent Pricing`,
  },
  plans: [
    {
      title: "Student Plan",
      icon: Building,
      price: 49,
      description: "Perfect for job-seeking students preparing for placements and internships.",
      features: [
        "AI Mock Interviews",
        "Practice Feedback",
        "Resume Tips",
        "Domain-wise Q&A",
        "Email Support",
      ],
      action: "Enroll",
      highlight: false,
    },
    {
      title: "Pro",
      icon: Rocket,
      price: 119,
      description: "For working professionals preparing for switches or internal assessments.",
      features: [
        "Live HR Interviews",
        "Priority Feedback",
        "Project Review Help",
        "Real Time Dashboard",
        "24/7 Support",
      ],
      action: "Upgrade",
      highlight: true,
      badge: "Most Popular",
    },
    {
      title: "Enterprise",
      icon: Gem,
      price: 249,
      description: "Tailored training platform for growing teams and corporate upskilling.",
      features: [
        "Team Management",
        "Training Reports",
        "Custom Interview Fields",
        "Dedicated Coach",
        "Onboarding Assistance",
      ],
      action: "Request Demo",
      highlight: false,
    },
  ],
};

export const TestimonialsItems = {
  heading: {
    subTitle: "Trusted By Top Professionals",
    title: `Built to Power Your Entire\nInterview Journey`,
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
    subTitle: "Vast Compatibility",
    title: "Seamless Integrations\nWith Your Favorite Tools",
  },
  icons: [
    Github,          // Developers
    Linkedin,        // Professional hiring
    ZoomIn,            // Live interview/video sessions
    NotebookIcon,          // Training content & documentation
    Slack,           // Team communication
    HardDriveDownload,     // Resource sharing & content upload
    Instagram,       // For content creation & marketing profiles
    Trello,          // Task & workflow tracking
    Calendar,        // Scheduling mock interviews or training
  ],
};


export const ToolsItems = {
  heading: {
    subTitle: "Built For Impact",
    title: "Every Tool You Need to\nPower Skillful Teams",
  },
  sidebarItems: [
    {
      label: "Performance Reviews",
      icon: ShieldCheck,
      desc: "Set goals, assess progress, and align outcomes with team objectives.",
      content: "Detailed review modules for team and personal growth tracking.",
    },
    {
      label: "Time Tracking",
      icon: Clock,
      desc: "Track learning, interview practice, and task durations.",
      content: "Monitor how much time users spend preparing or training.",
    },
    {
      label: "Interview Analytics",
      icon: BarChart2,
      desc: "Insights from mock interviews and user progress data.",
      content: "Measure mock interview scores, behavioral traits, and AI feedback.",
    },
    {
      label: "Learning Paths",
      icon: TrendingUp,
      desc: "Custom roadmaps for various roles like SDE, Banking, or Content.",
      content: "Curated preparation tracks with checkpoints and certifications.",
    },
    {
      label: "Access & Privacy",
      icon: Lock,
      desc: "Secure platform access and custom role-based permissions.",
      content: "Ensure HRs, candidates, and trainers see only what's relevant.",
    },
  ],
  Rating: {
    title: "Candidate Engagement",
    desc: "Keep users engaged and improving with insights, gamification, and timely feedback.",
  },
};


export const SummaryItems = {
  heading: {
    subTitle: "PrepPro People Platform",
    title: `One Platform for All Your\nCareer Prep Needs`,
  },
  ratings: [
    {
      platform: "LinkedIn",
      text: "4.8 on LinkedIn",
      icon: <Linkedin size={16} />,
    },
    {
      platform: "GitHub",
      text: "4.7 on GitHub",
      icon: <Github size={16} />,
    },
  ],
};

export const FooterItems = {
  footerLinks: [
    {
      title: "Company",
      link: [
        { title: "About PrepPro", href: "#about" },
        { title: "Our Mission", href: "#mission" },
        { title: "Careers", href: "#careers" },
        { title: "Contact Us", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      link: [
        { title: "Help Center", href: "#help" },
        { title: "Community Forum", href: "#community" },
        { title: "Webinars & Events", href: "#events" },
        { title: "Blog & Insights", href: "#blog" },
      ],
    },
    {
      title: "Solutions",
      link: [
        { title: "Student Training", href: "#students" },
        { title: "Corporate Training", href: "#corporate" },
        { title: "Mock Interviews", href: "#mock-interviews" },
        { title: "Skill Development", href: "#skills" },
      ],
    },
    {
      title: "Platform",
      link: [
        { title: "Dashboard", href: "#dashboard" },
        { title: "AI Companion", href: "#ai-companion" },
        { title: "Live Interviews", href: "#live-interviews" },
        { title: "Security & Privacy", href: "#security" },
      ],
    },
    {
      title: "Pricing",
      link: [
        { title: "Plans & Pricing", href: "#pricing" },
        { title: "For Organizations", href: "#enterprise" },
        { title: "Request a Demo", href: "#demo" },
      ],
    },
  ],

  rights: {
    label: "© 2025 PrepPro. All rights reserved.",
    link: [
      { title: "Privacy Policy", href: "#privacy" },
      { title: "Terms of Service", href: "#terms" },
      { title: "Cookies Policy", href: "#cookies" },
    ],
  },
};