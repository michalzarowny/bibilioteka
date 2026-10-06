from django.urls import path
from .views import book_list, book_detail, health, info, statistics

urlpatterns = [
    path("books/", book_list),
    path("books/<int:book_id>/", book_detail),
    path("health/", health),
    path("info/", info),
path("statystyki/", statistics),
]

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