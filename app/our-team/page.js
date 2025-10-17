import styles from './our-team.module.css';

export default function OurTeam() {
  const boardMembers = [
    {
      name: "Neel Wakde",
      position: "President",
      description: "Leading the chapter with vision and dedication to excellence.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Manas Gumedelli", 
      position: "President",
      description: "Co-leading our chapter towards continued success and growth.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Andrew Zagula",
      position: "Vice-President", 
      description: "Supporting chapter operations and member development initiatives.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Harshith Nemani",
      position: "Vice-President",
      description: "Assisting in leadership and coordinating chapter activities.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Arya Vaidya",
      position: "Webmaster",
      description: "Managing our digital presence and technical infrastructure.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Ohmal Suresh",
      position: "Secretary",
      description: "Keeping our records organized and communications clear.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Arav Kewalia",
      position: "Treasurer",
      description: "Managing chapter finances and budget planning.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Sanvi Parikh",
      position: "Deputy President",
      description: "Supporting presidential duties and member engagement.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Gayatri Krishnan",
      position: "Deputy President", 
      description: "Helping coordinate events and member development programs.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Mohnish Gumedelli",
      position: "Outreach Director",
      description: "Building connections with the community and other organizations.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Darsh Gaur",
      position: "Outreach Director",
      description: "Expanding our chapter's reach and community impact.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Jadon Kim",
      position: "Social Media Manager",
      description: "Creating engaging content and managing our online presence.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Victoria Wang",
      position: "Social Media Manager",
      description: "Developing our social media strategy and content creation.",
      image: "/placeholder-profile.jpg"
    }
  ];

  const eventHeads = [
    {
      name: "Ciara Decarlo",
      position: "Head of Business Management and Administration",
      description: "Leading our business management and administration event preparation.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Roma Gupta",
      position: "Head of Written Events",
      description: "Coordinating written event strategies and member preparation.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Rishi Khanna",
      position: "Head of Finance",
      description: "Overseeing finance event training and competition preparation.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Aarav Gupta",
      position: "Head of Hospitality & Tourism",
      description: "Leading hospitality and tourism event initiatives.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Satwika Chakkilam",
      position: "Head of Entrepreneurship",
      description: "Driving entrepreneurship event development and training.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Rishabh Gupta",
      position: "Head of Marketing",
      description: "Coordinating marketing event strategies and member development.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Om Shah",
      position: "Head of Principles Events",
      description: "Leading principles event preparation and member training.",
      image: "/placeholder-profile.jpg"
    }
  ];

  return (
    <div className={styles.page}>
      {/* Board Members Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className={styles.sectionTitle}>Board Members</h2>
            <p className={styles.sectionSubtitle}>
              Our executive leadership team
            </p>
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
      <section className={`section ${styles.eventHeadsSection}`}>
        <div className="container">
          <div className="text-center mb-4">
            <h2 className={styles.sectionTitle}>Event Heads</h2>
            <p className={styles.sectionSubtitle}>
              Specialized leaders for each competition category
            </p>
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