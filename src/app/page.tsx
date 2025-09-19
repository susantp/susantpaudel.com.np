import Image from "next/image";
import content from "@/data";
import { LuBriefcase, LuGraduationCap } from "react-icons/lu";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-purple-800 font-sans">
      {/* Header */}
      <header className="py-12 text-center bg-purple-800 text-white">
        <div className="flex justify-center mb-4">
          <img
            src={content.profile.image}
            alt={content.profile.name}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-bold mb-2">{content.profile.name}</h1>
        <p className="text-lg">{content.profile.role}</p>
        <div className="flex justify-center gap-6 mt-4">
          {content.profile.contacts.map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="hover:opacity-80"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </header>

      {/* Summary */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="leading-relaxed text-gray-700 whitespace-pre-line">
          {content.about}
        </p>
      </section>

      {/* Skills */}
      <section className="bg-purple-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {content.skills.map(({ icon: Icon, label }) => (
              <Card key={label} className="shadow-md">
                <CardContent className="p-4 text-center font-medium">
                  <Icon className="w-5 h-5 mx-auto mb-2" />
                  {label}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-12 text-center">Experience</h2>
        <div className="relative pl-6">
          <div className="absolute left-3 top-0 w-0.5 h-full bg-purple-300" />
          <div className="space-y-12">
            {content.experience.map((exp) => (
              <div
                key={exp.company}
                className="flex items-start gap-6 relative group hover:bg-purple-50 rounded-lg p-2 transition-colors duration-300"
              >
                <div className="absolute -left-1.5 w-4 h-4 bg-purple-800 rounded-full border-2 border-white shadow group-hover:scale-110 group-hover:bg-purple-600 transition-transform duration-300" />
                {/* Logo column */}
                <div className="flex-shrink-0 w-24 flex justify-center">
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-16 h-16 object-contain rounded-md bg-white border"
                    />
                  ) : (
                    <div className="w-16 h-16 flex items-center justify-center rounded-md bg-purple-100 border">
                      <LuBriefcase className="w-8 h-8 text-purple-500" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <Card className="shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
                        <LuBriefcase className="w-5 h-5" /> {exp.company}
                      </h3>
                      {exp.roles.map((role, i) => (
                        <div key={i} className="mb-2">
                          <p className="text-sm font-semibold text-gray-800">
                            {role.title}
                          </p>
                          <p className="text-sm text-gray-600">{role.period}</p>
                          {role.location && (
                            <p className="text-sm text-gray-600">
                              {role.location}
                            </p>
                          )}
                          {role.promotedFrom && (
                            <p className="text-xs text-purple-600 italic">
                              Promoted from {role.promotedFrom}
                            </p>
                          )}
                        </div>
                      ))}
                      {exp.description && (
                        <p className="mt-2 text-gray-700">{exp.description}</p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-purple-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <LuGraduationCap className="w-6 h-6" />
              <div>
                <h3 className="font-bold">{content.education.school}</h3>
                <p className="text-sm text-gray-600">
                  {content.education.degree}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} {content.profile.name}. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
