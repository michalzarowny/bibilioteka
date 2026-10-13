
from django.contrib import admin
from .models import Author, Book


@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ["name", "birth_date"]
    search_fields = ["name"]


@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = [
        "title",
        "author",
        "category",
        "pages",
        "publication_date",
    ]
    list_filter = ["category", "author"]
    search_fields = ["title", "description", "author__name"]
