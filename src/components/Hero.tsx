"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section relative overflow-hidden py-20 sm:py-32">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Hero.png"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Modern animated background overlays */}
      <div className="absolute inset-0">
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
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Leaders in{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Construction</span>
              {" "}&{" "}
              <span style={{color: '#F5A9B8'}}>Facility Maintenance</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-white/90 px-4 sm:px-0"
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
              size="lg"
              onClick={() => handleScrollToSection("#contact")}
              className="group"
            >
              <Phone className="mr-2 h-4 w-4" />
              Get a Quote
            </Button>
          </motion.div>

        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
}
