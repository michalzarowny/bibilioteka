
import { useState } from 'react'
import './App.css'
import { books } from './data'
import BookCard from './components/BookCard'

function App() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortOrder, setSortOrder] = useState('title-asc')
  const [selectedBook, setSelectedBook] = useState(null)

  const categories = [
    ...new Set(books.map((book) => book.category).filter(Boolean)),
  ]

  const filteredBooks = books.filter((book) => {
    const query = search.toLowerCase()

    const matchesSearch =
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)

    const matchesCategory =
      selectedCategory === 'all' ||
      book.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortOrder) {
      case 'title-asc':
        return a.title.localeCompare(b.title, 'pl')
      case 'title-desc':
        return b.title.localeCompare(a.title, 'pl')
      case 'pages-asc':
        return a.pages - b.pages
      case 'pages-desc':
        return b.pages - a.pages
      default:
        return 0
    }
  })

  if (selectedBook) {
    return (
      <main className="library">
        <button onClick={() => setSelectedBook(null)}>
          ← Powrót do listy
        </button>

        <section className="books-section">
          <h1>{selectedBook.title}</h1>
          <p>Autor: {selectedBook.author}</p>
          <p>Kategoria: {selectedBook.category}</p>
          <p>Rok wydania: {selectedBook.year}</p>
          <p>
            Liczba stron:{' '}
            {selectedBook.pages.toLocaleString('pl-PL')}
          </p>

          {selectedBook.year < 1900
            ? <p>📜 Książka historyczna</p>
            : <p>📖 Książka wydana w 1900 roku lub później</p>}

          {selectedBook.pages < 200 && (
            <p className="book-warning">
              ⚠️ Krótka książka — mniej niż 200 stron
            </p>
          )}
        </section>
      </main>
    )
  }

  return (
    <main className="library">
      <header className="library-header">
        <h1>📚 Moja biblioteka</h1>
        <p>Przeglądaj i wyszukuj książki</p>
      </header>

      <section className="books-section">
        <h2>Nasze książki ({sortedBooks.length})</h2>

        <input
          type="text"
          placeholder="Szukaj po tytule lub autorze..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="all">Wszystkie kategorie</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          value={sortOrder}
          onChange={(event) => setSortOrder(event.target.value)}
        >
          <option value="title-asc">Tytuł: A–Z</option>
          <option value="title-desc">Tytuł: Z–A</option>
          <option value="pages-asc">Liczba stron: rosnąco</option>
          <option value="pages-desc">Liczba stron: malejąco</option>
        </select>

        {sortedBooks.length === 0 && (
          <p>Nie znaleziono książek.</p>
        )}

        <div className="books-list">
          {sortedBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onClick={() => setSelectedBook(book)}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
