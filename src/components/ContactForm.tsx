"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

const interests = [
  "AI strategy & roadmap",
  "Generative AI / LLM application",
  "AI agents & automation",
  "Data & predictive analytics",
  "Document or vision AI",
  "Integration, MLOps & governance",
  "Not sure yet — let's talk",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        throw new Error(
          typeof errorBody?.error === "string"
            ? errorBody.error
            : "Request failed"
        );
      }

      form.reset();
      setError("");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Request failed");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className={styles.success} role="status">
        <span className={styles.successIcon}>✓</span>
        <h3>Thanks — we&apos;ve got your request.</h3>
        <p>We&apos;ll reach out within one business day to schedule your consultation.</p>
        <button className={styles.reset} onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label>
          Name
          <input type="text" name="name" placeholder="Jordan Lee" autoComplete="name" />
        </label>
        <label>
          Work email *
          <input
            type="email"
            name="email"
            placeholder="jordan@company.com"
            autoComplete="email"
            required
          />
        </label>
      </div>
      <div className={styles.row}>
        <label>
          Company
          <input type="text" name="org" placeholder="Acme Inc." autoComplete="organization" />
        </label>
        <label>
          I&apos;m interested in
          <select name="interest" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {interests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label>
        What are you hoping AI can do for your business?
        <textarea
          name="message"
          rows={4}
          placeholder="e.g. We spend hours every week processing invoices and answering the same customer questions…"
        />
      </label>
      <button className={styles.submit} type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Book my free call →"}
      </button>
      {status === "error" && (
        <p className={styles.error} role="alert">
          {error || "Something went wrong. Please try again."}
        </p>
      )}
    </form>
  );
}
