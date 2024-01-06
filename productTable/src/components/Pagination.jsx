const Pagination = ({
    currentPageSize,
    setCurrentPageSize,
    currentPage,
    setCurrentPage,
    totalItems
}) => {
    const numberOfPages = Math.ceil(totalItems / currentPageSize);
    const pageNumbers = [];
    const pageSizes = ['5', '10', '15', '20']

    for (let i = 0; i < numberOfPages; i++) { 
        pageNumbers.push(i+1);
    }

    const handlePreviousPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1);
    }

    const handleNextPage = () => {
        if (currentPage < numberOfPages) setCurrentPage(currentPage + 1);
    } 

    const handleNewPageSize = (newPageSize) => {
        const currentPageTop = currentPage * currentPageSize;
        const newPage = Math.ceil(currentPageTop / newPageSize);
        setCurrentPage(newPage);

        setCurrentPageSize(newPageSize);
    }

    return (
        <div className='pagingation-container'>
            <ul className='pagination'>
                {pageNumbers.map(pageNumber => (
                    <li key={pageNumber}>
                        <button
                            className={currentPage === pageNumber ?
                                'page-number active-page-number' :
                                'page-number'} key={pageNumber}
                            id={`page-${pageNumber}`}
                            type='button'
                            onClick={() => setCurrentPage(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="page-size-container">
                <label className="page-size-label" htmlFor="page-size">Page Size:</label>
                <select className="page-size"
                        id="page-size" 
                        value={currentPageSize}
                        onChange={(e) => handleNewPageSize(e.target.value * 1)}>
                    {pageSizes.map(pageSize => (
                        <option key={pageSize} value={pageSize}>{pageSize}</option>
                    ))}
                </select>
            </div>
            <div className="page-nav-container">
                <p>{currentPage} / {numberOfPages}</p>
                <ul className="page-nav">
                    <li>
                        <button
                            id="prev-page"
                            className="prev-page"
                            type="button"
                            onClick={handlePreviousPage}
                        >
                           &lt; 
                        </button>
                        <button
                            id="next-page"
                            className="next-page"
                            type="button"
                            onClick={handleNextPage}
                        >
                           &gt; 
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Pagination;
