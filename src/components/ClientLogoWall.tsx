"use client";

import Image from "next/image";
import clients from "@/data/clients.json";
import { getImagePath } from "@/lib/image-utils";
import "@/app/clients.css";

export function ClientLogoWall() {
  // Organize clients into rows as shown in the image
  const topRowClients = [
    clients.find(c => c.name === "Tommy Hilfiger"),
    clients.find(c => c.name === "Canadian Tire"),
    clients.find(c => c.name === "Sport Chek"),
    clients.find(c => c.name === "Moores"),
    clients.find(c => c.name === "National Sports")
  ];

  const bottomRowClients = [
    clients.find(c => c.name === "Calvin Klein"),
    clients.find(c => c.name === "Jack & Jones"),
    clients.find(c => c.name === "PartSource"),
    // Van Heusen is not in the clients.json, so we'll use a placeholder
    { name: "Van Heusen", logoSrc: "/images/clients/vans.png", href: "#" },
    clients.find(c => c.name === "Marks")
  ];

  return (
    <section id="clients" className="clients-section">
      <div className="clients-container">
        {/* Clients Heading */}
        <h2 className="clients-heading">CLIENTS</h2>
        <div className="clients-underline"></div>
        
        {/* Top Row of Logos */}
        <div className="clients-grid-row">
          {topRowClients.map((client, index) => (
            client && (
              <div key={index} className="client-logo-container">
                <Image
                  src={getImagePath(client.logoSrc)}
                  alt={`${client.name} logo`}
                  width={160}
                  height={80}
                  className="client-logo"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            )
          ))}
        </div>
        
        {/* Bottom Row of Logos */}
        <div className="clients-grid-row">
          {bottomRowClients.map((client, index) => (
            client && (
              <div key={index} className="client-logo-container">
                <Image
                  src={getImagePath(client.logoSrc)}
                  alt={`${client.name} logo`}
                  width={160}
                  height={80}
                  className="client-logo"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
