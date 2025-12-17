import EntryCard from './EntryCard';

const EntryList = ({ entries, onViewEntry }) => {
  return (
    <div className="entry-list text-l border rounded-2xl">
      {entries.length === 0 ? (
        <p className="no-entries">No entries yet. Add your first entry!</p>
      ) : (
        entries.map(entry => (
          <EntryCard 
            key={entry.date} 
            entry={entry} 
            onClick={() => onViewEntry(entry)} 
          />
        ))
      )}
    </div>
  );
};

export default EntryList;