import React, { useState } from 'react';
import styles from './Blog.module.css';

const Blog = () => {
  const [formData, setFormData] = useState({ title: '', description: '' }); 
  const [submittedEntries, setSubmittedEntries] = useState([]); 

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value, 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() && formData.description.trim()) {
      setSubmittedEntries((prevEntries) => [...prevEntries, formData]); 
      setFormData({ title: '', description: '' }); //
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="title" 
          value={formData.title} 
          onChange={handleChange} 
          placeholder="Enter title"
        />
        <input 
          type="text" 
          name="description" 
          value={formData.description} 
          onChange={handleChange} 
          placeholder="Enter description"
        />
        <button type="submit">Submit</button>
      </form>

      <div className={styles.cardsContainer}>
        {submittedEntries.map((entry, index) => (
          <div key={index} className={styles.card}>
            <p><strong>{entry.title}</strong></p>
            <p>{entry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
