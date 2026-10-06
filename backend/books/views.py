from django.http import JsonResponse
from .data import books


def book_list(request):
    category = request.GET.get("category")

    if category:
        result = [
            book for book in books
            if book["category"].lower() == category.lower()
        ]
    else:
        result = books

    return JsonResponse(result, safe=False)

def book_detail(request, book_id):
    for book in books:
        if book["id"] == book_id:
            return JsonResponse(book)

    return JsonResponse(
        {"error": "Book not found"},
        status=404
    )

def health(request):
    return JsonResponse({
        "status": "ok"
    })

import sys
import django
from .data import books


def info(request):
    categories = []

    for book in books:
        if book["category"] not in categories:
            categories.append(book["category"])

    return JsonResponse({
        "app_name": "Books API",
        "version": "1.0",
        "python_version": sys.version.split()[0],
        "django_version": django.get_version(),
        "source": "static data",
        "count": len(books),
        "categories": categories
    })

def statistics(request):
    category_counts = {}

    for book in books:
        category = book["category"]

        if category not in category_counts:
            category_counts[category] = 0

        category_counts[category] += 1

    pages = [book["pages"] for book in books]

    return JsonResponse({
        "count": len(books),
        "categories": category_counts,
        "pages": {
            "average": sum(pages) / len(pages),
            "min": min(pages),
            "max": max(pages)
        }
    })