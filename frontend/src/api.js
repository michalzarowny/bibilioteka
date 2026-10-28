
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

async function request(endpoint) {
  const response = await fetch(`${API_URL}${endpoint}`)

  if (!response.ok) {
    throw new Error(`Błąd API: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

export function getBooks(category = '') {
  const params = new URLSearchParams()

  if (category && category !== 'all') {
    params.set('category', category)
  }

  const query = params.toString()
  return request(`/books/${query ? `?${query}` : ''}`)
}

export function getBook(id) {
  return request(`/books/${encodeURIComponent(id)}/`)
}

export function getApiInfo() {
  return request('/info/')
}
