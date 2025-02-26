// app/components/Post.js
import Comment from './Comment';

export default function Post({ post }) {
  const formatDate = (dateString) => {
    // Format the date from ISO format to a readable format
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="post">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-author">
        Por: {post.author} • {formatDate(post.date)}
      </p>
      <div className="post-content">
        {post.content}
      </div>
      
      <div className="comments-section">
        <h4 style={{ 
          fontSize: '1rem', 
          marginTop: '1rem', 
          marginBottom: '0.5rem',
          paddingBottom: '0.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          Comentarios ({post.comments ? post.comments.length : 0})
        </h4>
        
        {post.comments && post.comments.length > 0 ? (
          post.comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <p style={{ color: '#aaa', fontSize: '0.9rem' }}>No hay comentarios todavía.</p>
        )}
      </div>
    </div>
  );
}

