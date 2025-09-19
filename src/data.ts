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
import { SiGithub, SiLinkedin } from "react-icons/si";
import { ComponentType } from "react";

// Types
interface Contact {
  href: string;
  icon: ComponentType<{ className?: string }>;
}

interface About {
  responsibilities: string[];
  strengths: string[];
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
    responsibilities: [
      "Analyzing, designing, developing, and testing complex software applications and related programs",
      "Applying deep knowledge of current programming languages and technologies to write, debug, and optimize code",
      "Interacting with internal and external stakeholders to understand requirements and ensure alignment with business goals",
      "Participating in code reviews and providing constructive feedback to improve code quality, while mentoring junior developers",
      "Collaborating with multidisciplinary teams to implement tasks and features based on requirements, leveraging agile methodologies",
    ],
    strengths: [
      "7+ years of experience in software development",
      "Proficiency in JavaScript, Typescript, Node.js, Next.js, React, Python, Django, SQL and NoSQL databases, PHP (Laravel, Yii, Codeigniter)",
      "Experience integrating and consuming different LLM/Generative AI models such as OpenAI ChatGPT, Google Gemini and Anthropic Claude",
      "Experience with Docker and cloud technologies, particularly AWS",
      "Solid understanding of source control and versioning using Git",
      "Extensive experience developing and consuming REST and GraphQL APIs",
      "Strong problem-solving skills, excellent communication abilities, and a collaborative mindset demonstrated through successful project leadership and stakeholder management",
    ],
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
