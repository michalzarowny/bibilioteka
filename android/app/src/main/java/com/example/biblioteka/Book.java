
package com.example.biblioteka;

public class Book {

    private final int id;
    private final String title;
    private final String description;
    private final String category;
    private final Integer pages;
    private final String publication_date;
    private final String author;

    private final String kategoria;
    private final Integer strony;
    private final String data_publikacji;
    private final String autor;

    private boolean favorite = false;

    public Book(int id, String title, String description,
                String category, Integer pages,
                String publication_date, String author,
                String kategoria, Integer strony,
                String data_publikacji, String autor) {

        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.pages = pages;
        this.publication_date = publication_date;
        this.author = author;
        this.kategoria = kategoria;
        this.strony = strony;
        this.data_publikacji = data_publikacji;
        this.autor = autor;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getCategory() {
        return category != null ? category : kategoria;
    }

    public Integer getPages() {
        return pages != null ? pages : strony;
    }

    public String getPublicationDate() {
        return publication_date != null
                ? publication_date : data_publikacji;
    }

    public String getAuthor() {
        return author != null ? author : autor;
    }

    public boolean isFavorite() {
        return favorite;
    }

    public void setFavorite(boolean favorite) {
        this.favorite = favorite;
    }
}
