# Kontrakt API — Biblioteka

## 1. Cel

API udostępnia informacje o książkach, szczegółach wybranej książki, stanie aplikacji oraz statystykach biblioteki.

Po zmianie implementacji źródłem danych jest baza danych Django.

## 2. Endpointy

| Metoda | Endpoint | Opis |
|---|---|---|
| GET | `/api/books/` | Zwraca listę książek |
| GET | `/api/books/?category=Lektura` | Filtruje książki według kategorii |
| GET | `/api/books/1/` | Zwraca szczegóły książki o ID 1 |
| GET | `/api/health/` | Sprawdza stan aplikacji i połączenia z bazą |
| GET | `/api/info/` | Zwraca informacje o API i danych |
| GET | `/api/statystyki/` | Zwraca statystyki książek |

## 3. Format odpowiedzi

Lista książek zwracana jest jako tablica obiektów JSON. Obiekt książki zawiera pola:

- `id`
- `title`
- `description`
- `category`
- `pages`
- `publication_date`
- `author`

Szczegóły pojedynczej książki zwracane są jako jeden obiekt JSON.

Jeżeli książka o podanym identyfikatorze nie istnieje, API zwraca kod HTTP 404 oraz komunikat o błędzie.

## 4. Źródło danych przed i po zmianie

**Przed zmianą:** dane książek były pobierane ze statycznego pliku `data.py`.

**Po zmianie:** dane książek są pobierane z modeli Django i bazy danych za pomocą ORM.

## 5. Porównanie odpowiedzi

Przed zmianą odpowiedzi API należy zachować przykładowe odpowiedzi z poprzedniej wersji aplikacji. Po zmianie należy zachować odpowiedzi z aktualnej wersji.

Porównanie powinno potwierdzić, że zachowano dotychczasowy kontrakt API, w szczególności nazwy pól JSON i sposób obsługi błędów. Rzeczywiste odpowiedzi należy uzupełnić po wykonaniu testów.

6. Przykład odpowiedzi przed zmianą

Przed zmianą endpoint listy książek pobierał dane ze statycznego pliku data.py.

Przykładowa struktura odpowiedzi:

[
  {
    "id": 1,
    "title": "Przykładowy tytuł",
    "category": "Lektura"
  }
]

Powyższy przykład pokazuje jedynie strukturę JSON. Należy zastąpić go rzeczywistą odpowiedzią z poprzedniej wersji API.

7. Przykład odpowiedzi po zmianie

Po zmianie endpoint pobiera dane z bazy danych za pomocą Django ORM.

Należy wkleić rzeczywistą odpowiedź uzyskaną z aktualnego endpointu /api/books/ i porównać nazwy pól oraz format odpowiedzi z poprzednią wersją.