import './App.css';
import SearchBar from './components/SearchBar';
import BookTable from './components/BookTable';
import Pagination from './components/Pagination';

function App() {

  return (
    <main>
      <SearchBar />
      <BookTable />
      <Pagination />
    </main>
  )
}

export default App
