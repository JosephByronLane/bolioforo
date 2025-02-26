
// app/components/Comment.js
export default function Comment({ comment }) {
  return (
    <div className="comment">
      <p className="comment-author">
        {comment.author} • {comment.date}
      </p>
      <p>{comment.content}</p>
    </div>
  );
}