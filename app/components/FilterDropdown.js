'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './FilterDropdown.module.css';

export default function FilterDropdown({ 
  options, 
  selectedValue, 
  onSelect, 
  placeholder = "All",
  className = ""
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (value) => {
    onSelect(value);
    setIsOpen(false);
  };

  const displayValue = selectedValue || placeholder;

  return (
    <div className={`${styles.filterDropdown} ${className}`} ref={dropdownRef}>
      <button
        className={`${styles.filterButton} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <div className={styles.filterIcon}>
          <div className={styles.filterLine}></div>
          <div className={styles.filterLine}></div>
          <div className={styles.filterLine}></div>
        </div>
        <span className={styles.filterText}>{displayValue}</span>
        <div className={`${styles.chevron} ${isOpen ? styles.chevronUp : styles.chevronDown}`}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>
      
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {options.map((option) => (
            <button
              key={option}
              className={`${styles.dropdownItem} ${selectedValue === option ? styles.selected : ''}`}
              onClick={() => handleSelect(option)}
              type="button"
            >
              <span className={styles.itemText}>{option}</span>
              {selectedValue === option && (
                <div className={styles.checkmark}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
