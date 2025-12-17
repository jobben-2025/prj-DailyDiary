import EntryDetails from './EntryDetails';

const ViewEntryModal = ({ isOpen, onClose, entry }) => {
  if (!isOpen || !entry) return null;

  return (
    <div className="modal-overlay bg-slate-500 rounded-xl p-3" onClick={onClose}>
      <div className="modal-content text-slate-200 py-8" onClick={e => e.stopPropagation()}>
        <EntryDetails entry={entry} />
      </div>
    </div>
  );
};

export default ViewEntryModal;