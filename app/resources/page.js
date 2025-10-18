'use client';

import { useState } from 'react';
import styles from './resources.module.css';
import resourcesData from './resources-data.json';
import FilterDropdown from '../components/FilterDropdown';
import { 
  FaBriefcase, 
  FaLightbulb, 
  FaDollarSign, 
  FaGlobe, 
  FaPhone, 
  FaPiggyBank,
  FaRedditAlien 
} from 'react-icons/fa';
import { SiQuizlet } from "react-icons/si";

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedEventType, setSelectedEventType] = useState('All Event Types');
  
  // Get all categories for the dropdown (eventCategory level)
  const categories = ['All Categories', ...Object.keys(resourcesData)];
  
  // Get all unique event types for the dropdown
  const getAllEventTypes = () => {
    const eventTypesSet = new Set();
    Object.values(resourcesData).forEach(category => {
      Object.keys(category).forEach(eventType => {
        eventTypesSet.add(eventType);
      });
    });
    return ['All Event Types', ...Array.from(eventTypesSet)];
  };
  
  const eventTypes = getAllEventTypes();
  
  // Category color mapping
  const categoryColors = {
    'Business Management and Administration': '#f8bd01',
    'Entrepreneurship': '#7c868a',
    'Finance': '#009b46',
    'Hospitality and Tourism': '#0c74bf',
    'Marketing': '#cc1c36',
    'Personal Financial Literacy': '#90c658'
  };

  // Category icon mapping
  const categoryIcons = {
    'Business Management and Administration': FaBriefcase,
    'Entrepreneurship': FaLightbulb,
    'Finance': FaDollarSign,
    'Hospitality and Tourism': FaGlobe,
    'Marketing': FaPhone,
    'Personal Financial Literacy': FaPiggyBank
  };
  
  // Get filtered events based on selected category and event type
  const getFilteredEvents = () => {
    let events = [];
    
    // First filter by eventCategory
    if (selectedCategory === 'All Categories') {
      // Get all events from all eventCategories
      Object.entries(resourcesData).forEach(([eventCategory, eventTypeData]) => {
        Object.entries(eventTypeData).forEach(([eventTypeName, eventsArray]) => {
          eventsArray.forEach(event => {
            events.push({ 
              ...event, 
              eventType: eventTypeName, 
              eventCategory: eventCategory 
            });
          });
        });
      });
    } else {
      // Get events from selected eventCategory
      const eventTypeData = resourcesData[selectedCategory];
      Object.entries(eventTypeData).forEach(([eventTypeName, eventsArray]) => {
        eventsArray.forEach(event => {
          events.push({ 
            ...event, 
            eventType: eventTypeName, 
            eventCategory: selectedCategory 
          });
        });
      });
    }
    
    // Then filter by event type
    if (selectedEventType !== 'All Event Types') {
      events = events.filter(event => event.eventType === selectedEventType);
    }
    
    // Sort events alphabetically by full name
    events.sort((a, b) => a.fullName.localeCompare(b.fullName));
    
    return events;
  };

  const filteredEvents = getFilteredEvents();

  return (
    <div className={styles.page}>
      {/* Header Section */}
      <section className={styles.header}>
        <div className="container">
          <div className="text-center">
            <h1 className={styles.pageTitle}>Resources to Study</h1>
          </div>
        </div>
      </section>

      {/* Main Buttons and Filters Section */}
      <section className={styles.mainButtonsSection}>
        <div className="container">
          <div className={styles.mainButtonsContainer}>
            <a 
              href="https://www.dropbox.com/scl/fo/bqpzb3705xmhdq8zq8a6l/ADSDZXrUoY-w8B-cVUXazNM?rlkey=7nkdshidq18a5244j8en64wet&e=1&st=sgmf8acd&dl=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.mainButton}
            >
              All Event Resources
            </a>
            <a 
              href="https://drive.google.com/drive/folders/1Ie1OR-TJbLJp4UARMQth31ccg3V_UwL4?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.mainButton}
            >
              Exam Blueprints
            </a>
            <FilterDropdown
              options={categories}
              selectedValue={selectedCategory}
              onSelect={setSelectedCategory}
              placeholder="All Categories"
            />
            <FilterDropdown
              options={eventTypes}
              selectedValue={selectedEventType}
              onSelect={setSelectedEventType}
              placeholder="All Event Types"
            />
          </div>
        </div>
      </section>

      {/* Resources List Section */}
      <section className={styles.resourcesListSection}>
        <div className="container">
          <div className={styles.resourcesList}>
            {filteredEvents.map((event, index) => {
              const categoryColor = categoryColors[event.eventType] || '#e8e8e8';
              const CategoryIcon = categoryIcons[event.eventType];
              
              return (
                <div 
                  key={index} 
                  className={styles.resourceItem}
                  style={{ backgroundColor: categoryColor }}
                >
                  <div className={styles.resourceItemContent}>
                    <div className={styles.resourceItemHeader}>
                      {CategoryIcon && (
                        <CategoryIcon className={styles.categoryIcon} />
                      )}
                      <span className={styles.resourceItemName}>
                        {event.fullName} ({event.shortName})
                      </span>
                    </div>
                    <a 
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.resourceItemButton}
                    >
                      Study Resources →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Extra Resources Section */}
      <section className={styles.extraResourcesSection}>
        <div className="container">
          <div className={styles.extraResourcesContent}>
            <h2 className={styles.extraResourcesTitle}>Extra Resources</h2>
            <div className={styles.extraResourcesList}>
              <div className={styles.extraResourceItem}>
                <a 
                  href="https://quizlet.com/search" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.extraResourceLink}
                >
                  <SiQuizlet className={styles.extraResourceIcon} />
                  Quizlet
                </a>
                <span className={styles.extraResourceDescription}>Flashcards & Sample Questions</span>
              </div>
              <div className={styles.extraResourceItem}>
                <a 
                  href="https://www.reddit.com/r/DECA/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.extraResourceLink}
                >
                  <FaRedditAlien className={styles.extraResourceIcon} />
                  Reddit
                </a>
                <span className={styles.extraResourceDescription}>Exam Opinions From Real People</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}