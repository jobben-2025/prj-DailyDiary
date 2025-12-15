import { useEffect, useState } from 'react'

import './index.css'



const App = () => {
  const [entries, setEntries] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  // loading entries on startup
  useEffect(() => {
    const storedEntries = localStorage.getItem('diaryEntries');
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  // save entries to localStorage
  useEffect(() => {
    localStorage.setItem('diaryEntries', JSON.stringify(entries));
  }, [entries]);

  return (
    <div className='app'>
      <h1>Daily Diary</h1>
      <button
      onClick={() => setShowAddModal(true)}
      >Add Entry - open modal</button>

      {showAddModal && (
        <div className='modal'>
          <h2>Add New Entry</h2>
          <p>Here I can enter details for my diary</p>
          <button
          onClick={() => setShowAddModal(false)}
          >
          Close this
          </button>
        </div>
      )}

      <div className='entries-list'>
        {entries.map(entry => (
          <div key={entry.date} className='entry-card'>
            <h2>{entry.title}</h2>
            <p>{entry.date}</p>
          </div>
        ))}
      </div>

    </div>
  );
  

};
 
export default App;



