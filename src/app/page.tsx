import Header from "@/components/Header";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import AgentDemo from "@/components/AgentDemo";
import UseCases from "@/components/UseCases";
import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css";

const platforms = [
  "OpenAI",
  "Anthropic Claude",
  "Google Gemini",
  "Microsoft Azure",
  "AWS",
  "Meta Llama",
  "Salesforce",
  "HubSpot",
  "Microsoft 365",
  "Google Workspace",
  "Slack",
  "QuickBooks",
];

const comparison = [
  {
    label: "Getting started",
    team: "Months of recruiting and onboarding",
    us: "Weeks, not months",
  },
  {
    label: "Cost",
    team: "Ongoing salaries, benefits, and tooling",
    us: "Project-based, scoped to your budget",
  },
  {
    label: "Expertise",
    team: "Limited to the people you can hire",
    us: "Specialists in strategy, LLMs, agents, and data",
  },
  {
    label: "Risk",
    team: "Turnover can leave systems orphaned",
    us: "Documented, handed over, and fully yours",
  },
  {
    label: "Who runs it",
    team: "New AI engineers on your payroll",
    us: "Your existing staff, trained by us",
  },
];

const steps = [
  {
    title: "We find it",
    body: "We learn how your business runs and pinpoint where AI will save the most time and money, so you start with a clear win.",
    tags: ["Workshops", "Process audit", "ROI roadmap"],
  },
  {
    title: "We build & hook it up",
    body: "We set up the AI and connect it to the tools you already use: your CRM, email, documents, website, and more.",
    tags: ["Assistants", "Agents", "Integrations"],
  },
  {
    title: "We train your team",
    body: "Hands-on sessions and simple playbooks so your own staff can run, update, and maintain everything with confidence.",
    tags: ["Live training", "Playbooks", "Admin guides"],
  },
  {
    title: "You own it",
    body: "No lock-in and no AI hires. It's your system, run by your people, and we're on call whenever you want a hand.",
    tags: ["Full handoff", "Optional support"],
  },
];

const engagements = [
  {
    name: "AI Readiness Assessment",
    tag: "Best place to start",
    body: "A focused review of your processes and data, ending in a prioritized, costed AI roadmap.",
    items: ["Stakeholder workshops", "Opportunity & ROI analysis", "Actionable roadmap"],
  },
  {
    name: "Pilot Project",
    tag: "Prove it",
    body: "One high-impact use case built on your real data, so you see results before you scale.",
    items: ["Working solution", "Measured results", "Go / no-go plan"],
  },
  {
    name: "Full Implementation",
    tag: "Build",
    body: "End-to-end setup, integration, and staff training for AI across your business.",
    items: ["Production build", "Systems integration", "Team training & handoff"],
  },
  {
    name: "Fractional AI Advisor",
    tag: "Ongoing",
    body: "Senior AI guidance on retainer for when your team wants a partner on call.",
    items: ["Strategy & vendor reviews", "New use cases", "Governance & policy"],
  },
];

const faqs = [
  {
    q: "Do we really not need to hire anyone?",
    a: "Really. We do the technical setup and integration, then train the staff you already have to run and maintain it. Day-to-day upkeep, like updating content, reviewing results, and adjusting settings, is designed for non-engineers.",
  },
  {
    q: "We're new to AI. Where should we start?",
    a: "Most clients start with an AI Readiness Assessment. We learn how your business works, look at the data and tools you already have, and hand you a prioritized list of opportunities so your first project is the right one.",
  },
  {
    q: "What if something breaks after you leave?",
    a: "Every handoff includes documentation and playbooks written for your team. Most issues are simple fixes your staff will know how to make. For anything bigger, we offer optional support so you're never stuck.",
  },
  {
    q: "How do you keep our data secure?",
    a: "We use permissioned access, keep data within your approved environments wherever possible, and choose enterprise AI providers that don't train on your data. Every solution includes guardrails, logging, and human review where it matters.",
  },
  {
    q: "Which AI platforms do you work with?",
    a: "We're vendor-neutral. We work with OpenAI, Anthropic Claude, Google Gemini, open-source models, and cloud platforms like Azure and AWS, and pick whatever best fits your needs and budget.",
  },
];

