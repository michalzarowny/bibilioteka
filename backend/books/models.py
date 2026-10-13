from django.db import models


class Author(models.Model):
    name = models.CharField("imi i nazwisko", max_length=150)
    birth_date = models.DateField("data urodzenia", null=True, blank=True)

    class Meta:
        verbose_name = "autor"
        verbose_name_plural = "autorzy"
        ordering = ["name"]

    def __str__(self):
        return self.name


class Book(models.Model):
    title = models.CharField("tytu", max_length=200)
    description = models.TextField("opis", blank=True)
    category = models.CharField("kategoria", max_length=100)
    pages = models.PositiveIntegerField("liczba stron")
    publication_date = models.DateField(
        "data publikacji", null=True, blank=True
    )
    author = models.ForeignKey(
        Author,
        on_delete=models.PROTECT,
        related_name="books",
        verbose_name="autor",
    )

    class Meta:
        verbose_name = "ksika"
        verbose_name_plural = "ksiki"
        ordering = ["title"]

    def __str__(self):
        return self.title
