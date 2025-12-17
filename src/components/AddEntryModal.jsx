import EntryForm from './EntryForm';

const AddEntryModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content bg-slate-400 text-slate-900 rounded-2xl p-1" onClick={e => e.stopPropagation()}>
        <h2 className='text-xl p-2'>Add New Entry</h2>
        <EntryForm onSubmit={onSubmit} onCancel={onClose} />
      </div>
    </div>
  );
};

export default AddEntryModal;