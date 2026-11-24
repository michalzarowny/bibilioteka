
package com.example.biblioteka;

import java.util.Arrays;
import java.util.List;

public final class BookData {

    private BookData() {
        // Klasa przechowuje tylko dane.
    }

    public static final List<Book> BOOKS = Arrays.asList(

            new Book(3, "1984", "",
                    "Science Fiction", 328, null, "George Orwell",
                    null, null, null, null),

            new Book(10, "Balladyna", "",
                    "Lektura", 120, null, "Juliusz Słowacki",
                    null, null, null, null),

            new Book(8, "Dziady", "",
                    "Dramat", 250, null, "Adam Mickiewicz",
                    null, null, null, null),

            new Book(7, "Harry Potter i Kamień Filozoficzny", "",
                    "Fantasy", 320, null, "J.K. Rowling",
                    null, null, null, null),

            new Book(2, "Hobbit", "",
                    "Fantasy", 310, null, "J.R.R. Tolkien",
                    null, null, null, null),

            new Book(12, "Kamienie na szaniec", "",
                    "Lektura", 256, null, "Aleksander Kamiński",
                    null, null, null, null),

            new Book(11, "Latarnik", "",
                    "Lektura", 40, null, "Henryk Sienkiewicz",
                    null, null, null, null),

            new Book(5, "Mały Książę", "",
                    "Literatura", 96, null, "Antoine de Saint-Exupéry",
                    null, null, null, null),

            new Book(6, "Pan Tadeusz", "",
                    "Klasyka", 340, null, "Adam Mickiewicz",
                    null, null, null, null),

            new Book(9, "Quo vadis", "",
                    "Lektura", 450, null, "Henryk Sienkiewicz",
                    null, null, null, null),

            new Book(1, "Władca Pierścieni", "",
                    "Fantasy", 423, null, "J.R.R. Tolkien",
                    null, null, null, null),

            new Book(4, "Zbrodnia i kara", "",
                    null, null, null, null,
                    "Klasyka", 527, null, "Fiodor Dostojewski")
    );

    public static Book findById(int id) {
        for (Book book : BOOKS) {
            if (book.getId() == id) {
                return book;
            }
        }

        return null;
    }
}
