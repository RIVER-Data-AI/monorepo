"use client";

import HealthCheck from "@/components/HealthCheck";

import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <HealthCheck />
    </div>
  );
}
