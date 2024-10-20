import React, { useState } from 'react';

interface StoryInputProps {
  onGenerate: (prompt: string) => void;
}

const StoryInput: React.FC<StoryInputProps> = ({ onGenerate }) => {
  const [prompt, setPrompt] = useState('');

  const handleGenerate = () => {
    onGenerate(prompt);
  };

  return (
    <div>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter an idea of story"
      />
      <button onClick={handleGenerate}>Generate</button>
    </div>
  );
};

export default StoryInput;
