"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import clients from "@/data/clients.json";
import { getImagePath } from "@/lib/image-utils";

export function ClientLogoWall() {
  return (
    <section id="clients" className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;re proud to serve a diverse range of clients across various industries
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 items-center justify-items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {client.href && client.href !== "#" ? (
                <Link 
                  href={client.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <div className="h-20 w-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <div className="relative flex items-center justify-center w-full h-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={getImagePath(client.logoSrc)}
                        alt={`${client.name} logo`}
                        className="max-w-full max-h-full object-contain transition-all duration-300 filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
                        onError={(e) => {
                          console.error(`Failed to load image: ${client.logoSrc}`, e);
                        }}
                        onLoad={() => {
                          console.log(`Successfully loaded: ${client.logoSrc}`);
                        }}
                      />
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="h-20 w-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <div className="relative flex items-center justify-center w-full h-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={client.logoSrc}
                      alt={`${client.name} logo`}
                      className="max-w-full max-h-full object-contain transition-all duration-300 filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
                      onError={(e) => {
                        console.error(`Failed to load image: ${client.logoSrc}`, e);
                      }}
                      onLoad={() => {
                        console.log(`Successfully loaded: ${client.logoSrc}`);
                      }}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            And many more satisfied clients across Canada
          </p>
        </motion.div>
      </div>
    </section>
  );
}
