const SearchUser = (
  {setSearchString}
) => {
  return (
    <div className="SearchUser">
      <input placeholder="Search..." onChange={e => setSearchString(e.target.value)}/>
    </div>
  );
}

export default SearchUser;
