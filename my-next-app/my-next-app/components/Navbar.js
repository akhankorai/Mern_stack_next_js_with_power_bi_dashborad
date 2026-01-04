'use client';

import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#1e293b', // dark slate
      color: '#ffffff',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      fontSize: '1rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }}>
      <div style={{ fontWeight: 'bold', letterSpacing: '0.5px' }}>
        Student Name:
        <span style={{ marginLeft: '0.5rem', textTransform: 'uppercase' }}>
          MUHAMMAD ANUS SALEEM
        </span>
      </div>
      <div style={{ fontWeight: 'bold', letterSpacing: '0.5px' }}>
        Enrollment:
        <span style={{ marginLeft: '0.5rem' }}>
          03-134231-038
        </span>
      </div>
    </nav>
  );
}