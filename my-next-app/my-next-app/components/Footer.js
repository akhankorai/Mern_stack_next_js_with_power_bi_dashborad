
'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1e293b', // dark slate
      color: '#ffffff',
      padding: '1rem 2rem',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      fontSize: '0.9rem',
      marginTop: '2rem',
      borderTop: '1px solid #334155',
    }}>
      <p>
        © {new Date().getFullYear()} MUHAMMAD ANUS SALEEM — Enrollment: 03-134231-038
      </p>
      <p style={{ marginTop: '0.5rem', fontStyle: 'italic', color: '#cbd5e1' }}>
        “Learning never exhausts the mind — it only ignites it.”
      </p>
    </footer>
  );
}