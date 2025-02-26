'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import Navbar from '../../components/Navbar';
import Post from '../../components/Post';
import { fetcher } from '../../lib/api';

export default function SubtopicPage() {
  const params = useParams();
  const { mainTopic, subtopic } = params;
  
  const { data, error, isLoading } = useSWR(
    `/api/subtopic/${mainTopic}/${subtopic}`,
    fetcher
  );

  if (isLoading) {
    return (
      <div>
        <Navbar />
        <main className="main">
          <div className="container">
            <div style={{ marginBottom: '2rem' }}>
              <Link href="/" style={{ color: 'var(--accent-color)' }}>
                ← Volver al foro
              </Link>
            </div>
            <div className="loading">Loading content...</div>
          </div>
        </main>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div>
        <Navbar />
        <main className="main">
          <div className="container">
            <h1>Error</h1>
            <p>{error?.message || 'Failed to load content'}</p>
            <Link href="/" className="btn">
              Volver al inicio
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main className="main">
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <Link href="/" style={{ color: 'var(--accent-color)' }}>
              ← Volver al foro
            </Link>
          </div>
          
          <h1 style={{ marginBottom: '0.5rem' }}>{data.subtopic.title}</h1>
          <p style={{ marginBottom: '2rem', color: '#aaa' }}>
            {data.topic.title} • {data.subtopic.post_count || 0} posts
          </p>
          
          <div className="posts-container">
            {data.posts && data.posts.length > 0 ? (
              data.posts.map((post) => (
                <Post key={post.id} post={post} />
              ))
            ) : (
              <p>No hay posts en este tema todavía.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}