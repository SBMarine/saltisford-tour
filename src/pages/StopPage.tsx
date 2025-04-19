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

      console.log("Slug:", slug);
      console.log("Data:", data);
      console.log("Error:", error);

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
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>{stop.title}</h1>
      <audio controls src={stop.audio_url} style={{ width: '100%', marginBottom: '1rem' }} />
      <p>{stop.description}</p>
    </div>
  );
}

export default StopPage;
