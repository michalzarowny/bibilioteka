# Biblioteka – Django API + React

Projekt biblioteki internetowej wykorzystujący backend Django REST API oraz frontend React z Vite.

## Wymagania

- Python
- Node.js i npm
- Django
- React i Vite

## Konfiguracja środowiska

### Backend – Django

Utwórz plik `backend/.env` na podstawie przykładowego:

```powershell
Copy-Item backend/.env.example backend/.env
```

Uzupełnij wymagane zmienne środowiskowe, w tym `SECRET_KEY`.

### Frontend – React

Utwórz plik `frontend/.env`:

```powershell
Copy-Item frontend/.env.example frontend/.env
```

W pliku `frontend/.env` ustaw adres API:

```env
VITE_API_URL=http://localhost:8000/api
```

Zmienna `VITE_API_URL` określa adres backendu wykorzystywany przez frontend.

## Uruchamianie projektu

**Backend musi być uruchomiony przed frontendem**, ponieważ React pobiera książki i kategorie z API Django.

### 1. Uruchomienie backendu

Otwórz pierwszy terminal w katalogu głównym projektu:

```powershell
cd backend
.\venv\Scripts\python.exe manage.py migrate
.\venv\Scripts\python.exe manage.py runserver
```

Backend będzie dostępny pod adresem:

`http://localhost:8000/`

API:

`http://localhost:8000/api/`

Pozostaw ten terminal uruchomiony.

### 2. Uruchomienie frontendu

Otwórz drugi terminal w katalogu głównym projektu:

```powershell
cd frontend
npm install
npm run dev
```

Frontend będzie dostępny pod adresem:

`http://localhost:5173/`

## API

Frontend korzysta z następujących endpointów:

- `GET /api/books/` – lista książek.
- `GET /api/books/?category=Fantasy` – książki wybranej kategorii.
- `GET /api/books/<id>/` – szczegóły książki.
- `GET /api/info/` – informacje o API i dostępne kategorie.
- `GET /api/health/` – sprawdzenie działania API.

## Budowanie frontendu

Aby zbudować wersję produkcyjną:

```powershell
npm run build
```

Aby uruchomić podgląd:

```powershell
npm run preview
```

## Bezpieczeństwo

Plików `.env` nie należy umieszczać w repozytorium Git. Do repozytorium dodajemy pliki `.env.example` bez prawdziwych haseł i kluczy.

Zmienne z prefiksem `VITE_` są dostępne w kodzie przeglądarki. Nie należy umieszczać w nich sekretów.

