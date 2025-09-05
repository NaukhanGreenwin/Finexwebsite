"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Users } from "lucide-react";
import about from "@/data/about.json";

export function AboutStats() {
  const stats = [
    {
      icon: Calendar,
      value: about.stats.yearEstablished.toString(),
      label: "Year Established",
      description: "Years of industry experience"
    },
    {
      icon: CheckCircle,
      value: about.stats.projectsCompleted.toLocaleString(),
      label: "Projects Completed",
      description: "Successful project deliveries"
    },
    {
      icon: Users,
      value: about.stats.contractorsAppointed.toLocaleString(),
      label: "Contractors Appointed",
      description: "Skilled professionals in our network"
    }
  ];

  return (
    <section id="about" className="about-section py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-300/20 rounded-full blur-xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-rose-300/20 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-300/10 to-teal-300/10 rounded-full blur-2xl" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About Our Company
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {about.intro}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {about.description}
            </p>
            
            {about.values && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Our Core Values</h3>
                <ul className="space-y-2">
                  {about.values.map((value, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              
              // Use bright, vibrant colors for each stat
              const colorOptions = [
                { 
                  bg: "bg-gradient-to-br from-blue-500 to-cyan-400", 
                  icon: "text-white", 
                  border: "border-blue-400/50",
                  cardBg: "bg-gradient-to-br from-blue-50 to-cyan-50",
                  shadow: "shadow-blue-200/50"
                },
                { 
                  bg: "bg-gradient-to-br from-pink-500 to-rose-400", 
                  icon: "text-white", 
                  border: "border-pink-400/50",
                  cardBg: "bg-gradient-to-br from-pink-50 to-rose-50",
                  shadow: "shadow-pink-200/50"
                },
                { 
                  bg: "bg-gradient-to-br from-emerald-500 to-teal-400", 
                  icon: "text-white", 
                  border: "border-emerald-400/50",
                  cardBg: "bg-gradient-to-br from-emerald-50 to-teal-50",
                  shadow: "shadow-emerald-200/50"
                }
              ];
              
              const colors = colorOptions[index % colorOptions.length];
              
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 ${colors.border} ${colors.cardBg} ${colors.shadow} hover:shadow-lg`}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`h-8 w-8 ${colors.icon} drop-shadow-sm`} />
                        </div>
                        <div className="flex-1">
                          <div className="text-3xl font-bold text-foreground mb-1">
                            {stat.value}
                          </div>
                          <div className="text-sm font-semibold text-gray-700 mb-1">
                            {stat.label}
                          </div>
                          <div className="text-xs text-gray-600">
                            {stat.description}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
