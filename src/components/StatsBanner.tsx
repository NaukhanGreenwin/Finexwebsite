"use client";

import about from "@/data/about.json";
import "@/app/stats-banner.css";

export function StatsBanner() {
  return (
    <section className="stats-banner">
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-value">{about.stats.yearEstablished}</div>
          <div className="stat-label">Year Established</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-value">{about.stats.projectsCompleted.toLocaleString()}</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-value">{about.stats.contractorsAppointed}</div>
          <div className="stat-label">Contractors Appointed</div>
        </div>
      </div>
    </section>
  );
}
