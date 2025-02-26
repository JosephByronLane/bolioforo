// Common fetcher function with error handling
export const fetcher = async (url) => {
    const res = await fetch(url);
    
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.');
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }
    
    return res.json();
  };
  
  // API utility functions
  export const getTopics = () => fetcher('/api/topics');
  
  export const getTopic = (topicId) => fetcher(`/api/topic/${topicId}`);
  
  export const getSubtopic = (topicId, subtopicId) => 
    fetcher(`/api/subtopic/${topicId}/${subtopicId}`);
  
  // Format functions
  export const formatDate = (dateString) => {
    if (!dateString) return 'No date available';
    
    const date = new Date(dateString);
    
    // Check if date is valid
    if (isNaN(date.getTime())) return 'Invalid date';
    
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  export const getLatestPostDate = (latestPostDate) => {
    if (!latestPostDate) return 'No posts yet';
    return formatDate(latestPostDate);
  };