## Zadanie 3. Test nagłówków CORS

### Dozwolony origin

Polecenie:
`curl.exe -i -H "Origin: http://localhost:5173" http://localhost:8000/api/books/`

Wynik:
- Status: `200 OK`
- Nagłówek: `access-control-allow-origin: http://localhost:5173`
- Odpowiedź API: `[]`

Serwer zezwala na odczyt odpowiedzi przez frontend działający pod wskazanym adresem. Pusta lista oznacza, że API nie zwróciło obecnie żadnych książek.

### Niedozwolony origin

Polecenie:
`curl.exe -i -H "Origin: http://zlosliwa-strona.pl" http://localhost:8000/api/books/`

Wynik:
- Status: `200 OK`
- Brak nagłówka `access-control-allow-origin`
- Odpowiedź API: `[]`

Serwer nadal odpowiada na żądanie, ale przeglądarka nie pozwoli skryptowi z niedozwolonego origin odczytać odpowiedzi. CORS nie jest mechanizmem uwierzytelniania ani autoryzacji.

## Zadanie 4. Żądanie preflight OPTIONS

Polecenie:
`curl.exe -i -X OPTIONS -H "Origin: http://localhost:5173" -H "Access-Control-Request-Method: POST" http://localhost:8000/api/books/`

Wynik:
- Status: `200 OK`
- `access-control-allow-origin: http://localhost:5173`
- `access-control-allow-methods: DELETE, GET, OPTIONS, PATCH, POST, PUT`
- `access-control-allow-headers: accept, authorization, content-type, user-agent, x-csrftoken, x-requested-with`
- `access-control-max-age: 86400`

Serwer akceptuje preflight z dozwolonego origin i zwraca informacje o dozwolonych metodach oraz nagłówkach. Nie oznacza to automatycznie, że endpoint książek faktycznie obsługuje metodę POST.