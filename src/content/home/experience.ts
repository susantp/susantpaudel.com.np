export type ExperienceItem = {
  company: string;
  roles: {
    title: string;
    period: string;
    location?: string;
    promotedFrom?: string;
  }[];
  description?: string;
  logo?: string;
};

const items: ExperienceItem[] = [
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
];

export const experience = { heading: "Experience", items } as const;
