# Biblioteka API

Proste API REST stworzone w Django.

## Uruchomienie

### 1. Aktywacja Ĺ›rodowiska

```powershell
.venv\Scripts\activate

Biblioteka - aplikacja Django do obsĹ‚ugi ksiÄ…ĹĽek i API.


## Frontend React

Frontend biblioteki zostaĹ‚ utworzony przy uĹĽyciu React i Vite.

### Uruchamianie frontendu

PrzejdĹş do katalogu frontendu:

```bash
cd frontend
```

Zainstaluj zaleĹĽnoĹ›ci:

```bash
npm install
```

Uruchom serwer deweloperski:

```bash
npm run dev
```

Aplikacja bÄ™dzie dostÄ™pna pod adresem:

http://localhost:5173/

### Dane

Frontend korzysta obecnie z danych statycznych zapisanych w pliku `frontend/src/data.js`. Dane pochodzÄ… z odpowiedzi API biblioteki i sÄ… tymczasowo przechowywane w pliku JavaScript.

## Konfiguracja zmiennych Ĺ›rodowiskowych

### Backend â€” Django

Plik konfiguracyjny znajduje siÄ™ w `backend/.env`. UtwĂłrz go na podstawie przykĹ‚adowego pliku:

```powershell
Copy-Item backend/.env.example backend/.env
```

UzupeĹ‚nij `SECRET_KEY` wĹ‚asnym, bezpiecznym kluczem.

| Zmienna | Opis |
|---|---|
| `SECRET_KEY` | Klucz bezpieczeĹ„stwa Django |
| `DEBUG` | WĹ‚Ä…cza lub wyĹ‚Ä…cza tryb debugowania |
| `ALLOWED_HOSTS` | Lista dozwolonych hostĂłw, oddzielonych przecinkami |
| `CORS_ALLOWED_ORIGINS` | Lista dozwolonych adresĂłw frontendu, oddzielonych przecinkami |

### Frontend â€” React/Vite

Plik konfiguracyjny znajduje siÄ™ w `frontend/.env`. UtwĂłrz go na podstawie przykĹ‚adowego pliku:

```powershell
Copy-Item frontend/.env.example frontend/.env
```

| Zmienna | Opis |
|---|---|
| `VITE_API_URL` | Adres API backendu, np. `http://localhost:8000/api` |

Po zmianie zmiennych Ĺ›rodowiskowych uruchom ponownie odpowiedni serwer deweloperski.

**BezpieczeĹ„stwo:** plikĂłw `.env` nie naleĹĽy umieszczaÄ‡ w repozytorium Git. Do repozytorium dodajemy pliki `.env.example`, bez prawdziwych haseĹ‚ i kluczy. Zmienne z prefiksem `VITE_` sÄ… dostÄ™pne w kodzie przeglÄ…darki i nie mogÄ… zawieraÄ‡ sekretĂłw.


## Uruchamianie frontendu i konfiguracja API

### Źródło danych

Frontend pobiera listę książek, kategorie oraz szczegóły książek z API backendu Django. Backend musi działać, aby frontend mógł wyświetlać dane.

### Kolejność uruchamiania projektu

1. Otwórz pierwszy terminal w katalogu głównym projektu.
2. Uruchom backend Django:

   ```powershell
   cd backend
   .\venv\Scripts\python.exe manage.py runserver
   ```

3. Pozostaw backend uruchomiony. API powinno być dostępne pod adresem `http://localhost:8000/api/`.
4. Otwórz drugi terminal w katalogu głównym projektu i uruchom frontend:

   ```powershell
   cd frontend
   npm install
   npm run dev
   ```

5. Otwórz adres frontendu podany przez Vite, zwykle `http://localhost:5173/`.

### Zmienna środowiskowa VITE_API_URL

Zmienna `VITE_API_URL` określa bazowy adres API używany przez frontend. Domyślna wartość w kodzie aplikacji to `http://localhost:8000/api`.

Aby ustawić własny adres, utwórz plik `frontend/.env` i wpisz:

```env
VITE_API_URL=http://localhost:8000/api
```

Po zmianie pliku `.env` uruchom ponownie serwer Vite. Zmienne z prefiksem `VITE_` są dostępne w kodzie przeglądarki, dlatego nie należy umieszczać w nich haseł ani sekretów.

