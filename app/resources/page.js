import styles from './resources.module.css';

export default function Resources() {
  return (
    <div className={styles.page}>
      {/* Header Section */}
      <section className={styles.header}>
        <div className="container">
          <div className="text-center">
            <h1 className={styles.pageTitle}>Resources</h1>
            <p className={styles.pageSubtitle}>
              Study materials, competition guides, and helpful resources for DECA members
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <div className={styles.comingSoonCard}>
              <div className={styles.iconContainer}>
                <div className={styles.icon}>📚</div>
              </div>
              <h2 className={styles.comingSoonTitle}>Coming Soon</h2>
              <p className={styles.comingSoonDescription}>
                We&apos;re working hard to bring you comprehensive resources including:
              </p>
              <ul className={styles.resourceList}>
                <li>Study guides for all competition categories</li>
                <li>Practice tests and sample questions</li>
                <li>Competition preparation materials</li>
                <li>Leadership development resources</li>
                <li>Professional development tools</li>
              </ul>
              <p className={styles.comingSoonNote}>
                Check back soon for these valuable resources!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}