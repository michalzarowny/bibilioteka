# Dokumentacja zapytań ORM

Projekt: Biblioteka

## 1. Pobranie wszystkich książek

```python
Book.objects.all()
```

Zwraca wszystkie książki zapisane w bazie danych.

## 2. Filtrowanie książek według kategorii

```python
Book.objects.filter(category="Lektura")
```

Zwraca książki z kategorii „Lektura”.

## 3. Wykluczenie wybranej kategorii

```python
Book.objects.exclude(category="Fantasy")
```

Zwraca książki, które nie należą do kategorii „Fantasy”.

## 4. Pobranie jednej książki

```python
Book.objects.get(id=1)
```

Pobiera książkę o identyfikatorze 1. Jeśli książka nie istnieje, zapytanie zgłosi wyjątek.

## 5. Policzenie książek

```python
Book.objects.count()
```

Zwraca liczbę książek w bazie danych.

## 6. Sortowanie książek według liczby stron

```python
Book.objects.order_by("-pages")
```

Zwraca książki od największej do najmniejszej liczby stron.

## 7. Wyszukiwanie książek po liczbie stron

```python
Book.objects.filter(pages__gte=300)
```

Zwraca książki mające co najmniej 300 stron. `gte` oznacza „większe lub równe”.

## 8. Przejście przez relację do autora

```python
Book.objects.filter(author__name__icontains="Adam")
```

Wyszukuje książki autorów, których imię lub nazwisko zawiera „Adam”. `icontains` nie rozróżnia wielkości liter.

## 9. Przejście od autora do książek

```python
Author.objects.get(name="Adam Mickiewicz").books.all()
```

Pobiera książki przypisane do autora Adam Mickiewicz. Relacja `books` wynika z pola `related_name` w modelu `Book`.

## 10. Liczba książek według kategorii

```python
from django.db.models import Count
Book.objects.values("category").annotate(count=Count("id"))
```

Grupuje książki według kategorii i oblicza liczbę książek w każdej grupie.
