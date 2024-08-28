"use client";
import React, { useState } from "react";

interface NewsArticle {
  id: number;
  title: string;
  description: string;
  date: string;
}

const NewsDashboard = () => {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [form, setForm] = useState<Partial<NewsArticle>>({
    title: "",
    description: "",
    date: "",
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId !== null) {
      // Edit existing article
      setNewsArticles((prevArticles) =>
        prevArticles.map((article) =>
          article.id === editingId ? { ...article, ...form, id: editingId } : article
        )
      );
    } else {
      // Add new article
      setNewsArticles((prevArticles) => [
        ...prevArticles,
        { id: Date.now(), ...form } as NewsArticle,
      ]);
    }
    resetForm();
  };

  const handleEdit = (id: number) => {
    const articleToEdit = newsArticles.find((article) => article.id === id);
    if (articleToEdit) {
      setForm(articleToEdit);
      setEditingId(id);
    }
  };

  const handleDelete = (id: number) => {
    setNewsArticles((prevArticles) =>
      prevArticles.filter((article) => article.id !== id)
    );
  };

  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      date: "",
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

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {editingId !== null ? "Update News" : "Add News"}
        </button>
        {editingId !== null && (
          <button
            type="button"
            onClick={resetForm}
            className="ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
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
                  <button
                    onClick={() => handleEdit(article.id)}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(article.id)}
                    className="text-red-500 hover:underline"
                  >
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
