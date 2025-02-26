import { executeQuery } from '../../lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const topics = await executeQuery({
      query: `SELECT * FROM topics ORDER BY id`
    });

    // For each topic, get its subtopics with enhanced information
    for (let i = 0; i < topics.length; i++) {
      const subtopics = await executeQuery({
        query: `
          SELECT 
            s.*,
            (SELECT COUNT(*) FROM posts WHERE subtopic_id = s.id) as post_count,
            (SELECT MAX(date) FROM posts WHERE subtopic_id = s.id) as latest_post_date,
            (SELECT author FROM posts WHERE subtopic_id = s.id ORDER BY date DESC LIMIT 1) as latest_post_author
          FROM subtopics s
          WHERE s.topic_id = ?
          ORDER BY s.id
        `,
        values: [topics[i].id]
      });
      topics[i].subtopics = subtopics;
    }

    return NextResponse.json(topics);
  } catch (error) {
    console.error('Error fetching topics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch topics' },
      { status: 500 }
    );
  }
}