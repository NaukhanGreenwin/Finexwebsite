import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Finex Development",
  description: "Terms of service and conditions for using Finex Development's construction and facility maintenance services.",
};

export default function TermsOfServicePage() {
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
                    Terms of Service
                  </h1>
                  <div className="h-1 w-20 bg-primary rounded-full mb-4"></div>
                  <p className="text-muted-foreground">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>
                </header>

                <div className="space-y-8 text-muted-foreground leading-relaxed">
                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                    <p>
                      By accessing and using the services provided by Finex Development (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Description</h2>
                    <p>
                      Finex Development provides construction and facility maintenance services including but not limited to:
                    </p>
                    <ul className="mt-4 space-y-2 list-disc list-inside">
                      <li>Plumbing services and repairs</li>
                      <li>Electrical work and installations</li>
                      <li>HVAC services and maintenance</li>
                      <li>Carpentry and construction work</li>
                      <li>Painting and finishing services</li>
                      <li>Flooring installation and repair</li>
                      <li>Landscaping and outdoor maintenance</li>
                      <li>General handyman services</li>
                      <li>Property restoration services</li>
                      <li>Facility management solutions</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">3. Service Agreement</h2>
                    <p>
                      All services are provided subject to a separate service agreement or work order. The terms of any specific service agreement will take precedence over these general terms where there is a conflict.
                    </p>
                    <p className="mt-4">
                      <strong>Estimates and Quotes:</strong> All estimates and quotes are valid for 30 days unless otherwise specified. Final pricing may vary based on actual conditions encountered during service delivery.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment Terms</h2>
                    <p>
                      Payment terms are as follows:
                    </p>
                    <ul className="mt-4 space-y-2 list-disc list-inside">
                      <li>Payment is due upon completion of services unless otherwise agreed in writing</li>
                      <li>For larger projects, progress payments may be required</li>
                      <li>Late payments may incur interest charges of 1.5% per month</li>
                      <li>We accept cash, check, and major credit cards</li>
                      <li>A service charge may apply for returned checks</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">5. Warranties and Guarantees</h2>
                    <p>
                      We stand behind our work with the following warranties:
                    </p>
                    <ul className="mt-4 space-y-2 list-disc list-inside">
                      <li><strong>Workmanship:</strong> 1-year warranty on all labor and installation</li>
                      <li><strong>Materials:</strong> Manufacturer warranties apply to all materials used</li>
                      <li><strong>Emergency Repairs:</strong> 90-day warranty on emergency repair work</li>
                      <li><strong>Exclusions:</strong> Normal wear and tear, damage from misuse, or acts of nature are not covered</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">6. Liability and Insurance</h2>
                    <p>
                      Finex Development carries comprehensive general liability and workers&apos; compensation insurance. Our liability is limited to the cost of the services provided. We are not responsible for:
                    </p>
                    <ul className="mt-4 space-y-2 list-disc list-inside">
                      <li>Consequential or indirect damages</li>
                      <li>Damage to personal property not directly related to our work</li>
                      <li>Delays due to weather, material availability, or circumstances beyond our control</li>
                      <li>Pre-existing conditions not disclosed prior to service commencement</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">7. Cancellation Policy</h2>
                    <p>
                      <strong>Client Cancellation:</strong> Services may be cancelled up to 24 hours before scheduled work without penalty. Cancellations with less than 24 hours notice may incur a service charge.
                    </p>
                    <p className="mt-4">
                      <strong>Company Cancellation:</strong> We reserve the right to cancel services due to unsafe working conditions, non-payment, or breach of agreement terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">8. Safety and Access</h2>
                    <p>
                      Client responsibilities include:
                    </p>
                    <ul className="mt-4 space-y-2 list-disc list-inside">
                      <li>Providing safe and reasonable access to work areas</li>
                      <li>Disclosing known hazards (asbestos, lead paint, etc.)</li>
                      <li>Securing pets and removing valuable items from work areas</li>
                      <li>Ensuring utilities are available and accessible</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">9. Permits and Compliance</h2>
                    <p>
                      Unless specifically agreed otherwise, obtaining necessary permits is the client&apos;s responsibility. All work will be performed in accordance with applicable building codes and regulations.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">10. Dispute Resolution</h2>
                    <p>
                      Any disputes arising from these terms or our services will be resolved through:
                    </p>
                    <ul className="mt-4 space-y-2 list-disc list-inside">
                      <li>Good faith negotiation between the parties</li>
                      <li>Mediation if negotiation fails</li>
                      <li>Binding arbitration as a final resort</li>
                      <li>All proceedings will be governed by Ontario law</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">11. Modifications</h2>
                    <p>
                      These terms may be modified at any time. Continued use of our services after modifications constitutes acceptance of the new terms. Material changes will be communicated to existing clients.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Information</h2>
                    <p>
                      For questions about these terms or our services, please contact us:
                    </p>
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                      <p><strong>Finex Development</strong></p>
                      <p>2179 Dunwin Drive, Unit #2</p>
                      <p>Mississauga, ON L5L 1X2</p>
                      <p>Phone: (905) 555-0123</p>
                      <p>Email: info@finexdevelopment.com</p>
                    </div>
                  </section>
                </div>
              </article>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
