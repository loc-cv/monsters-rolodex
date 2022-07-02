import './search-box.styles.css';

const SearchBox = (props) => {
  const { className, placeholder, onChange, value } = props;

  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default SearchBox;
