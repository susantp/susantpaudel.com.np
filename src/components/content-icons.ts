import type { IconType } from "react-icons";
import {
  LuBrain,
  LuCloud,
  LuCode,
  LuCpu,
  LuDatabase,
  LuListChecks,
  LuMail,
  LuPhone,
  LuServer,
  LuSparkles,
  LuTerminal,
} from "react-icons/lu";
import { SiGithub, SiLinkedin } from "react-icons/si";
import type { page } from "@/content/page";

type AboutSection =
  (typeof page.about.sections)[keyof typeof page.about.sections];
export type ContentIconId =
  | (typeof page.profile.contacts)[number]["icon"]
  | AboutSection["icon"]
  | (typeof page.skills.items)[number]["icon"];

export const contentIcons = {
  mail: LuMail,
  phone: LuPhone,
  linkedin: SiLinkedin,
  github: SiGithub,
  checklist: LuListChecks,
  sparkles: LuSparkles,
  code: LuCode,
  server: LuServer,
  cpu: LuCpu,
  database: LuDatabase,
  cloud: LuCloud,
  terminal: LuTerminal,
  brain: LuBrain,
} satisfies Record<ContentIconId, IconType>;
