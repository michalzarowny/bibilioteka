
import { useEffect, useState } from 'react'
import './App.css'
import { getBooks } from './api'
import BookCard from './components/BookCard'

function App() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortOrder, setSortOrder] = useState('title-asc')
  const [selectedBook, setSelectedBook] = useState(null)

  useEffect(() => {
    async function loadBooks() {
      try {
        setLoading(true)
        setError('')

        const data = await getBooks()
        const booksData = Array.isArray(data)
          ? data
          : data.results ?? data.books ?? []

        setBooks(booksData)
      } catch (err) {
        setError(err.message || 'Nie udało się pobrać książek.')
      } finally {
        setLoading(false)
      }
    }

    loadBooks()
  }, [])

  const categories = [
    ...new Set(books.map((book) => book.category).filter(Boolean)),
  ]

  const filteredBooks = books.filter((book) => {
    const query = search.toLowerCase()

    const matchesSearch =
      (book.title || '').toLowerCase().includes(query) ||
      (book.author || '').toLowerCase().includes(query)

    const matchesCategory =
      selectedCategory === 'all' ||
      book.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortOrder) {
      case 'title-asc':
        return (a.title || '').localeCompare(b.title || '', 'pl')
      case 'title-desc':
        return (b.title || '').localeCompare(a.title || '', 'pl')
      case 'pages-asc':
        return (a.pages || 0) - (b.pages || 0)
      case 'pages-desc':
        return (b.pages || 0) - (a.pages || 0)
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

        <section>
          <h1>{selectedBook.title}</h1>
          <p><strong>Autor:</strong> {selectedBook.author}</p>
          <p><strong>Rok wydania:</strong> {selectedBook.year}</p>
          <p><strong>Kategoria:</strong> {selectedBook.category}</p>
          <p><strong>Liczba stron:</strong> {selectedBook.pages}</p>
        </section>
      </main>
    )
  }

  return (
    <main className="library">
      <h1>Biblioteka</h1>

      <section>
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

        {loading && <p>Ładowanie książek...</p>}

        {error && (
          <p className="error">
            Nie udało się pobrać książek: {error}
          </p>
        )}

        {!loading && !error && sortedBooks.length === 0 && (
          <p>Nie znaleziono książek.</p>
        )}

        {!loading && !error && (
          <div className="books-list">
            {sortedBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onClick={() => setSelectedBook(book)}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default App
