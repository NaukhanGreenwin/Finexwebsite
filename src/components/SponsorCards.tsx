"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import sponsors from "@/data/sponsors.json";

export function SponsorCards() {
  return (
    <section className="py-20 bg-gradient-to-br from-violet-50 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Dynamic colorful background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-violet-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-indigo-300/10 to-blue-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-200/8 to-rose-200/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent sm:text-4xl">
            Community & Sponsors
          </h2>
          <p className="mt-4 text-lg text-gray-700 font-medium">
            Giving back to our community through meaningful partnerships and support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sponsors.map((sponsor, index) => {
            // Vibrant color schemes for each sponsor card
            const colorSchemes = [
              {
                cardBg: 'bg-gradient-to-br from-violet-100/80 to-purple-100/80',
                imageBg: 'bg-gradient-to-br from-violet-50 to-purple-50',
                border: 'border-violet-200 hover:border-violet-400',
                shadow: 'hover:shadow-violet-200/50',
                accent: 'bg-gradient-to-r from-violet-500 to-purple-500'
              },
              {
                cardBg: 'bg-gradient-to-br from-indigo-100/80 to-blue-100/80',
                imageBg: 'bg-gradient-to-br from-indigo-50 to-blue-50',
                border: 'border-indigo-200 hover:border-indigo-400',
                shadow: 'hover:shadow-indigo-200/50',
                accent: 'bg-gradient-to-r from-indigo-500 to-blue-500'
              },
              {
                cardBg: 'bg-gradient-to-br from-pink-100/80 to-rose-100/80',
                imageBg: 'bg-gradient-to-br from-pink-50 to-rose-50',
                border: 'border-pink-200 hover:border-pink-400',
                shadow: 'hover:shadow-pink-200/50',
                accent: 'bg-gradient-to-r from-pink-500 to-rose-500'
              },
              {
                cardBg: 'bg-gradient-to-br from-teal-100/80 to-cyan-100/80',
                imageBg: 'bg-gradient-to-br from-teal-50 to-cyan-50',
                border: 'border-teal-200 hover:border-teal-400',
                shadow: 'hover:shadow-teal-200/50',
                accent: 'bg-gradient-to-r from-teal-500 to-cyan-500'
              }
            ];
            
            const colorScheme = colorSchemes[index % colorSchemes.length];
            
            return (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full ${colorScheme.cardBg} border-2 ${colorScheme.border} ${colorScheme.shadow} hover:shadow-2xl hover:scale-105 transition-all duration-500 group backdrop-blur-sm overflow-hidden`}>
                  {/* Colorful accent bar */}
                  <div className={`h-2 w-full ${colorScheme.accent} shadow-sm`}></div>
                  
                  <CardContent className="p-6 space-y-4">
                    {/* Sponsor Image with modern styling */}
                    <div className={`aspect-square relative rounded-2xl overflow-hidden mb-4 ${colorScheme.imageBg} p-4 flex items-center justify-center shadow-lg border border-white/50 group-hover:scale-105 transition-transform duration-300`}>
                      <Image
                        src={sponsor.image}
                        alt={`${sponsor.title} logo`}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-bold text-gray-900 text-lg group-hover:text-violet-600 transition-colors duration-300">
                        {sponsor.title}
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed font-medium">
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
          <p className="text-sm text-gray-600">
            Interested in partnering with us? <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent font-bold">Get in touch</span> to learn more about our community initiatives.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
