const EntryCard = ({ entry, onClick }) => {
  return (
    <div className="entry-card bg-slate-400 text-slate-800 py-3 p-2 rounded-2xl " onClick={onClick}>
      <img src={entry.image || '/default-image.jpg'} width={100} alt={entry.title} />
      <div className="card-content py-1">
        <h3>{entry.title}</h3>
        <p className="entry-date py-1">{entry.date}</p>
      </div>
    </div>
  );
};

export default EntryCard;