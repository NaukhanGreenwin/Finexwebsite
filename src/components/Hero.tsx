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
    <section className="hero-section relative overflow-hidden bg-gradient-to-br from-background via-light-pink/10 to-light-pink/20 py-20 sm:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Leaders in{" "}
              <span className="text-slate-blue">Construction</span>
              {" "}&{" "}
              <span className="text-bright-red">Facility Maintenance</span>
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
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">2002</div>
              <div className="text-sm text-muted-foreground">Year Established</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">26,924+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">440+</div>
              <div className="text-sm text-muted-foreground">Contractors Appointed</div>
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
