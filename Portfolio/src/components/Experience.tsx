import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { ExperienceCard } from "./ui/ExperienceCard";
import { ScrollTimeline, type TimelineEvent } from "./ui/ScrollTimeline";

const experiences = [
  {
    title: "AI Engineering Intern",
    company: "Infosys Springboard",
    period: "Dec 2025 - Feb 2026",
    description: `Designed and deployed an end-to-end AI wildlife protection backend. Using YOLO object detection and Gemini Vision API for poaching activity identification from ranger-uploaded media. Built secure REST APIs with Flask and PostgreSQL.`,
    skills: ["YOLO", "Gemini Vision API", "Flask", "PostgreSQL", "REST APIs"],
    logo: "/assets/infosys-logo.png", // Using a placeholder path
  },
  {
    title: "AI/ML Intern",
    company: "Big Bucks Innovation",
    period: "Jun 2024 - Jul 2024",
    description: `Executed end-to-end ML pipelines covering data preprocessing, feature engineering, model training, and evaluation on real-world datasets. Trained on supervised/unsupervised algorithms, CNNs, and deep learning architectures.`,
    skills: ["Machine Learning", "CNNs", "Deep Learning", "Data Preprocessing", "Feature Engineering"],
    logo: "/assets/bigbucks-logo.png", // Using a placeholder path
  },
  {
    title: "Research and Development Intern",
    company: "Sri Sairam Techno Incubator Foundation (STIC)",
    period: "Mar 2024 - Apr 2024",
    description: `Collected and preprocessed real-time research datasets, performed EDA and derived insights to support decision-making for inclusion programs at the incubator drive student engagement with rural communities.`,
    skills: ["EDA", "Data Preprocessing", "Data Analysis", "Research"],
    logo: "/assets/stic-logo.png", // Using a placeholder path
  },
];

export function Experience() {
  const experienceEvents: TimelineEvent[] = [
    ...experiences.map((exp, index) => ({
      id: `${exp.company}-${index}`,
      year: exp.period,
      title: exp.title,
      subtitle: exp.company,
      description: exp.description,
    })),
    {
      id: "experience-open-opportunities",
      year: "Now",
      title: "Open to opportunities",
      subtitle: "Career",
      description: "Open to new opportunities and exciting challenges!!",
    },
  ];

  return (
    <SectionBackground>
      <section id="experience">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="From classrooms to codebases — applying knowledge where it matters most 👨🏻">Experience</SectionTitle>
          <div className="max-w-5xl mx-auto">
            <ScrollTimeline
              events={experienceEvents}
              hideHeader
              linePosition="left"
              cardAlignment="left"
              animationOrder="simultaneous"
              revealAnimation="none"
              connectorStyle="line"
              cardVariant="default"
              cardEffect="none"
              progressLineWidth={2}
              className="pb-4"
              renderEventContent={(_, index, isActive) => (
                index < experiences.length ? (
                  <div className={isActive ? "" : "opacity-90"}>
                    <ExperienceCard {...experiences[index]} />
                  </div>
                ) : (
                  <div className="relative glass-card p-4 sm:p-6 flex items-center justify-center">
                    <span className="text-sm sm:text-base font-medium text-gray-200 flex items-center gap-2">
                      <span role="img" aria-label="Rocket">🚀</span>
                      Open to new opportunities and exciting challenges!!
                    </span>
                  </div>
                )
              )}
            />
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
