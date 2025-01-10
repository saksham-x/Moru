import React from "react";

const PostDetailsModal = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Post Details</h2>
        <p>
          <strong>ID:</strong> {post.id}
        </p>
        <p>
          <strong>Title:</strong> {post.title}
        </p>
        <p>
          <strong>Body:</strong> {post.body}
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PostDetailsModal;
