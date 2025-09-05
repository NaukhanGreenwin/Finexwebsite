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
    <section id="about" className="about-section py-20 bg-light-pink/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              
              // Use different colors from the palette for each stat
              const colorOptions = [
                { bg: "bg-slate-blue/20", icon: "text-slate-blue", border: "border-slate-blue/30" },
                { bg: "bg-soft-rose/20", icon: "text-soft-rose", border: "border-soft-rose/30" },
                { bg: "bg-bright-red/20", icon: "text-bright-red", border: "border-bright-red/30" }
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
                  <Card className={`hover:shadow-lg transition-all duration-300 border ${colors.border}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                          <IconComponent className={`h-6 w-6 ${colors.icon}`} />
                        </div>
                        <div className="flex-1">
                          <div className="text-2xl font-bold text-foreground">
                            {stat.value}
                          </div>
                          <div className="text-sm font-medium text-muted-foreground">
                            {stat.label}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
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
