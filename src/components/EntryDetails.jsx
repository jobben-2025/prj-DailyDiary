const EntryDetails = ({ entry }) => {
    if (!entry) return null;
  
    return (
      <div className="entry-details  border rounded-2xl p-2 mb-2">
        <h2 className="py-3 font-bold">{entry.title}</h2>
        <p className="entry-date py-3">{entry.date}</p>
        <img src={entry.image || '/default-image.jpg'} alt={entry.title} className="py-3" />
        <p className="entry-content py-3">{entry.content}</p>
      </div>
    );
  };
  
  export default EntryDetails;