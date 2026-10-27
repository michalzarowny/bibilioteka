# Biblioteka API

Proste API REST stworzone w Django.

## Uruchomienie

### 1. Aktywacja środowiska

```powershell
.venv\Scripts\activate

Biblioteka - aplikacja Django do obsługi książek i API.


## Frontend React

Frontend biblioteki został utworzony przy użyciu React i Vite.

### Uruchamianie frontendu

Przejdź do katalogu frontendu:

```bash
cd frontend
```

Zainstaluj zależności:

```bash
npm install
```

Uruchom serwer deweloperski:

```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem:

http://localhost:5173/

### Dane

Frontend korzysta obecnie z danych statycznych zapisanych w pliku `frontend/src/data.js`. Dane pochodzą z odpowiedzi API biblioteki i są tymczasowo przechowywane w pliku JavaScript.

## Konfiguracja zmiennych środowiskowych

### Backend — Django

Plik konfiguracyjny znajduje się w `backend/.env`. Utwórz go na podstawie przykładowego pliku:

```powershell
Copy-Item backend/.env.example backend/.env
```

Uzupełnij `SECRET_KEY` własnym, bezpiecznym kluczem.

| Zmienna | Opis |
|---|---|
| `SECRET_KEY` | Klucz bezpieczeństwa Django |
| `DEBUG` | Włącza lub wyłącza tryb debugowania |
| `ALLOWED_HOSTS` | Lista dozwolonych hostów, oddzielonych przecinkami |
| `CORS_ALLOWED_ORIGINS` | Lista dozwolonych adresów frontendu, oddzielonych przecinkami |

### Frontend — React/Vite

Plik konfiguracyjny znajduje się w `frontend/.env`. Utwórz go na podstawie przykładowego pliku:

```powershell
Copy-Item frontend/.env.example frontend/.env
```

| Zmienna | Opis |
|---|---|
| `VITE_API_URL` | Adres API backendu, np. `http://localhost:8000/api` |

Po zmianie zmiennych środowiskowych uruchom ponownie odpowiedni serwer deweloperski.

**Bezpieczeństwo:** plików `.env` nie należy umieszczać w repozytorium Git. Do repozytorium dodajemy pliki `.env.example`, bez prawdziwych haseł i kluczy. Zmienne z prefiksem `VITE_` są dostępne w kodzie przeglądarki i nie mogą zawierać sekretów.

