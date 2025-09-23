import { ReactNode } from "react";

interface IProps {
  title: string;
  children: ReactNode;
}

export default function SectionWrapper({ title, children }: IProps) {
  return (
    <section className="bg-purple-50 max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold mb-12 text-center">{title}</h2>
      {children}
    </section>
  );
}
