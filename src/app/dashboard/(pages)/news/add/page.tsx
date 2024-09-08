"use client";

import DashboardLoader from "@/components/dashboard/dashboard-loader";
import { supabase } from "@/lib/supabase/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { v4 } from "uuid";

interface FormData {
  title: string;
  content: string;
  date: string;
  thumbnail: File | null;
}

interface NewsArticle {
  id: number;
  title: string;
  content: string;
  date: string;
  imageUrl: string;
}

const NewsPost: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
    date: "",
    thumbnail: null,
  });

  const [loading, setLoading] = useState(false);
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [fetchLoading, setFetchLoading] = useState<boolean>(false);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (name === "thumbnail" && files) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0] || null,
      }));
    } else if (name !== "thumbnail") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { title, content, date, thumbnail } = formData;
      let imageUrl = "";
      if (thumbnail) {
        const fileName = `${v4()}`;
        const { data, error: uploadError } = await supabase.storage
          .from("news")
          .upload(fileName, thumbnail);

        if (uploadError) {
          toast.error("Error uploading file:");
        }
        const { data: publicUrlData } = supabase.storage
          .from("news")
          .getPublicUrl(fileName);
        imageUrl = publicUrlData.publicUrl;
      }

      const newsData = {
        title,
        content,
        date,
        thumbnail: imageUrl,
      };

      const response = await fetch("/api/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newsData),
      });

      if (!response.ok) {
        toast.error("Failed to save news data.");
      }

      toast.success("News article added successfully!");

      setFormData({
        title: "",
        content: "",
        date: "",
        thumbnail: null,
      });

      fetchNews();
    } catch (error) {
      toast.error("Error saving news");
    } finally {
      setLoading(false);
    }
  };

  const fetchNews = async () => {
    setFetchLoading(true);
    try {
      const response = await fetch("/api/news");

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

  return (
    <div className="mt-4 px-2 md:px-3">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg text-gray-900">
        <h2 className="text-2xl font-bold mb-6">Add News</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter the title"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter the content"
              required
              rows={4}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Thumbnail</label>
            <input
              type="file"
              name="thumbnail"
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add News"}
          </button>
        </form>
      </div>

      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Latest News
          </h1>

          {fetchLoading ? (
            <DashboardLoader />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white p-6 rounded-lg shadow-lg"
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
                    Published on: {new Date(article.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsPost;
