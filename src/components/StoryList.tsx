import React from 'react';
import StoryItem from './StoryItem';

interface StoryListProps {
  stories: { name: string; description: string; content: string }[];
}

const StoryList: React.FC<StoryListProps> = ({ stories }) => {
  return (
    <div>
      <h2>Your Generated Stories</h2>
      {stories.map((story) => (
        <StoryItem key={story.name} story={story} />
      ))}
    </div>
  );
};

export default StoryList;
