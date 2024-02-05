import React, { useState } from "react";

const TagsInput = ({ availableTags, onSelectTag }) => {
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
  };

  const handleAddTag = () => {
    if (selectedTag.trim() !== "") {
      setSelectedTags([...selectedTags, selectedTag.trim()]);
      onSelectTag([...selectedTags, selectedTag.trim()]);
      setSelectedTag("");
    }
  };

  return (
    <div className="mt-4">
      <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
        Tags
      </label>
      <select
        id="tags"
        name="tags"
        value={selectedTag}
        onChange={handleTagChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring focus:border-blue-300 sm:text-sm rounded-md"
      >
        <option value="" disabled>
          Select a tag
        </option>
        {availableTags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      <button
        type="button"
        onClick={handleAddTag}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Add Tag
      </button>
    </div>
  );
};

export default TagsInput;
