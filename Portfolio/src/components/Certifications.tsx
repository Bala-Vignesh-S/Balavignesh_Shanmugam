import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { CertificationCard } from "./ui/CertificationCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="absolute left-1/2 transform -translate-x-12 -bottom-16 text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors z-10" aria-label="Previous">
      <ChevronLeft size={32} />
    </button>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="absolute right-1/2 transform translate-x-12 -bottom-16 text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors z-10" aria-label="Next">
      <ChevronRight size={32} />
    </button>
  );
};

const certifications = [
  { title: "Introduction to Machine Learning", issuer: "NPTEL / IIT", date: "2024", link: "#", image: "assets/dsa.jpg" },
  { title: "Programming, Data Structures & Algorithms using Python", issuer: "NPTEL / IIT", date: "2024", link: "#", image: "assets/fullstack.jpg" },
  { title: "Data Analytics with Python", issuer: "NPTEL / IIT", date: "2024", link: "#", image: "assets/dsa.jpg" },
  { title: "Python for Data Science", issuer: "NPTEL / IBM", date: "2024", link: "#", image: "assets/codeai.jpg" },
  { title: "Certification in Risk Management Assurance (CRMA)", issuer: "Professional Body", date: "2024", link: "#", image: "assets/tcsion.jpg" },
  { title: "Data Science using Python", issuer: "International Workshop", date: "Feb 2024", link: "#", image: "assets/claude.jpeg" },
];

export function Certifications() {
  const settings = {
    dots: false, infinite: true, speed: 500, slidesToShow: 3, slidesToScroll: 1,
    autoplay: true, autoplaySpeed: 1500, pauseOnHover: true,
    prevArrow: <CustomPrevArrow />, nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <SectionBackground>
      <section id="certifications">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Credentials that back up the skills I apply in real-world scenarios 📑">Certifications</SectionTitle>
          <div className="relative pb-24">
            <Slider {...settings} className="max-w-6xl mx-auto">
              {certifications.map((cert) => (
                <div key={cert.title} className="px-4">
                  <CertificationCard {...cert} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
