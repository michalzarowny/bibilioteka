
function BookCard({ book, onClick }) {
  return (
    <article
      className="book-card"
      onClick={onClick}
    >
      <h3>{book.title}</h3>

      <p>Autor: {book.author}</p>

      <p>Kategoria: {book.category}</p>

      <p>Rok wydania: {book.year}</p>

      <p>
        Liczba stron: {book.pages.toLocaleString('pl-PL')}
      </p>

      <p>
        {book.year < 1900
          ? '📜 Książka historyczna'
          : '📖 Książka wydana w 1900 roku lub później'}
      </p>

      {book.pages < 200 && (
        <p className="book-warning">
          ⚠️ Krótka książka — mniej niż 200 stron
        </p>
      )}
    </article>
  )
}

export default BookCard
