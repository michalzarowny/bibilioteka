# Dokumentacja bazy danych biblioteki

## Modele i typy pól

| Model | Pole | Typ Django | Typ SQL | Uzasadnienie |
|---|---|---|---|---|
| Author | id | AutoField | integer | Automatyczny klucz główny identyfikujący autora. |
| Author | name | CharField(150) | varchar(150) | Przechowuje imię i nazwisko o ograniczonej długości. |
| Author | birth_date | DateField | date | Przechowuje datę urodzenia bez godziny. |
| Book | id | AutoField | integer | Automatyczny klucz główny identyfikujący książkę. |
| Book | title | CharField(200) | varchar(200) | Przechowuje tytuł o ograniczonej długości. |
| Book | description | TextField | text | Pozwala przechowywać dłuższy opis. |
| Book | category | CharField(100) | varchar(100) | Przechowuje nazwę kategorii. |
| Book | pages | PositiveIntegerField | integer | Przechowuje nieujemną liczbę stron. |
| Book | publication_date | DateField | date | Przechowuje datę publikacji bez godziny. |
| Book | author_id | ForeignKey | integer | Przechowuje identyfikator autora powiązanego z książką. |

## Dowód wygenerowania SQL

Polecenie:

`python backend/manage.py sqlmigrate books 0001`

W tym miejscu wklej pełny wynik polecenia z terminala PyCharm.