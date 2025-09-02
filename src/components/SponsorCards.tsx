"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import sponsors from "@/data/sponsors.json";

export function SponsorCards() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Community & Sponsors
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Giving back to our community through meaningful partnerships and support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sponsors.map((sponsor, index) => {
            return (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group border-border/50 hover:border-primary/20">
                  <CardContent className="p-6 space-y-4">
                    {/* Sponsor Image */}
                    <div className="aspect-square relative rounded-lg overflow-hidden mb-4 bg-white p-4 flex items-center justify-center">
                      <Image
                        src={sponsor.image}
                        alt={`${sponsor.title} logo`}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {sponsor.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {sponsor.body}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            Interested in partnering with us? <span className="text-primary font-medium">Get in touch</span> to learn more about our community initiatives.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
