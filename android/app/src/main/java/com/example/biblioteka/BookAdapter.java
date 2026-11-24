
package com.example.biblioteka;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

public class BookAdapter extends RecyclerView.Adapter<BookAdapter.BookViewHolder> {

    private final List<Book> allBooks;
    private final List<Book> books;

    public BookAdapter(List<Book> books) {
        this.allBooks = new ArrayList<>(books);
        this.books = new ArrayList<>(books);
    }

    public void filter(String query) {
        books.clear();

        String search = query.toLowerCase(Locale.ROOT).trim();

        for (Book book : allBooks) {
            String title = book.getTitle() != null
                    ? book.getTitle().toLowerCase(Locale.ROOT) : "";

            String author = book.getAuthor() != null
                    ? book.getAuthor().toLowerCase(Locale.ROOT) : "";

            if (title.contains(search) || author.contains(search)) {
                books.add(book);
            }
        }

        notifyDataSetChanged();
    }

    @NonNull
    @Override
    public BookViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.item_book, parent, false);

        return new BookViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull BookViewHolder holder, int position) {
        Book book = books.get(position);

        holder.bookTitle.setText(book.getTitle());
        holder.bookAuthor.setText("Autor: " + book.getAuthor());
        holder.bookCategory.setText("Kategoria: " + book.getCategory());

        Integer pages = book.getPages();
        holder.bookPages.setText(
                pages != null ? "Liczba stron: " + pages : "Liczba stron: brak danych"
        );

        updateFavoriteIcon(holder.favoriteButton, book);

        holder.favoriteButton.setOnClickListener(v -> {
            book.setFavorite(!book.isFavorite());
            updateFavoriteIcon(holder.favoriteButton, book);
        });

        holder.itemView.setOnClickListener(v -> {
            Context context = v.getContext();

            Intent intent = new Intent(context, BookDetailsActivity.class);

            intent.putExtra("title", book.getTitle());
            intent.putExtra("author", book.getAuthor());
            intent.putExtra("category", book.getCategory());
            intent.putExtra("pages", book.getPages());

            context.startActivity(intent);
        });
    }

    private void updateFavoriteIcon(TextView button, Book book) {
        if (book.isFavorite()) {
            button.setText("★");
            button.setContentDescription("Usuń z ulubionych");
        } else {
            button.setText("☆");
            button.setContentDescription("Dodaj do ulubionych");
        }
    }

    @Override
    public int getItemCount() {
        return books.size();
    }

    static class BookViewHolder extends RecyclerView.ViewHolder {

        TextView bookTitle;
        TextView bookAuthor;
        TextView bookCategory;
        TextView bookPages;
        TextView favoriteButton;

        public BookViewHolder(@NonNull View itemView) {
            super(itemView);

            bookTitle = itemView.findViewById(R.id.bookTitle);
            bookAuthor = itemView.findViewById(R.id.bookAuthor);
            bookCategory = itemView.findViewById(R.id.bookCategory);
            bookPages = itemView.findViewById(R.id.bookPages);
            favoriteButton = itemView.findViewById(R.id.favoriteButton);
        }
    }
}
