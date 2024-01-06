import BookRow from "./BookRow";

const BookTable = ({ currentBooks }) => {

    return (
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Title</td>
                    <td>Author</td>
                    <td>Year</td>
                    <td>Language</td>
                    <td>Country</td>
                    <td>Pages</td>
                    <td>Image</td>
                    <td>Info</td>
                    <td>Price</td>
                    <td>In Stock</td>
                </tr>
            </thead>
            {currentBooks.map(book => (
                <BookRow
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    country={book.country}
                    imageLink={book.imageLink}
                    language={book.language}
                    link={book.link}
                    pages={book.pages}
                    year={book.year}
                    price={book.price}
                    inStock={book.inStock}
                />
            ))}
        </table>
    )
}

export default BookTable;
