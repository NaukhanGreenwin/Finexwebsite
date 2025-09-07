"use client";

import Image from "next/image";
import credo from "@/data/credo.json";
import "@/app/credo.css";

export function CredoList() {
  return (
    <section id="credo" className="credo-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Credo Heading */}
        <h2 className="credo-heading">OUR CREDO</h2>
        <div className="credo-underline"></div>
        
        {/* Credo Items */}
        <div>
          {/* Commitment */}
          <div className="credo-item">
            <h3 className="credo-title">
              <span>Commitment</span>
              <Image 
                src="/file.svg" 
                alt="Commitment Icon" 
                width={50} 
                height={50} 
                className="credo-icon" 
              />
            </h3>
            <p className="credo-description">
              {credo[0].body}
            </p>
          </div>
          
          {/* Our Staff & Technicians */}
          <div className="credo-item">
            <h3 className="credo-title">
              <span>Our Staff & Technicians</span>
              <Image 
                src="/file.svg" 
                alt="Staff Icon" 
                width={50} 
                height={50} 
                className="credo-icon" 
              />
            </h3>
            <p className="credo-description">
              {credo[1].body}
            </p>
          </div>
          
          {/* Availability */}
          <div className="credo-item">
            <h3 className="credo-title">
              <span>Availability</span>
              <Image 
                src="/file.svg" 
                alt="Availability Icon" 
                width={50} 
                height={50} 
                className="credo-icon" 
              />
            </h3>
            <p className="credo-description">
              {credo[2].body}
            </p>
          </div>
          
          {/* Competitive Rates */}
          <div className="credo-item">
            <h3 className="credo-title">
              <span>Competitive Rates</span>
              <Image 
                src="/file.svg" 
                alt="Rates Icon" 
                width={50} 
                height={50} 
                className="credo-icon" 
              />
            </h3>
            <p className="credo-description">
              {credo[3].body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
