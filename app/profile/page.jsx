"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };
    // console.log(posts);
    if (session?.user.id) fetchPosts();
  }, []);

  const handleEdit = () => {
    // router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async () => {
    // const hasConfirmed = confirm(
    //   "Are you sure you want to delete this prompt?"
    // );
  };
  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
