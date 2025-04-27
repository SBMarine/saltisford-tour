function HomePage() {
    return (
      <div style={{
        padding: '2rem',
        fontFamily: 'Merriweather, serif',
        backgroundImage: 'url("/saltisford-logo.jpg")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        minHeight: '100vh',
        backgroundColor: '#2d4b34',
        color: '#f5f5dc',
        textAlign: 'center',
      }}>
        <h1>Welcome to the Saltisford Tour</h1>
        <p>Please choose a stop to begin.</p>
      </div>
    );
  }
  
  export default HomePage;
  