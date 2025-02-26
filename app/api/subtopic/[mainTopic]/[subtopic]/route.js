import { executeQuery } from '../../../../lib/db';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { mainTopic, subtopic } = params;

  try {
    // Get the topic info
    const [topicInfo] = await executeQuery({
      query: `SELECT * FROM topics WHERE id = ?`,
      values: [mainTopic]
    });

    if (!topicInfo) {
      return NextResponse.json(
        { error: 'Topic not found' },
        { status: 404 }
      );
    }

    // Get the subtopic info with post count
    const [subtopicInfo] = await executeQuery({
      query: `
        SELECT 
          s.*,
          (SELECT COUNT(*) FROM posts WHERE subtopic_id = s.id) as post_count,
          (SELECT MAX(date) FROM posts WHERE subtopic_id = s.id) as latest_post_date
        FROM subtopics s
        WHERE s.id = ? AND s.topic_id = ?
      `,
      values: [subtopic, mainTopic]
    });

    if (!subtopicInfo) {
      return NextResponse.json(
        { error: 'Subtopic not found' },
        { status: 404 }
      );
    }

    // Get posts for this subtopic with comment counts
    const posts = await executeQuery({
      query: `
        SELECT 
          p.*,
          (SELECT COUNT(*) FROM comments WHERE post_id = p.id) as comment_count
        FROM posts p
        WHERE p.subtopic_id = ?
        ORDER BY p.date DESC
      `,
      values: [subtopic]
    });

    // Get comments for each post
    for (let i = 0; i < posts.length; i++) {
      const comments = await executeQuery({
        query: `
          SELECT * FROM comments 
          WHERE post_id = ?
          ORDER BY date ASC
        `,
        values: [posts[i].id]
      });
      posts[i].comments = comments;
    }

    return NextResponse.json({
      topic: topicInfo,
      subtopic: subtopicInfo,
      posts: posts
    });
  } catch (error) {
    console.error('Error fetching subtopic:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subtopic data' },
      { status: 500 }
    );
  }
}