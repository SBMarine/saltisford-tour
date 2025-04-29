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

      if (data) {
        setStop(data);
      } else {
        console.error('Error fetching stop:', error);
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
        backgroundImage: 'url("./saltisford-logo.jpg")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        minHeight: '100vh',
        backgroundColor: '#2d4b34',
        color: '#f5f5dc',
        textAlign: 'center',
      }}
    >
      <h1 style={{ marginBottom: '2rem' }}>{stop.title}</h1>
      <audio
        controls
        src={stop.audio_url}
        style={{ width: '90%', maxWidth: '600px', marginBottom: '1rem' }}
      />
      <p>{stop.description}</p>
    </div>
  );
}

export default StopPage;
