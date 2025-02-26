// app/components/Comment.js
export default function Comment({ comment }) {
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
      <div className="comment">
        <p className="comment-author">
          {comment.author} • {formatDate(comment.date)}
        </p>
        <p>{comment.content}</p>
      </div>
    );
  }