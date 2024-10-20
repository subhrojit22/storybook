import React, { useState } from 'react';

interface StoryProps {
  story: { name: string; description: string; content: string };
}

const StoryItem: React.FC<StoryProps> = ({ story }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="border p-4 mb-2 rounded-lg shadow-md">
      <div onClick={() => setShowContent(!showContent)} className="cursor-pointer">
        <h3 className="text-lg font-medium">{story.name}</h3>
        <p className="text-gray-600">{story.description}</p>
      </div>
      {showContent && <div className="mt-2">{story.content}</div>}
      <div className='flex space-x-2 mt-2'>
        <button>Edit</button>
        <button>Name</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default StoryItem;
