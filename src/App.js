import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonster] = useState(monsters);

  useEffect(() => {
    const fetchMonsters = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const users = await response.json();
      setMonsters(users);
    };
    fetchMonsters();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    setFilteredMonster(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => setSearchField(event.target.value);

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>

      <SearchBox
        className="monsters-search-box"
        placeholder="Search monsters"
        onChange={onSearchChange}
        value={searchField}
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
