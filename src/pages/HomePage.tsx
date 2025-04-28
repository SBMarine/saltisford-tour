function HomePage() {
  return (
    <div style={{
      padding: '2rem',
      fontFamily: 'Merriweather, serif',
      backgroundImage: 'url("saltisford-logo.jpg")',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center top',
      backgroundColor: '#2d4b34',
      minHeight: '100vh',
      color: '#f5f5dc',
      textAlign: 'center'
    }}>
      <h1 style={{ marginTop: '200px', marginBottom: '1rem' }}>
        Welcome to the Saltisford Tour
      </h1>
      <p>Please scan a QR code or choose a stop to begin.</p>
    </div>
  );
}

export default HomePage;
