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
      if (error) console.error("🚨 Supabase error:", error.message);
      if (data) setStop(data);
    }
    fetchStop();
  }, [slug]);

  if (!stop) {
    return (
      <div style={{ padding: '2rem', fontFamily: 'serif', backgroundColor: '#f9f5ec' }}>
        <h2>Loading or no data...</h2>
        <p>Slug: {slug}</p>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#fdfaf3',
        fontFamily: "'Merriweather', serif",
        border: '2px solid #8b5e3c',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        color: '#3d2b1f',
      }}
    >
      <h1
        style={{
          fontSize: '2.2rem',
          borderBottom: '2px solid #8b5e3c',
          paddingBottom: '0.5rem',
          marginBottom: '1.5rem',
          color: '#5a3e2b',
        }}
      >
        {stop.title}
      </h1>

      <audio
        controls
        src={stop.audio_url}
        style={{
          width: '100%',
          marginBottom: '1.5rem',
          borderRadius: '8px',
          backgroundColor: '#ede3d9',
          padding: '0.5rem',
        }}
      />

      <p
        style={{
          fontSize: '1.1rem',
          lineHeight: '1.6',
          backgroundColor: '#fffdf7',
          padding: '1rem',
          border: '1px solid #d4c2a5',
          borderRadius: '8px',
        }}
      >
        {stop.description}
      </p>
    </div>
  );
}

export default StopPage;
