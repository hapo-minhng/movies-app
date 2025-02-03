export default function Search({ searchText, setSearchText }) {
  return (
    <div className="search">
      <div>
        <img src="./search.svg" alt="search" />

        <input
          type="text"
          placeholder="Search through 300+ movies online"
          value={searchText}
          onChange={(s) => setSearchText(s.target.value)}
        />
      </div>
    </div>
  );
}
