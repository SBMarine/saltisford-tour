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
      <div style={{ padding: '2rem' }}>
        <h2>Loading or no data...</h2>
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
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        minHeight: '100vh',
        backgroundColor: '#2d4b34',
        color: '#f5f5dc',
        textAlign: 'center'
      }}
    >
      <h1 style={{ marginBottom: '2rem' }}>{stop.title}</h1>
      <audio
        controls
        src={stop.audio_url}
        style={{
          width: '90%',
          maxWidth: '600px',
          marginBottom: '2rem',
          backgroundColor: '#ffffffaa',
          borderRadius: '8px',
          padding: '0.5rem'
        }}
      />
      <p style={{ maxWidth: '800px', margin: '0 auto' }}>{stop.description}</p>
    </div>
  );
}

export default StopPage;