"use client";

import { useEffect, useState } from "react";
import styles from "./AgentDemo.module.css";

const scenarios = [
  {
    trigger: "New invoice received",
    source: "accounts@ inbox",
    steps: [
      "Read PDF and extract line items",
      "Match to purchase order #4471",
      "Enter bill in QuickBooks",
      "Notify finance for approval",
    ],
    result: "Done in 41 seconds",
  },
  {
    trigger: "Customer asks about an order",
    source: "Website chat",
    steps: [
      "Look up order in Shopify",
      "Check carrier tracking",
      "Reply with delivery date",
      "Log conversation in CRM",
    ],
    result: "Resolved without a ticket",
  },
  {
    trigger: "New lead fills out form",
    source: "Website form",
    steps: [
      "Research company and role",
      "Score fit against ideal customer",
      "Draft a personal follow-up",
      "Book it on the rep's calendar",
    ],
    result: "Ready for the sales team",
  },
];

const STEP_MS = 900;

export default function AgentDemo() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [tick, setTick] = useState(0);
  const scenario = scenarios[scenarioIndex];
  const total = scenario.steps.length;

  useEffect(() => {
    // Ticks 0..total run the steps, total+1 shows the result, then hold before switching.
    const isHolding = tick > total + 2;
    const timer = window.setTimeout(
      () => {
        if (isHolding) {
          setScenarioIndex((i) => (i + 1) % scenarios.length);
          setTick(0);
        } else {
          setTick((t) => t + 1);
        }
      },
      isHolding ? 400 : STEP_MS
    );
    return () => window.clearTimeout(timer);
  }, [tick, total]);

  return (
    <div className={styles.card} aria-hidden="true">
      <div className={styles.top}>
        <span className={styles.live}>
          <span className={styles.liveDot} />
          AI agent · live
        </span>
        <span className={styles.counter}>
          {String(scenarioIndex + 1).padStart(2, "0")} / {String(scenarios.length).padStart(2, "0")}
        </span>
      </div>

      <div key={scenarioIndex} className={styles.body}>
        <div className={styles.trigger}>
          <span className={styles.triggerLabel}>Trigger · {scenario.source}</span>
          <strong>{scenario.trigger}</strong>
        </div>

        <ol className={styles.steps}>
          {scenario.steps.map((step, i) => {
            const state = tick > i + 1 ? "done" : tick === i + 1 ? "active" : "idle";
            return (
              <li key={step} className={styles[state]}>
                <span className={styles.status}>
                  {state === "done" ? "✓" : state === "active" ? <i className={styles.spinner} /> : ""}
                </span>
                {step}
              </li>
            );
          })}
        </ol>

        <div className={`${styles.result} ${tick > total ? styles.resultShow : ""}`}>
          <span>●</span> {scenario.result}
        </div>
      </div>

      <div className={styles.footer}>
        <span>Maintained by your team</span>
        <span className={styles.footerTag}>No AI engineers required</span>
      </div>
    </div>
  );
}
