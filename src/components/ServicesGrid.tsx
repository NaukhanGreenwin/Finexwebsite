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
    <section id="services" className="services-section py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Dynamic background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-pink-400/10 to-rose-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-emerald-300/8 to-teal-300/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-56 h-56 bg-gradient-to-br from-purple-400/10 to-violet-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent sm:text-4xl md:text-5xl mb-6">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto px-4 sm:px-0 font-medium">
            Comprehensive construction and maintenance services tailored to meet your specific needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Wrench;
            
            // Modern vibrant color schemes for each service
            const colorSchemes = [
              { 
                cardBg: "bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-blue-600/10",
                iconBg: "bg-gradient-to-br from-blue-500 to-cyan-400", 
                hoverIconBg: "bg-gradient-to-br from-blue-600 to-cyan-500",
                icon: "text-white", 
                hoverTitle: "group-hover:text-blue-600",
                border: "border-blue-200 hover:border-blue-400",
                accent: "bg-gradient-to-r from-blue-500 to-cyan-400",
                shadow: "hover:shadow-blue-200/50"
              },
              { 
                cardBg: "bg-gradient-to-br from-pink-500/10 via-rose-400/5 to-pink-600/10",
                iconBg: "bg-gradient-to-br from-pink-500 to-rose-400", 
                hoverIconBg: "bg-gradient-to-br from-pink-600 to-rose-500",
                icon: "text-white", 
                hoverTitle: "group-hover:text-pink-600",
                border: "border-pink-200 hover:border-pink-400",
                accent: "bg-gradient-to-r from-pink-500 to-rose-400",
                shadow: "hover:shadow-pink-200/50"
              },
              { 
                cardBg: "bg-gradient-to-br from-red-500/10 via-orange-400/5 to-red-600/10",
                iconBg: "bg-gradient-to-br from-red-500 to-orange-400", 
                hoverIconBg: "bg-gradient-to-br from-red-600 to-orange-500",
                icon: "text-white", 
                hoverTitle: "group-hover:text-red-600",
                border: "border-red-200 hover:border-red-400",
                accent: "bg-gradient-to-r from-red-500 to-orange-400",
                shadow: "hover:shadow-red-200/50"
              },
              { 
                cardBg: "bg-gradient-to-br from-emerald-500/10 via-teal-400/5 to-emerald-600/10",
                iconBg: "bg-gradient-to-br from-emerald-500 to-teal-400", 
                hoverIconBg: "bg-gradient-to-br from-emerald-600 to-teal-500",
                icon: "text-white", 
                hoverTitle: "group-hover:text-emerald-600",
                border: "border-emerald-200 hover:border-emerald-400",
                accent: "bg-gradient-to-r from-emerald-500 to-teal-400",
                shadow: "hover:shadow-emerald-200/50"
              },
              { 
                cardBg: "bg-gradient-to-br from-purple-500/10 via-violet-400/5 to-purple-600/10",
                iconBg: "bg-gradient-to-br from-purple-500 to-violet-400", 
                hoverIconBg: "bg-gradient-to-br from-purple-600 to-violet-500",
                icon: "text-white", 
                hoverTitle: "group-hover:text-purple-600",
                border: "border-purple-200 hover:border-purple-400",
                accent: "bg-gradient-to-r from-purple-500 to-violet-400",
                shadow: "hover:shadow-purple-200/50"
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
                <div className={`${colorScheme.cardBg} rounded-3xl border-2 ${colorScheme.border} shadow-lg ${colorScheme.shadow} hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden h-full relative backdrop-blur-sm`}>
                  {/* Vibrant accent bar */}
                  <div className={`h-2 w-full ${colorScheme.accent} shadow-sm`}></div>
                  
                  {/* Modern Icon Section */}
                  <div className="p-8 text-center relative">
                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="w-full h-full bg-gradient-to-br from-gray-900 to-transparent"></div>
                    </div>
                    
                    <div className={`w-20 h-20 mx-auto ${colorScheme.iconBg} group-hover:${colorScheme.hoverIconBg} rounded-3xl flex items-center justify-center mb-6 transition-all duration-500 shadow-xl transform group-hover:scale-110 group-hover:rotate-3 relative z-10`}>
                      <IconComponent className={`h-10 w-10 ${colorScheme.icon} drop-shadow-lg`} />
                      {/* Icon glow effect */}
                      <div className={`absolute inset-0 ${colorScheme.iconBg} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    </div>
                    
                    <h3 className={`text-xl font-bold text-gray-900 mb-4 ${colorScheme.hoverTitle} transition-all duration-300 relative z-10`}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium relative z-10">
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
