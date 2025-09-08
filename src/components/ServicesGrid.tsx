"use client";

import Image from "next/image";
import "@/app/services.css";
import services from "@/data/services.json";
import { getImagePath } from "@/lib/image-utils";

export function ServicesGrid() {
  return (
    <section id="services" className="services-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Services Heading */}
        <h2 className="services-heading">SERVICES</h2>
        <div className="services-underline"></div>
        
        {/* Services Description */}
        <p className="services-description">
          Finex Development Inc. is a Canadian nationwide Construction and Facility Maintenance company focusing on a wide spectrum of
          services. Over the last several years, we have focused on delivering great services with skilled and licensed professionals in all areas.
        </p>
        
        {/* Services Bullet Points */}
        <ul className="services-description">
          <li className="services-bullet">
            Finex Development Inc. believes that the key to overall customer satisfaction is providing the most reliable and affordable services. We
            would like to think of ourselves as a "one point of contact" company.
          </li>
          <li className="services-bullet">
            Currently, our coverage is in all 10 provinces and territories Canada wide and unparalleled support of more than 440 carefully
            screened vendors, we have the capability to cater to whatever your needs are.
          </li>
        </ul>
        
        <p className="services-list-intro services-description">Below is a brief list detailing the services that we provide:</p>
        
        {/* Services Icons Grid */}
        <div className="services-grid">
          <div className="service-item">
            <Image 
              src={getImagePath("/images/services/Plumbing.png")}
              alt="Plumbing" 
              width={80} 
              height={80} 
              className="service-icon" 
            />
            <span className="service-name">Plumbing</span>
          </div>
          
          <div className="service-item">
            <Image 
              src={getImagePath("/images/services/Handyman Work.png")}
              alt="Handyman Works" 
              width={80} 
              height={80} 
              className="service-icon" 
            />
            <span className="service-name">Handyman Works</span>
          </div>
          
          <div className="service-item">
            <Image 
              src={getImagePath("/images/services/Electrical.png")}
              alt="Electrical" 
              width={80} 
              height={80} 
              className="service-icon" 
            />
            <span className="service-name">Electrical</span>
          </div>
          
          <div className="service-item">
            <Image 
              src={getImagePath("/images/services/Carpentry.png")}
              alt="Carpentry" 
              width={80} 
              height={80} 
              className="service-icon" 
            />
            <span className="service-name">Carpentry</span>
          </div>
          
          <div className="service-item">
            <Image 
              src={getImagePath("/images/services/Flooring.png")}
              alt="Flooring" 
              width={80} 
              height={80} 
              className="service-icon" 
            />
            <span className="service-name">Flooring</span>
          </div>
        </div>
        
        <div className="services-grid">
          <div className="service-item">
            <Image 
              src={getImagePath("/images/services/Painting.png")}
              alt="Painting" 
              width={80} 
              height={80} 
              className="service-icon" 
            />
            <span className="service-name">Painting</span>
          </div>
          
          <div className="service-item">
            <Image 
              src={getImagePath("/images/services/Drywall Pastering.png")}
              alt="Drywall Plastering" 
              width={80} 
              height={80} 
              className="service-icon" 
            />
            <span className="service-name">Drywall Plastering</span>
          </div>
          
          <div className="service-item">
            <Image 
              src={getImagePath("/images/services/HVAC.png")}
              alt="HVAC" 
              width={80} 
              height={80} 
              className="service-icon" 
            />
            <span className="service-name">HVAC</span>
          </div>
          
          <div className="service-item">
            <Image 
              src={getImagePath("/images/services/Landscaping.png")}
              alt="Landscaping" 
              width={80} 
              height={80} 
              className="service-icon" 
            />
            <span className="service-name">Landscaping</span>
          </div>
          
          <div className="service-item">
            <Image 
              src={getImagePath("/images/services/Restoration.png")}
              alt="Restoration" 
              width={80} 
              height={80} 
              className="service-icon" 
            />
            <span className="service-name">Restoration</span>
          </div>
        </div>
        
        {/* Service Highlights */}
        <div className="highlights-container">
          {/* Integrated Facilities Management */}
          <div className="highlight-card">
            <Image 
              src={getImagePath("/images/services/Integrated Facilities Management.png")}
              alt="Integrated Facilities Management"
              width={400}
              height={300}
              className="highlight-image"
            />
            <div className="highlight-content">
              <h3 className="highlight-title">Integrated Facilities Management</h3>
              <p className="highlight-description">
                Tell us what needs to be done and leave everything to us. We will act on behalf of your company to handle of all your maintenance needs to keep your facilities in top shape. We will conduct regular inspection to see if anything needs to be fixed, maintain your facilities and to prevent future problems.
              </p>
            </div>
          </div>
          
          {/* On-The-Go Maintenance */}
          <div className="highlight-card">
            <Image 
              src={getImagePath("/images/services/On-The-Go Maintenance.png")}
              alt="On-The-Go Maintenance"
              width={400}
              height={300}
              className="highlight-image"
            />
            <div className="highlight-content">
              <h3 className="highlight-title">On-The-Go Maintenance</h3>
              <p className="highlight-description">
                No project is too big or too small for us. Should you need someone to fix things or to conduct regular inspection, we can provide it to you at a competitive price. Our management team has extensive experience within the industry and will create maintenance programs specifically designed to your needs.
              </p>
            </div>
          </div>
          
          {/* Preventative Maintenance/Inspections */}
          <div className="highlight-card">
            <Image 
              src={getImagePath("/images/services/Preventative-Maintenance-Inspections.png")}
              alt="Preventative Maintenance/Inspections"
              width={400}
              height={300}
              className="highlight-image"
            />
            <div className="highlight-content">
              <h3 className="highlight-title">Preventative Maintenance/Inspections</h3>
              <p className="highlight-description">
                To avoid major issues from arising and keep clients' facilities in exceptional condition, Finex Development Inc. can suggest a preventive maintenance schedule. Our preventive maintenance program includes lighting, general maintenance and detailed inspections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
