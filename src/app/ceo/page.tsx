import { SiteHeader } from "@/components/SiteHeader";
import Image from "next/image";
import { Metadata } from "next";
import "@/app/ceo.css";

export const metadata: Metadata = {
  title: "A Message from CEO | Finex Development",
  description: "A message from our CEO about our company's vision, values, and commitment to excellence in construction and facility maintenance.",
};

export default function CEOPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="ceo-section">
          <div className="ceo-container">
            {/* CEO Heading */}
            <h1 className="ceo-heading">A Message from CEO</h1>
            <div className="ceo-underline"></div>
            
            {/* CEO Content */}
            <div className="ceo-content">
              {/* Left Column - Text */}
              <div className="ceo-text-container">
                <p className="ceo-text">
                  As President and CEO of Finex Development Inc., I would like to offer you my personal 
                  "thank you" for taking the time to review our company. In addition, I invite you to review 
                  our website in order to get to know Finex Development Inc. I'd like to briefly share with 
                  you why we started this company and what we believe in as our guiding principles.
                </p>
                
                <p className="ceo-text">
                  Finex Development Inc is a Canadian nationwide Construction and Facility 
                  Maintenance Company focusing on a wide spectrum of services, from small 
                  handyman services to large construction projects. Over the last several years, we 
                  have focused on delivering great services with skilled and licensed professionals in all 
                  areas. The familiarity of new technologies and the use of the newest methods as well 
                  as equipment, guarantee that any project will be completed with excellence, on time, 
                  and on budget.
                </p>
                
                <p className="ceo-text">
                  Our business philosophy is based on several fundamental principles which we follow 
                  religiously.
                </p>
                
                <p className="ceo-text">
                  Client Engagement: every project we undertake must create long-term value for the 
                  client. We want to significantly improve the overall performance of their organization; 
                  this is why we would like to think of ourselves as a "One point of contact" company. 
                  This simply means that our clients can focus on improving/expending their business 
                  while we take care of all handyman, construction and maintenance needs. Our 
                  extensive experience, industry knowledge and affordable rates have enabled us to 
                  expand even during difficult economic times.
                </p>
                
                <p className="ceo-text">
                  That's who we are, and that's what we do. I hope that Finex Development Inc. will have 
                  the opportunity to serve as your partner as well.
                </p>
                
                <div className="ceo-signature">
                  <p className="ceo-text">Best Regards,</p>
                  <p className="ceo-name">Peter Fiwek</p>
                </div>
              </div>
              
              {/* Right Column - Image */}
              <div className="ceo-image-container">
                <Image
                  src="/images/CEO pic.png"
                  alt="Peter Fiwek, CEO of Finex Development"
                  width={600}
                  height={700}
                  className="ceo-image"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
