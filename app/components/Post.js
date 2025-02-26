// app/components/Post.js
import Comment from './Comment';

export default function Post({ post }) {
  return (
    <div className="post">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-author">
        Por: {post.author} • {post.date}
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
          Comentarios ({post.comments.length})
        </h4>
        
        {post.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
}
