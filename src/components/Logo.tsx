import styles from "./Logo.module.css";

export default function Logo({ large = false }: { large?: boolean }) {
  return (
    <span className={`${styles.logo} ${large ? styles.large : ""}`}>
      <svg className={styles.mark} viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="currentColor" />
        <path
          d="M9 10.5h14M16 10.5V23"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="23" cy="22" r="2.4" fill="#ff4f1f" />
      </svg>
      <span className={styles.word}>
        Technomics<span className={styles.ai}>AI</span>
      </span>
    </span>
  );
}
