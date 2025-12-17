import './index.css'

import { useState, useEffect } from 'react';
import Header from './components/Header';
import EntryList from './components/EntryList';
import AddEntryModal from './components/AddEntryModal';
import ViewEntryModal from './components/ViewEntryModal';

function App() {
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);

  useEffect(() => {
    const storedEntries = localStorage.getItem('diaryEntries');
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('diaryEntries', JSON.stringify(entries));
  }, [entries]);

  const handleAddEntry = (newEntry) => {
    const today = new Date().toISOString().split('T')[0]; // 2025-12-16
    // console.log(today)
    const existingEntry = entries.find(entry => entry.date === today);
    
    if (existingEntry) {
      alert('You already have an entry for today. Come back tomorrow!');
      return;
    }
    
    if (!newEntry.title || !newEntry.date || !newEntry.content) {
      alert('Please fill in all fields');
      return;
    }
    
    setEntries(prev => [newEntry, ...prev]);
    setShowAddModal(false);
  };

  const handleViewEntry = (entry) => {
    setSelectedEntry(entry);
    setShowViewModal(true);
  };

  return (
    <div className="bg-slate-800 flex">
      <div className='flex-1 p-3'><div>
      <Header onAddClick={() => setShowAddModal(true)} />
      </div>
      <div className='p-5'>
      <AddEntryModal 
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={handleAddEntry}
      />
      </div></div>
      <div className='flex-3 flex p-3'>
      <div className='flex-2 '>
      <EntryList 
        entries={entries} 
        onViewEntry={handleViewEntry} 
      />
      </div>
      
      <div className='flex-1 p-5 text-right'>
      <ViewEntryModal 
        isOpen={showViewModal}
        onClose={() => setShowViewModal(false)}
        entry={selectedEntry}
      />
      </div></div>
    </div>
  );
}

export default App;

