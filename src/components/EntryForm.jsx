import { useState } from 'react';

const EntryForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: new Date().toISOString().split('T')[0],
    image: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="entry-form text-slate-900 p-2">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
        className='border rounded p-1 w-full mb-2'
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
        className='border rounded p-1 w-full mb-2'
      />
      <input
        type="url"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        className='border rounded p-1 w-full mb-2'
      />
      <textarea
        name="content"
        placeholder="Content"
        value={formData.content}
        onChange={handleChange}
        required
        className='border rounded p-1 pb-3 mb-2 w-full mb-2'
      />
      <div className="form-actions flex">
        <button 
        type="button" 
        className='border rounded p-1 flex-1'
        onClick={onCancel}>Cancel</button><br /><br />
        <button 
        className='border rounded p-2 font-bold flex-2'
        type="submit">Save Entry</button>
      </div>
    </form>
  );
};

export default EntryForm;