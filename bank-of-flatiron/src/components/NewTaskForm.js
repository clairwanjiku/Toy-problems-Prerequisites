import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: "Code", // Default category, you can change this if needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(formData);
    // Reset the form after submission
    setFormData({
      text: "",
      category: "Code",
    });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        <strong>Task:</strong>
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
        />
      </label>
      <label>
        <strong>Category:</strong>
        <select name="category" value={formData.category} onChange={handleChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))} {/* <--- Here was the missing parenthesis */}
        </select>
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;

