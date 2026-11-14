import { about } from "./home/about";
import { education } from "./home/education";
import { experience } from "./home/experience";
import { footer } from "./home/footer";
import { profile } from "./home/profile";
import { skills } from "./home/skills";

export const page = {
  profile,
  about,
  skills,
  experience,
  education,
  footer,
} as const;
export type HomePage = typeof page;
