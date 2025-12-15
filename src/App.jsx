import { useEffect, useState } from 'react'

import './index.css'



const App = () => {
  const [entries, setEntries] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    date: new Date().toISOString().split('T')[0],
    content: '',
  });

  useEffect(() => {
    const storedEntries = localStorage.getItem('diaryEntries');
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('diaryEntries', JSON.stringify(entries));
  }, [entries]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation goes here later

    const newEntry = {
      ...formData,
      id: Date.now()  //simpler id than UUID
    };

    setEntries(prev => [newEntry, ...prev]);
    setFormData({
      title: '',
      date: new Date().toISOString().split('T')[0],
      content: '',
    })
    setShowAddModal(false);
  };

  return (
    <div className='app'>
      <h1>Daily Diary</h1>
      <button
      onClick={() => setShowAddModal(true)}
      >Add Entry - open modal</button>

      {showAddModal && (
        <div className='modal'>
          <h2>Add New Entry</h2>
          <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="title"
            placeholder='Title'
            value={formData.title}
            onChange={handleInputChange}
            />
            <input 
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            />
            <textarea 
            name="content"
            placeholder='Diary content goes here'
            value={formData.content}
            onChange={handleInputChange}
            />

            <div>
              <button
              onClick={() => setShowAddModal(false)}
              >
              Close this
              </button>
              
              <button
              type="submit"
              >
              Save Entry
              </button>
            </div>       
          </form>
        </div>
      )};

      <div className='entries-list'>
        {entries.map(entry => (
          <div key={entry.id} className='entry-card'>
            <h2>{entry.title}</h2>
            <p>{entry.date}</p>
            <p>{entry.content}</p>
          </div>
        ))}
      </div>

    </div>
  );

};
 
export default App;



