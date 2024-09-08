"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  console.log("PromptCardList Data:", data); // Add this log
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value); // Assuming you want to capture the input value
  };

  useEffect(() => {
    const fetchPosts = async () => {
      // console.log("Starting fetchPosts");
      // try {
      const response = await fetch("/api/prompt");
      console.log("Fetch Response Status:", response.status);
      const data = await response.json();
      console.log("Fetched Data:", data);
      setPosts(data);
      // } catch (error) {
      //   console.error("Failed to fetch posts:", error);
      // }
      // console.log("Completed fetchPosts");
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
