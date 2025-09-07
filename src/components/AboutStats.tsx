"use client";

import Image from "next/image";
import about from "@/data/about.json";
import "@/app/about.css";
import { StatsBanner } from "@/components/StatsBanner";

export function AboutStats() {
  return (
    <>
      <section id="about" className="about-section">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* About Heading */}
          <h2 className="about-heading">ABOUT</h2>
          <div className="about-underline"></div>
          
          {/* About Content */}
          <div className="about-content">
            <div className="about-text">
              <p>
                <strong>{about.established}</strong> {about.paragraph1}
              </p>
              <p>
                {about.paragraph2}
              </p>
              <p>
                {about.paragraph3}
              </p>
              <p>
                {about.paragraph4}
              </p>
            </div>
            
            <div className="about-image-container">
              <Image 
                src="/images/company-logo.png"
                alt="Construction worker"
                width={600}
                height={600}
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Banner */}
      <StatsBanner />
    </>
  );
}
