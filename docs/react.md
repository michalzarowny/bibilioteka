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