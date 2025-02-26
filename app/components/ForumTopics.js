'use client';

import Link from 'next/link';
import useSWR from 'swr';
import { fetcher, getLatestPostDate } from '../lib/api';

export default function ForumTopics() {
  const { data, error, isLoading } = useSWR('/api/topics', fetcher);

  if (isLoading) {
    return <div className="loading">Loading forum topics...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message || 'Failed to load topics'}</div>;
  }

  const topics = data || [];

  return (
    <div>
      {topics.map((topic) => (
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
              {topic.subtopics && topic.subtopics.map((subtopic) => (
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
                        {subtopic.post_count || 0} {subtopic.post_count === 1 ? 'post' : 'posts'}
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
                      Último post: {getLatestPostDate(subtopic.latest_post_date)}
                      {subtopic.latest_post_author && ` por ${subtopic.latest_post_author}`}
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