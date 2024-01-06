const BookRow = ({
    id,
    title,
    author,
    year,
    country,
    language,
    pages,
    imageLink,
    link,
    price,
    inStock
}) => {
    return (
        <tbody>
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{author}</td>
                <td>{year}</td>
                <td>{country}</td>
                <td>{language}</td>
                <td>{pages}</td>
                <td><img src={imageLink} alt="" /></td>
                <td><a href={link}>more info</a></td>
                <td>{price}</td>
                <td>{inStock ? "yes" : "no"}</td>
            </tr>
        </tbody>
    )
}

export default BookRow;
