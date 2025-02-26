import Navbar from './components/Navbar';
import ForumTopics from './components/ForumTopics';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="main">
        <div className="container">
          <h1 style={{ 
            marginBottom: '2rem', 
            textAlign: 'center',
            fontSize: '4rem',
            fontWeight: 'bold',
            padding: '3rem 0',
            letterSpacing: '2px',
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
          }}>El BolioForo</h1>
          <ForumTopics />
        </div>
      </main>
    </div>
  );
}