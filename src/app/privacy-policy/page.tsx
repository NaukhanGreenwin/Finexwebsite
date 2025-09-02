import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Finex Development",
  description: "Our privacy policy outlines how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
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
                    Privacy Policy
                  </h1>
                  <div className="h-1 w-20 bg-primary rounded-full mb-4"></div>
                  <p className="text-muted-foreground">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>
                </header>

                <div className="space-y-8 text-muted-foreground leading-relaxed">
                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
                    <p>
                      At Finex Development (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any capacity.
                    </p>
                    <p className="mt-4">
                      By using our services or providing us with your information, you consent to the practices described in this Privacy Policy.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                    <p>We may collect information about you in a variety of ways, including:</p>
                    <ul className="mt-4 space-y-2 list-disc list-inside">
                      <li><strong>Personal Data:</strong> Name, email address, phone number, and postal address when you contact us or request services.</li>
                      <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, and pages visited.</li>
                      <li><strong>Communication Data:</strong> Records of correspondence when you contact us for support or inquiries.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul className="mt-4 space-y-2 list-disc list-inside">
                      <li>Provide, operate, and maintain our services</li>
                      <li>Improve, personalize, and expand our services</li>
                      <li>Understand and analyze how you use our website</li>
                      <li>Communicate with you about our services</li>
                      <li>Send you updates, marketing communications, and other information</li>
                      <li>Process transactions and manage customer relationships</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
                    <p>
                      We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with:
                    </p>
                    <ul className="mt-4 space-y-2 list-disc list-inside">
                      <li>Service providers who assist us in operating our website and conducting business</li>
                      <li>Legal authorities when required by law or to protect our rights</li>
                      <li>Business partners with your explicit consent</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                    <p>
                      We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul className="mt-4 space-y-2 list-disc list-inside">
                      <li>Access the personal information we hold about you</li>
                      <li>Request correction of inaccurate information</li>
                      <li>Request deletion of your personal information</li>
                      <li>Object to processing of your personal information</li>
                      <li>Request restriction of processing</li>
                      <li>Data portability</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Cookies</h2>
                    <p>
                      Our website may use cookies to enhance your experience. You can choose to disable cookies through your browser settings, but this may affect the functionality of our website.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                    <p>
                      If you have any questions about this Privacy Policy or our data practices, please contact us at:
                    </p>
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                      <p><strong>Finex Development</strong></p>
                      <p>2179 Dunwin Drive, Unit #2</p>
                      <p>Mississauga, ON L5L 1X2</p>
                      <p>Email: info@finexdevelopment.com</p>
                      <p>Phone: (905) 555-0123</p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
                    <p>
                      We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we securely delete or anonymize it.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">International Data Transfers</h2>
                    <p>
                      Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable privacy laws and that appropriate safeguards are in place to protect your information.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Children&apos;s Privacy</h2>
                    <p>
                      Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected such information, we will take steps to delete it promptly.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Links</h2>
                    <p>
                      Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
                    <p>
                      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. For material changes, we may also provide additional notice such as email notification.
                    </p>
                    <p className="mt-4">
                      Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
                    </p>
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
