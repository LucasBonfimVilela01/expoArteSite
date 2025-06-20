"use client";
import React, { useState } from 'react';

type HeaderPadraoProps = {
  search: string;
  setSearch: (value: string) => void;
};

const HeaderPadrao: React.FC<HeaderPadraoProps> = ({ search, setSearch }) => {
  const [inputValue, setInputValue] = useState(search);

  const handleSearch = () => {
    setSearch(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>ExpoArte</div>
      <div style={styles.spacer} />
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Pesquisar..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="search-input"
          style={styles.searchInput}
        />
        <button
          className="search-button"
          style={styles.searchButton}
          onClick={handleSearch}
          aria-label="Pesquisar"
        >
          <svg
            width={22}
            height={22}
            fill="none"
            stroke="#6b7280"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <circle cx={11} cy={11} r={8} />
            <line x1={21} y1={21} x2={16.65} y2={16.65} />
          </svg>
        </button>
      </div>
      <style>
        {`
          header {
            background: #f3f4f6 !important;
          }
          .search-input {
            transition: width 0.3s;
            width: 70vw;
            max-width: 600px;
            min-width: 120px;
          }
          @media (max-width: 900px) {
            .search-input {
              width: 50vw;
            }
          }
          @media (max-width: 600px) {
            .search-input {
              width: 100vw;
              max-width: 100vw;
              min-width: 0;
            }
            .search-input:not(.mobile-active) {
              display: none;
            }
            .search-input.mobile-active {
              display: block;
              position: absolute;
              top: 60px;
              left: 0;
              right: 0;
              width: 100vw;
              padding: 12px;
              background: #fff;
              border: 1px solid #ccc;
              z-index: 10;
            }
            .search-button {
              display: inline-flex;
            }
          }
          @media (min-width: 601px) {
            .search-input {
              display: block;
            }
            .search-button {
              display: inline-flex;
            }
          }
        `}
      </style>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    height: 60,
    background: '#f3f4f6',
    color: '#222',
    position: 'relative',
    zIndex: 20,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  spacer: {
    flex: 1,
  },
  searchContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  searchInput: {
    padding: '8px 12px',
    borderRadius: 4,
    border: '1px solid #ccc',
    fontSize: 16,
    outline: 'none',
    transition: 'all 0.2s',
    background: '#fff',
    color: '#222',
    width: '70vw',
    maxWidth: 600,
    minWidth: 120,
  },
  searchInputMobileActive: {
    display: 'block',
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    width: '100vw',
    zIndex: 10,
  },
  searchButton: {
    background: 'none',
    border: 'none',
    color: '#222',
    cursor: 'pointer',
    padding: 8,
    marginLeft: 8,
    display: 'inline-flex',
  },
};

export default HeaderPadrao;