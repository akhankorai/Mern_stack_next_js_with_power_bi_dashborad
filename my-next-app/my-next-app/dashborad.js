import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Power BI Dashboard</h2>
      {isLoading ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Loading dashboard...</p>
        </div>
      ) : (
        <div style={{ position: 'relative', height: '600px' }}>
          <iframe
            title="idslab22"
            src="https://app.powerbi.com/view?r=eyJrIjoiZGQwMGE2NTUtYTc4MC00ZDRmLWJhMmYtNTNlODNmMmFmMjQ5IiwidCI6IjFmYzhkNGZiLWQyMmEtNDY3Zi1iYzA0LWFiOGFjYmFjZWFkYiIsImMiOjl9"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}