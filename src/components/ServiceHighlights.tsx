"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import highlights from "@/data/highlights.json";
import { getImagePath } from "@/lib/image-utils";

export function ServiceHighlights() {
  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-slate-50/50 relative overflow-hidden">
      {/* Modern animated background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-300/8 to-cyan-300/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-300/8 to-pink-300/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-emerald-200/6 to-teal-200/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-700 via-blue-600 to-purple-600 bg-clip-text text-transparent sm:text-4xl">
            Featured Services
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            Specialized solutions designed to meet your unique facility management needs
          </p>
        </motion.div>

        <div className="space-y-16">
          {highlights.map((highlight, index) => {
            // Modern vibrant color schemes for alternating sections
            const colorSchemes = [
              {
                cardBg: 'bg-gradient-to-br from-blue-100/60 via-cyan-50/40 to-blue-50/60',
                border: 'border-blue-200/50 hover:border-blue-400/70',
                shadow: 'hover:shadow-blue-200/30',
                accent: 'bg-gradient-to-r from-blue-500 to-cyan-400',
                checkIcon: 'text-blue-600'
              },
              {
                cardBg: 'bg-gradient-to-br from-pink-100/60 via-rose-50/40 to-pink-50/60',
                border: 'border-pink-200/50 hover:border-pink-400/70',
                shadow: 'hover:shadow-pink-200/30',
                accent: 'bg-gradient-to-r from-pink-500 to-rose-400',
                checkIcon: 'text-pink-600'
              },
              {
                cardBg: 'bg-gradient-to-br from-emerald-100/60 via-teal-50/40 to-emerald-50/60',
                border: 'border-emerald-200/50 hover:border-emerald-400/70',
                shadow: 'hover:shadow-emerald-200/30',
                accent: 'bg-gradient-to-r from-emerald-500 to-teal-400',
                checkIcon: 'text-emerald-600'
              }
            ];
            
            const colorScheme = colorSchemes[index % colorSchemes.length];
            
            return (
              <motion.div
                key={highlight.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className={`overflow-hidden border-2 ${colorScheme.border} ${colorScheme.shadow} hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ${colorScheme.cardBg} backdrop-blur-sm`}>
                  {/* Vibrant accent bar */}
                  <div className={`h-2 w-full ${colorScheme.accent} shadow-sm`}></div>
                  
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}>
                    {/* Image with enhanced overlay */}
                    <div className={`relative h-64 lg:h-96 overflow-hidden ${
                      index % 2 === 1 ? 'lg:col-start-2' : ''
                    }`}>
                      <Image
                        src={getImagePath(highlight.image)}
                        alt={`${highlight.title} illustration`}
                        fill
                        className="object-cover transform hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent`} />
                      <div className={`absolute inset-0 ${colorScheme.accent.replace('bg-gradient-to-r', 'bg-gradient-to-t')} opacity-10`} />
                    </div>

                    {/* Content */}
                    <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${
                      index % 2 === 1 ? 'lg:col-start-1' : ''
                    }`}>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed font-medium text-lg">
                      {highlight.body}
                    </p>
                    
                    {highlight.features && (
                      <div className="mb-8">
                        <ul className="space-y-4">
                          {highlight.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <CheckCircle className={`h-6 w-6 ${colorScheme.checkIcon} mt-0.5 flex-shrink-0 drop-shadow-sm`} />
                              <span className="text-sm text-gray-700 font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Button 
                      onClick={handleScrollToContact}
                      className={`group w-fit bg-gradient-to-r ${colorScheme.accent.replace('bg-gradient-to-r', '')} hover:shadow-lg hover:scale-105 transition-all duration-300 text-white border-0`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
