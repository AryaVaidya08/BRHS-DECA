"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaBriefcase, FaGraduationCap, FaHandshake, FaStar, FaTrophy, FaBullseye } from "react-icons/fa";
import { useScrollAnimation, useCountUp } from "./hooks/useScrollAnimation";
import styles from "./page.module.css";

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState(null);

  // Scroll animations for each section
  const [whatIsDecaRef, whatIsDecaVisible] = useScrollAnimation();
  const [achievementsRef, achievementsVisible] = useScrollAnimation();
  const [whyJoinRef, whyJoinVisible] = useScrollAnimation();
  const [eventsRef, eventsVisible] = useScrollAnimation();
  const [faqRef, faqVisible] = useScrollAnimation();

  // Count-up animations for achievement numbers
  const [membersRef, membersCount] = useCountUp("90+");
  const [awardsRef, awardsCount] = useCountUp("50+");
  const [icdcRef, icdcCount] = useCountUp("4");

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Welcome to BRHS DECA </h1>
              <p className={styles.heroSubtitle}>
                Empowering future business leaders through competitive events, 
                professional development, and community engagement.
              </p>
            </div>
            <div className={styles.heroImages}>
              <a href="https://hs.brrsd.org/" target="_blank">
                <Image
                  src="/BR_LOGO.png"
                  alt="BRHS Logo"
                  width={300}
                  height={300}
                  className={styles.heroLogo}
                />
              </a>
              <a href="https://deca.org/" target="_blank">
              <Image
                src="/DECA_LOGO.png"
                alt="DECA Logo"
                width={300}
                height={300}
                className={styles.heroLogo}
              />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is DECA Section */}
      <section 
        ref={whatIsDecaRef}
        className={`section ${styles.whatIsDecaSection} ${whatIsDecaVisible ? styles.fadeIn : styles.fadeOut}`}
      >
        <div className="container">
          <div className="text-center mb-4">
            <h2 className={styles.sectionTitle}>What is DECA?</h2>
          </div>
          <div className={styles.whatIsDecaContent}>
            <div className={styles.decaInfo}>
              <h3 className={styles.decaSubtitle}>DECA Inc. is a 501(c)(3) not-for-profit career and technical student organization</h3>
              <p className={styles.decaDescription}>
                With more than 225,000 members in all 50 United States, the District of Columbia, Canada, China, Germany, Poland, Guam, Mexico, Puerto Rico and Spain, DECA prepares emerging leaders and entrepreneurs for careers in marketing, finance, hospitality and management in high schools and colleges around the globe.
              </p>
            </div>
            <div className={styles.decaImageContainer}>
              <Image
                src="/deca_glass_image.jpg"
                alt="DECA Glass Awards"
                width={1920 * 0.25}
                height={1080 * 0.25}
                className={styles.decaImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
      <section 
        ref={achievementsRef}
        className={`section ${styles.achievementsSection} ${achievementsVisible ? styles.fadeIn : styles.fadeOut}`}
      >
        <div className="container">
          <div className="text-center mb-4">
            <h2 className={styles.sectionTitle}>Our Achievements</h2>
          </div>
          
          <div className={styles.achievementsGrid}>
            <div className={styles.achievementCard}>  
              <h3 className={styles.achievementTitle}>
                <span ref={membersRef} className={styles.achievementNumber}>{membersCount}+</span><br/>Members
              </h3>
            </div>
            
            <div className={styles.achievementCard}>
              <h3 className={styles.achievementTitle}>
                <span ref={awardsRef} className={styles.achievementNumber}>{awardsCount}+</span><br/>Awards
              </h3>
            </div>
            
            <div className={styles.achievementCard}>
              <h3 className={styles.achievementTitle}>
                <span ref={icdcRef} className={styles.achievementNumber}>{icdcCount}</span><br/>Students to ICDC
              </h3>
            </div>
          </div>

          <div className={styles.articlesSection}>
            <h3 className={styles.articlesTitle}>Featured Articles</h3>
            <div className={styles.articlesList}>
              <a href="https://brhsprowler.org/3504/community/newly-formed-deca-club-hosts-its-first-meeting/" className={styles.articleLink} target="_blank" rel="noopener noreferrer">
                <div className={styles.articleCard}>
                  <h4 className={styles.articleTitle}>Newly Formed DECA Club Hosts Its First Meeting</h4>
                  <p className={styles.articleSource}>BRHS Prowler</p>
                  <span className={styles.articleDate}>October 2024</span>
                </div>
              </a>
              
              <a href="https://brhsprowler.org/4076/community/deca-club-participated-at-districts-conference-at-kean-university/" className={styles.articleLink} target="_blank" rel="noopener noreferrer">
                <div className={styles.articleCard}>
                  <h4 className={styles.articleTitle}>BRHS DECA won 23 awards at Kean University Districts Conference</h4>
                  <p className={styles.articleSource}>BRHS Prowler</p>
                  <span className={styles.articleDate}>January 2025</span>
                </div>
              </a>
              
              <a href="https://hs.brrsd.org/o/brhs/article/2081576" className={styles.articleLink} target="_blank" rel="noopener noreferrer">
                <div className={styles.articleCard}>
                  <h4 className={styles.articleTitle}>BRHS DECA Achievements and State Conference Success</h4>
                  <p className={styles.articleSource}>Bridgewater-Raritan High School</p>
                  <span className={styles.articleDate}>March 2025</span>
                </div>
              </a>
              
              <a href="https://hs.brrsd.org/o/brhs/article/2229159" className={styles.articleLink} target="_blank" rel="noopener noreferrer">
                <div className={styles.articleCard}>
                  <h4 className={styles.articleTitle}>4 BRHS Students Excel At DECA ICDC</h4>
                  <p className={styles.articleSource}>Bridgewater-Raritan High School</p>
                  <span className={styles.articleDate}>April-May 2025</span>
                </div>
              </a>
              
              <div className={styles.moreToComeCard}>
                <div className={styles.moreToComeText}>More Articles Coming Soon!</div>
                <div className={styles.moreToComeSubtext}>Stay tuned for more exciting updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Should Join Section */}
      <section 
        ref={whyJoinRef}
        className={`section ${styles.whyJoinSection} ${whyJoinVisible ? styles.fadeIn : styles.fadeOut}`}
      >
        <div className="container">
          <div className="text-center mb-4">
            <h2 className={styles.sectionTitle}>Why You Should Join DECA</h2>
          </div>
          
          <div className={styles.joinBenefits}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitCardHeader}>
                <div className={styles.benefitIconContainer}>
                  <FaBriefcase className={styles.benefitIcon} />
                </div>
                <h3 className={styles.benefitTitle}>Career Preparation</h3>
              </div>
              <p className={styles.benefitDescription}>
                Gain real-world business experience and develop skills that employers value. 
                DECA members are 2x more likely to be employed in business-related fields.
              </p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitCardHeader}>
                <div className={styles.benefitIconContainer}>
                  <FaGraduationCap className={styles.benefitIcon} />
                </div>
                <h3 className={styles.benefitTitle}>College Readiness</h3>
              </div>
              <p className={styles.benefitDescription}>
                Build confidence, communication skills, and leadership abilities that 
                prepare you for college and beyond.
              </p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitCardHeader}>
                <div className={styles.benefitIconContainer}>
                  <FaHandshake className={styles.benefitIcon} />
                </div>
                <h3 className={styles.benefitTitle}>Networking</h3>
              </div>
              <p className={styles.benefitDescription}>
                Connect with like-minded students, industry professionals, and alumni 
                who can help guide your career path and open doors to opportunities.
              </p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitCardHeader}>
                <div className={styles.benefitIconContainer}>
                  <FaStar className={styles.benefitIcon} />
                </div>
                <h3 className={styles.benefitTitle}>Personal Growth</h3>
              </div>
              <p className={styles.benefitDescription}>
                Develop confidence, public speaking skills, and problem-solving abilities 
                through hands-on competitions and leadership opportunities.
              </p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitCardHeader}>
                <div className={styles.benefitIconContainer}>
                  <FaTrophy className={styles.benefitIcon} />
                </div>
                <h3 className={styles.benefitTitle}>Recognition</h3>
              </div>
              <p className={styles.benefitDescription}>
                Compete at regional, state, and international levels. Earn awards, 
                accolades, and recognition that enhance your college applications.
              </p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitCardHeader}>
                <div className={styles.benefitIconContainer}>
                  <FaBullseye className={styles.benefitIcon} />
                </div>
                <h3 className={styles.benefitTitle}>Fun & Friendships</h3>
              </div>
              <p className={styles.benefitDescription}>
                Join a supportive community of ambitious students. Participate in 
                exciting events, conferences, and activities while making lifelong friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events, Deadlines & Calendar Section */}
      <section 
        ref={eventsRef}
        className={`section ${styles.eventsSection} ${eventsVisible ? styles.fadeIn : styles.fadeOut}`}
      >
        <div className="container">
          <div className="text-center mb-4">
            <h2 className={styles.sectionTitle}>Events & Deadlines</h2>
          </div>
          
          <div className={styles.eventsContent}>
            <div className={styles.upcomingEvents}>
              <h3 className={styles.eventsSubtitle}>Upcoming Events</h3>
              <div className={styles.eventList}>
                <div className={styles.eventItem}>
                  <div className={styles.eventDate}>
                    <span className={styles.eventMonth}>JAN</span>
                    <span className={styles.eventDay}>8</span>
                  </div>
                  <div className={styles.eventDetails}>
                    <h4 className={styles.eventTitle}>Regional State Testing</h4>
                    <span className={styles.eventLocation}>📍 Kean University</span>
                  </div>
                </div>
                
                <div className={styles.eventItem}>
                  <div className={styles.eventDate}>
                    <span className={styles.eventMonth}>MAR</span>
                    <span className={styles.eventDay}>3-5</span>
                  </div>
                  <div className={styles.eventDetails}>
                    <h4 className={styles.eventTitle}>SCDC — State Career Development Conference</h4>
                    <span className={styles.eventLocation}>📍 Harrah&apos;s Atlantic City</span>
                  </div>
                </div>
                
                <div className={styles.eventItem}>
                  <div className={styles.eventDate}>
                    <span className={styles.eventMonth}>APR</span>
                    <span className={styles.eventDay}>25-28</span>
                  </div>
                  <div className={styles.eventDetails}>
                    <h4 className={styles.eventTitle}>ICDC — International Career Development Conference</h4>
                    <span className={styles.eventLocation}>📍 Atlanta, Georgia</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.importantDeadlines}>
              <h3 className={styles.eventsSubtitle}>Important Deadlines</h3>
              <div className={styles.deadlineList}>
                <div className={styles.deadlineItem}>
                  <div className={styles.deadlineDate}>November 10th</div>
                  <div className={styles.deadlineDescription}>Event Registration Deadline For Regionals</div>
                </div>
                <div className={styles.deadlineItem}>
                  <div className={styles.deadlineDate}>???</div>
                  <div className={styles.deadlineDescription}>More Deadlines Will Be Added Soon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        ref={faqRef}
        className={`section ${styles.faqSection} ${faqVisible ? styles.fadeIn : styles.fadeOut}`}
      >
        <div className="container">
          <div className="text-center mb-4">
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          </div>
          
          <div className={styles.faqContent}>
            <div className={styles.faqItem}>
              <button 
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(0)}
              >
                <span className={styles.questionText}>What is DECA?</span>
                <IoIosArrowDown className={`${styles.chevron} ${openFAQ === 0 ? styles.chevronOpen : ''}`} />
              </button>
              <div className={`${styles.faqAnswer} ${openFAQ === 0 ? styles.faqAnswerOpen : ''}`}>
                <div className={styles.answerContent}>
                  <p>
                    DECA is a career and technical student organization that prepares emerging leaders and entrepreneurs 
                    for careers in marketing, finance, hospitality and management.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={styles.faqItem}>
              <button 
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(1)}
              >
                <span className={styles.questionText}>Who can join DECA?</span>
                <IoIosArrowDown className={`${styles.chevron} ${openFAQ === 1 ? styles.chevronOpen : ''}`} />
              </button>
              <div className={`${styles.faqAnswer} ${openFAQ === 1 ? styles.faqAnswerOpen : ''}`}>
                <div className={styles.answerContent}>
                  <p>
                    Any high school student interested in business, marketing, finance, hospitality, or management 
                    can join DECA. No prior experience is required.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={styles.faqItem}>
              <button 
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(2)}
              >
                <span className={styles.questionText}>What are competitive events?</span>
                <IoIosArrowDown className={`${styles.chevron} ${openFAQ === 2 ? styles.chevronOpen : ''}`} />
              </button>
              <div className={`${styles.faqAnswer} ${openFAQ === 2 ? styles.faqAnswerOpen : ''}`}>
                <div className={styles.answerContent}>
                  <p>
                    Competitive events are role-play scenarios, written tests, and presentations that test your 
                    knowledge and skills in various business areas. They range from marketing to finance to hospitality.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={styles.faqItem}>
              <button 
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(3)}
              >
                <span className={styles.questionText}>How much does it cost to join?</span>
                <IoIosArrowDown className={`${styles.chevron} ${openFAQ === 3 ? styles.chevronOpen : ''}`} />
              </button>
              <div className={`${styles.faqAnswer} ${openFAQ === 3 ? styles.faqAnswerOpen : ''}`}>
                <div className={styles.answerContent}>
                  <p>
                    The registration fee for BRHS DECA is $20. This covers your membership for the entire school year and includes access to all competitive events, workshops, and activities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={styles.faqItem}>
              <button 
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(4)}
              >
                <span className={styles.questionText}>What are the benefits of joining?</span>
                <IoIosArrowDown className={`${styles.chevron} ${openFAQ === 4 ? styles.chevronOpen : ''}`} />
              </button>
              <div className={`${styles.faqAnswer} ${openFAQ === 4 ? styles.faqAnswerOpen : ''}`}>
                <div className={styles.answerContent}>
                  <p>
                    DECA members develop leadership skills, gain real-world business experience, network with industry professionals, and enhance their college applications.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={styles.faqItem}>
              <button 
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(5)}
              >
                <span className={styles.questionText}>How do I get involved?</span>
                <IoIosArrowDown className={`${styles.chevron} ${openFAQ === 5 ? styles.chevronOpen : ''}`} />
              </button>
              <div className={`${styles.faqAnswer} ${openFAQ === 5 ? styles.faqAnswerOpen : ''}`}>
                <div className={styles.answerContent}>
                  <p>
                    Attend our meetings, participate in competitive events, run for officer positions, and get involved 
                    in community service projects. Contact our advisor for more information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
