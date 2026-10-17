"use client";

import { useState } from "react";
import Icon from "./Icon";
import styles from "./UseCases.module.css";

const departments = [
  {
    id: "support",
    label: "Customer Service",
    summary:
      "Answer customers instantly and accurately, and hand complex cases to your team with full context.",
    cases: [
      {
        title: "AI support assistant",
        body: "Answers questions 24/7 using your policies, product docs, and order data — and only what they say.",
      },
      {
        title: "Ticket triage & routing",
        body: "Classifies, prioritizes, and routes incoming requests, and drafts a first reply for agents to approve.",
      },
      {
        title: "Conversation insights",
        body: "Surfaces recurring issues, sentiment trends, and gaps in your knowledge base.",
      },
    ],
  },
  {
    id: "sales",
    label: "Sales & Marketing",
    summary:
      "Spend more time selling and less time researching, writing, and updating the CRM.",
    cases: [
      {
        title: "Lead scoring & enrichment",
        body: "Ranks leads by likelihood to convert and enriches records automatically.",
      },
      {
        title: "Personalized outreach",
        body: "Drafts on-brand emails, proposals, and follow-ups from CRM context for reps to review.",
      },
      {
        title: "Content engine",
        body: "Generates and repurposes campaign copy, product descriptions, and social posts at scale.",
      },
    ],
  },
  {
    id: "operations",
    label: "Operations",
    summary:
      "Automate the repetitive, rules-heavy work that slows down your back office.",
    cases: [
      {
        title: "Document processing",
        body: "Extracts data from invoices, purchase orders, contracts, and forms straight into your systems.",
      },
      {
        title: "Workflow agents",
        body: "AI agents that carry out multi-step tasks across email, spreadsheets, ERP, and internal tools.",
      },
      {
        title: "Demand & inventory forecasting",
        body: "Predicts demand so you can plan staffing, purchasing, and stock with confidence.",
      },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    summary:
      "Close faster and catch problems earlier with AI-assisted analysis and controls.",
    cases: [
      {
        title: "Anomaly & fraud detection",
        body: "Flags unusual transactions, duplicate payments, and out-of-policy expenses.",
      },
      {
        title: "Automated reporting",
        body: "Turns raw numbers into plain-language summaries and dashboards for leadership.",
      },
      {
        title: "Cash-flow forecasting",
        body: "Models revenue and spend scenarios using your historical data.",
      },
    ],
  },
  {
    id: "people",
    label: "HR & Internal",
    summary:
      "Give every employee instant, accurate answers and take admin work off HR's plate.",
    cases: [
      {
        title: "Internal knowledge assistant",
        body: "One place to ask about policies, benefits, procedures, and how-tos — with sources cited.",
      },
      {
        title: "Recruiting support",
        body: "Summarizes applications, drafts job posts, and schedules interviews.",
      },
      {
        title: "Onboarding copilot",
        body: "Guides new hires through tasks, training, and setup at their own pace.",
      },
    ],
  },
];

export default function UseCases() {
  const [activeId, setActiveId] = useState(departments[0].id);
  const active = departments.find((d) => d.id === activeId) ?? departments[0];

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs} role="tablist" aria-label="Departments">
        {departments.map((dept) => (
          <button
            key={dept.id}
            role="tab"
            id={`tab-${dept.id}`}
            aria-selected={dept.id === activeId}
            aria-controls={`panel-${dept.id}`}
            className={`${styles.tab} ${dept.id === activeId ? styles.tabActive : ""}`}
            onClick={() => setActiveId(dept.id)}
          >
            <span>{dept.label}</span>
            <Icon name="arrow" size={18} className={styles.tabArrow} />
          </button>
        ))}
      </div>

      <div
        key={active.id}
        className={styles.panel}
        role="tabpanel"
        id={`panel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
      >
        <p className={styles.summary}>{active.summary}</p>
        <div className={styles.grid}>
          {active.cases.map((item, index) => (
            <article
              key={item.title}
              className={styles.card}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
