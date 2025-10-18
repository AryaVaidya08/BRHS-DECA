'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './gallery.module.css';

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set page title
    document.title = 'BRHS DECA | Gallery';
    
    // Trigger fade-in animation when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const events = [
    {
      title: "Regionals",
      description: "Our chapter's performance at the regional competition, showcasing our members' dedication and preparation.",
      image: "/Stats_Gallery.png",
      year: "2025"
    },
    {
      title: "SCDC",
      description: "State Career Development Conference highlights featuring our top performers and memorable moments.",
      image: "/SCDC_gallery.jpeg", 
      year: "2025"
    },
    {
      title: "ICDC",
      description: "International Career Development Conference - representing BRHS DECA on the global stage.",
      image: "/ICDC_gallery.jpeg",
      year: "2025"
    },
    
  ];

  return (
    <div className={styles.page}>
      {/* Header Section */}
      <section className={styles.header}>
        <div className="container">
          <div className="text-center">
            <h1 className={styles.pageTitle}>Capturing Our Journey</h1>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={`${styles.section} ${isVisible ? styles.fadeIn : styles.fadeOut}`}>
        <div className={styles.postsSection}>
          <div className="text-center mb-4">
            <h2 className={styles.sectionTitle}>Our Events & Achievements</h2>
          </div>
          
          <div className="grid grid-3">
            {events.map((event, index) => (
              <div key={index} className={`card ${styles.galleryCard}`}>
                <div className={styles.imageContainer}>
                  {event.image === "/placeholder-event.jpg" ? (
                    <div className={styles.placeholderImage}>
                      <div className={styles.imagePlaceholder}>
                        <span className={styles.placeholderIcon}>📸</span>
                        <span className={styles.placeholderText}>Photo Coming Soon</span>
                      </div>
                    </div>
                  ) : (
                    <Image 
                      src={event.image} 
                      alt={event.title}
                      width={400}
                      height={300}
                      className={styles.galleryImage}
                    />
                  )}
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