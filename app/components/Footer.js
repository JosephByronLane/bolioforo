export default function Footer() {
    return (
      <footer style={{
        backgroundColor: 'var(--element-color)',
        padding: '1.5rem 0',
        marginTop: '3rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div className="container">
          <p style={{ 
            fontSize: '0.9rem', 
            color: '#aaa',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            <strong style={{ color: 'var(--accent-color)' }}>NOTA:</strong> Esta tarea es de chiste y no debe tomarse en serio. Todo el contenido es ficticio (y mayormente generado por IA). Si lo ofende o se le hace raro me disculpo personalmente. 
          </p>
        </div>
      </footer>
    );
  }