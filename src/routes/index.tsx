import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";

import heroPortrait from "@/assets/hero-portrait.jpg";
import projectOnboarding from "@/assets/project-onboarding.jpg";
import projectRecruitment from "@/assets/project-recruitment.jpg";
import projectEngagement from "@/assets/project-engagement.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mary Akanji — Portfolio" },
      {
        name: "description",
        content:
          "Professional portfolio of Mary Akanji, showcasing education, HR management skills, projects, certifications, work experience, and contact details.",
      },
      {
        property: "og:title",
        content: "Mary Akanji — Portfolio",
      },
      {
        property: "og:description",
        content:
          "Professional portfolio of Mary Akanji, showcasing education, HR management skills, projects, certifications, work experience, and contact details.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const technicalSkills = [
  "Microsoft Excel",
  "Microsoft Word",
  "Microsoft PowerPoint",
  "HRIS",
  "Workday",
  "Google Workspace",
  "ATS",
  "Notion",
];

const softSkills = [
  "Communication",
  "Conflict resolution",
  "Empathy",
  "Attention to detail",
  "Teamwork",
  "Time management",
  "Problem solving",
  "Adaptability",
];

const focusAreas = [
  "Talent acquisition",
  "Onboarding",
  "Employee relations",
  "HRIS",
  "Performance management",
];

const projects = [
  {
    title: "New-hire onboarding flow",
    description:
      "A step-by-step onboarding system that reduces first-week confusion and gives new joiners a single, calm place to look.",
    image: projectOnboarding,
    imageAlt:
      "Clean onboarding flow wireframes displayed on a bright screen",
    tags: ["Notion", "Excel", "Canva"],
    link: "#",
    wide: false,
  },
  {
    title: "Recruitment tracker",
    description:
      "A consolidated candidate pipeline tracker that keeps every stage visible and accountable in one shared view.",
    image: projectRecruitment,
    imageAlt: "Recruitment dashboard with clean charts and a white interface",
    tags: ["Excel", "Sheets", "Notion"],
    link: "#",
    wide: false,
  },
  {
    title: "Employee engagement survey",
    description:
      "A confidential pulse survey with plain-language questions and a clear follow-up plan, turning feedback into action.",
    image: projectEngagement,
    imageAlt: "Employee engagement survey results with airy data layout",
    tags: ["Forms", "Sheets", "Canva"],
    link: "#",
    wide: true,
  },
];

