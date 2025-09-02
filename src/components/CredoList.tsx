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
    <section id="credo" className="py-20 bg-background">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
              
              // Cycle through the new color palette with explicit border styles
              const colorOptions = [
                {
                  iconBg: "bg-slate-blue/20 group-hover:bg-slate-blue/30",
                  iconColor: "text-slate-blue",
                  titleColor: "group-hover:text-slate-blue",
                  borderColor: "#4081A4",
                  borderClass: "border-slate-blue/30 hover:border-slate-blue/50"
                },
                {
                  iconBg: "bg-soft-rose/20 group-hover:bg-soft-rose/30",
                  iconColor: "text-soft-rose",
                  titleColor: "group-hover:text-soft-rose",
                  borderColor: "#EE8991",
                  borderClass: "border-soft-rose/30 hover:border-soft-rose/50"
                },
                {
                  iconBg: "bg-bright-red/20 group-hover:bg-bright-red/30",
                  iconColor: "text-bright-red",
                  titleColor: "group-hover:text-bright-red",
                  borderColor: "#FF0000",
                  borderClass: "border-bright-red/30 hover:border-bright-red/50"
                },
                {
                  iconBg: "bg-deep-maroon/20 group-hover:bg-deep-maroon/30",
                  iconColor: "text-deep-maroon",
                  titleColor: "group-hover:text-deep-maroon",
                  borderColor: "#61160B",
                  borderClass: "border-deep-maroon/30 hover:border-deep-maroon/50"
                }
              ];
              
              const colorClasses = colorOptions[index % colorOptions.length];
              
              return (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className={`border ${colorClasses.borderClass} rounded-lg px-6 hover:shadow-md transition-all duration-300`}
                  style={{ borderColor: `${colorClasses.borderColor}50` }}
                >
                  <AccordionTrigger className="hover:no-underline group py-6">
                    <div className="flex items-center space-x-4 text-left">
                      <div className={`w-10 h-10 ${colorClasses.iconBg} rounded-lg flex items-center justify-center transition-colors duration-300`}>
                        <IconComponent className={`h-5 w-5 ${colorClasses.iconColor}`} />
                      </div>
                      <span className={`text-lg font-semibold text-foreground ${colorClasses.titleColor} transition-colors duration-300`}>
                        {item.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2">
                    <p className="text-muted-foreground leading-relaxed ml-14">
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
