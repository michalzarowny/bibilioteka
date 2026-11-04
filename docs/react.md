Użycie indeksu tablicy jako `key` zamiast unikalnego `id` może powodować problemy podczas aktualizowania listy, filtrowania lub zmiany kolejności elementów. React wykorzystuje `key` do rozpoznawania elementów między kolejnymi renderowaniami. Gdy używamy indeksu, po zmianie kolejności ten sam klucz może wskazywać na inną książkę, co może prowadzić do nieprawidłowego zachowania interfejsu. Dlatego lepiej używać stabilnego i unikalnego identyfikatora, takiego jak `book.id`.

## Stany aplikacji biblioteki

### 1. Ładowanie danych

Podczas pobierania książek z API Django aplikacja wyświetla komunikat „Ładowanie książek...”. Stan jest kontrolowany przez zmienną `loading`.

**Zrzut ekranu:** `docs/screenshots/loading.png`

### 2. Błąd pobierania danych

Jeśli żądanie do API zakończy się błędem, aplikacja wyświetla komunikat o niepowodzeniu pobierania książek. Treść błędu jest przechowywana w zmiennej `error`.

**Zrzut ekranu:** `docs/screenshots/error.png`

### 3. Pusta lista książek

Jeżeli pobieranie zakończy się poprawnie, ale nie ma książek do wyświetlenia, aplikacja pokazuje komunikat „Nie znaleziono książek.”

**Zrzut ekranu:** `docs/screenshots/empty.png`

Zrzuty ekranu dokumentują zachowanie interfejsu w trzech stanach: ładowania, błędu i braku wyników.
## Pobieranie danych z API Django

Aplikacja React pobiera listę książek z backendu Django za pomocą funkcji `getBooks()` z pliku `frontend/src/api.js`. Dane są pobierane po uruchomieniu aplikacji oraz po zmianie wybranej kategorii.

Szczegóły wybranej książki są pobierane za pomocą funkcji `getBook(id)`. Dzięki temu aplikacja korzysta z aktualnych danych z bazy danych, zamiast z lokalnej, statycznej listy książek.

Usunięto plik `frontend/src/data.js`, ponieważ przykładowe dane nie są już potrzebne. Komponent `BookCard` wyświetla dane książki przekazane z API.


## Filtrowanie książek po stronie serwera

Kategorie sa pobierane z endpointu /api/info/. Po wybraniu kategorii React wysyla nowe zadanie do API, np. /api/books/?category=Fantasy. Filtrowanie odbywa sie po stronie backendu Django, a nie tylko w przegladarce.

## Zabezpieczenie przed race condition

W efektach useEffect zastosowano zmienną ignore. Podczas czyszczenia efektu ustawiana jest na true. Dzięki temu wynik starszego żądania API nie nadpisze danych pobranych przez nowsze żądanie. Zabezpieczenie jest używane przy pobieraniu listy książek, kategorii oraz szczegółów książki.

## Pobieranie szczegółów książki i obsługa błędu 404

Po wybraniu książki aplikacja wysyła osobne żądanie do endpointu /api/books/{id}/. Szczegóły są pobierane na podstawie identyfikatora książki. Jeśli książka nie istnieje, API zwraca błąd 404, a React wyświetla komunikat o nieznalezieniu książki. Użytkownik może również ponowić próbę pobrania szczegółów.
