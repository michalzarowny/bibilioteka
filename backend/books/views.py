from django.http import JsonResponse
from django.db import connection
from django.db.models import Avg, Min, Max, Count
from .models import Book, Author


def book_list(request):
    category = request.GET.get("category")
    books = Book.objects.select_related("author").all()

    if category:
        books = books.filter(category__iexact=category)

    results = [
        {
            "id": book.id,
            "title": book.title,
            "description": book.description,
            "category": book.category,
            "pages": book.pages,
            "publication_date": (
                book.publication_date.isoformat()
                if book.publication_date else None
            ),
            "author": book.author.name,
        }
        for book in books
    ]
    return JsonResponse(results, safe=False)


def book_detail(request, book_id):
    try:
        book = Book.objects.select_related("author").get(id=book_id)
    except Book.DoesNotExist:
        return JsonResponse({"error": "Book not found"}, status=404)

    return JsonResponse({
        "id": book.id,
        "title": book.title,
        "description": book.description,
        "category": book.category,
        "pages": book.pages,
        "publication_date": (
            book.publication_date.isoformat()
            if book.publication_date else None
        ),
        "author": book.author.name,
    })


def health(request):
    try:
        connection.ensure_connection()
        return JsonResponse({"status": "ok"})
    except Exception:
        return JsonResponse({"status": "error"}, status=503)


def info(request):
    return JsonResponse({
        "app_name": "Books API",
        "version": "1.0",
        "source": "database",
        "count": Book.objects.count(),
        "categories": list(
            Book.objects.order_by()
            .values_list("category", flat=True)
            .distinct()
        ),
    })


def statistics(request):
    summary = Book.objects.aggregate(
        count=Count("id"),
        average_pages=Avg("pages"),
        min_pages=Min("pages"),
        max_pages=Max("pages"),
    )

    categories = list(
        Book.objects.values("category")
        .annotate(count=Count("id"))
        .order_by("category")
    )

    return JsonResponse({
        "count": summary["count"],
        "categories": {
            item["category"]: item["count"] for item in categories
        },
        "pages": {
            "average": summary["average_pages"],
            "min": summary["min_pages"],
            "max": summary["max_pages"],
        },
    })
