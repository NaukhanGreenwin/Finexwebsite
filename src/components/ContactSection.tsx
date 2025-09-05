"use client";

import { Card, CardContent } from "@/components/ui/card";
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
    <section id="contact" className="py-24 bg-gradient-to-br from-rose-50 via-white to-orange-50/30 relative overflow-hidden">
      {/* Vibrant background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-rose-300/10 to-pink-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-orange-300/10 to-amber-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-200/8 to-cyan-200/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8 px-4 sm:px-0 font-medium">
            {contact.quote}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 mx-auto rounded-full shadow-lg"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            
            // Modern vibrant color schemes for contact cards
            const colorSchemes = [
              {
                cardBg: 'bg-gradient-to-br from-blue-100/80 to-cyan-100/80',
                iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-400',
                accent: 'bg-gradient-to-r from-blue-500 to-cyan-400',
                border: 'border-blue-200 hover:border-blue-400',
                shadow: 'hover:shadow-blue-200/50'
              },
              {
                cardBg: 'bg-gradient-to-br from-pink-100/80 to-rose-100/80',
                iconBg: 'bg-gradient-to-br from-pink-500 to-rose-400',
                accent: 'bg-gradient-to-r from-pink-500 to-rose-400',
                border: 'border-pink-200 hover:border-pink-400',
                shadow: 'hover:shadow-pink-200/50'
              },
              {
                cardBg: 'bg-gradient-to-br from-emerald-100/80 to-teal-100/80',
                iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-400',
                accent: 'bg-gradient-to-r from-emerald-500 to-teal-400',
                border: 'border-emerald-200 hover:border-emerald-400',
                shadow: 'hover:shadow-emerald-200/50'
              },
              {
                cardBg: 'bg-gradient-to-br from-orange-100/80 to-amber-100/80',
                iconBg: 'bg-gradient-to-br from-orange-500 to-amber-400',
                accent: 'bg-gradient-to-r from-orange-500 to-amber-400',
                border: 'border-orange-200 hover:border-orange-400',
                shadow: 'hover:shadow-orange-200/50'
              }
            ];
            
            const colorScheme = colorSchemes[index % colorSchemes.length];
            
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
                <Card className={`h-full ${colorScheme.cardBg} border-2 ${colorScheme.border} ${colorScheme.shadow} hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden backdrop-blur-sm`}>
                  {/* Vibrant accent bar */}
                  <div className={`h-2 w-full ${colorScheme.accent} shadow-sm`}></div>
                  
                  <CardContent className="p-8 text-center relative">
                    <div className={`w-20 h-20 mx-auto ${colorScheme.iconBg} rounded-3xl flex items-center justify-center mb-6 shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10`}>
                      <IconComponent className="h-10 w-10 text-white drop-shadow-lg" />
                      {/* Icon glow effect */}
                      <div className={`absolute inset-0 ${colorScheme.iconBg} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
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
        
        {/* Modern Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl border-2 border-blue-200/20 shadow-2xl p-10 max-w-4xl mx-auto overflow-hidden">
            {/* Animated background decorations */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-blue-100/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Get a free consultation and quote for your construction or maintenance needs. Our experts are ready to bring your vision to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={`tel:${contact.phones[0]?.number || ""}`}
                  className="group inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transform"
                >
                  Call for Quote
                  <Phone className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </a>
                
                <a
                  href={`mailto:${contact.emails[0]?.address || ""}`}
                  className="group inline-flex items-center justify-center px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white hover:text-slate-900 font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105 transform"
                >
                  Email Us
                  <Mail className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-blue-200/80">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span>24/7 Emergency Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                  <span>Licensed & Insured</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
