"use client";

import Image from "next/image";
import sponsors from "@/data/sponsors.json";
import { getImagePath } from "@/lib/image-utils";
import "@/app/sponsors.css";

export function SponsorCards() {
  return (
    <section className="sponsors-section">
      <div className="sponsors-container">
        {/* Sponsors Heading */}
        <h2 className="sponsors-heading">A PROUD SPONSOR OF</h2>
        <div className="sponsors-underline"></div>
        
        {/* Sponsors Grid */}
        <div className="sponsors-grid">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="sponsor-card">
              <div className="sponsor-logo-container">
                <Image
                  src={getImagePath(sponsor.image)}
                  alt={`${sponsor.title} logo`}
                  width={150}
                  height={150}
                  className="sponsor-logo"
                />
              </div>
              
              <h3 className="sponsor-title">
                {sponsor.title}
              </h3>
              
              <p className="sponsor-description">
                {sponsor.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
