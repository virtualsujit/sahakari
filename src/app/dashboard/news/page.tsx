"use client"
import React, { useState } from "react";
 
interface NewsArticle {
  id: number;
  title: string;
  description: string;
  date: string;
  photos: File[]; // Add photos to form data
}

const NewsDashboard = () => {
   
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [form, setForm] = useState<Partial<NewsArticle>>({
    title: "",
    description: "",
    date: "",
    photos: [],
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setForm((prevForm) => ({
        ...prevForm,
        photos: Array.from(e.target.files),
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", form.title || "");
      formData.append("description", form.description || "");
      formData.append("date", form.date || "");

      form.photos?.forEach((photo) => {
        formData.append("photos", photo);
      });

      const response = await fetch("/api/news", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setNewsArticles((prevArticles) => [
          ...prevArticles,
          {
            id: data.id,
            title: data.title,
            description: data.content,
            date: data.date,
            photos: [], // Handle displaying photos if needed
          },
        ]);
        resetForm();
      } else {
        console.error("Failed to save the news article:", data.error);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      date: "",
      photos: [],
    });
    setEditingId(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">News Dashboard</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Photos</label>
          <input type="file" name="photos" multiple onChange={handleFileChange} className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {editingId !== null ? "Update News" : "Add News"}
        </button>
        {editingId !== null && (
          <button type="button" onClick={resetForm} className="ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            Cancel
          </button>
        )}
      </form>
      <h3 className="text-xl font-bold mb-4">News Articles</h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {newsArticles.length === 0 ? (
          <p className="text-gray-700">No news articles added yet.</p>
        ) : (
          <ul>
            {newsArticles.map((article) => (
              <li key={article.id} className="mb-4">
                <h4 className="text-lg font-bold">{article.title}</h4>
                <p>{article.description}</p>
                <p className="text-sm text-gray-600">Date: {article.date}</p>
                <div className="flex space-x-2 mt-2">
                  <button onClick={() => setEditingId(article.id)} className="text-blue-500 hover:underline">
                    Edit
                  </button>
                  <button onClick={() => setNewsArticles(prev => prev.filter(a => a.id !== article.id))} className="text-red-500 hover:underline">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NewsDashboard;
