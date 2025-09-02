"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, ExternalLink } from "lucide-react";
import contact from "@/data/contact.json";

export function ContactSection() {

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      subtitle: "Come see us in person",
      content: `${contact.address.street}`,
      subcontent: `${contact.address.city}, ${contact.address.province} ${contact.address.postalCode}`,
      action: "Get Directions",
      color: "slate-blue",
      link: `https://maps.google.com/?q=${encodeURIComponent(`${contact.address.street}, ${contact.address.city}, ${contact.address.province}`)}`
    },
    {
      icon: Phone,
      title: "Call Us Today",
      subtitle: "Speak with our experts",
      content: contact.phones[0]?.number || "",
      subcontent: "Available during business hours",
      action: "Call Now",
      color: "soft-rose",
      link: `tel:${contact.phones[0]?.number || ""}`
    },
    {
      icon: Mail,
      title: "Email Us",
      subtitle: "Send us your inquiry",
      content: contact.emails[0]?.address || "",
      subcontent: "We respond within 24 hours",
      action: "Send Email",
      color: "bright-red",
      link: `mailto:${contact.emails[0]?.address || ""}`
    },
    {
      icon: Clock,
      title: "Business Hours",
      subtitle: "When we're available",
      content: contact.hours.weekdays,
      subcontent: `Weekends: ${contact.hours.weekends}`,
      action: "Emergency Service",
      color: "deep-maroon",
      link: `tel:${contact.phones[0]?.number || ""}`
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white via-light-pink/20 to-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 px-4 sm:px-0">
            {contact.quote}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-blue to-soft-rose mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            
            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <Card className="h-full bg-white border border-gray-100 hover:border-slate-blue/30 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Colored accent bar */}
                  <div className={`h-1 w-full bg-${info.color}`}></div>
                  
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto bg-${info.color}/10 group-hover:bg-${info.color}/20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300`}>
                      <IconComponent className={`h-8 w-8 text-${info.color}`} />
                    </div>
                    
                    <h3 className={`text-xl font-bold text-gray-900 mb-2 group-hover:text-${info.color} transition-colors duration-300`}>
                      {info.title}
                    </h3>
                    
                    <p className="text-sm text-gray-500 mb-4">
                      {info.subtitle}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <p className="text-gray-900 font-medium">
                        {info.content}
                      </p>
                      <p className="text-sm text-gray-600">
                        {info.subcontent}
                      </p>
                    </div>
                    
                    <a
                      href={info.link}
                      target={info.icon === MapPin ? "_blank" : undefined}
                      rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                      className={`inline-flex items-center justify-center w-full py-3 px-4 bg-${info.color} hover:bg-${info.color} text-white font-medium rounded-xl transition-all duration-300 group-hover:shadow-lg`}
                    >
                      {info.action}
                      {info.icon === MapPin ? (
                        <ExternalLink className="ml-2 h-4 w-4" />
                      ) : (
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      )}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6">
              Get a free consultation and quote for your construction or maintenance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contact.phones[0]?.number || ""}`}
                className="inline-flex items-center justify-center px-8 py-3 bg-slate-blue hover:bg-slate-blue text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                Call for Quote
                <Phone className="ml-2 h-4 w-4" />
              </a>
              <a
                href={`mailto:${contact.emails[0]?.address || ""}`}
                className="inline-flex items-center justify-center px-8 py-3 bg-white border-2 border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white font-medium rounded-xl transition-all duration-300"
              >
                Email Us
                <Mail className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
