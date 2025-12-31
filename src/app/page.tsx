"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showPhone, setShowPhone] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoStatus, setDemoStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [demoError, setDemoError] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  return (
    <div className={styles.page}>
      {showThankYou && (
        <div className={styles.thankYouToast} role="status">
          Thanks! We will reach out shortly.
        </div>
      )}
      <header className={`${styles.nav} ${styles.shell}`}>
        <div className={styles.brand}>
          <Link href="https://technomicsai.com" aria-label="Technomics AI">
            <Image
              src="/technomicsai.png"
              width={471}
              height={73}
              alt="technomicsai"
            />
          </Link>
        </div>
        <nav className={styles.navLinks}>
          <a href="#solutions">Solutions</a>
          <a href="#difference">Difference</a>
          <a href="#samples">Samples</a>
        </nav>
        <div className={styles.navActions}>
          <button className={styles.ghost} onClick={() => setDemoOpen(true)}>
            Get demo
          </button>
          <button
            className={styles.primary}
            onClick={() => setShowPhone(true)}
          >
            {showPhone ? "+1 (949) 444-5070" : "Talk to us"}
          </button>
        </div>
      </header>

      <main>
        <section className={`${styles.hero} ${styles.shell}`}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>
              Built for schools 
            </p>
            <h1 className={styles.heroTitle}>
              Turn every question into a confident answer for families and
              staff.
            </h1>
            <p className={styles.subtitle}>
              Technomics AI is a modern, secure assistance that answers many question from 
              admissions to attendance, events, faculties, etc.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primary}>Book a demo</button>
              <button className={styles.outline}>View sample flows</button>
            </div>
            <div className={styles.heroHighlights}>
              <span className={styles.heroTag}>99.2% answer accuracy</span>
              <span className={styles.heroTag}>Human handoff in 8s</span>
              <span className={styles.heroTag}>Avoid misinformation</span>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelBadge}>Your School Chat</span>
              <span className={styles.panelTime}>08:14 AM</span>
            </div>
            <div className={styles.chatStack}>
              <div className={`${styles.chatBubble} ${styles.fromUser}`}>
                What's the next event?
              </div>
              <div className={`${styles.chatBubble} ${styles.fromBot}`}>
                Winter Celebration on December 14th 2025.
              </div>
              <div className={`${styles.chatBubble} ${styles.fromUser}`}>
                Who's teaching math in your school?
              </div>
              <div className={`${styles.chatBubble} ${styles.fromBot}`}>
                Mr. Smith. He teaches grades 6, 7, and 8.
              </div>
            </div>
            <div className={styles.panelFooter}>
              <div className={styles.signal}>Events</div>
              <div className={styles.signal}>Calendar</div>
              <div className={styles.signal}>Payments</div>
            </div>
          </div>
        </section>

        <section id="solutions" className={`${styles.section} ${styles.shell}`}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>What you get</p>
              <h2 className={styles.sectionTitle}>
                A concierge-grade AI to provide information.
              </h2>
            </div>
            <p className={styles.sectionSubtitle}>
              Every interaction is contextual, verified, and routed to the
              page on your website.
            </p>
          </div>
        </section>

        <section
          id="difference"
          className={`${styles.section} ${styles.shell}`}
        >
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>The difference</p>
              <h2 className={styles.sectionTitle}>
                Not another chatbot. A trusted operations layer.
              </h2>
            </div>
          </div>
          <div className={styles.compareGrid}>
            <article className={styles.compareCard}>
              <h3>Generic chatbots</h3>
              <ul>
                <li>
                  <span className={styles.minus}>-</span>
                  Respond with generic FAQ-style answers
                </li>
                <li>
                  <span className={styles.minus}>-</span>
                  Ignore your policies and calendars
                </li>
                <li>
                  <span className={styles.minus}>-</span>
                  No handoff or accountability trail
                </li>
                <li>
                  <span className={styles.minus}>-</span>
                  Hard to trust with sensetive data
                </li>
              </ul>
            </article>
            <article className={`${styles.compareCard} ${styles.compareAccent}`}>
              <h3>Technomics AI</h3>
              <ul>
                <li>
                  <span className={styles.plus}>+</span>
                  Respond with maximum accuracy
                </li>
                <li>
                  <span className={styles.plus}>+</span>
                  No hallucination. Asks follow up questions if not clear
                </li>
                <li>
                  <span className={styles.plus}>+</span>
                  First, it looks into index information, 2nd, on your website, and then if there are no info, it gets assistance from LLM
                </li>
                <li>
                  <span className={styles.plus}>+</span>
                  Built on secure, permissioned data access
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section id="samples" className={`${styles.section} ${styles.shell}`}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Sample experiences</p>
              <h2 className={styles.sectionTitle}>
                Show families the answer faster than a staff.
              </h2>
            </div>
            <p className={styles.sectionSubtitle}>
              Designed to reduce repetitive staff requests without losing the
              human touch.
            </p>
          </div>
          <div className={styles.sampleGrid}>
            <article className={styles.sampleCard}>
              <span className={styles.sampleTag}>Admissions</span>
              <h3>“I need the tour information?”</h3>
              <p>
                Automatically books the next open tour slot and sends the schedule to the right staff.
              </p>
            </article>
            <article className={styles.sampleCard}>
              <span className={styles.sampleTag}>Event</span>
              <h3>“How can I volunteer for the next event”</h3>
              <p>
                Shares the right event information and record your name.
              </p>
            </article>
            <article className={styles.sampleCard}>
              <span className={styles.sampleTag}>Payments</span>
              <h3>“How can I pay for the T-shirt?”</h3>
              <p>
                Shows you the right link on Square or other payment sites.
              </p>
            </article>
          </div>
        </section>

        <section className={`${styles.section} ${styles.shell}`}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>How it works</p>
              <h2 className={styles.sectionTitle}>
                Launch in weeks, not semesters.
              </h2>
            </div>
          </div>
          <div className={styles.steps}>
            <div className={styles.stepCard}>
              <span className={styles.stepNumber}>01</span>
              <h3>Connect your sources</h3>
              <p>
                Sync calendars, handbooks, and data with scoped access and
                approval workflows.
              </p>
            </div>
            <div className={styles.stepCard}>
              <span className={styles.stepNumber}>02</span>
              <h3>Train and Update</h3>
              <p>
                Update frequently.
              </p>
            </div>
            <div className={styles.stepCard}>
              <span className={styles.stepNumber}>03</span>
              <h3>Go live and improve</h3>
              <p>
                Track resolutions, update policies, and export insights for
                leadership.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.cta} ${styles.shell}`}>
          <div>
            <p className={styles.eyebrow}>Ready to launch</p>
            <h2 className={styles.sectionTitle}>
              Give your staff time back without losing the human touch.
            </h2>
            <p className={styles.sectionSubtitle}>
              Start with a focused pilot, then expand to new departments as
              confidence grows.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <button className={styles.primary}>Schedule a demo</button>
            <button className={styles.ghost}>See pricing</button>
          </div>
        </section>
      </main>

      {demoOpen && (
        <div className={styles.demoOverlay} onClick={() => setDemoOpen(false)}>
          <div
            className={styles.demoDrawer}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.demoHeader}>
              <div>
                <p className={styles.eyebrow}>Request a demo</p>
                <h3 className={styles.demoTitle}>Pick a time or leave details.</h3>
              </div>
              <button
                className={styles.demoClose}
                onClick={() => setDemoOpen(false)}
                aria-label="Close demo panel"
              >
                ?
              </button>
            </div>
            <div className={styles.demoBody}>
              <form
                className={styles.demoForm}
                onSubmit={async (event) => {
                  event.preventDefault();
                  setDemoStatus("sending");
                  const form = event.currentTarget;
                  const formData = new FormData(form);
                  const payload = {
                    name: formData.get("name"),
                    email: formData.get("email"),
                    org: formData.get("org"),
                    message: formData.get("message"),
                  };

                  try {
                    const response = await fetch("/api/demo", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(payload),
                    });

                    if (!response.ok) {
                      const errorBody = await response.json().catch(() => ({}));
                      const message =
                        typeof errorBody?.error === "string"
                          ? errorBody.error
                          : "Request failed";
                      throw new Error(message);
                    }

                    setDemoStatus("sent");
                    setDemoError("");
                    form.reset();
                    setDemoOpen(false);
                    setShowThankYou(true);
                    window.setTimeout(() => setShowThankYou(false), 3500);
                  } catch (error) {
                    const message =
                      error instanceof Error ? error.message : "Request failed";
                    setDemoError(message);
                    setDemoStatus("error");
                  }
                }}
              >
                <label>
                  Name
                  <input type="text" name="name" placeholder="Jordan Lee" />
                </label>
                <label>
                  Work email
                  <input type="email" name="email" placeholder="jordan@school.org" />
                </label>
                <label>
                  School / district
                  <input type="text" name="org" placeholder="Riverside Unified" />
                </label>
                <label>
                  Message
                  <textarea name="message" rows={3} placeholder="What would you like to see?" />
                </label>
                <button
                  className={styles.primary}
                  type="submit"
                  disabled={demoStatus === "sending"}
                >
                  {demoStatus === "sending" ? "Sending..." : "Send request"}
                </button>
                {demoStatus === "error" && (
                  <p className={styles.demoStatusError} role="status">
                    {demoError || "Something went wrong. Please try again."}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      )}

      <footer className={`${styles.footer} ${styles.shell}`}>
        <div>
          <strong>Technomics AI</strong>
          <p>The best chat assistance for schools.</p>
        </div>
        <div className={styles.footerLinks}>
          <span>info@technomicsai.com</span>
          <span>+1 (949) 444-5070</span>
        </div>
      </footer>
    </div>
  );
}
