import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

function StopPage() {
  const { slug } = useParams();
  const [stop, setStop] = useState<any>(null);

  useEffect(() => {
    async function fetchStop() {
      const { data, error } = await supabase
        .from('tour_stops')
        .select('*')
        .eq('slug', slug)
        .single();

      console.log("🔍 Fetching stop for slug:", slug);
      console.log("📦 Data:", data);
      console.log("⚠️ Error:", error);

      if (error) {
        console.error("🚨 Supabase error:", error.message);
      }

      if (data) {
        setStop(data);
      }
    }

    fetchStop();
  }, [slug]);

  if (!stop) {
    return (
      <div style={{ padding: '2rem', color: 'white', textAlign: 'center' }}>
        <h2>Loading or no data...</h2>
        <p>Slug: {slug}</p>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: `url('/Saltisford Canal Trust logo.jpg') no-repeat center center fixed`,
      backgroundSize: 'contain',
      backgroundColor: '#2d4a31', // Canal green fallback
      fontFamily: 'Merriweather, serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center',
      color: 'white',
    }}>
      <h1 style={{ marginBottom: '1rem', backgroundColor: 'rgba(45, 74, 49, 0.7)', padding: '0.5rem 1rem', borderRadius: '8px' }}>
        {stop.title}
      </h1>
      <audio
        controls
        src={stop.audio_url}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '1rem',
          borderRadius: '10px',
          width: '100%',
          maxWidth: '600px',
          marginBottom: '1rem',
        }}
      />
      <p style={{ backgroundColor: 'rgba(45, 74, 49, 0.7)', padding: '1rem', borderRadius: '8px' }}>
        {stop.description}
      </p>
    </div>
  );
}

export default StopPage;