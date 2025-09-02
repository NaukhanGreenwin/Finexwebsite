"use client";

import { motion } from "framer-motion";
import { 
  Wrench, 
  Hammer, 
  Zap, 
  Square, 
  Layers, 
  Paintbrush, 
  Home, 
  Thermometer, 
  Trees, 
  RefreshCw,
  LucideIcon
} from "lucide-react";
import services from "@/data/services.json";

const iconMap: Record<string, LucideIcon> = {
  wrench: Wrench,
  hammer: Hammer,
  zap: Zap,
  square: Square,
  layers: Layers,
  paintbrush: Paintbrush,
  wall: Home,
  thermometer: Thermometer,
  tree: Trees,
  "refresh-cw": RefreshCw,
};

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-6">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Comprehensive construction and maintenance services tailored to meet your specific needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Wrench;
            
            // Define static color schemes for each service
            const colorSchemes = [
              { 
                bg: "bg-slate-blue/10", 
                hoverBg: "bg-slate-blue/20", 
                icon: "text-slate-blue", 
                hoverTitle: "group-hover:text-slate-blue",
                border: "hover:border-slate-blue/30",
                accent: "bg-slate-blue"
              },
              { 
                bg: "bg-soft-rose/10", 
                hoverBg: "bg-soft-rose/20", 
                icon: "text-soft-rose", 
                hoverTitle: "group-hover:text-soft-rose",
                border: "hover:border-soft-rose/30",
                accent: "bg-soft-rose"
              },
              { 
                bg: "bg-bright-red/10", 
                hoverBg: "bg-bright-red/20", 
                icon: "text-bright-red", 
                hoverTitle: "group-hover:text-bright-red",
                border: "hover:border-bright-red/30",
                accent: "bg-bright-red"
              },
              { 
                bg: "bg-deep-maroon/10", 
                hoverBg: "bg-deep-maroon/20", 
                icon: "text-deep-maroon", 
                hoverTitle: "group-hover:text-deep-maroon",
                border: "hover:border-deep-maroon/30",
                accent: "bg-deep-maroon"
              },
              { 
                bg: "bg-bright-magenta/10", 
                hoverBg: "bg-bright-magenta/20", 
                icon: "text-bright-magenta", 
                hoverTitle: "group-hover:text-bright-magenta",
                border: "hover:border-bright-magenta/30",
                accent: "bg-bright-magenta"
              }
            ];
            
            const colorScheme = colorSchemes[index % colorSchemes.length];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className={`bg-white rounded-2xl border border-gray-100 ${colorScheme.border} shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full relative`}>
                  {/* Colored accent bar */}
                  <div className={`h-1 w-full ${colorScheme.accent}`}></div>
                  
                  {/* Clean Icon Section */}
                  <div className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto ${colorScheme.bg} group-hover:${colorScheme.hoverBg} rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300`}>
                      <IconComponent className={`h-8 w-8 ${colorScheme.icon}`} />
                    </div>
                    <h3 className={`text-lg font-semibold text-gray-900 mb-3 ${colorScheme.hoverTitle} transition-colors duration-300`}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.blurb}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