function Index() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.info(
      "This is a placeholder contact form. Please update the email or connect a form service to receive inquiries."
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/20">
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact onSubmit={handleSubmit} />
      </main>

      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative">
      <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-10 flex flex-col lg:flex-row items-end justify-between gap-12">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-primary mb-6">
            Human Resources &amp; Talent
          </p>
          <h1 className="text-[clamp(2.75rem,7vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight text-balance">
            Mary Akanji
          </h1>
          <p className="mt-6 text-lg text-pretty max-w-[42ch] text-muted-foreground">
            Human Resources Management professional — recruiting, onboarding,
            and building people-first teams.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background text-sm font-medium px-5 py-2.5 hover:bg-foreground/90 transition-colors"
            >
              View projects
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full bg-card ring-1 ring-border text-sm font-medium px-5 py-2.5 hover:ring-foreground/25 transition-colors"
            >
              About me
            </a>
          </div>
        </Reveal>

        <Reveal delay={100} className="hidden lg:block w-72 shrink-0">
          <div className="rounded-2xl ring-1 ring-border bg-card p-3 shadow-2xl shadow-foreground/5">
            <img
              src={heroPortrait}
              alt="Mary Akanji professional headshot"
              width={512}
              height={640}
              loading="eager"
              className="w-full aspect-[4/5] rounded-xl object-cover"
            />
            <div className="mt-3 px-1 pb-1">
              <p className="text-sm font-semibold">Mary Akanji</p>
              <p className="font-mono text-[11px] text-muted-foreground mt-0.5">
                HR &middot; [City, Country]
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <SectionHeader number="01" title="About me" />
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <Reveal>
          <p className="text-lg text-pretty leading-relaxed max-w-[46ch]">
            A people-focused Human Resources professional with hands-on experience
            across recruitment, onboarding, and employee relations. I design
            processes that are clear, fair, and easy to follow — and I care
            about the humans on both sides of the desk.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-2xl bg-card ring-1 ring-border p-6 shadow-xl shadow-foreground/5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Focus areas
            </p>
            <ul className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full bg-background px-3 py-1 text-sm ring-1 ring-border"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-card border-y border-border">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <SectionHeader number="02" title="Technical &amp; soft skills" />
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-2xl bg-background p-6 ring-1 ring-border">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
                Technical
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-card px-3 py-1 text-sm ring-1 ring-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl bg-background p-6 ring-1 ring-border">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
                Soft skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-card px-3 py-1 text-sm ring-1 ring-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <SectionHeader number="03" title="Projects" />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 100}
            className={project.wide ? "md:col-span-2" : ""}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  link: string;
  wide: boolean;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`group flex flex-col rounded-2xl bg-card ring-1 ring-border overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${
        project.wide ? "md:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-muted ${
          project.wide ? "w-full md:w-1/2 aspect-[16/10] md:aspect-auto" : "w-full aspect-[16/10]"
        }`}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          width={1024}
          height={640}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
        <p className="mt-2 text-pretty text-muted-foreground flex-1">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-background px-2.5 py-0.5 text-xs ring-1 ring-border"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
          aria-label={`Open project: ${project.title}`}
        >
          Project link
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function Experience() {
  return (
    <section id="experience" className="bg-card border-y border-border">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <SectionHeader number="04" title="Experience &amp; education" />
        <div className="grid md:grid-cols-2 gap-10">
          <Reveal>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Work experience
            </h3>
            <ol className="border-l border-border ml-1">
              <TimelineItem active>
                <p className="text-sm font-semibold">HR Assistant</p>
                <p className="text-sm text-muted-foreground">[Company] &middot; [Dates]</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  [Add a short summary of your responsibilities and impact.]
                </p>
              </TimelineItem>
              <TimelineItem>
                <p className="text-sm font-semibold">HR Intern</p>
                <p className="text-sm text-muted-foreground">[Company] &middot; [Dates]</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  [Add a short summary of your responsibilities and impact.]
                </p>
              </TimelineItem>
            </ol>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Education &amp; certifications
            </h3>
            <ol className="border-l border-border ml-1">
              <TimelineItem active>
                <p className="text-sm font-semibold">
                  B.Sc. Human Resources Management
                </p>
                <p className="text-sm text-muted-foreground">[University] &middot; [Year]</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  [Add a short note — focus area, honours, dissertation, etc.]
                </p>
              </TimelineItem>
              <TimelineItem>
                <p className="text-sm font-semibold">Certification in [Field]</p>
                <p className="text-sm text-muted-foreground">[Issuer] &middot; [Year]</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  [Add a short description of what the certification covers.]
                </p>
              </TimelineItem>
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <li className="relative pl-6 pb-7 last:pb-0">
      <span
        className={`absolute -left-[5px] top-1.5 size-2.5 rounded-full ring-4 ring-card ${
          active ? "bg-primary" : "bg-foreground/30"
        }`}
      />
      {children}
    </li>
  );
}

function Contact({ onSubmit }: { onSubmit: (e: FormEvent<HTMLFormElement>) => void }) {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16 md:py-28">
      <Reveal>
        <div className="rounded-3xl bg-card ring-1 ring-border p-8 md:p-14 shadow-2xl shadow-foreground/5">
          <span className="font-mono text-xs text-primary">(05)</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-balance">
            Let&apos;s work together
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground max-w-[46ch]">
            Open to internships and entry-level roles. Reach out below or
            download the CV.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-8 grid md:grid-cols-2 gap-4 max-w-2xl"
            aria-label="Contact form"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="rounded-xl bg-background px-4 py-3 text-sm ring-1 ring-border focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="rounded-xl bg-background px-4 py-3 text-sm ring-1 ring-border focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Message"
              required
              className="md:col-span-2 rounded-xl bg-background px-4 py-3 text-sm ring-1 ring-border focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none transition-shadow"
            />
            <button
              type="submit"
              className="md:col-span-2 rounded-xl bg-foreground text-background text-sm font-medium px-5 py-3 hover:bg-foreground/90 transition-colors"
            >
              Send message
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background text-sm font-medium px-5 py-2.5 hover:bg-foreground/90 transition-colors"
            aria-label="Download CV (placeholder link)"
          >
            Download CV
            <Download className="size-4" aria-hidden="true" />
          </a>
          <p className="mt-4 font-mono text-[11px] text-muted-foreground">
            [email@example.com] &middot; [City, Country]
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium ring-1 ring-border hover:ring-foreground/25 transition-colors"
            aria-label="GitHub profile (placeholder)"
          >
            <Github className="size-4" aria-hidden="true" />
            GitHub
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium ring-1 ring-border hover:ring-foreground/25 transition-colors"
            aria-label="LinkedIn profile (placeholder)"
          >
            <Linkedin className="size-4" aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href="mailto:[email@example.com]"
            className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium ring-1 ring-border hover:ring-foreground/25 transition-colors"
            aria-label="Send email (placeholder address)"
          >
            <Mail className="size-4" aria-hidden="true" />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-10">
      <span className="font-mono text-xs text-primary">({number})</span>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
        {title}
      </h2>
      <span className="flex-1 h-px bg-border" />
    </div>
  );
}
