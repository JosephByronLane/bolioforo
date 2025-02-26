'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Post from '../../components/Post';
import forumData from '../../../data/forumData';

export default function SubtopicPage() {
  const params = useParams();
  const { mainTopic, subtopic } = params;
  
  // Find the current main topic
  const currentMainTopic = forumData.find(
    (topic) => topic.id === mainTopic
  );
  
  // Find the current subtopic
  const currentSubtopic = currentMainTopic?.subtopics.find(
    (sub) => sub.id === subtopic
  );

  if (!currentMainTopic || !currentSubtopic) {
    return (
      <div>
        <Navbar />
        <main className="main">
          <div className="container">
            <h1>Tema no encontrado</h1>
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
          
          <h1 style={{ marginBottom: '0.5rem' }}>{currentSubtopic.title}</h1>
          <p style={{ marginBottom: '2rem', color: '#aaa' }}>
            {currentMainTopic.title}
          </p>
          
          <div className="posts-container">
            {currentSubtopic.posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}