"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50/50 to-pink-50/30 py-20 sm:py-32">
      {/* Modern animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/5 via-purple-400/5 to-pink-400/5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-pink-400/10 to-rose-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-300/8 to-violet-300/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Leaders in{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Construction</span>
              {" "}&{" "}
              <span className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">Facility Maintenance</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground px-4 sm:px-0"
          >
            Delivering exceptional construction and facility maintenance services with 
            over two decades of experience. From emergency repairs to comprehensive 
            facility management, we&apos;re your trusted partner for quality solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => handleScrollToSection("#services")}
              className="group"
            >
              View Our Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleScrollToSection("#contact")}
              className="group"
            >
              <Phone className="mr-2 h-4 w-4" />
              Get a Quote
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
          >
            <div className="space-y-2 p-6 bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-2xl backdrop-blur-sm border border-blue-200/30 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">2002</div>
              <div className="text-sm text-gray-600 font-medium">Year Established</div>
            </div>
            <div className="space-y-2 p-6 bg-gradient-to-br from-pink-100/50 to-rose-100/50 rounded-2xl backdrop-blur-sm border border-pink-200/30 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">26,924+</div>
              <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="space-y-2 p-6 bg-gradient-to-br from-emerald-100/50 to-teal-100/50 rounded-2xl backdrop-blur-sm border border-emerald-200/30 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">440+</div>
              <div className="text-sm text-gray-600 font-medium">Contractors Appointed</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
}
