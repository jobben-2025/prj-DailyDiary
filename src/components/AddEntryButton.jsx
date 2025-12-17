const AddEntryButton = ({ onClick }) => {
    return (
      <button className="add-entry-btn bg-slate-300 text-slate-900 px-2 py-1 rounded" onClick={onClick}>
        Add Entry
      </button>
    );
  };

  export default AddEntryButton;