"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Heart, Users, Clock, DollarSign } from "lucide-react";
import credo from "@/data/credo.json";

const iconMap = {
  commitment: Heart,
  "staff-technicians": Users,
  availability: Clock,
  "competitive-rates": DollarSign,
};

export function CredoList() {
  return (
    <section id="credo" className="py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-pink-300/20 to-rose-300/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-200/15 to-teal-200/15 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Our Credo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
            The principles that guide everything we do
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {credo.map((item, index) => {
              const IconComponent = iconMap[item.id as keyof typeof iconMap] || Heart;
              
              // Bright solid colors for each accordion item
              const colorOptions = [
                {
                  iconBg: "bg-gradient-to-br from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700",
                  iconColor: "text-white",
                  titleColor: "group-hover:text-blue-600",
                  borderColor: "#3B82F6",
                  borderClass: "border-blue-300 hover:border-blue-500",
                  cardBg: "bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200"
                },
                {
                  iconBg: "bg-gradient-to-br from-pink-500 to-pink-600 group-hover:from-pink-600 group-hover:to-pink-700",
                  iconColor: "text-white",
                  titleColor: "group-hover:text-pink-600",
                  borderColor: "#EC4899",
                  borderClass: "border-pink-300 hover:border-pink-500",
                  cardBg: "bg-gradient-to-r from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200"
                },
                {
                  iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600 group-hover:from-emerald-600 group-hover:to-emerald-700",
                  iconColor: "text-white",
                  titleColor: "group-hover:text-emerald-600",
                  borderColor: "#10B981",
                  borderClass: "border-emerald-300 hover:border-emerald-500",
                  cardBg: "bg-gradient-to-r from-emerald-50 to-emerald-100 hover:from-emerald-100 hover:to-emerald-200"
                },
                {
                  iconBg: "bg-gradient-to-br from-purple-500 to-purple-600 group-hover:from-purple-600 group-hover:to-purple-700",
                  iconColor: "text-white",
                  titleColor: "group-hover:text-purple-600",
                  borderColor: "#8B5CF6",
                  borderClass: "border-purple-300 hover:border-purple-500",
                  cardBg: "bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200"
                }
              ];
              
              const colorClasses = colorOptions[index % colorOptions.length];
              
              return (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className={`border-2 ${colorClasses.borderClass} ${colorClasses.cardBg} rounded-xl px-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden`}
                >
                  <AccordionTrigger className="hover:no-underline group py-6">
                    <div className="flex items-center space-x-4 text-left">
                      <div className={`w-12 h-12 ${colorClasses.iconBg} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300`}>
                        <IconComponent className={`h-6 w-6 ${colorClasses.iconColor} drop-shadow-sm`} />
                      </div>
                      <span className={`text-lg font-bold text-foreground ${colorClasses.titleColor} transition-colors duration-300`}>
                        {item.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2">
                    <p className="text-gray-700 leading-relaxed ml-16 font-medium">
                      {item.body}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
