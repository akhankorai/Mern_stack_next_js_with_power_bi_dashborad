'use client';

import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      {isLoading ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Loading dashboard...</p>
        </div>
      ) : (
        <div
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            height: '80vh',  // Make this large enough so content shows
          }}
        >
          <div
            style={{
              transform: 'scale(0.44)',       // Zoom level
              transformOrigin: 'top left',
              width: `${100 / 0.44}%`,
              height: `${100 / 0.44}%`,
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          >
            <iframe
              title="powerbi-dashboard"
              src="https://app.powerbi.com/view?r=eyJrIjoiYjYzOTkxNjctMzM2NS00MjJmLWIzM2EtZDYwMGQ1MmM3N2NjIiwidCI6IjFmYzhkNGZiLWQyMmEtNDY3Zi1iYzA0LWFiOGFjYmFjZWFkYiIsImMiOjl9"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
