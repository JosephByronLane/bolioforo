'use client';

import Link from 'next/link';
import forumData from '../../data/forumData';

export default function ForumTopics() {
  // Function to get the latest post date from a subtopic
  const getLatestPostDate = (posts) => {
    if (posts.length === 0) return null;
    
    // Convert date strings to Date objects for comparison
    const dates = posts.map(post => new Date(post.date));
    const latestDate = new Date(Math.max(...dates));
    
    // Format the date
    return latestDate.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div>
      {forumData.map((topic) => (
        <div key={topic.id} id={topic.id} className="section">
          <h2 className="section-title">{topic.title}</h2>
          <div style={{ 
            backgroundColor: 'var(--element-color)',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {topic.subtopics.map((subtopic) => (
                <Link 
                  href={`/${topic.id}/${subtopic.id}`} 
                  key={subtopic.id}
                  style={{ textDecoration: 'none' }}
                >
                  <div style={{
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '6px',
                    padding: '1.25rem',
                    transition: 'all 0.3s ease',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                  className="subtopic-block"
                  >
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}>
                      <h3 style={{ 
                        fontSize: '1.2rem',
                        color: 'var(--text-color)',
                        transition: 'color 0.3s ease'
                      }}>{subtopic.title}</h3>
                      <p style={{ 
                        fontSize: '0.9rem',
                        color: '#aaa',
                      }}>
                        {subtopic.posts.length} {subtopic.posts.length === 1 ? 'post' : 'posts'}
                      </p>
                    </div>
                    <div style={{
                      fontSize: '0.9rem',
                      color: '#888',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '4px',
                      whiteSpace: 'nowrap'
                    }}>
                      Último post: {getLatestPostDate(subtopic.posts)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}