export default function Home() {
  return (
    <div className={styles.page} id="top">
      <Header />

      <main>
        {/* ---------- Hero ---------- */}
        <section className={styles.hero}>
          <div className={styles.guides} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className={styles.shell}>
            <div className={styles.heroMeta}>
              <span className={styles.label}>
                <span className={styles.labelDot} />
                AI consulting & implementation
              </span>
              <span className={styles.heroMetaRight}>
                Strategy → Setup → Staff training
              </span>
            </div>

            <h1 className={styles.heroTitle}>
              You don’t need to hire{" "}
              <em className={styles.heroEm}>
                AI engineers
                <svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M3 14 C 70 4, 160 4, 297 10" />
                </svg>
              </em>
              <span className={styles.accentDot}>.</span>
            </h1>

            <div className={styles.heroBottom}>
              <div className={styles.heroCopy}>
                <p className={styles.heroLead}>
                  We hook AI into the tools your business already runs on, then
                  train your staff to maintain it. You get an in-house AI
                  capability without the hiring, the salaries, or the learning
                  curve.
                </p>
                <div className={styles.heroActions}>
                  <a className={styles.btnPrimary} href="#contact">
                    Book a free call
                    <span className={styles.btnIcon}>
                      <Icon name="arrow" size={16} />
                    </span>
                  </a>
                  <a className={styles.btnGhost} href="#how">
                    See how it works
                  </a>
                </div>
                <ul className={styles.heroChecks}>
                  <li>
                    <Icon name="check" size={16} /> No AI hires
                  </li>
                  <li>
                    <Icon name="check" size={16} /> Done-for-you setup
                  </li>
                  <li>
                    <Icon name="check" size={16} /> Staff training included
                  </li>
                </ul>
              </div>

              <div className={styles.heroDemo}>
                <AgentDemo />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Platforms ---------- */}
        <section className={styles.platforms} aria-label="Platforms we work with">
          <p className={styles.platformsLabel}>
            Works with the platforms you already trust
          </p>
          <div className={styles.marquee}>
            <div className={styles.marqueeTrack}>
              {[...platforms, ...platforms].map((name, i) => (
                <span
                  key={i}
                  className={styles.marqueeItem}
                  aria-hidden={i >= platforms.length}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Comparison ---------- */}
        <section id="why" className={styles.dark}>
          <div className={styles.shell}>
            <Reveal className={styles.splitHeader}>
              <span className={styles.labelDark}>Why Technomics</span>
              <h2 className={styles.h2}>
                Two ways to bring AI into your business.{" "}
                <em>One of them doesn&apos;t involve a hiring spree.</em>
              </h2>
            </Reveal>

            <Reveal className={styles.timeline}>
              <div className={styles.timelineRow}>
                <span className={styles.timelineName}>Build an in-house AI team</span>
                <div className={styles.track}>
                  <div className={`${styles.bar} ${styles.barTeam}`}>
                    {["Recruit", "Onboard", "Ramp up", "Build", "Result"].map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.timelineRow}>
                <span className={styles.timelineName}>Work with Technomics</span>
                <div className={styles.track}>
                  <div className={`${styles.bar} ${styles.barUs}`}>
                    {["Discover", "Build", "Train", "Result"].map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className={styles.compare}>
              <div className={`${styles.compareRow} ${styles.compareHead}`}>
                <span />
                <span>Hire an AI team</span>
                <span className={styles.compareUsHead}>Technomics AI</span>
              </div>
              {comparison.map((row) => (
                <div key={row.label} className={styles.compareRow}>
                  <span className={styles.compareLabel}>{row.label}</span>
                  <span className={styles.compareTeam}>
                    <span className={styles.cross}>✕</span>
                    {row.team}
                  </span>
                  <span className={styles.compareUs}>
                    <span className={styles.tick}>
                      <Icon name="check" size={14} />
                    </span>
                    {row.us}
                  </span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ---------- How it works ---------- */}
        <section id="how" className={styles.section}>
          <div className={styles.shell}>
            <Reveal className={styles.splitHeader}>
              <span className={styles.label}>How it works</span>
              <h2 className={styles.h2}>
                We set it up. <em>Your team runs it.</em>
              </h2>
            </Reveal>

            <ol className={styles.steps}>
              {steps.map((step, i) => (
                <Reveal as="li" key={step.title} delay={i * 60} className={styles.step}>
                  <span className={styles.stepNum}>0{i + 1}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <div className={styles.stepBody}>
                    <p>{step.body}</p>
                    <div className={styles.stepTags}>
                      {step.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- Services bento ---------- */}
        <section id="services" className={styles.section}>
          <div className={styles.shell}>
            <Reveal className={styles.splitHeader}>
              <span className={styles.label}>Services</span>
              <h2 className={styles.h2}>
                Everything AI can do for your business, <em>done for you.</em>
              </h2>
            </Reveal>

            <div className={styles.bento}>
              <Reveal as="article" className={`${styles.tile} ${styles.tileWide} ${styles.tileDark}`}>
                <div className={styles.tileText}>
                  <span className={styles.tileKicker}>01 · Generative AI</span>
                  <h3>AI assistants & chatbots</h3>
                  <p>
                    Assistants for customers and staff that answer from your own
                    policies, products, and documents, with sources and a human
                    handoff when needed.
                  </p>
                </div>
                <div className={styles.chat} aria-hidden="true">
                  <div className={styles.chatUser}>What&apos;s your return policy for opened items?</div>
                  <div className={styles.chatAi}>
                    Opened items can be returned within 30 days for store
                    credit. Want me to start a return for order #2291?
                    <span className={styles.chatSource}>Source · Returns Policy, p.2</span>
                  </div>
                </div>
              </Reveal>

              <Reveal as="article" delay={80} className={styles.tile}>
                <span className={styles.tileKicker}>02 · Automation</span>
                <h3>AI agents & workflows</h3>
                <p>Agents that finish multi-step tasks across your tools, with your approval where it matters.</p>
                <div className={styles.flow} aria-hidden="true">
                  <span>Email</span>
                  <i />
                  <span className={styles.flowAgent}>Agent</span>
                  <i />
                  <span>CRM</span>
                </div>
              </Reveal>

              <Reveal as="article" className={styles.tile}>
                <span className={styles.tileKicker}>03 · Strategy</span>
                <h3>AI strategy & roadmap</h3>
                <p>Know exactly where AI pays off before you spend a dollar.</p>
                <div className={styles.matrix} aria-hidden="true">
                  <span className={styles.matrixY}>Impact</span>
                  <span className={styles.matrixX}>Effort</span>
                  <i style={{ left: "18%", top: "22%" }} className={styles.matrixHot} />
                  <i style={{ left: "38%", top: "40%" }} />
                  <i style={{ left: "62%", top: "28%" }} />
                  <i style={{ left: "72%", top: "64%" }} />
                  <i style={{ left: "30%", top: "70%" }} />
                </div>
              </Reveal>

              <Reveal as="article" delay={80} className={styles.tile}>
                <span className={styles.tileKicker}>04 · Documents</span>
                <h3>Document AI</h3>
                <p>Pull data from invoices, contracts, and forms straight into your systems.</p>
                <div className={styles.doc} aria-hidden="true">
                  <div className={styles.docLines}>
                    <i style={{ width: "60%" }} />
                    <i className={styles.docHit} style={{ width: "40%" }} />
                    <i style={{ width: "85%" }} />
                    <i className={styles.docHit} style={{ width: "30%" }} />
                  </div>
                  <div className={styles.docFields}>
                    <span>Invoice # → 4471</span>
                    <span>Total → $3,280</span>
                  </div>
                </div>
              </Reveal>

              <Reveal as="article" delay={160} className={styles.tile}>
                <span className={styles.tileKicker}>05 · Data</span>
                <h3>Predictive analytics</h3>
                <p>Forecast demand, spot churn, and catch anomalies early.</p>
                <div className={styles.bars} aria-hidden="true">
                  {[38, 52, 44, 63, 58, 74, 88].map((h, i) => (
                    <i key={i} style={{ height: `${h}%` }} className={i === 6 ? styles.barHot : ""} />
                  ))}
                </div>
              </Reveal>

              <Reveal as="article" className={`${styles.tile} ${styles.tileFull} ${styles.tileAccent}`}>
                <div className={styles.tileText}>
                  <span className={styles.tileKicker}>06 · Handoff</span>
                  <h3>Integration, security & staff training</h3>
                  <p>
                    We connect everything to your existing stack, lock it down,
                    and train your people until they&apos;re confident running it
                    on their own.
                  </p>
                </div>
                <div className={styles.stack} aria-hidden="true">
                  {["CRM", "Email", "Website", "Google Drive", "ERP", "Slack", "Spreadsheets", "Help desk"].map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                  <span className={styles.stackTrain}>
                    <Icon name="users" size={16} /> Your team, trained
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- Statement ---------- */}
        <section className={styles.statement}>
          <div className={styles.shell}>
            <Reveal>
              <p className={styles.statementText}>
                AI shouldn&apos;t require an <em>AI department.</em>
              </p>
              <div className={styles.statementFoot}>
                <p>
                  It needs the right partner to set it up, and a team that knows
                  how to run it. We give you both.
                </p>
                <a className={styles.btnInverse} href="#contact">
                  Start with a free call
                  <Icon name="arrow" size={16} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Use cases ---------- */}
        <section id="use-cases" className={styles.section}>
          <div className={styles.shell}>
            <Reveal className={styles.splitHeader}>
              <span className={styles.label}>Use cases</span>
              <h2 className={styles.h2}>
                Practical AI for <em>every department.</em>
              </h2>
            </Reveal>
            <Reveal>
              <UseCases />
            </Reveal>
          </div>
        </section>

        {/* ---------- Engagements ---------- */}
        <section id="engagements" className={styles.section}>
          <div className={styles.shell}>
            <Reveal className={styles.splitHeader}>
              <span className={styles.label}>Ways to work together</span>
              <h2 className={styles.h2}>
                Start small. <em>Scale what works.</em>
              </h2>
            </Reveal>

            <div className={styles.engage}>
              {engagements.map((e, i) => (
                <Reveal as="article" key={e.name} delay={i * 70} className={styles.engageCol}>
                  <span className={styles.engageTag}>{e.tag}</span>
                  <h3>{e.name}</h3>
                  <p>{e.body}</p>
                  <ul>
                    {e.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a href="#contact" className={styles.engageLink}>
                    Talk to us <Icon name="arrow" size={15} />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section id="faq" className={styles.section}>
          <div className={`${styles.shell} ${styles.faq}`}>
            <Reveal className={styles.faqIntro}>
              <span className={styles.label}>FAQ</span>
              <h2 className={styles.h2}>
                Good <em>questions.</em>
              </h2>
              <p className={styles.muted}>
                Don&apos;t see yours?{" "}
                <a href="#contact" className={styles.inlineLink}>
                  Ask us directly.
                </a>
              </p>
            </Reveal>
            <Reveal className={styles.faqList}>
              {faqs.map((faq) => (
                <details key={faq.q} className={styles.faqItem}>
                  <summary>
                    {faq.q}
                    <span className={styles.faqToggle} />
                  </summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className={styles.section}>
          <div className={styles.shell}>
            <Reveal className={styles.contact}>
              <div className={styles.contactIntro}>
                <span className={styles.labelDark}>Free consultation</span>
                <h2 className={styles.contactTitle}>
                  Let&apos;s find your <em>first AI win.</em>
                </h2>
                <p>
                  A 30-minute call, no obligation. Tell us how your business
                  runs and we&apos;ll show you where AI can make the biggest
                  difference, and what it takes to get there without hiring.
                </p>
                <div className={styles.contactDetails}>
                  <a href="mailto:info@technomicsai.com">
                    <Icon name="mail" size={18} /> info@technomicsai.com
                  </a>
                  <a href="tel:+19494445070">
                    <Icon name="phone" size={18} /> +1 (949) 444-5070
                  </a>
                </div>
              </div>
              <div className={styles.contactForm}>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className={styles.footer}>
        <div className={`${styles.shell} ${styles.footerTop}`}>
          <div className={styles.footerBrand}>
            <Logo />
            <p>AI set up for your business. Run by your team.</p>
          </div>
          <nav className={styles.footerLinks} aria-label="Footer">
            <a href="#why">Why us</a>
            <a href="#how">How it works</a>
            <a href="#services">Services</a>
            <a href="#use-cases">Use cases</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className={styles.footerLinks}>
            <a href="mailto:info@technomicsai.com">info@technomicsai.com</a>
            <a href="tel:+19494445070">+1 (949) 444-5070</a>
          </div>
        </div>
        <div className={styles.shell}>
          <p className={styles.wordmark} aria-hidden="true">
            Technomics<em>AI</em>
          </p>
          <div className={styles.footerBottom}>
            <span>© {new Date().getFullYear()} Technomics AI</span>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
