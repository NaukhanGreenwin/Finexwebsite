import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "From CEO | Finex Development",
  description: "A message from our CEO about our company's vision, values, and commitment to excellence in construction and facility maintenance.",
};

export default function CEOPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Link>
            </Button>
          </div>

          <Card className="border-border/50">
            <CardContent className="p-8 lg:p-12">
              <article className="prose prose-lg max-w-none">
                <header className="mb-8">
                  <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                    A Message From Our CEO
                  </h1>
                  <div className="h-1 w-20 bg-primary rounded-full"></div>
                </header>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    Dear Valued Clients and Partners,
                  </p>

                  <p>
                    It is my pleasure to welcome you to our company and share our vision for excellence in construction and facility maintenance services. Since our establishment in 2002, we have been committed to building lasting relationships with our clients through exceptional service delivery and unwavering dedication to quality.
                  </p>

                  <div className="my-8">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Our Journey</h2>
                    <p>
                      Over the past two decades, we have grown from a small local operation to a trusted leader in the industry. This growth has been possible because of our core principles:
                    </p>
                    
                    <ul className="mt-4 space-y-3">
                      {[
                        "Quality First: We never compromise on the quality of our work or materials",
                        "Customer Focus: Every decision we make is centered around our clients' needs",
                        "Innovation: We continuously adopt new technologies and methods to improve our services",
                        "Integrity: We conduct business with honesty, transparency, and ethical practices"
                      ].map((principle, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <span><strong>{principle.split(":")[0]}:</strong> {principle.split(":")[1]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="my-8">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment to Excellence</h2>
                    <p>
                      Our team of skilled professionals brings years of experience and expertise to every project. We understand that each client has unique needs, and we pride ourselves on delivering customized solutions that exceed expectations.
                    </p>
                    
                    <p>
                      Whether you need emergency repairs, preventative maintenance, or comprehensive facility management, we are here to serve you with the same dedication and professionalism that has made us a trusted name in the industry.
                    </p>
                  </div>

                  <div className="my-8">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Looking Forward</h2>
                    <p>
                      As we continue to grow and evolve, our commitment to excellence remains unchanged. We are excited about the opportunities ahead and look forward to serving you with the highest standards of quality and service.
                    </p>
                    
                    <p>
                      Thank you for choosing us as your trusted partner in construction and facility maintenance.
                    </p>
                  </div>

                  <div className="mt-12 pt-8 border-t border-border/50">
                    <div className="text-center">
                      <p className="mb-2">Sincerely,</p>
                      <div className="text-xl font-bold text-foreground">John Smith</div>
                      <div className="text-sm text-muted-foreground">Chief Executive Officer</div>
                    </div>
                  </div>
                </div>
              </article>
            </CardContent>
          </Card>

          {/* Call to action */}
          <div className="mt-12 text-center">
            <Card className="border-border/50 bg-muted/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Ready to Work With Us?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get in touch today to discuss your project needs and discover how we can help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link href="/#contact">Get a Quote</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/#services">View Our Services</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
