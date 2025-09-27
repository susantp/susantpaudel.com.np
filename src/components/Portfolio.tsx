import content from "@/data";
import {Card, CardContent} from "./ui/card";
import {LuBriefcase, LuGraduationCap} from "react-icons/lu";
import {JSX, ReactNode} from "react";
import {toTitleCase} from "@/lib/utils";
import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";

export default function Portfolio(): JSX.Element {
    return (
        <main className="min-h-screen bg-white text-purple-800 font-sans">
            {/* Header */}
            <header className="py-12 text-center bg-purple-800 text-white">
                <div className="flex justify-center mb-4">
                    <Image
                        width={200}
                        height={200}
                        src={content.profile.image}
                        alt={content.profile.name}
                        className=" rounded-full border-4 border-white shadow-lg"
                    />
                </div>
                <h1 className="text-4xl font-bold mb-2">{content.profile.name}</h1>
                <p className="text-lg">{content.profile.role}</p>
                <div className="flex justify-center gap-6 mt-4">
                    {content.profile.contacts.map(({href, icon: Icon}) => (
                        <a
                            key={href}
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="hover:opacity-80"
                        >
                            <Icon className="w-6 h-6"/>
                        </a>
                    ))}
                </div>
            </header>

            {/* About with interactive cards */}
            <SectionWrapper title="About Me">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(content.about).map(([key, section]) => {
                        const Icon = section.icon;
                        return (
                            <Card
                                key={key}
                                className="w-full h-64 [perspective:1000px] cursor-pointer group"
                            >
                                <div
                                    className="relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:shadow-xl">
                                    {/* Front */}
                                    <CardContent
                                        className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-purple-100 rounded-lg [backface-visibility:hidden]">
                                        <Icon className="w-10 h-10 text-purple-700 mb-3"/>
                                        <h3 className="text-lg font-bold text-gray-800">
                                            {toTitleCase(key)}
                                        </h3>
                                    </CardContent>

                                    {/* Back */}
                                    <CardContent
                                        className="absolute inset-0 p-6 bg-purple-50 rounded-lg overflow-y-auto [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                        <h3 className="text-lg font-bold mb-2">
                                            {section.screenTitle}
                                        </h3>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                                            {section.contents.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </SectionWrapper>

            {/* Skills */}
            <SectionWrapper title="Skills">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {content.skills.map(({icon: Icon, label}) => (
                        <Card key={label} className="shadow-md">
                            <CardContent className="p-4 text-center font-medium">
                                <Icon className="w-5 h-5 mx-auto mb-2"/>
                                {label}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>

            {/* Experience Timeline */}
            <SectionWrapper title="Experience">
                <div className="relative pl-6">
                    <div className="absolute left-3 top-0 w-0.5 h-full bg-purple-300"/>
                    <div className="space-y-12">
                        {content.experience.map((exp) => (
                            <div
                                key={exp.company}
                                className="flex items-start gap-6 relative group hover:bg-purple-50 rounded-lg p-2 transition-colors duration-300"
                            >
                                <div
                                    className="absolute -left-1.5 w-4 h-4 bg-purple-800 rounded-full border-2 border-white shadow group-hover:scale-110 group-hover:bg-purple-600 transition-transform duration-300"/>
                                {/* Logo column */}
                                <div className="flex-shrink-0 w-24 flex justify-center">
                                    {exp.logo ? (
                                        <Image
                                            width={70}
                                            height={70}
                                            src={exp.logo}
                                            alt={`${exp.company} logo`}
                                            className="object-contain rounded-md bg-white border"
                                        />
                                    ) : (
                                        <div
                                            className="w-16 h-16 flex items-center justify-center rounded-md bg-purple-100 border">
                                            <LuBriefcase className="w-8 h-8 text-purple-500"/>
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <Card className="shadow-md group-hover:shadow-lg transition-shadow duration-300">
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
                                                <LuBriefcase className="w-5 h-5"/> {exp.company}
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
            </SectionWrapper>

            {/* Education */}
            <SectionWrapper title="Education">
                <Card>
                    <CardContent className="p-6 flex items-center gap-4">
                        <LuGraduationCap className="w-6 h-6"/>
                        <div>
                            <h3 className="font-bold">{content.education.school}</h3>
                            <p className="text-sm text-gray-600">
                                {content.education.degree}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </SectionWrapper>

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
