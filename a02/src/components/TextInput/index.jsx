import "./styles.css";

export const TextInput = ({ onChange, searchValue }) => {
  return (
    <input
      className="text-input"
      onChange={onChange}
      value={searchValue}
      type="search"
      placeholder="pesquise seu post..."
    />
  );
};
