'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useEffect } from 'react';
import styles from './our-team.module.css';

export default function OurTeam() {
  // Scroll animations for sections
  const [boardRef, boardVisible] = useScrollAnimation();
  const [eventHeadsRef, eventHeadsVisible] = useScrollAnimation();

  useEffect(() => {
    // Set page title
    document.title = 'BRHS DECA | Team';
  }, []);

  const boardMembers = [
    {
      name: "Neel Wakde",
      position: "President",
      description: "",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Manas Gumedelli", 
      position: "President",
      description: "",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Andrew Zagula",
      position: "Vice-President", 
      description: "Andrew is a senior at Bridgewater-Raritan High School. He qualified for ICDC last year and loves playing volleyball.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Harshith Nemani",
      position: "Vice-President",
      description: "",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Sanvi Parikh",
      position: "Deputy President",
      description: "",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Gayatri Krishnan",
      position: "Deputy President", 
      description: "",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Arav Kewalia",
      position: "Treasurer",
      description: "",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Arya Vaidya",
      position: "Webmaster",
      description: "Arya is a senior whose been in DECA for 2 years. He has been coding for 8 years with experience in Python, Java, C++, React, and ML. ",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Ohmal Suresh",
      position: "Secretary",
      description: "Ohmal is a senior in his second year of DECA. He placed top 20 in Principles of Marketing at ICDC, and has a passion for public speaking.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Mohnish Gumedelli",
      position: "Outreach Director",
      description: "",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Darsh Gaur",
      position: "Outreach Director",
      description: "",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Jadon Kim",
      position: "Social Media Manager",
      description: "Jadon is a junior who has been involved in DECA for a year. He also partakes in Congressional Debate and Lacrosse.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Victoria Wang",
      position: "Social Media Manager",
      description: "",
      image: "/placeholder-profile.jpg"
    }
  ];

  const eventHeads = [
    {
      name: "Om Shah",
      position: "Principles Events",
      description: "",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Rishi Khanna",
      position: "Finance",
      description: "",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Satwika Chakkilam",
      position: "Entrepreneurship",
      description: "Satwika is a junior who has been in DECA for two years. She loves to travel and hopes to pursue business in the future.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Rishabh Gupta",
      position: "Marketing",
      description: "",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Aarav Gupta",
      position: "Hospitality & Tourism",
      description: "",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Roma Gupta",
      position: "Written Events",
      description: "Roma is a sophomore who has been in DECA for 2 years and finalized at SCDC.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Ciara Decarlo",
      position: "Business Management and Administration",
      description: "",
      image: "/placeholder-profile.jpg"
    },
  ];

  return (
    <div className={styles.page}>
      {/* Board Members Header Section */}
      <section className={styles.boardMembersHeader}>
        <div className="container">
          <div className="text-center">
            <h1 className={styles.pageTitle}>Meet The People Behind BRHS DECA</h1>
          </div>
        </div>
      </section>

      {/* Board Members Content Section */}
      <section 
        ref={boardRef}
        className={`${styles.boardSection} ${boardVisible ? styles.fadeIn : styles.fadeOut}`}
      >
        <div className="container">
          <div className="text-center mb-4">
            <h2 className={styles.sectionTitleOther}>Board Members</h2>
          </div>
          <div className="grid grid-3">
            {boardMembers.map((member, index) => (
              <div key={index} className={`card ${styles.profileCard}`}>
                <div className={styles.profileInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <h4 className={styles.memberPosition}>{member.position}</h4>
                  <p className={styles.memberDescription}>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Heads Section */}
      <section 
        ref={eventHeadsRef}
        className={`section ${styles.eventHeadsSection} ${eventHeadsVisible ? styles.fadeIn : styles.fadeOut}`}
      >
        <div className="container">
          <div className="text-center mb-4">
            <h2 className={styles.sectionTitleOther}>Event Heads</h2>
          </div>
          
          <div className="grid grid-3">
            {eventHeads.map((head, index) => (
              <div key={index} className={`card ${styles.profileCard}`}>
                <div className={styles.profileInfo}>
                  <h3 className={styles.memberName}>{head.name}</h3>
                  <h4 className={styles.memberPosition}>{head.position}</h4>
                  <p className={styles.memberDescription}>{head.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}