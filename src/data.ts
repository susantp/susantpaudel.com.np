import {
  LuMail,
  LuPhone,
  LuCode,
  LuServer,
  LuDatabase,
  LuCpu,
  LuCloud,
  LuTerminal,
  LuBrain,
} from "react-icons/lu";
import { SiLinkedin } from "react-icons/si";
import { ComponentType } from "react";

// Types
interface Contact {
  href: string;
  icon: ComponentType<{ className?: string }>;
}

interface Skill {
  icon: ComponentType<{ className?: string }>;
  label: string;
}

interface Role {
  title: string;
  period: string;
  location?: string;
  promotedFrom?: string;
}

interface Experience {
  company: string;
  roles: Role[];
  description?: string;
  logo?: string;
}

interface Education {
  school: string;
  degree: string;
}

interface Content {
  meta: {
    title: string;
    description: string;
  };
  profile: {
    name: string;
    role: string;
    image: string;
    contacts: Contact[];
  };
  about: string;
  skills: Skill[];
  experience: Experience[];
  education: Education;
}

// Centralized content object
const content: Content = {
  meta: {
    title: "Susant Paudel | Lead Software Engineer & Full-Stack Developer",
    description:
      "Portfolio of Susant Paudel, a Lead Software Engineer with 7+ years of experience in building scalable web applications, cloud solutions, and AI integrations. Skilled in JavaScript, TypeScript, React, Next.js, Node.js, Python, Django, PHP, SQL/NoSQL, and Docker. Based in Nepal, delivering modern software engineering solutions.",
  },
  profile: {
    name: "Susant Paudel",
    role: "Lead Software Engineer at YCOTEK",
    image: "/profile.png",
    contacts: [
      { href: "mailto:gracysusant@gmail.com", icon: LuMail },
      { href: "tel:9813779363", icon: LuPhone },
      { href: "https://www.linkedin.com/in/susant-paudel", icon: SiLinkedin },
    ],
  },
  about: `I am responsible for analyzing, designing, developing, and testing complex software applications.
With over 7 years of experience in software development, I bring proficiency in JavaScript, TypeScript,
Node.js, Next.js, React, Python, Django, SQL/NoSQL, and PHP frameworks. I have experience with cloud
technologies, Docker, and integrating generative AI models like ChatGPT, Gemini, and Claude.`,
  skills: [
    { icon: LuCode, label: "JavaScript / TypeScript" },
    { icon: LuServer, label: "Node.js / Next.js / React" },
    { icon: LuCpu, label: "Python / Fast Api" },
    { icon: LuDatabase, label: "SQL / NoSQL" },
    { icon: LuCode, label: "PHP (Laravel, Yii, CodeIgniter)" },
    { icon: LuCloud, label: "Docker / AWS" },
    { icon: LuTerminal, label: "REST & GraphQL APIs" },
    { icon: LuBrain, label: "Generative AI Integration" },
  ],
  experience: [
    {
      company: "YCOTEK",
      logo: "/logos/ycotek.png",
      roles: [
        {
          title: "Lead Software Engineer",
          period: "Jul 2025 – Present (3 months)",
          location: "Lokeshwor Tole, Manbhawan Lalitpur, Nepal",
          promotedFrom: "Senior Software Engineer",
        },
        {
          title: "Senior Software Engineer",
          period: "Jan 2025 – Jul 2025 (7 months)",
          location: "Lokeshwor Tole, Manbhawan Lalitpur, Nepal",
        },
      ],
    },
    {
      company: "Tala",
      logo: "/logos/tala.png",
      roles: [
        {
          title: "Senior Software Engineer",
          period: "Sep 2023 – Sep 2025 (2 years 1 month)",
          location: "California, United States",
        },
      ],
      description:
        "Spearheaded lending system development, financial calculation engine, code reviews, and bug fixing. Optimized performance and improved financial accuracy.",
    },
    {
      company: "LIS Nepal (Yomari Company)",
      logo: "/logos/lis.png",
      roles: [
        {
          title: "Senior Software Engineer",
          period: "Sep 2022 – Jul 2025 (2 years 11 months)",
          location: "Lalitpur District, Nepal",
        },
      ],
    },
    {
      company: "New IT Venture Corporation",
      logo: "/logos/newit.png",
      roles: [
        {
          title: "Senior Software Developer",
          period: "Nov 2021 – Jul 2022 (9 months)",
          location: "Kathmandu, Bāgmatī, Nepal",
        },
      ],
    },
  ],
  education: {
    school: "Purbanchal University",
    degree: "Bachelor's in Computer Software Engineering",
  },
};
export default content;
