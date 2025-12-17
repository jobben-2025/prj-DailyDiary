import AddEntryButton from './AddEntryButton';

const Header = ({ onAddClick }) => {
  return (
    <header className="header">
      <h1 className='text-4xl pb-4'>My Daily Diary</h1>
      <AddEntryButton onClick={onAddClick} />
    </header>
  );
};

export default Header;