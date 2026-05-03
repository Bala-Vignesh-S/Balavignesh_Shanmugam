import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { EducationCard } from './ui/EducationCard';
import { ScrollTimeline, type TimelineEvent } from './ui/ScrollTimeline';

const education = [
  {
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    institution: 'Sri Sairam Engineering College, Chennai',
    period: '2023 - 2027',
    score: '8.4 / 10.0 CGPA',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0slFCxtSvrL4phitUZ5EA_pD7P6UHEuxPQ&s', // Using existing logo as placeholder
  },
];

export function Education() {
  const educationEvents: TimelineEvent[] = education.map((edu) => ({
    id: edu.degree,
    year: edu.period,
    title: edu.degree,
    subtitle: edu.institution,
    description: `Score: ${edu.score}`,
  }));

  return (
    <SectionBackground>
      <section id="education">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="A solid academic foundation fueling my passion for tech innovation 🏤">Education</SectionTitle>
          <div className="max-w-5xl mx-auto">
            <ScrollTimeline
              events={educationEvents}
              hideHeader
              linePosition="left"
              cardAlignment="left"
              animationOrder="simultaneous"
              revealAnimation="none"
              connectorStyle="line"
              cardVariant="default"
              cardEffect="none"
              progressLineWidth={2}
              className="pb-2"
              renderEventContent={(_, index) => (
                <EducationCard
                  index={index}
                  {...education[index]}
                  isLast={index === education.length - 1}
                  showConnector={false}
                />
              )}
            />
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
