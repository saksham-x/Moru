import React, { useState, useEffect } from "react";
import { fetchPosts, fetchPostDetails, deletePost } from "../services/api";
import PostTable from "../components/PostTable";
import PostForm from "../components/PostForm";
import PostDetailsModal from "../components/PostDetailsModal";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [editingPost, setEditingPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts()
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  const handleViewPost = (id) => {
    const post = posts.find((post) => post.id === id);
    if (post) {
      setSelectedPost(post);
    } else {
      fetchPostDetails(id)
        .then((response) => {
          setSelectedPost(response.data);
        })
        .catch((error) => {
          console.error("Error fetching post details:", error);
        });
    }
  };

  const closeDetailsModal = () => {
    setSelectedPost(null);
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
  };

  const handleCreatePost = (newPost) => {
    const newId = posts.length + 1;
    setPosts((prevPosts) => [{ id: newId, ...newPost }, ...prevPosts]);
  };

  const handleUpdatePost = (updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === editingPost.id ? { ...post, ...updatedPost } : post
      )
    );
    setEditingPost(null);
  };

  const handleDeletePost = (id) => {
    const isApiPost = id <= 100;

    if (isApiPost) {
      deletePost(id)
        .then(() => {
          setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
        })
        .catch((error) => {
          console.error("Error deleting post:", error);
        });
    } else {
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    }
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <PostForm
        onSubmit={editingPost ? handleUpdatePost : handleCreatePost}
        initialData={editingPost}
        isEditing={!!editingPost}
        onCancel={() => setEditingPost(null)}
      />
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <PostTable
          posts={posts}
          onView={handleViewPost}
          onEdit={handleEditPost}
          onDelete={handleDeletePost}
        />
      )}
      <PostDetailsModal post={selectedPost} onClose={closeDetailsModal} />
    </div>
  );
};

export default Dashboard;
