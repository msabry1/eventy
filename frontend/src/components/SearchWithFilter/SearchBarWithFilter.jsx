import React, { useState } from 'react';
import styles from './SearchBarWithFilter.module.css';

const SearchBarWithFilter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <div className={styles.searchInputWrapper}>
          <i className={styles.searchIcon}>🔍</i>
          <input
            type="text"
            placeholder="Search by Event Name"
            value={searchQuery}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.filterSection}>
          <span className={styles.filterText}>Filter By</span>
          <i className={styles.filterIcon}>⚙️</i>
        </div>
      </div>
    </div>
  );
};

export default SearchBarWithFilter;
