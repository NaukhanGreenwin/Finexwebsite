"use client";

import about from "@/data/about.json";
import "@/app/stats-banner.css";

export function StatsBanner() {
  return (
    <section className="stats-banner">
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-value">{about.stats.yearEstablished}</div>
          <div className="stat-label-container">
            <div className="stat-label-top">Year</div>
            <div className="stat-label-bottom">Established</div>
          </div>
        </div>
        
        <div className="stat-item">
          <div className="stat-value">{about.stats.projectsCompleted}</div>
          <div className="stat-label-container">
            <div className="stat-label-top">Projects</div>
            <div className="stat-label-bottom">Completed</div>
          </div>
        </div>
        
        <div className="stat-item">
          <div className="stat-value">{about.stats.contractorsAppointed}</div>
          <div className="stat-label-container">
            <div className="stat-label-top">Contractors</div>
            <div className="stat-label-bottom">Appointed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
