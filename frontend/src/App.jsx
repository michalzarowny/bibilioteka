
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortOrder, setSortOrder] = useState('asc')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/books/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Nie udało się pobrać książek')
        }
        return response.json()
      })
      .then((data) => {
        setBooks(Array.isArray(data) ? data : data.results ?? [])
      })
      .catch(() => {
        setError('Nie można pobrać książek z Django.')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const categories = [
    ...new Set(
      books
        .map((book) => book.category)
        .filter(Boolean)
    ),
  ]

  const filteredBooks = books.filter((book) => {
    const query = search.toLowerCase()

    const title = String(
      book.title ?? book.tytul ?? ''
    ).toLowerCase()

    const author = String(
      book.author ?? book.autor ?? ''
    ).toLowerCase()

    const matchesSearch =
      title.includes(query) || author.includes(query)

    const matchesCategory =
      selectedCategory === 'all' ||
      book.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    const titleA = String(a.title ?? a.tytul ?? '')
    const titleB = String(b.title ?? b.tytul ?? '')

    return sortOrder === 'asc'
      ? titleA.localeCompare(titleB, 'pl')
      : titleB.localeCompare(titleA, 'pl')
  })

  return (
    <main className="library">
      <header className="library-header">
        <h1>📚 Moja biblioteka</h1>
        <p>Przeglądaj i wyszukuj książki</p>
      </header>

      <section className="books-section">
        <h2>Nasze książki</h2>

        <input
          type="text"
          placeholder="Szukaj po tytule lub autorze..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(event) =>
            setSelectedCategory(event.target.value)
          }
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
          <option value="asc">Tytuł: A–Z</option>
          <option value="desc">Tytuł: Z–A</option>
        </select>

        {loading && <p>Ładowanie książek...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && sortedBooks.length === 0 && (
          <p>Nie znaleziono książek.</p>
        )}

        <div className="books-list">
          {sortedBooks.map((book, index) => (
            <article
              className="book-card"
              key={book.id ?? index}
            >
              <h3>
                {book.title ?? book.tytul ?? 'Bez tytułu'}
              </h3>

              <p>
                Autor: {book.author ?? book.autor ?? 'Nie podano'}
              </p>

              {book.category && (
                <p>Kategoria: {book.category}</p>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
