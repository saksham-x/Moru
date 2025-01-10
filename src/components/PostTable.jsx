const PostTable = ({ posts, onView, onEdit, onDelete }) => {
  return (
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2">ID</th>
          <th className="border border-gray-300 px-4 py-2">Title</th>
          <th className="border border-gray-300 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td className="border border-gray-300 px-4 py-2">{post.id}</td>
            <td className="border border-gray-300 px-4 py-2">{post.title}</td>
            <td className="border border-gray-300 px-4 py-2 flex gap-2">
              <button
                onClick={() => onView(post.id)}
                className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
              >
                View
              </button>
              <button
                onClick={() => onEdit(post)}
                className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(post.id)}
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostTable;
