import "./styles.css";
import P from 'prop-types';

export const TextInput = ({ onChange, searchValue }) => {
  return (
    <input
      className="text-input"
      onChange={onChange}
      value={searchValue}
      type="search"
      placeholder="type your search"
    />
  );
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  onChange: P.func.isRequired,
};