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
      <div
        style={{
          padding: '2rem',
          fontFamily: 'Merriweather, serif',
          backgroundColor: '#f5f5dc',
          minHeight: '100vh',
          textAlign: 'center',
        }}
      >
        <h2>Loading or no data…</h2>
        <p>Slug: {slug}</p>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: 'Merriweather, serif',
        backgroundImage: 'url("/saltisford-logo.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundColor: '#f5f5dc',
        color: '#2d4b34',
        textAlign: 'center',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ marginBottom: '2rem' }}>{stop.title}</h1>
      <audio
        controls
        src={stop.audio_url}
        style={{
          width: '90%',
          maxWidth: '400px',
          marginBottom: '1.5rem',
        }}
      />
      <p style={{ maxWidth: '600px', lineHeight: '1.6' }}>{stop.description}</p>
    </div>
  );
}

export default StopPage;


