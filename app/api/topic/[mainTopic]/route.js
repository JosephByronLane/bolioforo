// app/api/topic/[mainTopic]/route.js
import { executeQuery } from '../../../lib/db';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { mainTopic } = params;

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

    // Get subtopics for this topic
    const subtopics = await executeQuery({
      query: `SELECT * FROM subtopics WHERE topic_id = ?`,
      values: [mainTopic]
    });

    return NextResponse.json({
      topic: topicInfo,
      subtopics: subtopics
    });
  } catch (error) {
    console.error('Error fetching topic:', error);
    return NextResponse.json(
      { error: 'Failed to fetch topic data' },
      { status: 500 }
    );
  }
}