"use client";
import { handleDelete } from "@/utils/delete-data";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
}

const NewsEditDelete = () => {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [editingArticle, setEditingArticle] = useState<NewsArticle | null>(
    null
  );

  const fetchNews = async () => {
    setFetchLoading(true);
    try {
      const response = await fetch(`/api/news`);
      if (!response.ok) {
        toast.error("Failed to fetch news articles");
      }
      const data: NewsArticle[] = await response.json();
      setNewsArticles(data);
    } catch (error) {
      toast.error("Error fetching news articles");
    } finally {
      setFetchLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleEdit = (article: NewsArticle) => {
    setEditingArticle(article);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingArticle) {
      try {
        await fetch(`/api/news/`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editingArticle),
        });
        setEditingArticle(null);
      } catch (error) {
        toast.error("Error updating the article:");
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (editingArticle) {
      setEditingArticle({
        ...editingArticle,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div className="mt-4 px-2 md:px-3">
      {editingArticle ? (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg text-gray-900 mt-6">
          <h2 className="text-2xl font-bold mb-6">Edit News</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={editingArticle.title}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter news title"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="content"
              >
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={editingArticle.content}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter news content"
                rows={5}
              />
            </div>
            {/* <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="imageUrl">
                Image URL
              </label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={editingArticle.imageUrl || ""}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter image URL"
              />
            </div> */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setEditingArticle(null)}
                className="bg-gray-500 text-white p-2 rounded mr-4 hover:bg-gray-600 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-gray-100 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
              Edit or Delete News
            </h1>

            {fetchLoading ? (
              <div className="flex justify-center items-center">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600"></div>
                <span className="ml-2 text-gray-700">Loading news...</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsArticles.map((article) => (
                  <div
                    key={article.id}
                    className="bg-white p-6 rounded-lg shadow-lg relative"
                  >
                    {article.imageUrl && (
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover mb-4 rounded"
                      />
                    )}
                    <h2 className="text-2xl font-bold mb-2 text-gray-900">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{article.content}</p>
                    <p className="text-sm text-gray-500">
                      Published on:{" "}
                      {new Date(article.date).toLocaleDateString()}
                    </p>
                    <div className="absolute top-2 right-2 flex gap-2">
                      <button
                        onClick={() => handleEdit(article)}
                        className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() =>
                          handleDelete(
                            article.id,
                            article.imageUrl ?? "",
                            "news",
                            "/api/news"
                          )
                        }
                        className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsEditDelete;
