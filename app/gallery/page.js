import styles from './gallery.module.css';

export default function Gallery() {
  const events = [
    {
      title: "Regionals",
      description: "Our chapter's performance at the regional competition, showcasing our members' dedication and preparation.",
      image: "/placeholder-event.jpg",
      year: "2024"
    },
    {
      title: "SCDC",
      description: "State Career Development Conference highlights featuring our top performers and memorable moments.",
      image: "/placeholder-event.jpg", 
      year: "2024"
    },
    {
      title: "ICDC",
      description: "International Career Development Conference - representing BRHS DECA on the global stage.",
      image: "/placeholder-event.jpg",
      year: "2024"
    },
    {
      title: "Chapter Events",
      description: "Various chapter activities, workshops, and community engagement events throughout the year.",
      image: "/placeholder-event.jpg",
      year: "2024"
    },
    {
      title: "Leadership Training",
      description: "Professional development sessions and leadership workshops for our members.",
      image: "/placeholder-event.jpg",
      year: "2024"
    },
    {
      title: "Community Service",
      description: "Our chapter's community outreach and service projects that make a difference.",
      image: "/placeholder-event.jpg",
      year: "2024"
    }
  ];

  return (
    <div className={styles.page}>
      {/* Header Section */}
      <section className={styles.header}>
        <div className="container">
          <div className="text-center">
            <h1 className={styles.pageTitle}>Gallery</h1>
            <p className={styles.pageSubtitle}>
              Capturing our journey through competitions, events, and achievements
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className={styles.sectionTitle}>Our Events & Achievements</h2>
            <p className={styles.sectionSubtitle}>
              A visual journey through our DECA chapter&apos;s activities
            </p>
          </div>
          
          <div className="grid grid-3">
            {events.map((event, index) => (
              <div key={index} className={`card ${styles.galleryCard}`}>
                <div className={styles.imageContainer}>
                  <div className={styles.placeholderImage}>
                    <div className={styles.imagePlaceholder}>
                      <span className={styles.placeholderIcon}>📸</span>
                      <span className={styles.placeholderText}>Photo Coming Soon</span>
                    </div>
                  </div>
                  <div className={styles.yearBadge}>{event.year}</div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <p className={styles.eventDescription}>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}