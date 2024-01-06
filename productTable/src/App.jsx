import './App.css';
import books from '../data/books.json';
import SearchBar from './components/SearchBar';
import BookTable from './components/BookTable';
import Pagination from './components/Pagination';
import { useState } from 'react';

function App() {
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ currentPageSize, setCurrentPageSize ] = useState(10);
    const startIndex = (currentPage - 1) * currentPageSize;
    const endIndex = startIndex + currentPageSize;
    const currentBooks = books.slice(startIndex, endIndex);

    return (
        <main>
            <SearchBar />
            <BookTable currentBooks={currentBooks} />
            <Pagination
                currentPageSize={currentPageSize}
                setCurrentPageSize={setCurrentPageSize}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalItems={books.length}
            />
        </main>
    )
}

export default App
