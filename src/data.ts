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
  LuListChecks,
  LuSparkles,
} from "react-icons/lu";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { ComponentType } from "react";

// Types
interface Contact {
  href: string;
  icon: ComponentType<{ className?: string }>;
}
interface AboutSection {
  screenTitle: string;
  icon: React.ComponentType<{ className?: string }>;
  contents: string[];
}

interface About {
  [key: string]: AboutSection;
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
  about: About;
  skills: Skill[];
  experience: Experience[];
  education: Education;
}

// Centralized content object
const content: Content = {
  meta: {
    title: "Susant Paudel | Lead Software Engineer & Full-Stack Developer",
    description:
      "Susant Paudel, Lead Software Engineer with 7+ years in full-stack development. Expert in JavaScript, React, Next.js, Node.js, Python, and cloud solutions.",
  },
  profile: {
    name: "Susant Paudel",
    role: "Lead Software Engineer at YCOTEK",
    image: "/profile.png",
    contacts: [
      { href: "mailto:gracysusant@gmail.com", icon: LuMail },
      { href: "tel:9813779363", icon: LuPhone },
      { href: "https://www.linkedin.com/in/susant-paudel", icon: SiLinkedin },
      { href: "https://www.github.com/susantp", icon: SiGithub },
    ],
  },
  about: {
    responsibilities: {
      screenTitle: "I am responsible for",
      icon: LuListChecks,
      contents: [
        "Analyzing, designing, developing, and testing complex applications",
        "Applying deep knowledge of modern programming languages",
        "Interacting with stakeholders to align business goals",
        "Participating in code reviews and mentoring juniors",
        "Collaborating with teams using agile methodologies",
      ],
    },
    strengths: {
      screenTitle: "What I bring to the company",
      icon: LuSparkles,
      contents: [
        "7+ years of experience in software development",
        "Proficiency in JavaScript, TypeScript, React, Next.js, Node.js, Python, Django, SQL/NoSQL, PHP",
        "Experience with LLMs like ChatGPT, Gemini, Claude",
        "Experience with Docker and cloud (AWS)",
        "Solid understanding of Git and versioning",
        "Extensive REST/GraphQL API experience",
        "Strong problem-solving and leadership skills",
      ],
    },
  },
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
      company: "Sell Thru AI",
      logo: "/logos/sell-thru-ai.png",
      roles: [
        {
          title: "Lead Software Engineer",
          period: "Oct 2025 – Present",
          location: "Georgia, United States",
        },
      ],
      description:
        "Helping retailers unite data across silos, unlocking insights that grow revenue, margin and productivity.",
    },
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
